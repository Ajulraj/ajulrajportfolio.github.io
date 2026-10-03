import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { PersonalStats } from './components/PersonalStats';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { LearningJourney } from './components/LearningJourney';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ['about', 'skills', 'experience', 'projects', 'journey', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F8F8F5] text-[#141413] flex flex-col font-sans selection:bg-[#121212] selection:text-[#F8F8F5]">
      {/* Subtle Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Fixed Numbered Navigation with Scroll Progress */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Unconventional Split-Screen Hero */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Continuous Horizontal Scrolling Marquee */}
        <Marquee />

        {/* 01 / Editorial About Section */}
        <About />

        {/* Horizontal Personal Stats Strip (No fake numbers) */}
        <PersonalStats />

        {/* 02 / Interactive Skill Wall (No progress bars/percentages) */}
        <Skills />

        {/* 03 / Professional Experience Timeline */}
        <Experience />

        {/* 04 / Horizontal Project Gallery & Case Studies */}
        <Projects />

        {/* 05 / Flowing Continuous Learning Journey */}
        <LearningJourney />

        {/* Academic Foundation: BCA Kannur University 2019 */}
        <Education />

        {/* 06 / Dramatic & Minimal Contact Section */}
        <Contact />
      </main>

      {/* Editorial Minimal Footer */}
      <Footer />

      {/* Resume Drawer / Modal with Print & Download */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
