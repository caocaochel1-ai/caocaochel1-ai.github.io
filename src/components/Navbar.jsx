import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return <header className="navbar" aria-label="Main navigation">
    <Link className="nav-art nav-about" to="/category/about"><img src={isHome ? '/assets/reference-home/nav-about-v2.webp' : '/assets/reference-home/nav-about.png'} alt="About" /></Link>
    <div className="nav-work"><Link className="nav-art work-trigger" to="/work" aria-label="Work"><span>work</span></Link></div>
    <Link className="wordmark" to="/"><img src={isHome ? '/assets/reference-home/studio-logo-v2.webp' : '/assets/reference-home/studio-logo.png'} alt="Rainee Studio" /></Link>
    <Link className="nav-art nav-background" to="/work"><img src={isHome ? '/assets/reference-home/nav-background-v2.webp' : '/assets/reference-home/nav-background.png'} alt="Background" /></Link>
    <Link className="nav-cta" to="/category/contact"><img src={isHome ? '/assets/reference-home/nav-contact-v2.webp' : '/assets/reference-home/nav-contact.png'} alt="Contact" /></Link>
  </header>
}
