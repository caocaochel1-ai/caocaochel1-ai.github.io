import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return <header className="navbar">
    <Link className="nav-art nav-about" to="/category/about"><img src="/assets/reference-home/nav-about.png" alt="About" /></Link>
    <Link className="nav-art nav-work" to="/category/brand"><img src="/assets/reference-home/nav-work.png" alt="Work" /></Link>
    <Link className="wordmark" to="/"><img src="/assets/reference-home/studio-logo.png" alt="Rainee Studio" /></Link>
    <Link className="nav-art nav-background" to="/category/key-visual"><img src="/assets/reference-home/nav-background.png" alt="Background" /></Link>
    <Link className="nav-cta" to="/category/contact"><img src="/assets/reference-home/nav-contact.png" alt="Contact" /></Link>
  </header>
}
