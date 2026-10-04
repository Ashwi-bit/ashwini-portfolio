import { profile } from '../data/portfolio'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#top" className="navbar-brand">{profile.name}</a>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}