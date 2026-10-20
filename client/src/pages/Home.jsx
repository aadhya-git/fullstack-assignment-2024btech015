import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ResumeSection from '../components/ResumeSection';
import TimelineSection from '../components/TimelineSection';
import CertificationsSection from '../components/CertificationsSection';
import MoodboardSection from '../components/MoodboardSection';
import RedBullSection from '../components/RedBullSection';
import FavouritesSection from '../components/FavouritesSection';
import PortfolioSection from '../components/PortfolioSection';

export default function Home({ onOpenContact }) {
  const { hash } = useLocation();

  // Scroll to the section in the URL hash (e.g. navigating to /#projects from another route)
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }));
  }, [hash]);

  return (
    <main>
      {/* 1. Hero: animated name, typewriter role & CV download CTA */}
      <HeroSection onOpenContact={onOpenContact} />

      {/* 2. About Me: photo collage, bio, location & status */}
      <AboutSection />

      {/* 3. Skills grouped by category with animated bars */}
      <SkillsSection />

      {/* 4. Code projects with tech filter, GitHub & live links */}
      <ProjectsSection />

      {/* 5. CV download (PDF + DOCX served by Express) */}
      <ResumeSection />

      {/* 6. Education & Experience vertical timeline */}
      <TimelineSection />

      {/* 7. Certifications, hackathons & awards */}
      <CertificationsSection />

      {/* Creative extras */}
      <MoodboardSection />
      <RedBullSection />
      <FavouritesSection />
      <PortfolioSection />
    </main>
  );
}
