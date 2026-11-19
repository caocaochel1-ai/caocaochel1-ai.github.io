import { Link } from 'react-router-dom'

const capabilities = [
  ['Brand & Visual Identity', '/work'],
  ['Packaging Design', '/work'],
  ['Key vision design', '/work'],
  ['AI design', '/work'],
]

export default function Capabilities() {
  return <section id="capabilities" className="home-capabilities" aria-labelledby="capabilities-heading">
    <h2 id="capabilities-heading" className="home-section-heading">03/ CAPABILITIES</h2>
    <div className="home-capability-grid">
      {capabilities.map(([title, href], index) => <Link className="home-capability" key={title} to={href}>
        <div className="home-capability-art" aria-hidden="true">
          <img src="/assets/reference-home/capability-grain.webp" alt="" loading="lazy" />
          {Array.from({ length: 8 }, (_, i) => <i key={i} />)}
        </div>
        <h3>{title}</h3><span className="home-capability-number">{index + 1}</span>
      </Link>)}
    </div>
  </section>
}
