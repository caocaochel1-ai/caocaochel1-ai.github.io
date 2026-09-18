import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(item => item.slug === slug)
  const galleryRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!project?.gallery?.length || !galleryRef.current) return undefined

    const images = galleryRef.current.querySelectorAll('figure')
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        entry.target.classList.toggle('is-in-view', entry.isIntersecting)
        if (entry.isIntersecting) setActiveIndex(Number(entry.target.dataset.index))
      }),
      { threshold: 0.45 },
    )

    images.forEach(image => observer.observe(image))
    return () => observer.disconnect()
  }, [project])

  if (!project) {
    return <main className="detail"><Link to="/">← Back home</Link><h1>Project not found.</h1></main>
  }

  return <main className="detail">
    <Link to="/" className="detail-back">← INDEX</Link>
    <p>{project.type} / {project.year}</p>
    <h1>{project.title}</h1>
    {project.gallery?.length ? (
      <section ref={galleryRef} className="detail-gallery" aria-label={`${project.title} gallery`}>
        <div className="detail-gallery-status" aria-live="polite"><span>{String(activeIndex + 1).padStart(2, '0')}</span> / {String(project.gallery.length).padStart(2, '0')}</div>
        {project.gallery.map((image, index) => <figure key={image.src} data-index={index} className={index === 0 ? 'detail-gallery-feature' : ''}><img src={image.src} alt={image.alt} /></figure>)}
      </section>
    ) : <img src={project.image} alt={project.title} />}
    <div>
      <p>{project.description}</p>
      <p>{project.gallery ? 'A complete visual record of the identity system, including its logo, applications, packaging and printed collateral.' : 'This is a deliberately lightweight project-detail template. Replace this text, add real project media, process notes and outcomes in src/data/projects.js.'}</p>
    </div>
  </main>
}
