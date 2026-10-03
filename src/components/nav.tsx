// import React from "react"

//import the style sheet
import "./nav.css"
import { useState } from "react"

const sections = ['About', 'Skills', 'Experience', 'Projects', 'Articles', 'Contact']

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <nav
      className="navbar"
      aria-label="Primary navigation"
      onKeyDown={(event) => {
        if (event.key === 'Escape') setIsMenuOpen(false)
      }}
    >
      <button
        type="button"
        className="nav-toggle"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation-links"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span className="nav-toggle-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="nav-toggle-label">Menu</span>
      </button>
      <div
        className={`nav-links${isMenuOpen ? ' is-open' : ''}`}
        id="primary-navigation-links"
      >
        {sections.map((section) => (
          <button key={section} className="nav-btn" onClick={() => scrollTo(section)}>
            {section}
          </button>
        ))}
      </div>
    </nav>
  )
}