import React from 'react';
import { Compass, Sparkles, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-18 border-b border-black/10 bg-[#F8F8F5]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Section Identifier & Sleek Heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              {/* Section number with subtle line */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-xs font-mono tracking-widest text-black/40">
                  01 / ABOUT
                </span>
                <span className="w-8 h-[1px] bg-black/20" />
              </div>

              {/* Refined Heading */}
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#121212] uppercase mb-3">
                ABOUT ME
              </h2>

              <p className="text-[11px] font-mono uppercase tracking-widest text-black/50 mb-6">
                APPLICATION SUPPORT · DATA ANALYTICS · KERALA
              </p>

              {/* Compact Editorial Quick Attributes */}
              <div className="flex flex-col gap-3.5 pt-5 border-t border-black/10">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-black/40">LOCATION</span>
                  <p className="text-xs font-medium text-black">Kannur, Kerala, India</p>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-black/40">CURRENT ROLE</span>
                  <p className="text-xs font-medium text-black">Application Support Analyst</p>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-black/40">ASPIRATION</span>
                  <p className="text-xs font-medium text-black">Data Analyst with AI Integration</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Compact & Balanced Editorial Content */}
          <div className="lg:col-span-8 flex flex-col space-y-4 text-black/80 font-normal">
            
            {/* Paragraph 1 - Lead statement */}
            <p className="text-base sm:text-lg leading-relaxed text-[#121212] font-medium">
              Hi, I'm Ajulraj, an Application Support Analyst from Kannur, Kerala, with a Bachelor of Computer Applications (BCA). I have experience in application support, troubleshooting technical issues, assisting users, and coordinating with development teams to ensure smooth application operations.
            </p>

            {/* Paragraph 2 - Passion & continuous development */}
            <p className="text-sm sm:text-[0.95rem] leading-relaxed text-black/75">
              I'm passionate about <strong className="font-semibold text-black">Data Analytics</strong>, <strong className="font-semibold text-black">Artificial Intelligence (AI)</strong>, and Emerging Technologies. I enjoy exploring new technologies, learning new tools, and discovering how AI can be applied to solve real-world problems. I'm continuously developing my skills in Python, SQL, Excel, and Power BI while exploring AI-powered tools, automation, and machine learning.
            </p>

            {/* Paragraph 3 - AI integration & hands-on experimentation */}
            <p className="text-sm sm:text-[0.95rem] leading-relaxed text-black/75">
              I'm particularly interested in integrating AI into my Data Analyst career to automate workflows, improve data analysis, generate meaningful insights, and support data-driven decision-making. I enjoy learning through hands-on projects, experimenting with new technologies, and expanding my technical knowledge.
            </p>

            {/* Paragraph 4 - Career objective & mindset */}
            <p className="text-sm sm:text-[0.95rem] leading-relaxed text-black/75">
              My goal is to grow as a Data Analyst with AI skills, combining analytical thinking, technical expertise, and AI-driven solutions to solve complex problems and create meaningful impacts in the technology industry. I believe in continuous learning, adaptability, and turning challenges into opportunities for growth.
            </p>

            {/* Three key pillars - Compact alignment */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-black/10 mt-2">
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-medium text-black flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-black/60" />
                  <span>Technical Operations</span>
                </span>
                <p className="text-[11px] text-black/60 leading-relaxed font-mono">
                  Application troubleshooting, client queries &amp; workflows.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono font-medium text-black flex items-center gap-1.5">
                  <Compass className="w-3 h-3 text-black/60" />
                  <span>Analytical Thinking</span>
                </span>
                <p className="text-[11px] text-black/60 leading-relaxed font-mono">
                  Data extraction, cleaning, SQL &amp; business dashboarding.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono font-medium text-black flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-black/60" />
                  <span>AI &amp; Automation</span>
                </span>
                <p className="text-[11px] text-black/60 leading-relaxed font-mono">
                  Automating analytical tasks and modern AI tooling.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
