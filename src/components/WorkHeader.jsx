import { Link, NavLink } from 'react-router-dom'
import { workLinks } from '../data/workNavigation'
import MouseLookCharacter from './MouseLookCharacter'
import './WorkHeader.css'

// Shared page header: signature wordmark, Work link,
// and the girl-with-cat character. Expects an ancestor page wrapper
// that defines --work-u (container query unit against a 1920 canvas).
export default function WorkHeader({ showNav = true }) {
  return <header className="work-header">
    <Link className="work-wordmark" to="/" aria-label="Rainee Studio — Home">
      <img src="/assets/reference-home/studio-logo-v2.webp" alt="Rainee Studio" />
    </Link>
    {showNav && <nav className="work-categories" aria-label="Work navigation">
      {workLinks.map(([label, href]) => <NavLink key={href} to={href}>{label}</NavLink>)}
    </nav>}
    <Link className="work-character" to="/category/about" aria-label="About Rainee">
      <MouseLookCharacter src="/assets/reference-home/branding-character.webp" alt="A girl holding a cream cat" head={{ x: 85 / 171, y: 92 / 161, radiusX: 14 / 171, radiusY: 21 / 161 }} />
    </Link>
  </header>
}
