import { useEffect, useRef } from 'react'
import './MouseLookCharacter.css'

const vertexSource = `
  attribute vec2 aPosition;
  varying vec2 vUv;
  void main() {
    vUv = vec2((aPosition.x + 1.0) * 0.5, (1.0 - aPosition.y) * 0.5);
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`

// A localized, smoothly blended head turn. Pixels outside the head stay fixed.
// The mask is face-weighted and fades out along the upper sides so the raised
// arms and hands holding the cat never get dragged by the turn.
const fragmentSource = `
  precision highp float;
  uniform sampler2D uImage;
  uniform vec2 uHead;
  uniform vec2 uRadius;
  uniform vec2 uLook;
  uniform vec2 uEye;
  uniform vec2 uEyeRadius;
  varying vec2 vUv;
  void main() {
    vec2 p = (vUv - uHead) / uRadius;
    float blend = 1.0 - smoothstep(0.45, 1.0, length(p));
    blend *= 1.0 - smoothstep(0.65, 1.05, p.y);
    // Protect the raised arms: fade the turn out along the upper sides,
    // where the hands grip the cat right beside the hair.
    blend *= 1.0 - 0.95 * smoothstep(0.42, 0.95, abs(p.x)) * (1.0 - smoothstep(-0.75, 0.2, p.y));
    vec2 pivot = vec2(0.0, 0.82);
    float angle = -uLook.x * 0.10;
    float c = cos(angle);
    float s = sin(angle);
    vec2 turned = mat2(c, -s, s, c) * (p - pivot) + pivot;
    turned.x = (turned.x - uLook.x * 0.16) / (1.0 - abs(uLook.x) * 0.08);
    turned.y -= uLook.y * 0.11;
    // Extra facial parallax makes the eyes and cheeks turn with the head.
    turned.x -= uLook.x * 0.07 * max(0.0, 1.0 - dot(p, p));
    vec2 source = mix(vUv, uHead + turned * uRadius, blend);
    // The cat's eyes glance toward the cursor with a small, soft parallax shift.
    vec2 ep = (vUv - uEye) / uEyeRadius;
    float eyeBlend = 1.0 - smoothstep(0.3, 1.0, length(ep));
    source -= uLook * vec2(0.008, 0.0055) * eyeBlend;
    gl_FragColor = texture2D(uImage, source);
  }
`

