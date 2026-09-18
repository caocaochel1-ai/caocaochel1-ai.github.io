import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/About'
import ProjectGrid from './components/ProjectGrid'
import Capabilities from './components/Capabilities'
import ContactFooter from './components/ContactFooter'
import ProjectDetail from './components/ProjectDetail'
import CategoryPage from './components/CategoryPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'

function Home() { return <><Navbar /><main><Hero /><AboutSection /><ProjectGrid /><Capabilities /></main><ContactFooter /></> }
function Category() { return <><Navbar /><CategoryPage /></> }
function About() { return <><Navbar /><AboutPage /></> }
function Contact() { return <><Navbar /><ContactPage /></> }
export default function App() { return <Routes><Route path="/" element={<Home />} /><Route path="/category/about" element={<About />} /><Route path="/category/contact" element={<Contact />} /><Route path="/category/:category" element={<Category />} /><Route path="/project/:slug" element={<ProjectDetail />} /></Routes> }
