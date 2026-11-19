import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { showcaseProjects } from '../data/showcaseProjects'
import WorkHeader from './WorkHeader'
import './ProjectShowcase.css'

export default function ProjectShowcase() {
  const { slug } = useParams()
  const project = showcaseProjects[slug]

  // Scroll-linked fade/parallax was removed at the user's request — images are
  // now always fully opaque and static as they scroll past.
  useEffect(() => {
    if (!project) return undefined
    document.title = `${project.title} — Rainee Studio`
    return undefined
  }, [project])

  if (!project) return null

  return <div className="show-page">
    <WorkHeader />
    <main className="show-main">
      <aside className="show-info">
        <p className="show-kicker">PROJECT {project.index}</p>
        <h1 className="show-title">{project.title}</h1>
        <hr className="show-rule" />
        <p className="show-tagline">{project.tagline}</p>
        {project.paragraphs.map(text => <p key={text.slice(0, 12)} className="show-paragraph">{text}</p>)}
      </aside>
      <section className="show-gallery" aria-label={`${project.title} 作品图集`}>
        {project.images.map((image, index) => {
          const src = typeof image === 'string' ? image : image.src
          const highResWidth = image.highResWidth ?? project.highResWidth ?? 3000
          const hiRes = src.replace(/\.webp$/, '@2x.webp')
          return <figure key={src} className="show-card">
            <img
              src={src}
              srcSet={`${src} 1600w, ${hiRes} ${highResWidth}w`}
              // The gallery column is ~940/1920 of the page, so the browser can
              // pick the 2x file only when it is actually needed (large or
              // high-DPI screens) instead of always downloading the big one.
              sizes="(max-width: 900px) 100vw, 49vw"
              alt={image.alt ?? `${project.title} 作品图 ${index + 1}`}
              loading={index > 1 ? 'lazy' : undefined}
            />
          </figure>
        })}
      </section>
    </main>
  </div>
}
