import Reveal from './Reveal';

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <Reveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-wine)', fontSize: '1.1rem' }}>
        {eyebrow}
      </span>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '1rem', maxWidth: '560px', margin: '0.5rem auto 0 auto' }}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
