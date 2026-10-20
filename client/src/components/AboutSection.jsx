import Reveal from './Reveal';
import { profile } from '../data/portfolio';

export default function AboutSection() {
  // Array of 10 photo cards for the messy collage
  const collagePhotos = [
    { src: '/images/58506.jpg', rotate: '-12deg', top: '0px', left: '10px', width: '130px', height: '130px', caption: 'Golden Hour' },
    { src: '/images/58507.jpg', rotate: '8deg', top: '15px', left: '120px', width: '120px', height: '140px', caption: '35mm Film' },
    { src: '/images/58509.jpg', rotate: '-5deg', top: '40px', left: '230px', width: '115px', height: '115px', caption: 'Journaling' },
    { src: '/images/58511.jpg', rotate: '14deg', top: '120px', left: '30px', width: '125px', height: '125px', caption: 'Adhya' },
    { src: '/images/58513.jpg', rotate: '-8deg', top: '140px', left: '155px', width: '135px', height: '130px', caption: 'Wings Energy' },
    { src: '/images/58516.jpg', rotate: '6deg', top: '130px', left: '275px', width: '110px', height: '135px', caption: 'Coffee Run' },
    { src: '/images/58517.jpg', rotate: '-15deg', top: '240px', left: '0px', width: '120px', height: '120px', caption: 'Behind Lens' },
    { src: '/images/58521.jpg', rotate: '10deg', top: '260px', left: '110px', width: '130px', height: '125px', caption: 'Scrapbook' },
    { src: '/images/58522.jpg', rotate: '-4deg', top: '250px', left: '230px', width: '115px', height: '130px', caption: 'Polaroid' },
    { src: '/images/58523.jpg', rotate: '7deg', top: '340px', left: '140px', width: '125px', height: '120px', caption: 'Delhi NCR' }
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Side: 10-Photo Messy Scrapbook Collage */}
          <Reveal variant="left">
          <div className="about-collage">
            {/* Top Tape Element */}
            <div className="tape-corner-left" />

            {/* 10 Small Overlapping Polaroid Photo Cards */}
            {collagePhotos.map((photo, index) => (
              <div
                key={index}
                className="polaroid-card"
                style={{
                  position: 'absolute',
                  top: photo.top,
                  left: photo.left,
                  width: photo.width,
                  transform: `rotate(${photo.rotate})`,
                  zIndex: index + 1,
                  padding: '6px 6px 16px 6px'
                }}
              >
                {index % 3 === 0 && <div className="tape-top" style={{ width: '40px', height: '12px', top: '-6px' }} />}
                <div className="polaroid-img-wrapper" style={{ height: photo.height }}>
                  <img src={photo.src} alt={`Collage item ${index + 1}`} />
                </div>
                <div 
                  className="polaroid-caption" 
                  style={{ fontSize: '0.75rem', marginTop: '4px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                >
                  {photo.caption}
                </div>
              </div>
            ))}
          </div>
          </Reveal>

          {/* Right Side: Editorial Bio Card with NON-CURSIVE Heading */}
          <Reveal
            variant="right"
            delay={150}
            className="about-card"
            style={{
              backgroundColor: 'var(--bg-paper)',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-paper)',
              border: '1px solid var(--color-border)',
              position: 'relative'
            }}
          >
            <div className="tape-top" />

            {/* Profile photo + NON-CURSIVE "About Me" Heading */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
            <img src={profile.photo} alt={`${profile.name} profile`} className="profile-photo" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.8rem',
                color: 'var(--color-wine)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                textTransform: 'none'
              }}
            >
              About Me
            </h2>
            </div>

            {/* Location & current status */}
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
              <span className="badge-wine">📍 {profile.location}</span>
              <span className="badge-wine">🎓 {profile.status}</span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.3rem',
                color: 'var(--color-charcoal)',
                fontWeight: 600,
                marginBottom: '1.2rem',
                lineHeight: 1.4
              }}
            >
              Computer Science & Engineering Undergraduate · Dance Club Chair
            </h3>

            <p style={{ color: 'var(--color-charcoal-muted)', marginBottom: '1.2rem', lineHeight: 1.7, fontSize: '1.02rem' }}>
              Hi! I'm Adhya Mittal, a <strong style={{ color: 'var(--color-wine)' }}>B.Tech CSE undergraduate at JK Lakshmipat University, Jaipur</strong> with a developing foundation in programming, databases and software development. I'm gaining hands-on experience through practical projects — from data analysis in Python to web apps in JavaScript.
            </p>

            <p style={{ color: 'var(--color-charcoal-muted)', marginBottom: '2rem', lineHeight: 1.7, fontSize: '1.02rem' }}>
              Outside the classroom I'm the <strong style={{ color: 'var(--color-wine)' }}>Chair of the Dance Club</strong> on the Student Council, and I love photography and visual storytelling. These activities sharpen my communication, teamwork and leadership — and I bring the same willingness to learn and improve to everything I build.
            </p>

            {/* Key Statistics Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px dashed var(--color-border)',
                textAlign: 'center'
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '2.2rem', color: 'var(--color-wine)', lineHeight: 1 }}>4</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-charcoal-muted)', fontWeight: 600, marginTop: '4px' }}>Programming Languages</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '2.2rem', color: 'var(--color-wine)', lineHeight: 1 }}>2</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-charcoal-muted)', fontWeight: 600, marginTop: '4px' }}>Leadership Roles</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '2.2rem', color: 'var(--color-wine)', lineHeight: 1 }}>1</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-charcoal-muted)', fontWeight: 600, marginTop: '4px' }}>Dance Award</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
