import { useEffect } from 'react'
import './resumeModal.css'

/*
  ResumeModal: a simple overlay that previews a PDF inline instead of
  downloading it. Closes on Escape, clicking the backdrop, or the × button.
*/
interface ResumeModalProps {
  src: string
  onClose: () => void
}

export default function ResumeModal({ src, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div className="resume-modal-backdrop" onClick={onClose}>
      <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="resume-modal-close"
          onClick={onClose}
          aria-label="Close resume preview"
        >
          ×
        </button>
        <iframe src={src} title="Résumé" className="resume-modal-frame" />
        <div className="resume-modal-footer">
          <a href={src} target="_blank" rel="noreferrer">
            Open in a new tab
          </a>
        </div>
      </div>
    </div>
  )
}