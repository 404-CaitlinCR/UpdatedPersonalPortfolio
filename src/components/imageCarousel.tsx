import { useState } from 'react'
import './imageCarousel.css'

/*
  ImageCarousel: small presentational component for a row of photos.

  - `images`: array of image URLs. If empty, shows a placeholder so the
    layout still looks right before real photos are added.

  Click the arrows to move between images, or click a dot to jump to
  a specific one.
*/
interface ImageCarouselProps {
  images?: string[]
}

export default function ImageCarousel({ images = [] }: ImageCarouselProps) {
  const [index, setIndex] = useState(0)

  if (images.length === 0) {
    return (
      <div className="carousel-wrapper carousel-placeholder">
        <span>add photos here</span>
      </div>
    )
  }

  const goPrev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const goNext = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className="carousel-wrapper">
      <img src={images[index]} alt={`Slide ${index + 1}`} className="carousel-img" />

      {images.length > 1 && (
        <>
          <button //code for the button on the carousel
            type="button"
            className="carousel-arrow carousel-arrow-left"
            onClick={goPrev}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel-arrow carousel-arrow-right"
            onClick={goNext}
            aria-label="Next image"
          >
            ›
          </button>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`carousel-dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}