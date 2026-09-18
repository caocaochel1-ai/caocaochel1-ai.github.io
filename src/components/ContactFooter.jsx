import { socialLinks } from '../data/socialLinks'

export default function ContactFooter() {
 return <footer id="contact" className="contact"><div className="contact-orb orb-a" /><div className="contact-orb orb-b" /><div className="contact-inner"><p className="section-kicker">(04) / CONTACT</p><h2>Let's make<br />something <em>meaningful.</em></h2><a className="contact-email" href="mailto:hello@yuanli.design">hello@yuanli.design <span>↗</span></a><div className="contact-bottom"><div className="socials">{socialLinks.map(([name, url]) => <a key={name} href={url} target={url.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{name} ↗</a>)}</div><p>SHANGHAI, CHINA<br />AVAILABLE WORLDWIDE</p><a href="#top" className="back-top">BACK TO TOP ↑</a></div></div></footer>
}
