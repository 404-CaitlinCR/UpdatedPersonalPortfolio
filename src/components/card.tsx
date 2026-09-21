// import React from 'react'
import './card.css'

/*
  Small presentational wrapper component. Use `Card` when you want to give
  a consistent background, border, or padding to different pieces of UI.

  - `children`: the inner content (can be any JSX)
  - `className`: optional extra CSS class names
  - `style`: optional inline styles
*/
export default function Card({ children, className = '', style = {} }) {
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  )
}
