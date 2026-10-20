import { useState } from 'react';

export default function FavouritesSection() {
  const [selectedFav, setSelectedFav] = useState(null);

  const favourites = [
    {
      id: 'matcha',
      title: 'Iced Matcha Lattes',
      icon: '🍵',
      quote: 'An oat milk iced matcha latte is my ultimate creative fuel for brain-dumping campaign ideas.',
      detail: 'I love hunting for cozy hidden cafes in Delhi NCR that craft perfect ceremonial grade iced matchas.'
    },
    {
      id: 'film',
      title: 'Film & Vintage Camera',
      icon: '📷',
      quote: 'There is raw magic in 35mm grain — it slows down time and makes moments feel eternal.',
      detail: 'Carrying my vintage point-and-shoot camera everywhere to document unscripted golden hour memories.'
    },
    {
      id: 'sunsets',
      title: 'Golden Hour Sunset Walks',
      icon: '🌅',
      quote: 'The sky turning shades of deep rose and soft amber is my daily dose of visual inspiration.',
      detail: 'Quiet evening walks where the light hits standard brick and leaves in ethereal ways.'
    },
    {
      id: 'vinyl',
      title: 'Vintage Vinyl & Retro Beats',
      icon: '🎵',
      quote: 'Spinning classic vinyl records while moodboarding visual aesthetic direction.',
      detail: 'Collecting indie pop, jazz, and classic 80s synth records for Sunday morning listening sessions.'
    },
    {
      id: 'journaling',
      title: 'Aesthetic Journaling & Collage',
      icon: '📖',
      quote: 'Paper cutouts, dried pressed flowers, and handwritten notes ground my digital life.',
      detail: 'Scrapbooking project notes, exhibition tickets, and magazine snippets into physical journals.'
    },
    {
      id: 'art',
      title: 'Modern Art Galleries',
      icon: '🎨',
      quote: 'Wandering quietly through minimalist gallery spaces resets my artistic compass.',
      detail: 'Visiting contemporary art installations, photo exhibitions, and student design showcases.'
    }
  ];

  return (
    <section id="favourites" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-wine)', fontSize: '1.1rem' }}>
            Little pleasures & creative inspiration
          </span>
          <h2 style={{ fontFamily: 'var(--font-script)', fontSize: '4.2rem', color: 'var(--color-wine)', fontWeight: 400, marginTop: '0.2rem' }}>
            Favourite Things
          </h2>
          <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '1rem', maxWidth: '500px', margin: '0.5rem auto 0 auto' }}>
            Hover and click any item to peek into what inspires Adhya's creative world!
          </p>
        </div>

        {/* Central Radial Layout with Doodle Arrows */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: '1.8rem',
            maxWidth: '1000px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          {favourites.map((fav) => (
            <div
              key={fav.id}
              onClick={() => setSelectedFav(selectedFav?.id === fav.id ? null : fav)}
              style={{
                backgroundColor: selectedFav?.id === fav.id ? 'var(--color-wine)' : 'var(--bg-paper)',
                color: selectedFav?.id === fav.id ? 'var(--bg-paper)' : 'var(--color-charcoal)',
                padding: '1.4rem 1.6rem',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-paper)',
                border: '1.5px solid rgba(122, 0, 0, 0.15)',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem'
              }}
              className="animate-wiggle"
              onMouseEnter={(e) => {
                if (selectedFav?.id !== fav.id) {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'var(--color-wine)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedFav?.id !== fav.id) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(122, 0, 0, 0.15)';
                }
              }}
            >
              {/* Icon Bubble */}
              <div
                style={{
                  fontSize: '2rem',
                  lineHeight: 1,
                  backgroundColor: selectedFav?.id === fav.id ? 'rgba(255, 255, 255, 0.2)' : 'var(--bg-wine-light)',
                  padding: '0.6rem',
                  borderRadius: '12px'
                }}
              >
                {fav.icon}
              </div>

              {/* Title & Micro Arrow */}
              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: selectedFav?.id === fav.id ? 'var(--bg-paper)' : 'var(--color-charcoal)',
                    margin: 0
                  }}
                >
                  {fav.title}
                </h4>
                <span
                  style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: '1.1rem',
                    color: selectedFav?.id === fav.id ? 'rgba(255,255,255,0.85)' : 'var(--color-wine)',
                    marginTop: '2px',
                    display: 'block'
                  }}
                >
                  Click to explore ✦
                </span>
              </div>

              {/* Hand drawn SVG arrow indicator */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke={selectedFav?.id === fav.id ? '#FFFDF9' : '#7A0000'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ))}
        </div>

        {/* Selected Item Drawer / Popup Note */}
        {selectedFav && (
          <div
            style={{
              maxWidth: '650px',
              margin: '3rem auto 0 auto',
              backgroundColor: 'var(--bg-paper)',
              padding: '2rem 2.5rem',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-polaroid)',
              border: '2px solid var(--color-wine)',
              position: 'relative',
              animation: 'floatSlow 0.4s ease-out'
            }}
          >
            <div className="tape-top" />
            <button
              onClick={() => setSelectedFav(null)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '16px',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                color: 'var(--color-wine)',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2.5rem' }}>{selectedFav.icon}</span>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-wine)', margin: 0 }}>
                  {selectedFav.title}
                </h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-muted)' }}>Adhya's Personal Note</span>
              </div>
            </div>

            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--color-wine-dark)', marginBottom: '1rem', lineHeight: 1.5 }}>
              "{selectedFav.quote}"
            </p>

            <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.98rem', lineHeight: 1.6, margin: 0 }}>
              {selectedFav.detail}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
