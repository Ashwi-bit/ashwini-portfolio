import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <div className="about-text">
        <p>{profile.objective}</p>
      </div>
    </section>
  )
}