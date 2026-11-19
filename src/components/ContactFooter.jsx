export default function ContactFooter() {
  return <footer id="contact" className="home-contact">
    <div className="studio-ribbon" aria-label="Rainee Studio">
      {Array.from({ length: 4 }, (_, index) => <img key={index} src="/assets/reference-home/studio-logo.png" alt="" aria-hidden="true" />)}
    </div>
    <div className="home-contact-main">
      <div className="home-contact-copy">
        <h2>CONTACT ME</h2>
        <a className="home-contact-email" href="mailto:727395794@qq.com">727395794@qq.com<svg className="home-arrow" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M4 36 36 4M4 4h32v32" stroke="currentColor" strokeWidth="1.2" /></svg></a>
      </div>
      <img className="home-contact-art" src="/assets/reference-home/contact-bouquet.webp" alt="Flowers, a fountain pen and two birds emerging from an envelope" loading="lazy" />
    </div>
    <div className="home-contact-bottom"><a href="mailto:727395794@qq.com">Email</a><span>WeChat</span><span>Zhanku</span><span>Rednote</span></div>
  </footer>
}
