import Typewriter from './Typewriter';
import { profile } from '../data/portfolio';
import { RESUME_PDF_URL, RESUME_DOCX_URL } from '../config';

export default function HeroSection({ onOpenContact }) {
  const handleNameClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem 3rem',
        overflow: 'hidden',
        textAlign: 'center'
      }}
    >
      {/* Background Hero Cutout Overlay */}
      <div className="hero-photo" />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-enter" style={{ animationDelay: '0ms' }}>
          <span className="badge-wine">✦ Hello, I'm ✦</span>
        </div>

        {/* Static CTA Script Name - Non-bold & stationary */}
        <h1 className="hero-enter" style={{ animationDelay: '150ms', margin: 0 }}>
          <button
            onClick={handleNameClick}
            className="hero-name"
            title="Click to explore portfolio"
          >
            {profile.name}
          </button>
        </h1>

        {/* Typewriter role / designation */}
        <p
          className="hero-enter"
          style={{
            animationDelay: '300ms',
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.25rem, 3vw, 1.9rem)',
            color: 'var(--color-charcoal)',
            fontWeight: 500,
            minHeight: '1.6em',
            marginTop: '0.4rem'
          }}
        >
          <Typewriter words={profile.roles} />
        </p>

        {/* Crimson Birthday Date */}
        <div
          className="hero-enter"
          style={{
            animationDelay: '450ms',
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
            color: 'var(--color-wine)',
            fontWeight: 600,
            letterSpacing: '0.25em',
            marginTop: '0.8rem',
            textTransform: 'uppercase'
          }}
        >
          02.05.2006
        </div>

        {/* Call-to-action buttons */}
        <div
          className="hero-enter"
          style={{ animationDelay: '600ms', display: 'flex', gap: '0.9rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2.2rem' }}
        >
          <a href={RESUME_PDF_URL} className="btn-wine" download>
            ⬇ Download CV
          </a>
          <a href={RESUME_DOCX_URL} className="btn-outline" download>
            CV (.docx)
          </a>
          <button onClick={onOpenContact} className="btn-outline">
            Say Hello ✦
          </button>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About section">
        <span />
      </a>
    </section>
  );
}
