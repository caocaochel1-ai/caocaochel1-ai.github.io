import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import WorkHeader from './WorkHeader'
import './WorkCategoryPage.css'

// Reference sheet: zuopin-02. The Work index is grouped by discipline, each
// group a three-column grid of white cards under a "/ Label /" heading.
// Hover choreography follows goodside.studio: an accordion-like focus shift
// (hovered tile grows, neighbours recede) plus a reveal caption above the
// image. Projects whose assets have been supplied link to their showcase
// page; the rest stay as placeholders until the artwork arrives.
const workGroups = [
  {
    label: 'Branding',
    items: [
      { title: 'FLORILEGIO', href: '/project/florilegio', cover: '/assets/projects/florilegio/flr2-cover.webp' },
      { title: '浮醅', href: '/project/fupei', cover: '/assets/projects/fupei/fml2-cover.webp' },
      { title: 'BUWU不物', href: '/project/buwu', cover: '/assets/projects/buwu/buw1-01.webp' },
      { title: 'MISINI', href: '/project/misini', cover: '/assets/projects/misini/msn2-cover.webp' },
      { title: 'QQ NAILS', href: '/project/qq-nails', cover: '/assets/projects/qq-nails/qqn1-01.webp' },
      { title: '安禔', href: '/project/anzhie', cover: '/assets/projects/anzhie/anz1-01.webp' },
    ],
  },
  {
    label: 'Package',
    items: [
      { title: '春蛇复苏', href: '/project/chunshe', cover: '/assets/projects/chunshe/csr3-cover.webp' },
      { title: 'AURA', href: '/project/aura', cover: '/assets/projects/aur1/aur1-cover.webp' },
      { title: '两个博士后' },
      { title: 'NONPAREY', href: '/project/nonparey', cover: '/assets/projects/non1/non1-cover.webp' },
      { title: '关节伴侣', href: '/project/health', cover: '/assets/projects/health/hlth-cover.webp' },
      { title: 'KAVIRAE', href: '/project/kavirae', cover: '/assets/projects/kvr1/kvr1-cover.webp' },
      { title: 'YOORISKIN', href: '/project/yooriskin', cover: '/assets/projects/yrs1/yrs1-cover.webp' },
      { title: '又尔美', href: '/project/yoomay', cover: '/assets/projects/yem1/yem1-cover.webp' },
      { title: '真果真' },
    ],
  },
  {
    label: 'Key Vision',
    items: [
      { title: '企文活动类' },
      { title: '运营设计类', href: '/project/campaigns', cover: '/assets/projects/campaigns/cmp1-01.webp' },
      { title: '早期KV作品' },
    ],
  },
  {
    label: 'IP Design',
    items: [
      { title: 'WUHU', href: '/project/wuhu', cover: '/assets/projects/wuhu/whu-cover.webp' },
      { title: '周大福IP升级', href: '/project/ctf', cover: '/assets/projects/ctf1/ctf1-cover.webp' },
      { title: 'IP类包装' },
    ],
  },
]

export default function WorkCategoryPage() {
  useEffect(() => {
    document.title = 'My Works — Rainee Studio'
  }, [])

  // Small magnetic parallax on the cover, driven by pointer position inside
  // the tile. Values are consumed by the CSS transform on hover.
  const trackPointer = e => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
    e.currentTarget.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
  }

  return <div className="work-page">
    <WorkHeader showNav={false} />
    <main className="work-main">
      <h1 className="work-hero-title">My Works<sup className="work-hero-reg">®</sup></h1>
      <hr className="work-divider" />
      {workGroups.map(group => (
        <section className="work-group" key={group.label} aria-label={group.label}>
          <h2 className="work-group-title">/ {group.label} /</h2>
          <div className="work-grid">
            {group.items.map((slot, index) => {
              const num = String(index + 1).padStart(2, '0')
              const caption = <div className="work-card-caption"><span>({num})</span><span>{slot.title}</span></div>
              const art = <div className="work-card-art">
                {slot.cover && <img className="work-card-cover" src={slot.cover} alt={`${slot.title} 项目主视觉`} loading="lazy" />}
                <div className="work-card-veil" aria-hidden="true" />
                <div className="work-card-hovercap" aria-hidden="true">
                  <span className="work-card-hovercap-kicker">/ {group.label} /</span>
                  <span className="work-card-hovercap-title">{slot.title}</span>
                </div>
              </div>
              const props = {
                className: 'work-card ' + (slot.href ? 'is-link' : 'is-placeholder'),
                onMouseMove: trackPointer,
              }
              return slot.href
                ? <Link key={`${group.label}-${slot.title}`} {...props} to={slot.href}>{art}{caption}</Link>
                : <div key={`${group.label}-${slot.title}`} {...props}>{art}{caption}</div>
            })}
          </div>
        </section>
      ))}
    </main>
  </div>
}
