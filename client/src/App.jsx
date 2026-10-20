import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollStem from './components/ScrollStem';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';
import useTheme from './hooks/useTheme';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-creme)' }}>
      {/* Scroll-driven Flower Stem & Doodle Flower */}
      <ScrollStem />

      <Navbar onOpenContact={handleOpenContact} theme={theme} onToggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<Home onOpenContact={handleOpenContact} />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer & Contact Modal (backend connected) */}
      <FooterSection
        isOpenContact={isContactOpen}
        onOpenContact={handleOpenContact}
        onCloseContact={handleCloseContact}
      />
    </div>
  );
}
