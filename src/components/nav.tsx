// import React from "react"

//import the style sheet
import "./nav.css"

const sections = ['About', 'Skills', 'Projects', 'Articles', 'Contact']

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      {sections.map((s) => (
        <button key={s} className="nav-btn" onClick={() => scrollTo(s)}>
          {s}
        </button>
      ))}
    </nav>
  )
}