import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { timeline } from '../data/portfolio';

export default function TimelineSection() {
  return (
    <section id="timeline" className="section-padding">
      <div className="container">
        <SectionHeader
          eyebrow="Education & Experience"
          title="My Journey"
        />

        <div className="timeline">
          {timeline.map((item, i) => (
            <Reveal
              key={item.title}
              variant={i % 2 === 0 ? 'left' : 'right'}
              className={`timeline-item ${i % 2 === 0 ? 'is-left' : 'is-right'}`}
            >
              <span className="timeline-dot" aria-hidden="true">
                {item.type === 'education' ? '🎓' : '💼'}
              </span>
              <div className="timeline-card">
                <span className="timeline-period">{item.period}</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', margin: '0.3rem 0 0.2rem' }}>{item.title}</h3>
                <div style={{ color: 'var(--color-wine)', fontWeight: 600, fontSize: '0.92rem', marginBottom: '0.5rem' }}>{item.org}</div>
                <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.93rem', lineHeight: 1.55 }}>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
