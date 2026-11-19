import { Navigate, Routes, Route, useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/About'
import ProjectGrid from './components/ProjectGrid'
import Capabilities from './components/Capabilities'
import ContactFooter from './components/ContactFooter'
import ProjectDetail from './components/ProjectDetail'
import ProjectShowcase from './components/ProjectShowcase'
import { showcaseProjects } from './data/showcaseProjects'
import WorkCategoryPage from './components/WorkCategoryPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'

function Home() { return <div className="home-page"><Navbar /><main><Hero /><AboutSection /><ProjectGrid /><Capabilities /></main><ContactFooter /></div> }
function Work() { return <WorkCategoryPage /> }
function Project() {
  const { slug } = useParams()
  return showcaseProjects[slug] ? <ProjectShowcase /> : <ProjectDetail />
}
function About() { return <><Navbar /><AboutPage /></> }
function Contact() { return <><Navbar /><ContactPage /></> }
export default function App() { return <Routes><Route path="/" element={<Home />} /><Route path="/category/about" element={<About />} /><Route path="/category/contact" element={<Contact />} /><Route path="/work" element={<Work />} /><Route path="/category/:category" element={<Navigate to="/work" replace />} /><Route path="/project/:slug" element={<Project />} /></Routes> }
