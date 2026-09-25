// import React from 'react'
import './PixelAvatar.css'

/*
  PixelAvatar: small presentational component

  - `src`: optional image source. If provided, an <img> is shown.
  - `alt`: accessibility text for the image.

  This component is intentionally simple: it shows either your provided
  avatar image or a fallback emoji inside a styled wrapper.
*/
interface PixelAvatarProps {
  src?: string
  alt?: string
}

export default function PixelAvatar({ src, alt = 'Avatar' }: PixelAvatarProps) {
  return (
    <div className="pixel-avatar-wrapper">
      {src ? (
        <img src={src} alt={alt} className="pixel-avatar-img" />
      ) : (
        <div className="pixel-avatar-placeholder">
          {/* Fallback when no image is provided */}
          <span>👤</span>
        </div>
      )}
    </div>
  )
}