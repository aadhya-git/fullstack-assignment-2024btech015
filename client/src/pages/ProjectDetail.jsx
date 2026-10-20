import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/portfolio';
import { ProjectLinks } from '../components/ProjectsSection';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <NotFound />;

  const others = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="section-padding" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <Link to={{ pathname: '/', hash: '#projects' }} className="link-back">← Back to all projects</Link>

        <article className="project-detail reveal reveal-up is-visible">
          <div className="tape-top" />
          <div style={{ height: 'clamp(220px, 45vw, 380px)', borderRadius: '14px', overflow: 'hidden', marginBottom: '1.8rem' }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--color-wine)', lineHeight: 1.2 }}>
            {project.title}
          </h1>

          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', margin: '1rem 0 1.4rem' }}>
            {project.tech.map((t) => <span key={t} className="tech-badge">{t}</span>)}
          </div>

          <p style={{ fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>{project.description}</p>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-wine)', marginBottom: '0.7rem' }}>
            Highlights
          </h2>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '0.6rem', marginBottom: '2rem' }}>
            {project.details.map((d) => (
              <li key={d} style={{ backgroundColor: 'var(--bg-wine-light)', padding: '0.7rem 1rem', borderRadius: '10px', fontWeight: 500 }}>
                ✦ {d}
              </li>
            ))}
          </ul>

          <ProjectLinks project={project} />
        </article>

        <h2 className="section-title" style={{ fontSize: '2.6rem', textAlign: 'center', margin: '3.5rem 0 1.5rem' }}>More Projects</h2>
        <div className="grid-auto" style={{ '--min': '220px' }}>
          {others.map((p) => (
            <Link key={p.slug} to={`/projects/${p.slug}`} className="mini-project polaroid-card">
              <div className="polaroid-img-wrapper" style={{ height: '140px' }}>
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <div className="polaroid-caption" style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem' }}>{p.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
