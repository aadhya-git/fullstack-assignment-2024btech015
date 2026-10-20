import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { projects } from '../data/portfolio';

export function ProjectLinks({ project }) {
  return (
    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline btn-sm">
        GitHub ↗
      </a>
      {project.live && (
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-wine btn-sm">
          Live Demo ↗
        </a>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const [activeTech, setActiveTech] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const techFilters = useMemo(() => ['All', ...new Set(projects.flatMap((p) => p.tech))], []);

  const visibleProjects = useMemo(() => {
    const list = activeTech === 'All' ? [...projects] : projects.filter((p) => p.tech.includes(activeTech));
    if (sortBy === 'az') list.sort((a, b) => a.title.localeCompare(b.title));
    if (sortBy === 'stack') list.sort((a, b) => b.tech.length - a.tech.length);
    return list;
  }, [activeTech, sortBy]);

  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: 'var(--bg-creme-light)' }}>
      <div className="container">
        <SectionHeader
          eyebrow="Things I've built"
          title="Code Projects"
          subtitle="Filter by technology to see where I've used each part of the stack."
        />

        {/* Filter + sort controls */}
        <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
          {techFilters.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveTech(tech)}
              className={`pill ${activeTech === tech ? 'is-active' : ''}`}
            >
              {tech}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem' }}>
          <label htmlFor="project-sort" style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-muted)', fontWeight: 600 }}>
            Sort:
          </label>
          <select id="project-sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select">
            <option value="featured">Featured</option>
            <option value="az">Name (A–Z)</option>
            <option value="stack">Biggest tech stack</option>
          </select>
        </div>

        <div className="grid-auto" style={{ '--min': '290px' }}>
          {visibleProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 100} className="project-card">
              <Link to={`/projects/${project.slug}`} className="project-thumb" aria-label={`Open ${project.title} details`}>
                <img src={project.image} alt={project.title} loading="lazy" />
              </Link>
              <div style={{ padding: '1.3rem 1.3rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-wine)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {project.status}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', lineHeight: 1.3, marginTop: '-0.4rem' }}>
                  <Link to={`/projects/${project.slug}`} className="link-plain">{project.title}</Link>
                </h3>
                <p style={{ fontSize: '0.93rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.55, flex: 1 }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
                <ProjectLinks project={project} />
              </div>
            </Reveal>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--color-charcoal-muted)' }}>No projects use {activeTech} yet.</p>
        )}
      </div>
    </section>
  );
}
