import { useState } from 'react';

export default function RedBullSection() {
  const [activeTab, setActiveTab] = useState(0);

  const highlights = [
    {
      title: 'Campus Activations & Wings Team Energy',
      description: 'Engaging student communities through vibrant sampling events, pop-up installations, and high-energy campus drives that turn brand touchpoints into unforgettable experiences.',
      stat: '25+ Events Hosted',
      image: '/images/58524.jpg',
      tags: ['Campus Events', 'Community Engagement', 'Experiential Marketing']
    },
    {
      title: 'Creator Content & Short-Form Video',
      description: 'Conceptualizing, filming, and editing high-converting reels, TikToks, and visual stories that seamlessly blend Red Bull energy with authentic everyday student life.',
      stat: '500K+ Video Views',
      image: '/images/58525.jpg',
      tags: ['Reels & Video', 'Storytelling', 'Content Strategy']
    },
    {
      title: 'Brand Advocacy & Special Coverage',
      description: 'Representing Red Bull at flagship sports, music, and gaming events with real-time social coverage, behind-the-scenes access, and authentic student creator perspective.',
      stat: '98% Positive Sentiment',
      image: '/images/58526.jpg',
      tags: ['Brand Advocacy', 'Live Coverage', 'Influencer Strategy']
    }
  ];

  return (
    <section 
      id="redbull" 
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-wine-light)',
        borderTop: '1px solid rgba(122, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(122, 0, 0, 0.1)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ marginBottom: '0.8rem' }}>
            <span className="badge-wine" style={{ backgroundColor: 'var(--bg-paper)', color: 'var(--color-wine)' }}>
              ✦ Special Feature Spotlight ✦
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-script)', fontSize: '4rem', color: 'var(--color-wine)', fontWeight: 400, margin: '0' }}>
            Red Bull Student Creator
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-charcoal-muted)', fontSize: '1.2rem', marginTop: '0.5rem' }}>
            Fueling campus culture with energy, creativity & authentic visual stories.
          </p>
        </div>

        {/* Interactive Feature Card & Navigation Tabs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            backgroundColor: 'var(--bg-paper)',
            padding: '2.5rem',
            borderRadius: '20px',
            boxShadow: 'var(--shadow-paper)',
            border: '1px solid rgba(122, 0, 0, 0.15)'
          }}
        >
          {/* Left Column: Interactive Highlight Card */}
          <div>
            {/* Tab Selector Buttons */}
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {highlights.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  style={{
                    padding: '0.6rem 1.2rem',
                    borderRadius: '25px',
                    border: '1px solid var(--color-wine)',
                    backgroundColor: activeTab === index ? 'var(--color-wine)' : 'transparent',
                    color: activeTab === index ? 'var(--bg-paper)' : 'var(--color-wine)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  0{index + 1}. {item.title.split('&')[0]}
                </button>
              ))}
            </div>

            {/* Active Content Showcase */}
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-wine)', marginBottom: '1rem', lineHeight: 1.3 }}>
              {highlights[activeTab].title}
            </h3>

            <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {highlights[activeTab].description}
            </p>

            {/* Highlight Metric */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '0.8rem 1.4rem', backgroundColor: 'var(--bg-wine-light)', borderRadius: '12px', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-script)', fontSize: '2rem', color: 'var(--color-wine)', lineHeight: 1 }}>
                {highlights[activeTab].stat}
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-wine-dark)' }}>
                Impact Benchmark
              </span>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {highlights[activeTab].tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--color-charcoal)',
                    backgroundColor: 'var(--bg-creme)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '15px',
                    fontWeight: 500
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Photo Card with Tape */}
          <div style={{ position: 'relative' }}>
            <div className="tape-top" />
            <div className="polaroid-card">
              <div className="polaroid-img-wrapper" style={{ height: '360px' }}>
                <img
                  src={highlights[activeTab].image}
                  alt={highlights[activeTab].title}
                  style={{ transition: 'opacity 0.4s ease' }}
                />
              </div>
              <div className="polaroid-caption">Red Bull Energy & Vibes ⚡</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
