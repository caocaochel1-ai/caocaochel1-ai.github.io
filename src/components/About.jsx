import MouseLookCharacter from './MouseLookCharacter'

const experience = [
  { className: 'current', image: 'experience-current', period: '2024–2026', companyImage: 'experience-current-company', role: '视觉设计师' },
  { className: 'middle', image: 'experience-middle', period: '2022–2024', company: '广州乐牛软件科技有限公司', role: '视觉设计师' },
  { className: 'early', image: 'experience-early', period: '2020–2022', companyImage: 'experience-early-company', role: '品牌设计师' },
]

export default function About() {
  return <section id="about" className="home-about" aria-labelledby="about-heading">
    <h2 id="about-heading" className="home-section-heading">01/ ABOUT ME</h2>
    <div className="home-about-scene">
      <svg className="experience-orbit" viewBox="0 0 1920 1200" fill="none" aria-hidden="true">
        <path d="M234 675 A837.827 837.827 0 0 1 1693 663" stroke="white" strokeWidth="2" />
        <circle cx="234" cy="675" r="6.5" fill="white" /><circle cx="1693" cy="663" r="6.5" fill="white" />
      </svg>
      <MouseLookCharacter className="home-about-character" src="/assets/reference-home/about-moon-scene.webp" alt="A girl holding a large cream cat above a softly textured moon" head={{ x: 477 / 930, y: 280 / 750, radiusX: 44 / 930, radiusY: 46 / 750 }} />
      <ol className="experience-list">
        {experience.map(item => <li key={item.period} className={'experience-item experience-' + item.className}>
          <img src={'/assets/reference-home/' + item.image + '.webp'} alt="" />
          <p>{item.period}</p><p lang="zh-CN">{item.companyImage ? <img className="experience-company-name" src={'/assets/reference-home/' + item.companyImage + '.webp'} alt={item.period + ' 任职公司，来自原设计稿'} /> : <>{item.company}<br /></>}{item.role}</p>
        </li>)}
      </ol>
    </div>
    <div className="home-about-intro">
      <h3><img className="home-about-signature" src="/assets/reference-home/about-signature.webp" alt="Hello! I'm Rainee Huang" /></h3>
      <p>
        <span>With over five years of experience in visual and brand design,</span>
        <span>I bring a background spanning the internet, advertising, brand consultancy, and gaming industries. My expertise lies in developing brand visual systems,</span>
        <span>packaging design, event key visuals, and commercial communication materials; I possess end-to-end project experience—from distilling brand concepts and</span>
        <span>establishing visual directions to final design execution. I prioritize the integration of strategy and visual expression, understanding design requirements from both</span>
        <span>brand and user perspectives, while continuously exploring the application of AIGC within creative and design workflows. With strong communication,</span>
        <span>collaboration, and project management skills, I am dedicated to creating long-term brand value through a visual language that is clear, distinctive, and scalable.</span>
      </p>
    </div>
  </section>
}
