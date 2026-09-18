import { socialLinks } from '../data/socialLinks'
import './ProfilePages.css'

export default function ContactPage() {
  return <main className="contact-page-full">
    <div className="contact-leaf contact-leaf-a" /><div className="contact-leaf contact-leaf-b" />
    <section className="contact-page-content">
      <p className="page-index">(01) / CONTACT RAY STUDIO</p>
      <p className="contact-pretitle">A PROJECT, A QUESTION,<br />OR A GOOD IDEA.</p>
      <h1>Let's make<br />something <em>felt.</em></h1>
      <a className="contact-page-email" href="mailto:hello@yuanli.design">hello@yuanli.design <span>↗</span></a>
      <div className="contact-page-bottom"><div>{socialLinks.map(([name, url]) => <a key={name} href={url} target={url.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{name} ↗</a>)}</div><p>SHANGHAI, CHINA<br />AVAILABLE WORLDWIDE</p><p>© 2026 RAY STUDIO</p></div>
    </section>
  </main>
}
