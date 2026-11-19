import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Reference: shadcnblocks coverflow44 — a twin drum cover flow. The photo
// drum (left) and the name drum (right) share one position value but roll in
// opposite directions, so the facing cover and its project name always meet
// on the centre line. Drag vertically (or swipe sideways on touch), scroll
// over the drums, use the arrow keys, or click a neighbour to turn; click the
// centre cover to open the project.
const homeProjects = [
  { title: '浮醅', href: '/project/fupei', type: 'Branding', cover: '/assets/projects/fupei/fml2-cover.webp' },
  { title: 'FLORILEGIO', href: '/project/florilegio', type: 'Branding', cover: '/assets/projects/florilegio/flr2-cover.webp' },
  { title: 'MISINI', href: '/project/misini', type: 'Branding', cover: '/assets/projects/misini/msn2-cover.webp' },
  { title: '春蛇复苏', href: '/project/chunshe', type: 'Package', cover: '/assets/projects/chunshe/csr3-cover.webp' },
  { title: '保健品', href: '/project/health', type: 'Package', cover: '/assets/projects/health/hlth-cover.webp' },
  { title: 'WUHU', href: '/project/wuhu', type: 'IP Design', cover: '/assets/projects/wuhu/whu-cover.webp' },
]

const N = homeProjects.length
const PER_ITEM = 30        // degrees between adjacent items on a drum
const R_PHOTO = 1000       // photo drum radius, 1920-canvas design units
const R_NAME = 260         // name drum radius
const STEP_PHOTO = 490     // vertical distance between photo card centres
const rad = deg => deg * Math.PI / 180
const wrap = d => { let x = ((d % N) + N) % N; if (x > N / 2) x -= N; return x }

