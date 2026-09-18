import { useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'

import './FoldText.css'

const hinges = {
  top: { origin: '50% 0%', rotateX: -92, rotateY: 0 },
  bottom: { origin: '50% 100%', rotateX: 92, rotateY: 0 },
  left: { origin: '0% 50%', rotateX: 0, rotateY: 92 },
  right: { origin: '100% 50%', rotateX: 0, rotateY: -92 },
}

export default function FoldText({
  text,
  splitBy = 'char',
  hinge = 'top',
  duration = 0.65,
  stagger = 0.045,
  ease = 'power3.out',
  perspective = 700,
  creaseShading = 0.42,
  fontSize = 'inherit',
  fontWeight = 'inherit',
  color = 'currentColor',
  className = '',
  style = {},
}) {
  const rootRef = useRef(null)
  const hingeConfig = hinges[hinge] || hinges.top

  const segments = useMemo(() => {
    const values = splitBy === 'word' ? text.split(/(\s+)/) : Array.from(text)

    return values.map((value, index) => {
      if (/^\s+$/.test(value)) return <span key={`space-${index}`}>&nbsp;</span>
      return <span className="fold-text-segment" key={`segment-${index}`} style={{ '--fold-perspective': `${perspective}px` }}><span className="fold-text-piece" style={{ transformOrigin: hingeConfig.origin }}>{value}</span></span>
    })
  }, [text, splitBy, perspective, hingeConfig.origin])

  useEffect(() => {
    const root = rootRef.current
    const pieces = root ? Array.from(root.querySelectorAll('.fold-text-piece')) : []
    if (!pieces.length) return undefined

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const animation = gsap.fromTo(pieces, {
      opacity: 0,
      rotateX: reduceMotion ? 0 : hingeConfig.rotateX,
      rotateY: reduceMotion ? 0 : hingeConfig.rotateY,
      '--fold-crease': reduceMotion ? 0 : creaseShading,
      transformOrigin: hingeConfig.origin,
    }, {
      opacity: 1,
      rotateX: 0,
      rotateY: 0,
      '--fold-crease': 0,
      duration: reduceMotion ? Math.min(duration, 0.22) : duration,
      stagger: reduceMotion ? Math.min(stagger, 0.02) : stagger,
      ease: reduceMotion ? 'power1.out' : ease,
      clearProps: 'willChange',
    })

    return () => animation.kill()
  }, [text, duration, stagger, ease, creaseShading, hingeConfig])

  return <span ref={rootRef} className={`fold-text ${className}`.trim()} style={{ '--fold-text-font-size': fontSize, '--fold-text-font-weight': fontWeight, '--fold-text-color': color, ...style }}>
    <span className="fold-text-sr-only">{text}</span>
    <span className="fold-text-visual" aria-hidden="true">{segments}</span>
  </span>
}
