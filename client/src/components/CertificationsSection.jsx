import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { certifications, achievements } from '../data/portfolio';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding" style={{ backgroundColor: 'var(--bg-wine-light)' }}>
      <div className="container">
        <SectionHeader
          eyebrow="Always learning"
          title="Certifications & Achievements"
        />

        <div className="grid-auto" style={{ '--min': '240px', maxWidth: `${certifications.length * 320}px`, margin: '0 auto 3rem' }}>
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 90} className="cert-card polaroid-card">
              <div className="tape-top" />
              <div className="cert-seal" aria-hidden="true">{cert.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.08rem', lineHeight: 1.35 }}>{cert.title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-muted)', margin: '0.3rem 0 1rem' }}>
                {cert.issuer} · {cert.year}
              </p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn-outline btn-sm">
                  View Certificate ↗
                </a>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 style={{ fontFamily: 'var(--font-script)', fontSize: '2.4rem', color: 'var(--color-wine)', fontWeight: 400, textAlign: 'center', marginBottom: '1.2rem' }}>
            Achievements & Activities
          </h3>
        </Reveal>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 90} className="achievement">
              <span style={{ fontSize: '1.5rem' }}>{a.icon}</span>
              <span style={{ fontWeight: 600 }}>{a.title}</span>
              {a.year && <span style={{ color: 'var(--color-wine)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>{a.year}</span>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
