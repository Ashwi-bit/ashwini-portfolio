import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-text">
          <h1>
            Hi, I'm <span>{profile.name.split(' ')[0]}</span>.
            <br />
            {profile.title}.
          </h1>
          <p className="subtitle">
            {profile.subtitle} · {profile.location}
          </p>
          <div className="cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href={`mailto:${profile.email}`} className="btn btn-outline">Email Me</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-outline">
              GitHub
            </a>
          </div>
        </div>
        <div className="hero-photo">
<img src={`${import.meta.env.BASE_URL}profile.png`} alt={profile.name} />
        </div>
      </div>
    </section>
  )
}