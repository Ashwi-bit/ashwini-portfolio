import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {experience.map((e) => (
        <div key={e.company} className="exp-item">
          <h3>
            {e.role} — {e.company}
          </h3>
          <div className="meta">{e.period}</div>
          <ul>
            {e.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}