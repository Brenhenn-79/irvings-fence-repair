'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  address: string
  service: string
  message: string
}

interface ContactFormProps {
  compact?: boolean
  title?: string
  subtitle?: string
}

export default function ContactForm({ compact = false, title, subtitle }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', address: '', service: '', message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', address: '', service: '', message: '' })
    } catch (err: unknown) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (status === 'success') {
    return (
      <div style={{
        textAlign: 'center', padding: '40px 32px',
        background: 'linear-gradient(135deg, #F0FDF4, #ECFEFF)',
        borderRadius: '16px', border: '1px solid #BBF7D0'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#065F46', marginBottom: '8px' }}>
          We Got Your Request!
        </h3>
        <p style={{ color: '#047857', marginBottom: '16px' }}>
          Thanks {formData.name || 'there'}! We'll get back to you within 2 hours during business hours.
          Keep an eye on your inbox for a confirmation.
        </p>
        <p style={{ color: '#6B7280', fontSize: '0.9rem' }}>
          Can't wait? Call us now: <a href="tel:+19725550190" style={{ color: '#0EA5E9', fontWeight: 600 }}>(972) 555-0190</a>
        </p>
      </div>
    )
  }

  return (
    <div>
      {(title || subtitle) && (
        <div style={{ marginBottom: '24px' }}>
          {title && <h3 style={{ fontFamily: 'var(--font-display)', fontSize: compact ? '1.4rem' : '1.8rem', color: '#0F172A', marginBottom: '8px' }}>{title}</h3>}
          {subtitle && <p style={{ color: '#64748B', fontSize: '0.95rem' }}>{subtitle}</p>}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : '1fr 1fr', gap: '16px' }}>
          {/* Name */}
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: 600, color: '#374151' }}>
              Your Name *
            </label>
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="John Smith"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: 600, color: '#374151' }}>
              Phone Number *
            </label>
            <input
              className="form-input"
              type="tel"
              name="phone"
              placeholder="(972) 555-0000"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: 600, color: '#374151' }}>
              Email Address *
            </label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="john@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Service */}
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: 600, color: '#374151' }}>
              Service Needed
            </label>
            <select
              className="form-input"
              name="service"
              value={formData.service}
              onChange={handleChange}
              style={{ cursor: 'pointer' }}
            >
              <option value="">Select a service...</option>
              <option value="privacy-fence">Privacy Fence Installation</option>
              <option value="wood-fence">Wood Fence Installation</option>
              <option value="vinyl-fence">Vinyl Fence Installation</option>
              <option value="chain-link">Chain Link Fence</option>
              <option value="fence-repair">Fence Repair</option>
              <option value="custom-gate">Custom Gate</option>
              <option value="other">Other / Not Sure</option>
            </select>
          </div>

          {/* Address */}
          <div style={{ gridColumn: compact ? '1' : '1 / -1' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: 600, color: '#374151' }}>
              Property Address in Irving
            </label>
            <input
              className="form-input"
              type="text"
              name="address"
              placeholder="123 Main St, Irving, TX 75062"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* Message */}
          {!compact && (
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: 600, color: '#374151' }}>
                Tell Us About Your Project
              </label>
              <textarea
                className="form-input"
                name="message"
                placeholder="How many linear feet? Any gates? Special requirements? The more you share, the better we can prepare your quote!"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                style={{ resize: 'vertical', fontFamily: 'var(--font-sans)' }}
              />
            </div>
          )}
        </div>

        {errorMessage && (
          <div style={{ marginTop: '12px', padding: '12px 16px', background: '#FEF2F2', borderRadius: '8px', color: '#DC2626', fontSize: '0.9rem' }}>
            ⚠️ {errorMessage}
          </div>
        )}

        <button
          type="submit"
          className="btn-primary btn-pulse"
          disabled={status === 'loading'}
          style={{
            marginTop: '20px', width: '100%', justifyContent: 'center',
            fontSize: '1rem', padding: '16px',
            opacity: status === 'loading' ? 0.8 : 1
          }}
        >
          {status === 'loading' ? (
            <>⏳ Submitting...</>
          ) : (
            <>🚀 Get My Free Irving Fence Quote</>
          )}
        </button>

        <p style={{ marginTop: '12px', textAlign: 'center', fontSize: '0.8rem', color: '#94A3B8' }}>
          🔒 No spam, ever. We typically respond within 2 hours.
        </p>
      </form>
    </div>
  )
}
