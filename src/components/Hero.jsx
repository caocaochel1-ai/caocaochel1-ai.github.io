import './Hero.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import TextType from './TextType'

const tiles = [
  ['hero-tile tile-about', '/assets/reference-home/plant-about.png', 'Plant on chair illustration', '/category/about', 'about'],
  ['hero-tile tile-work', '/assets/reference-home/plant-work-still.png', 'Yellow and green plant illustration', '/work', 'work'],
  ['hero-tile tile-background', '/assets/reference-home/plant-background.png', 'Plant and books illustration', '/work', 'background'],
  ['hero-tile tile-contact', '/assets/reference-home/plant-contact.png', 'Orange pot plant illustration', '/category/contact', 'contact'],
]

export default function Hero() {
  const [isWorkHovered, setIsWorkHovered] = useState(false)

  return <section className="hero" id="top">
    <div className="hero-stage">
      <img className="hero-stage-frame" src="/assets/reference-home/grain-frame.png" alt="" aria-hidden="true" />
      <h1 className="hero-welcome" aria-label="WELCOME TO MY WEBSITE">
        <TextType as="span" text="WELCOME TO MY WEBSITE" typingSpeed={85} initialDelay={300} loop={false} reserveSpace aria-hidden="true" />
      </h1>
      {tiles.map(([className, src, alt, target, label]) => <Link
        className={className}
        key={src}
        to={target}
        aria-label={`View ${alt} page`}
        onPointerEnter={label === 'work' ? event => setIsWorkHovered(event.pointerType !== 'touch') : undefined}
        onPointerLeave={label === 'work' ? () => setIsWorkHovered(false) : undefined}
        onPointerCancel={label === 'work' ? () => setIsWorkHovered(false) : undefined}
      >
        <img src={label === 'work' && isWorkHovered ? '/assets/reference-home/plant-work-hover.gif' : src} alt={alt} />
        <span className="hero-tile-label">{label}</span>
      </Link>)}
    </div>
    <img className="hero-caption" src="/assets/reference-home/designer-city.png" alt="Designer stay in ShenZhen" />
  </section>
}