export default function ProjectGrid() {
  const navigate = useNavigate()
  const rootRef = useRef(null)
  const photoRef = useRef(null)
  const nameRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const root = rootRef.current
    const photos = [...photoRef.current.children]
    const names = [...nameRef.current.children]
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')

    let pos = 0            // float drum position in item units (unbounded)
    let target = 0
    let raf = 0
    let lastActive = -1
    let dragging = false
    let suppressClick = false

    const frame = () => {
      const k = reduce.matches ? 1 : dragging ? 0.4 : 0.13
      pos += (target - pos) * k
      if (Math.abs(target - pos) < 0.0005) pos = target
      // Flat stacked layout (per the zuopin-01 mockup): cards stay parallel to
      // the screen — the centre cover full-size, neighbours narrower and
      // centred above/below — while the drum motion and easing are unchanged.
      photos.forEach((el, i) => {
        const d = wrap(i - pos)
        const ad = Math.abs(d)
        const y = d * STEP_PHOTO
        const scale = Math.max(0.58, 1 - 0.18 * ad)
        const op = Math.max(0, 1 - 0.32 * ad)
        el.style.transform = `translateY(calc(${y.toFixed(1)} * var(--u))) scale(${scale.toFixed(3)})`
        el.style.opacity = op.toFixed(3)
        el.style.visibility = op <= 0.015 ? 'hidden' : 'visible'
        el.style.zIndex = String(100 - Math.round(ad * 10))
      })
      names.forEach((el, i) => {
        const d = wrap(i - pos)
        const th = -d * PER_ITEM   // opposite drum rolls the other way
        const y = R_NAME * Math.sin(rad(th))
        const z = R_NAME * (Math.cos(rad(th)) - 1)
        const op = Math.max(0, 1 - Math.abs(d) * 0.4)
        el.style.transform = `translateY(calc(${y.toFixed(1)} * var(--u))) translateZ(calc(${z.toFixed(1)} * var(--u))) rotateX(${(-th).toFixed(1)}deg)`
        el.style.opacity = op.toFixed(3)
        el.style.visibility = op <= 0.015 ? 'hidden' : 'visible'
      })
      const a = ((Math.round(pos) % N) + N) % N
      if (a !== lastActive) { lastActive = a; setActive(a) }
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    let lastWheel = 0
    const onWheel = e => {
      e.preventDefault()
      const now = performance.now()
      if (now - lastWheel < 90) return
      lastWheel = now
      target += e.deltaY > 0 ? 1 : -1
    }

    let downX = 0, downY = 0, startPos = 0, armed = false
    const itemPx = () => {
      const u = photoRef.current.getBoundingClientRect().width / 880
      return 2 * R_PHOTO * Math.sin(rad(PER_ITEM / 2)) * u
    }
    const onDown = e => {
      if (e.pointerType === 'mouse' && e.button !== 0) return
      downX = e.clientX; downY = e.clientY
      startPos = target; armed = true
    }
    const onMove = e => {
      if (!armed) return
      const dx = e.clientX - downX
      const dy = e.clientY - downY
      if (!dragging) {
        const touch = e.pointerType !== 'mouse'
        if (touch ? (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) : (Math.abs(dy) > 6 && Math.abs(dy) > Math.abs(dx))) {
          dragging = true
          try { root.setPointerCapture(e.pointerId) } catch (err) { /* ignore */ }
        } else if ((touch ? Math.abs(dy) : Math.abs(dx)) > 12) {
          armed = false   // gesture belongs to page scroll — release it
          return
        } else return
      }
      const delta = e.pointerType === 'mouse' ? -(e.clientY - downY) : (e.clientX - downX)
      target = startPos + delta / itemPx()
    }
    const onUp = () => {
      if (dragging) {
        target = Math.round(target)
        suppressClick = true
        setTimeout(() => { suppressClick = false }, 0)
      }
      dragging = false; armed = false
    }

    const onClick = e => {
      if (suppressClick) return
      const el = e.target.closest('[data-i]')
      if (!el) return
      const i = Number(el.dataset.i)
      const d = wrap(i - Math.round(target))
      if (Math.abs(d) < 0.5) {
        if (el.dataset.kind === 'photo') navigate(homeProjects[i].href)
      } else {
        target += d
      }
    }

    const onKey = e => {
      const cur = Math.round(target)
      if (e.key === 'ArrowDown') { e.preventDefault(); target = cur + 1 }
      else if (e.key === 'ArrowUp') { e.preventDefault(); target = cur - 1 }
      else if (e.key === 'Home') { e.preventDefault(); target = cur + wrap(0 - cur) }
      else if (e.key === 'End') { e.preventDefault(); target = cur + wrap(N - 1 - cur) }
    }

    root.addEventListener('wheel', onWheel, { passive: false })
    root.addEventListener('pointerdown', onDown)
    root.addEventListener('pointermove', onMove)
    root.addEventListener('pointerup', onUp)
    root.addEventListener('pointercancel', onUp)
    root.addEventListener('click', onClick)
    root.addEventListener('keydown', onKey)
    return () => {
      cancelAnimationFrame(raf)
      root.removeEventListener('wheel', onWheel)
      root.removeEventListener('pointerdown', onDown)
      root.removeEventListener('pointermove', onMove)
      root.removeEventListener('pointerup', onUp)
      root.removeEventListener('pointercancel', onUp)
      root.removeEventListener('click', onClick)
      root.removeEventListener('keydown', onKey)
    }
  }, [navigate])

  return <section id="work" className="home-work" aria-labelledby="work-heading">
    <h2 id="work-heading" className="home-section-heading">02/ SELECTED WORK</h2>
    <div ref={rootRef} className="home-cf" tabIndex={0} role="group" aria-label="精选项目双鼓轮播：拖拽、滚轮或方向键切换，点击中央封面打开项目">
      <p className="home-cf-aside" aria-hidden="true">{homeProjects[active].type}</p>
      <div className="home-cf-photo" ref={photoRef}>
        {homeProjects.map((p, i) => (
          <div key={p.href} data-i={i} data-kind="photo" role="button" tabIndex={-1} aria-label={`${p.title} — ${p.type}`} className="home-cf-card">
            <img src={p.cover} alt="" draggable={false} />
          </div>
        ))}
      </div>
      <div className="home-cf-side">
        <div className="home-cf-names" ref={nameRef}>
          {homeProjects.map((p, i) => (
            <button key={p.href} type="button" data-i={i} data-kind="name" className="home-cf-name">{p.title}</button>
          ))}
        </div>
        <p className="home-cf-counter" aria-hidden="true">{String(active + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}</p>
      </div>
    </div>
    <p className="home-cf-hint">拖拽 · 滚轮 · 方向键切换，点击中央封面查看项目</p>
    <Link className="home-more" to="/work">More selected work →</Link>
  </section>
}
