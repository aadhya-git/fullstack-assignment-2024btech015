import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '6rem 1.5rem' }}>
      <h1 style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(4rem, 14vw, 8rem)', color: 'var(--color-wine)', fontWeight: 400, lineHeight: 1 }}>
        Oops!
      </h1>
      <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--color-charcoal-muted)', margin: '1rem 0 2rem' }}>
        This page got lost somewhere between the film rolls.
      </p>
      <Link to="/" className="btn-wine">Take me home ✦</Link>
    </main>
  );
}
