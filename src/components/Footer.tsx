import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#121212] text-[#F8F8F5] pt-20 pb-12 border-t border-black select-none">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Signature */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-white">
              AJULRAJ
            </h3>
            <p className="font-mono text-xs sm:text-sm text-white/60 tracking-wider uppercase">
              Application Support Analyst <span className="text-white/30">/</span> Aspiring Data Analyst
            </p>
            <p className="text-xs text-white/40 font-mono max-w-md pt-2">
              Combining technical operations, data analytics, and modern AI automation to build practical solutions.
            </p>
          </div>

          {/* Navigation & Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-2">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-xs font-mono text-white/70">
              <li>
                <a href="#about" className="hover:text-white transition-colors">01 / ABOUT</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">02 / SKILLS</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">03 / EXPERIENCE</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">04 / PROJECTS</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">05 / JOURNEY</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">06 / CONTACT</a>
              </li>
            </ul>
          </div>

          {/* Social Channels & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-3">
                CHANNELS
              </span>
              <div className="flex flex-col gap-2.5 text-xs font-mono">
                <a
                  href="https://github.com/Ajulraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ajul-raj-1746251a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://instagram.com/ajulraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="mailto:ajulraj777@gmail.com"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white border border-white/20 hover:border-white px-4 py-2.5 transition-colors"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright (Exact Copy from Prompt) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div>
            "Designed &amp; Developed by Ajulraj"
          </div>
          <div>
            "© 2026 Ajulraj. All Rights Reserved."
          </div>
        </div>

      </div>
    </footer>
  );
};
