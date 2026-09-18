import { Link, useParams } from 'react-router-dom'
import { galleryPages } from '../data/galleryPages'
import './CategoryPage.css'

export default function CategoryPage() {
  const { category } = useParams()
  const page = galleryPages[category]

  if (!page) return <main className="category-page missing-page"><h1>Page not found.</h1><Link to="/">Back to home</Link></main>

  return <main className="category-page">
    <header className="gallery-header">
      <p>{page.en} / 2023—2026</p>
      <h1>{page.title}</h1>
      <p>{page.intro}</p>
    </header>
    <section className="gallery-grid" aria-label={`${page.title} projects`}>
      {page.items.map((item) => <Link className={`gallery-card ${item.className}`} key={`${item.number}-${item.title}`} to={`/project/${item.slug}`}>
        <div className="gallery-media"><img src={item.image} alt={item.title} /></div>
        <div className="gallery-caption"><span>{item.number}.</span><span>{item.title}</span><b>↗</b></div>
      </Link>)}
    </section>
  </main>
}
