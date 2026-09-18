const capabilities = [
  ['01', 'Brand &\nVisual Identity', 'Systems with a distinct point of view.', 'Strategy · Identity · Art direction'],
  ['02', 'Product /\nUI Design', 'Useful interfaces with a human pulse.', 'UX · UI · Prototyping'],
  ['03', 'AI Creative\nDirection', 'New visual languages for new tools.', 'Gen AI · Concepts · Campaigns'],
  ['04', 'Motion &\nInteraction', 'Rhythm, feedback and tiny moments.', 'Motion · WebGL · Interaction'],
]

export default function Capabilities() {
 return <section id="capabilities" className="capabilities section-wrap"><div className="section-kicker">(03) / CAPABILITIES</div><div className="capability-grid">{capabilities.map(([n, title, copy, tags]) => <article className="capability" key={n}><span>{n}</span><h3>{title.split('\n').map((line, i) => <>{line}{i === 0 && <br />}</>)}</h3><div><p>{copy}</p><small>{tags}</small></div><b>↗</b></article>)}</div></section>
}
