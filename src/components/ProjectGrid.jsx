import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectGrid() {
  return <section id="work" className="projects section-wrap"><div className="projects-head"><span className="section-kicker">(02) / SELECTED WORK</span><p>A selection of identities,<br />interfaces and moving worlds.</p></div><div className="project-grid">{projects.slice(0, 2).map(project => <ProjectCard key={project.slug} project={project} />)}<p className="project-quote">Design should leave<br />room for <em>feeling.</em></p>{projects.slice(2).map(project => <ProjectCard key={project.slug} project={project} />)}</div></section>
}
