import React from 'react'
import './ProjectCard.css'

/*
  ProjectCard component

  Props:
  - `title` (string): project name
  - `description` (string): short summary
  - `tags` (array): list of tech tags
  - `link` (string): URL to the project (opens in a new tab if provided)
  - `image` (string): optional image URL

  This component returns an anchor element so the whole card is clickable.
*/
export default function ProjectCard({ title, description, tags = [], link, image }) {
  return (
    <a
      className="project-card"
      href={link || '#'}
      target={link ? '_blank' : '_self'}
      rel="noreferrer"
    >
      <div className="project-card-img">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="project-card-img-placeholder" />
        )}
      </div>
      <div className="project-card-body">
        {/* Title and description are rendered from props */}
        <h3 className="project-card-title">{title || 'Project Title'}</h3>
        <p className="project-card-desc">{description || 'Short description of this project.'}</p>
        {/* Render tags as small badges */}
        <div className="project-card-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </a>
  )
}
