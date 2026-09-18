import { profile } from '../data/profile'
import './ProfilePages.css'

export default function AboutPage() {
  return <main className="about-page">
    <section className="about-page-hero">
      <p className="page-index">(01) / ABOUT RAY STUDIO</p>
      <div className="about-page-title"><p>INDEPENDENT DESIGN PRACTICE / SHANGHAI — WORLDWIDE</p><h1>Making brands<br />feel <em>closer.</em></h1></div>
      <figure className="about-page-art"><img src="/assets/images/hero-plant-chair.png" alt="Illustrated leafy plant" /><figcaption>Independent practice<br />Since 2018</figcaption></figure>
    </section>
    <section className="about-statement">
      <p className="page-index">(02) / POINT OF VIEW</p>
      <div><h2>{profile.intro}</h2><p>{profile.bio}</p><a href={`mailto:${profile.email}`}>{profile.email} <span>↗</span></a></div>
    </section>
    <section className="about-facts">
      <p className="page-index">(03) / AT A GLANCE</p>
      <div className="about-stat-grid">{profile.stats.map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}</div>
      <div className="about-services"><p>SELECTED SERVICES</p><ul><li>Brand strategy & identity</li><li>Packaging & art direction</li><li>Campaign key visuals</li><li>Operations design systems</li></ul></div>
    </section>
  </main>
}
