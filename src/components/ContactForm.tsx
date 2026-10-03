import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import './ContactForm.css'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/cchanreynolds@gmail.com'

type FormStatus = {
  kind: 'success' | 'error'
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormStatus | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((currentForm) => ({
      ...currentForm,
      [event.target.name]: event.target.value,
    }))
    setStatus(null)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          _replyto: form.email,
          _subject: `Portfolio contact from ${form.name}`,
        }),
      })
      const result = await response.json() as { success?: boolean | string }

      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error('The message service did not accept the submission.')
      }

      setStatus({ kind: 'success', message: 'Thanks, your message has been sent.' })
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus({
        kind: 'error',
        message: 'Your message could not be sent. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="contact-form-wrapper" onSubmit={handleSubmit}>
      {status && (
        <div
          className={`contact-status is-${status.kind}`}
          role={status.kind === 'error' ? 'alert' : 'status'}
          aria-live={status.kind === 'error' ? 'assertive' : 'polite'}
        >
          {status.message}
        </div>
      )}
      <div className="contact-input-group">
        <label className="contact-sr-only" htmlFor="contact-name">Your name</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          className="contact-input"
          autoComplete="name"
          required
        />
        <label className="contact-sr-only" htmlFor="contact-email">Your email</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          className="contact-input"
          autoComplete="email"
          required
        />
      </div>
      <label className="contact-sr-only" htmlFor="contact-message">Your message</label>
      <textarea
        id="contact-message"
        name="message"
        placeholder="Your message..."
        value={form.message}
        onChange={handleChange}
        className="contact-textarea"
        rows={6}
        required
      />
      <button className="contact-submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  )
}
