import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.category} className="skill-card">
            <h4>{s.category}</h4>
            <p>{s.items}</p>
          </div>
        ))}
      </div>
    </section>
  )
}