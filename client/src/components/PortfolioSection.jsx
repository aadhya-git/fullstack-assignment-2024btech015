import { useState } from 'react';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Visual Storytelling', 'Brand Campaigns', 'Photography', 'Social Strategy'];

  const projects = [
    {
      id: 1,
      title: 'Red Bull Campus Activation Campaign',
      category: 'Brand Campaigns',
      role: 'Creative Director & Lead Creator',
      year: '2025',
      image: '/images/58524.jpg',
      shortDesc: 'Multi-channel experiential sampling drive across major Delhi NCR college campuses.',
      fullDesc: 'Conceptualized and executed a high-energy campaign engaging over 15,000+ students. Integrated physical sampling lounges with interactive photo cutouts and short-form video reels that trended across Instagram.',
      metrics: ['15K+ Student Touchpoints', '45K+ Digital Impressions', '100% On-Campus Engagement'],
      tags: ['Brand Campaigns', 'Red Bull', 'Experiential']
    },
    {
      id: 2,
      title: '35mm Golden Hour Visual Series',
      category: 'Photography',
      role: 'Photographer & Editor',
      year: '2025',
      image: '/images/58531.jpg',
      shortDesc: 'A analog film portrait series exploring quiet urban moments in soft warm sunlight.',
      fullDesc: 'Shot entirely on vintage 35mm film stock, this series captures candid portraiture, architectural textures, and intimate warm color tones without heavy digital post-processing.',
      metrics: ['Featured in Indie zine', '35mm Film Archive', '25+ Framed Prints'],
      tags: ['Photography', 'Visual Storytelling', '35mm Film']
    },
    {
      id: 3,
      title: 'Aesthetic Lifestyle & Coffee Culture',
      category: 'Visual Storytelling',
      role: 'Content Creator & Stylist',
      year: '2024',
      image: '/images/58532.jpg',
      shortDesc: 'Editorial photo & reel campaign partnering with artisanal Delhi coffee roasters.',
      fullDesc: 'Curated cozy, warm-toned editorial spreads showcasing specialty coffee crafting, artisanal pastries, and serene morning routines.',
      metrics: ['80K+ Organic Reels Reach', '12% Engagement Rate', 'Brand Partner Feature'],
      tags: ['Visual Storytelling', 'Lifestyle', 'Content Creation']
    },
    {
      id: 4,
      title: 'Gen-Z Social Strategy & Scrapbook Branding',
      category: 'Social Strategy',
      role: 'Creative Strategist',
      year: '2024',
      image: '/images/58518.jpg',
      shortDesc: 'Handcrafted brand strategy playbook for indie fashion and lifestyle labels.',
      fullDesc: 'Developed a signature collage and scrapbook visual identity system incorporating tactile paper textures, hand-drawn annotations, and vintage film vibes for youth fashion brands.',
      metrics: ['3 Brand Identity Kits', '+140% Follower Growth', 'Custom Doodle Kit'],
      tags: ['Social Strategy', 'Branding', 'Design System']
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter) || p.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-wine)', fontSize: '1.1rem' }}>
            Selected Works & Creative Direction
          </span>
          <h2 style={{ fontFamily: 'var(--font-script)', fontSize: '4.2rem', color: 'var(--color-wine)', fontWeight: 400, marginTop: '0.2rem' }}>
            Featured Work
          </h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-wine)', margin: '0.5rem auto 0 auto', opacity: 0.4 }}></div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: '0.55rem 1.4rem',
                borderRadius: '30px',
                border: activeFilter === filter ? '1.5px solid var(--color-wine)' : '1px solid var(--color-border)',
                backgroundColor: activeFilter === filter ? 'var(--color-wine)' : 'var(--bg-paper)',
                color: activeFilter === filter ? 'var(--bg-paper)' : 'var(--color-charcoal)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                boxShadow: activeFilter === filter ? 'var(--shadow-polaroid)' : 'none'
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gap: '2.5rem'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="polaroid-card"
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="tape-top" />
              <div className="polaroid-img-wrapper" style={{ height: '280px' }}>
                <img src={project.image} alt={project.title} />
              </div>

              <div style={{ padding: '1.2rem 0.5rem 0 0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-wine)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {project.category}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-charcoal-muted)' }}>{project.year}</span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.5, marginBottom: '1.2rem' }}>
                  {project.shortDesc}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-script)', fontSize: '1.3rem', color: 'var(--color-wine)' }}>
                    Explore Case Study →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View for Project Case Study */}
        {selectedProject && (
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
            onClick={() => setSelectedProject(null)}
          >
            <div
              style={{
                backgroundColor: 'var(--bg-paper)',
                maxWidth: '750px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                borderRadius: '20px',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-hover)',
                position: 'relative',
                border: '2px solid var(--color-wine)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '22px',
                  background: 'none',
                  border: 'none',
                  fontSize: '1.8rem',
                  color: 'var(--color-wine)',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>

              <div style={{ marginBottom: '1rem' }}>
                <span className="badge-wine">{selectedProject.category} • {selectedProject.year}</span>
              </div>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-wine)', marginBottom: '0.5rem' }}>
                {selectedProject.title}
              </h2>

              <div style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-muted)', marginBottom: '1.5rem' }}>
                <strong>Role:</strong> {selectedProject.role}
              </div>

              <div style={{ height: '320px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--color-charcoal)', marginBottom: '1.5rem' }}>
                {selectedProject.fullDesc}
              </p>

              <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-wine)', marginBottom: '0.8rem' }}>Key Campaign Impact:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.8rem' }}>
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx} style={{ backgroundColor: 'var(--bg-wine-light)', padding: '0.8rem 1rem', borderRadius: '10px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-wine-dark)' }}>
                    ✦ {m}
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  backgroundColor: 'var(--color-wine)',
                  color: 'var(--bg-paper)',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '0.7rem 2rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Close Project
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
