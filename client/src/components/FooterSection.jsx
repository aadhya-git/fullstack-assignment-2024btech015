import { useState } from 'react';
import { API_URL } from '../config';
import { contact } from '../data/portfolio';

const EMPTY_FORM = { name: '', email: '', message: '' };

export default function FooterSection({ isOpenContact, onOpenContact, onCloseContact }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleClose = () => {
    onCloseContact();
    if (status !== 'sending') {
      setStatus('idle');
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || 'Could not send your message.');

      setStatus('success');
      setForm(EMPTY_FORM);
      setTimeout(() => {
        setStatus('idle');
        onCloseContact();
      }, 3000);
    } catch (err) {
      setStatus('error');
      setError(err.message === 'Failed to fetch' ? 'Server is unreachable right now. Please try again later.' : err.message);
    }
  };

  return (
    <footer 
      id="contact" 
      className="section-padding" 
      style={{ 
        backgroundColor: 'var(--bg-creme-light)', 
        borderTop: '1px solid rgba(122, 0, 0, 0.12)',
        position: 'relative'
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Decorative Scrapbook Header */}
        <div style={{ maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-wine)', fontSize: '1.2rem' }}>
            Have an opportunity, project or collaboration in mind?
          </span>
          <h2 style={{ fontFamily: 'var(--font-script)', fontSize: '4.5rem', color: 'var(--color-wine)', fontWeight: 400, marginTop: '0.2rem', lineHeight: 1 }}>
            Let's Create Magic Together
          </h2>
          <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '1.05rem', marginTop: '1rem', lineHeight: 1.6 }}>
            Whether it's an internship, a team project, a campus event or a creative collaboration — I'd love to connect!
          </p>

          <div style={{ marginTop: '2rem' }}>
            <button
              onClick={onOpenContact}
              style={{
                backgroundColor: 'var(--color-wine)',
                color: 'var(--bg-paper)',
                border: 'none',
                borderRadius: '40px',
                padding: '0.9rem 2.5rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '1.05rem',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-polaroid)',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-wine-dark)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-wine)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Send Message ✦
            </button>
          </div>
        </div>

        {/* Social Links Grid */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.8rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem'
          }}
        >
          {[
            { name: 'LinkedIn', handle: 'Adhya Mittal', href: contact.linkedin },
            { name: 'Email', handle: contact.email, href: `mailto:${contact.email}` }
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'var(--bg-paper)',
                padding: '1rem 1.6rem',
                borderRadius: '14px',
                boxShadow: 'var(--shadow-paper)',
                border: '1px solid var(--color-border)',
                textDecoration: 'none',
                color: 'var(--color-charcoal)',
                transition: 'var(--transition-smooth)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--color-wine)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
              }}
            >
              <span style={{ fontFamily: 'var(--font-script)', fontSize: '1.4rem', color: 'var(--color-wine)' }}>
                {social.name}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-muted)' }}>
                ({social.handle})
              </span>
            </a>
          ))}
        </div>

        {/* Bottom Copyright Signoff */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px dashed var(--color-border)',
            fontSize: '0.9rem',
            color: 'var(--color-charcoal-muted)'
          }}
        >
          <p style={{ fontFamily: 'var(--font-script)', fontSize: '1.4rem', color: 'var(--color-wine)', marginBottom: '0.3rem' }}>
            Designed with ♡ for Adhya Mittal
          </p>
          <p>© {new Date().getFullYear()} Adhya Mittal. All rights reserved.</p>
        </div>
      </div>

      {/* Contact Form Modal */}
      {isOpenContact && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(43, 35, 32, 0.65)',
            backdropFilter: 'blur(6px)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={handleClose}
        >
          <div
            style={{
              backgroundColor: 'var(--bg-paper)',
              maxWidth: '520px',
              width: '100%',
              borderRadius: '20px',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-hover)',
              position: 'relative',
              border: '2px solid var(--color-wine)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              aria-label="Close contact form"
              style={{
                position: 'absolute',
                top: '16px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '1.8rem',
                color: 'var(--color-wine)',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>

            <div className="tape-top" />

            <h3 style={{ fontFamily: 'var(--font-script)', fontSize: '3rem', color: 'var(--color-wine)', margin: '0 0 0.4rem 0', textAlign: 'center' }}>
              Say Hello!
            </h3>
            <p style={{ textAlign: 'center', color: 'var(--color-charcoal-muted)', fontSize: '0.95rem', marginBottom: '1.8rem' }}>
              Leave your details below and I'll get back to you within 24 hours.
            </p>

            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <span style={{ fontSize: '3rem' }}>✨</span>
                <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-wine)', marginTop: '0.8rem' }}>
                  Thank you! Message Received.
                </h4>
                <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.9rem', marginTop: '0.4rem' }}>
                  I'm excited to connect with you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.4rem' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    maxLength={80}
                    required
                    placeholder="e.g. Maya Lin"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      border: '1.5px solid var(--color-border)',
                      backgroundColor: 'var(--bg-creme-light)',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--color-charcoal)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.4rem' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="maya@example.com"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      border: '1.5px solid var(--color-border)',
                      backgroundColor: 'var(--bg-creme-light)',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--color-charcoal)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.4rem' }}>
                    Your Message / Campaign Details
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    minLength={10}
                    maxLength={2000}
                    required
                    rows="4"
                    placeholder="Tell me about your project, timeline, or idea..."
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      border: '1.5px solid var(--color-border)',
                      backgroundColor: 'var(--bg-creme-light)',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--color-charcoal)',
                      outline: 'none',
                      resize: 'none'
                    }}
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p role="alert" style={{ color: 'var(--color-wine)', fontSize: '0.9rem', fontWeight: 600, margin: 0 }}>
                    ⚠ {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    opacity: status === 'sending' ? 0.7 : 1,
                    backgroundColor: 'var(--color-wine)',
                    color: 'var(--bg-paper)',
                    border: 'none',
                    borderRadius: '30px',
                    padding: '0.85rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-polaroid)',
                    marginTop: '0.5rem'
                  }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message ✦'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