export default function MouseLookCharacter({ src, alt, className = '', head }) {
  const rootRef = useRef(null)
  const canvasRef = useRef(null)
  const { x, y, radiusX, radiusY, eyes } = head
  // Debug/preview hook: ?look=x,y locks the gaze so the turn can be
  // inspected (and screenshotted) without moving a real cursor.
  const previewLook = (() => {
    if (typeof window === 'undefined') return null
    const raw = new URLSearchParams(window.location.search).get('look')
    if (!raw) return null
    const [px, py] = raw.split(',').map(Number)
    if (!Number.isFinite(px) && !Number.isFinite(py)) return null
    const clamp = v => (Number.isFinite(v) ? Math.max(-1, Math.min(1, v)) : 0)
    return [clamp(px), clamp(py)]
  })()

  useEffect(() => {
    const root = rootRef.current
    const canvas = canvasRef.current
    const gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false, preserveDrawingBuffer: true })
    if (!gl) return undefined

    const shaders = []
    const compile = (type, source) => {
      const shader = gl.createShader(type)
      shaders.push(shader)
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null
    }
    const vertex = compile(gl.VERTEX_SHADER, vertexSource)
    const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource)
    if (!vertex || !fragment) {
      shaders.forEach(shader => gl.deleteShader(shader))
      return undefined
    }
    const program = gl.createProgram()
    gl.attachShader(program, vertex)
    gl.attachShader(program, fragment)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      shaders.forEach(shader => gl.deleteShader(shader))
      gl.deleteProgram(program)
      return undefined
    }
    gl.useProgram(program)
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)
    const position = gl.getAttribLocation(program, 'aPosition')
    gl.enableVertexAttribArray(position)
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
    const texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
    gl.uniform1i(gl.getUniformLocation(program, 'uImage'), 0)
    gl.uniform2f(gl.getUniformLocation(program, 'uHead'), x, y)
    gl.uniform2f(gl.getUniformLocation(program, 'uRadius'), radiusX, radiusY)
    gl.uniform2f(gl.getUniformLocation(program, 'uEye'), eyes ? eyes.x : -10, eyes ? eyes.y : -10)
    gl.uniform2f(gl.getUniformLocation(program, 'uEyeRadius'), eyes ? eyes.radiusX : 0.001, eyes ? eyes.radiusY : 0.001)
    const lookLocation = gl.getUniformLocation(program, 'uLook')
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sourceImage = new Image()
    let ready = false
    let disposed = false
    let inView = false
    let frame = 0
    let previousTime = 0
    let lookX = 0
    let lookY = 0
    let targetX = 0
    let targetY = 0

    const paint = () => {
      if (!ready || disposed || gl.isContextLost()) return
      gl.uniform2f(lookLocation, lookX, lookY)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
    }
    const animate = time => {
      frame = 0
      if (disposed || !inView || document.hidden) return
      const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16
      previousTime = time
      const ease = 1 - Math.exp(-elapsed / 95)
      lookX += (targetX - lookX) * ease
      lookY += (targetY - lookY) * ease
      const settled = Math.abs(targetX - lookX) + Math.abs(targetY - lookY) < 0.001
      if (settled) { lookX = targetX; lookY = targetY }
      paint()
      if (!settled) frame = requestAnimationFrame(animate)
      else previousTime = 0
    }
    const schedule = () => {
      if (ready && inView && !frame && !disposed && !document.hidden) frame = requestAnimationFrame(animate)
    }
    const reset = () => { targetX = 0; targetY = 0; schedule() }
    const move = event => {
      if (previewLook || event.pointerType === 'touch' || media.matches || !inView || !ready) return
      const rect = root.getBoundingClientRect()
      const headX = rect.left + rect.width * x
      const headY = rect.top + rect.height * y
      targetX = Math.max(-1, Math.min(1, (event.clientX - headX) / Math.max(innerWidth * 0.42, 1)))
      targetY = Math.max(-1, Math.min(1, (event.clientY - headY) / Math.max(innerHeight * 0.42, 1)))
      schedule()
    }
    const leave = event => { if (!event.relatedTarget) reset() }
    if (previewLook) { targetX = previewLook[0]; targetY = previewLook[1] }
    const visibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame)
        frame = 0
        previousTime = 0
        targetX = targetY = lookX = lookY = 0
      } else { paint(); schedule() }
    }
    const motionPreference = () => {
      cancelAnimationFrame(frame)
      frame = 0
      previousTime = 0
      targetX = targetY = lookX = lookY = 0
      paint()
    }
    const resize = () => {
      const rect = root.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.round(rect.width * ratio))
      canvas.height = Math.max(1, Math.round(rect.height * ratio))
      gl.viewport(0, 0, canvas.width, canvas.height)
      paint()
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(root)
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      if (!inView) {
        cancelAnimationFrame(frame)
        frame = 0
        previousTime = 0
        targetX = targetY = lookX = lookY = 0
      } else { paint(); schedule() }
    })
    intersectionObserver.observe(root)
    sourceImage.onload = () => {
      if (disposed || gl.isContextLost()) return
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, sourceImage)
      ready = true
      resize()
      schedule()
      root.classList.add('mouse-look-character--ready')
    }
    const contextLost = event => {
      event.preventDefault()
      cancelAnimationFrame(frame)
      frame = 0
      ready = false
      root.classList.remove('mouse-look-character--ready')
    }
    canvas.addEventListener('webglcontextlost', contextLost)
    sourceImage.src = src
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerout', leave, { passive: true })
    window.addEventListener('blur', reset)
    document.addEventListener('visibilitychange', visibility)
    media.addEventListener('change', motionPreference)
    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      sourceImage.onload = null
      root.classList.remove('mouse-look-character--ready')
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      canvas.removeEventListener('webglcontextlost', contextLost)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerout', leave)
      window.removeEventListener('blur', reset)
      document.removeEventListener('visibilitychange', visibility)
      media.removeEventListener('change', motionPreference)
      gl.deleteTexture(texture)
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
      shaders.forEach(shader => gl.deleteShader(shader))
    }
  }, [src, x, y, radiusX, radiusY, eyes && eyes.x, eyes && eyes.y, eyes && eyes.radiusX, eyes && eyes.radiusY, previewLook && previewLook[0], previewLook && previewLook[1]])

  return <span ref={rootRef} className={`mouse-look-character ${className}`.trim()} role="img" aria-label={alt}>
    <img className="mouse-look-character__still" src={src} alt="" aria-hidden="true" />
    <canvas ref={canvasRef} className="mouse-look-character__canvas" aria-hidden="true" />
  </span>
}
