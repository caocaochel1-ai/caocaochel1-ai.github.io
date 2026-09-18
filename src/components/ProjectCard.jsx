import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return <article className={`project-card ${project.size}`}><Link to={`/project/${project.slug}`} className="project-image"><img src={project.image} alt={project.title} /><span className="project-open">↗</span></Link><div className="project-meta"><span>{project.type} / {project.year}</span><Link to={`/project/${project.slug}`}>{project.title} <i>→</i></Link><p>{project.description}</p></div></article>
}
