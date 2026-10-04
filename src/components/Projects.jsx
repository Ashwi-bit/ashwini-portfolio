import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div
            key={p.name}
            className={`project-card ${p.featured ? 'featured' : ''}`}
          >
            <h3>{p.name}</h3>
            <div className="stack">{p.stack}</div>
            <p className="desc">{p.description}</p>
            {p.highlight && <div className="highlight">🏆 {p.highlight}</div>}
            {p.links && p.links.length > 0 && (
              <div className="links">
                {p.links.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                    {l.label} →
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}