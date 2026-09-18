import './Hero.css'
import { Link } from 'react-router-dom'

const tiles = [
  ['hero-tile tile-about', '/assets/reference-home/plant-about.png', 'Plant on chair illustration', '/category/about', 'about'],
  ['hero-tile tile-work', '/assets/reference-home/plant-work.png', 'Yellow and green plant illustration', '/category/brand', 'work'],
  ['hero-tile tile-background', '/assets/reference-home/plant-background.png', 'Plant and books illustration', '/category/key-visual', 'background'],
  ['hero-tile tile-contact', '/assets/reference-home/plant-contact.png', 'Orange pot plant illustration', '/category/contact', 'contact'],
]

export default function Hero() {
  return <section className="hero" id="top">
    <div className="hero-stage">
      <img className="hero-stage-frame" src="/assets/reference-home/grain-frame.png" alt="" aria-hidden="true" />
      <h1 className="hero-welcome">WELCOME TO MY WEBSITE</h1>
      {tiles.map(([className, src, alt, target, label]) => <Link className={className} key={src} to={target} aria-label={`View ${alt} page`}><img src={src} alt={alt} /><span className="hero-tile-label">{label}</span></Link>)}
    </div>
    <img className="hero-caption" src="/assets/reference-home/designer-city.png" alt="Designer stay in ShenZhen" />
  </section>
}
