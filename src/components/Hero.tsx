import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Instagram, Mail, Download } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [profileSrc, setProfileSrc] = useState<string>(() => {
    return localStorage.getItem('ajulraj_uploaded_photo') || '/profile.svg';
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('ajulraj_uploaded_photo');
    if (saved) {
      setProfileSrc(saved);
    }
  }, []);

  const uploadAndSave = async (file: File) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      if (!dataUrl) return;

      setProfileSrc(dataUrl);
      localStorage.setItem('ajulraj_uploaded_photo', dataUrl);

      try {
        await fetch('/api/upload-profile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: dataUrl }),
        });
      } catch (err) {
        console.error('Failed to write permanent photo to server:', err);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadAndSave(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      uploadAndSave(file);
    }
  };

  return (
    <section className="relative min-h-[85vh] pt-24 md:pt-32 lg:pt-36 border-b border-black/10 bg-[#F8F8F5] flex flex-col justify-between overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 flex-1 flex items-center">
        
        {/* Main Grid: Left Details & Right Image attached directly to the web page */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-end w-full">
          
          {/* LEFT COLUMN: Name, Bio & CTAs - strictly protected with relative z-10 and margin */}
          <div className="lg:col-span-7 xl:col-span-7 relative z-10 py-6 lg:pb-16 flex flex-col justify-center">
            
            {/* Lead Tagline & Location */}
            <div className="flex flex-wrap items-center gap-3 mb-4 md:mb-6">
              <span className="w-8 h-[1px] bg-black/40" />
              <span className="text-xs md:text-sm font-mono tracking-[0.25em] text-black/60 uppercase">
                HELLO, I'M
              </span>
              <span className="text-black/30 font-light">•</span>
              <span className="text-xs font-mono tracking-wider text-black/50 uppercase">
                KANNUR, KERALA, INDIA
              </span>
            </div>

            {/* Giant Editorial Name - protected with z-20 and full breathing room */}
            <h1 className="relative z-20 font-display font-extrabold text-[3.8rem] sm:text-[5rem] md:text-[6.2rem] xl:text-[7.4rem] leading-[0.9] tracking-tighter text-[#121212] mb-6 select-none">
              AJULRAJ
            </h1>

            {/* Sub-Headline / Professional Roles */}
            <div className="mb-6 relative z-10">
              <p className="font-display text-lg sm:text-2xl md:text-3xl font-semibold tracking-tight text-black/90 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>Application Support Analyst</span>
                <span className="text-black/30 font-light">/</span>
                <span className="text-black/70">Aspiring Data Analyst</span>
              </p>
            </div>

            {/* Exact Provided Bio */}
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-black/80 max-w-xl mb-8 font-normal relative z-10">
              Hi, I’m Ajulraj, an Application Support Analyst passionate about data analytics, technology, and problem-solving. I enjoy working with data, exploring new technologies, and building practical solutions. I’m continuously learning and improving my skills to grow as a Data Analyst.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-8 relative z-10">
              <button
                onClick={onOpenResume}
                className="group relative inline-flex items-center justify-center gap-3 bg-[#121212] text-[#F8F8F5] px-7 py-3.5 text-xs md:text-sm font-semibold tracking-widest uppercase hover:bg-black/85 active:scale-[0.99] transition-all duration-200 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                aria-label="Download or view Ajulraj Resume"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>DOWNLOAD RESUME</span>
              </button>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-black/60 hover:text-black py-3 px-4 border border-transparent hover:border-black/20 transition-all"
              >
                <span>Read Story</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-black/10 flex flex-wrap items-center gap-6 relative z-10">
              <span className="text-[11px] font-mono tracking-wider text-black/40 uppercase">
                Connect:
              </span>
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="https://github.com/Ajulraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono uppercase text-black/70 hover:text-black transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ajul-raj-1746251a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono uppercase text-black/70 hover:text-black transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://instagram.com/ajulraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono uppercase text-black/70 hover:text-black transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="mailto:ajulraj777@gmail.com"
                  className="flex items-center gap-1.5 text-xs font-mono uppercase text-black/70 hover:text-black transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Image attached directly to the web page with NO box, NO border, and NO overlap on name */}
          <div 
            className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end items-end select-none cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            title="Click or drop your photo file to update"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] xl:max-w-[420px] flex items-end justify-center lg:justify-end">
              
              {/* Seamless figure directly on page background */}
              <img
                src={profileSrc}
                alt="Ajulraj"
                className="w-full h-auto max-h-[480px] lg:max-h-[580px] xl:max-h-[620px] object-contain object-bottom pointer-events-auto transition-transform duration-300 hover:scale-[1.01]"
                loading="eager"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('profile.svg')) {
                    target.src = '/profile.svg';
                  }
                }}
              />

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
