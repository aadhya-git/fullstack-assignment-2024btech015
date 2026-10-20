import { useEffect, useState } from 'react';

/**
 * ScrollStem Component
 * Renders an aesthetic hand-drawn SVG doodle flower and growing stem
 * along the right side of the screen that dynamically grows as the user scrolls.
 */
export default function ScrollStem() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = window.scrollY / totalScroll;
        setScrollProgress(Math.min(Math.max(currentProgress, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pathLength = 1800;
  const strokeDashoffset = pathLength * (1 - scrollProgress);

  return (
    <div 
      aria-hidden="true"
      className="scroll-stem"
      style={{
        position: 'fixed',
        top: 0,
        right: '12px',
        height: '100vh',
        width: '90px',
        pointerEvents: 'none',
        zIndex: 25,
        opacity: 0.95
      }}
    >
      <svg
        viewBox="0 0 100 1000"
        style={{ width: '100%', height: '100%' }}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wineStemGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7A0000" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#9E0000" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#560000" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* ALWAYS VISIBLE: Cute Top Hand-Drawn Doodle Flower Motif */}
        <g transform="translate(50, 45)" className="animate-float">
          {/* Outer Petals */}
          <ellipse cx="0" cy="-18" rx="8" ry="14" fill="#7A0000" />
          <ellipse cx="18" cy="0" rx="14" ry="8" fill="#7A0000" />
          <ellipse cx="0" cy="18" rx="8" ry="14" fill="#7A0000" />
          <ellipse cx="-18" cy="0" rx="14" ry="8" fill="#7A0000" />
          
          <ellipse cx="-12" cy="-12" rx="10" ry="10" fill="#9E0000" />
          <ellipse cx="12" cy="-12" rx="10" ry="10" fill="#9E0000" />
          <ellipse cx="12" cy="12" rx="10" ry="10" fill="#9E0000" />
          <ellipse cx="-12" cy="12" rx="10" ry="10" fill="#9E0000" />

          {/* Center Center Disk */}
          <circle cx="0" cy="0" r="7" fill="#FFFDF9" stroke="#7A0000" strokeWidth="2" />
          <circle cx="0" cy="0" r="3" fill="#7A0000" />
        </g>

        {/* Dynamic Growing Wine-Red Flower Stem */}
        <path
          d="M 50,45 
             C 75,140 25,240 55,340 
             C 80,440 20,540 60,640 
             C 85,740 25,840 50,940"
          fill="none"
          stroke="url(#wineStemGradient)"
          strokeWidth="3"
          strokeDasharray={pathLength}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.1s ease-out'
          }}
        />

        {/* Mid-Way Blooming Flower Doodle 1 */}
        {scrollProgress > 0.3 && (
          <g transform="translate(55, 340)">
            <circle cx="0" cy="-10" r="6" fill="#7A0000" />
            <circle cx="10" cy="0" r="6" fill="#7A0000" />
            <circle cx="0" cy="10" r="6" fill="#7A0000" />
            <circle cx="-10" cy="0" r="6" fill="#7A0000" />
            <circle cx="0" cy="0" r="4" fill="#FFFDF9" stroke="#7A0000" strokeWidth="1.5" />
          </g>
        )}

        {/* Mid-Way Blooming Flower Doodle 2 */}
        {scrollProgress > 0.65 && (
          <g transform="translate(60, 640)">
            <circle cx="0" cy="-10" r="6" fill="#9E0000" />
            <circle cx="10" cy="0" r="6" fill="#9E0000" />
            <circle cx="0" cy="10" r="6" fill="#9E0000" />
            <circle cx="-10" cy="0" r="6" fill="#9E0000" />
            <circle cx="0" cy="0" r="4" fill="#FFFDF9" stroke="#7A0000" strokeWidth="1.5" />
          </g>
        )}

        {/* Leaves sprouting along stem */}
        {scrollProgress > 0.15 && (
          <path d="M 45,150 Q 20,140 30,165 Q 42,160 45,150 Z" fill="#7A0000" opacity="0.85" />
        )}
        {scrollProgress > 0.45 && (
          <path d="M 40,490 Q 15,475 25,505 Q 38,500 40,490 Z" fill="#7A0000" opacity="0.85" />
        )}
        {scrollProgress > 0.75 && (
          <path d="M 60,750 Q 88,740 78,770 Q 62,765 60,750 Z" fill="#7A0000" opacity="0.85" />
        )}

        {/* Bottom Bloomed Flower Motif */}
        {scrollProgress > 0.88 && (
          <g transform="translate(50, 940)">
            <circle cx="0" cy="-12" r="7" fill="#7A0000" />
            <circle cx="12" cy="0" r="7" fill="#7A0000" />
            <circle cx="0" cy="12" r="7" fill="#7A0000" />
            <circle cx="-12" cy="0" r="7" fill="#7A0000" />
            <circle cx="-8" cy="-8" r="6" fill="#9E0000" />
            <circle cx="8" cy="-8" r="6" fill="#9E0000" />
            <circle cx="8" cy="8" r="6" fill="#9E0000" />
            <circle cx="-8" cy="8" r="6" fill="#9E0000" />
            <circle cx="0" cy="0" r="5" fill="#FFFDF9" stroke="#7A0000" strokeWidth="1.5" />
          </g>
        )}
      </svg>
    </div>
  );
}
