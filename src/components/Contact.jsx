import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-list">
        <div>
          <span className="label">Email</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div>
          <span className="label">Phone</span>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
        </div>
        <div>
          <span className="label">LinkedIn</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            linkedin.com/in/ashwini-koli-aa2148307
          </a>
        </div>
        <div>
          <span className="label">GitHub</span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            github.com/Ashwi-bit
          </a>
        </div>
        <div>
          <span className="label">Location</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  )
}