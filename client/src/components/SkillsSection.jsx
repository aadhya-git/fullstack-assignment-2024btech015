import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import useInView from '../hooks/useInView';
import { skillGroups } from '../data/portfolio';

const levelLabel = (level) => (level >= 85 ? 'Advanced' : level >= 70 ? 'Proficient' : 'Intermediate');

function SkillBar({ name, level, index, animate }) {
  return (
    <div className="skill" tabIndex={0}>
      <div className="skill-head">
        <span>{name}</span>
        <span className="skill-percent">{level}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ width: animate ? `${level}%` : 0, transitionDelay: `${index * 90}ms` }}
        />
      </div>
      <span className="skill-tooltip" role="tooltip">
        {levelLabel(level)} · {level}/100
      </span>
    </div>
  );
}

function SkillCard({ group, delay }) {
  const [ref, inView] = useInView(0.3);
  return (
    <Reveal delay={delay} className="skill-card">
      <div ref={ref}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.4rem' }}>
          <span className="icon-bubble">{group.icon}</span>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--color-wine)' }}>{group.category}</h3>
        </div>
        {group.skills.map((skill, i) => (
          <SkillBar key={skill.name} {...skill} index={i} animate={inView} />
        ))}
      </div>
    </Reveal>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <SectionHeader
          eyebrow="What I work with"
          title="Skills & Toolkit"
          subtitle="Hover or tap a skill to see my proficiency level."
        />
        <div className="grid-auto" style={{ '--min': '300px' }}>
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} group={group} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
