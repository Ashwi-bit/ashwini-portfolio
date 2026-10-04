import { education, certifications } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      {education.map((e) => (
        <div key={e.institution} className="edu-item">
          <h3>{e.institution}</h3>
          <div className="meta">
            {e.degree} · {e.period}
          </div>
          <div className="score">{e.score}</div>
        </div>
      ))}

      <h2 style={{ marginTop: 48 }}>Certifications</h2>
      <ul style={{ marginLeft: 20 }}>
        {certifications.map((c, i) => (
          <li key={i} style={{ marginBottom: 6 }}>
            {c}
          </li>
        ))}
      </ul>
    </section>
  )
}