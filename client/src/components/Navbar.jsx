import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ onOpenContact, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', hash: 'about' },
    { name: 'Skills', hash: 'skills' },
    { name: 'Projects', hash: 'projects' },
    { name: 'Journey', hash: 'timeline' },
    { name: 'Certificates', hash: 'certifications' },
    { name: 'Creative Work', hash: 'portfolio' }
  ];

  return (
    <header className={`navbar ${scrolled || mobileMenuOpen ? 'navbar-scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        {/* Brand Mark */}
        <Link
          to="/"
          onClick={() => {
            setMobileMenuOpen(false);
            if (pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: '2rem',
            color: 'var(--color-wine)',
            textDecoration: 'none',
            lineHeight: 1
          }}
        >
          Adhya Mittal
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          {/* Nav Links (collapses into a drawer on mobile) */}
          <nav className={`nav-links ${mobileMenuOpen ? 'is-open' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={{ pathname: '/', hash: `#${link.hash}` }}
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <button
              className="btn-wine"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              style={{ padding: '0.55rem 1.4rem', fontSize: '0.9rem' }}
            >
              Say Hello ✦
            </button>
          </nav>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <button
            className="nav-burger"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
