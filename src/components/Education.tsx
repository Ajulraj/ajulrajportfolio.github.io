import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Code2, CheckCircle2, Briefcase } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-b border-black/10 bg-[#F8F8F5]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-black/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono tracking-widest text-black/40">
                ACADEMIC FOUNDATION
              </span>
              <span className="w-12 h-[1px] bg-black/20" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#121212] uppercase">
              EDUCATION &amp; TRAINING
            </h2>
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-black/50 mt-2 sm:mt-0">
            University Degree &amp; Full Stack Internship
          </span>
        </div>

        {/* Two-Column Grid: University Degree & Technical Internship */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: BCA - Bachelor of Computer Applications */}
          <div className="bg-white border border-black/15 p-8 sm:p-10 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,0.06)] hover:border-black transition-all">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-black/10">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase text-black/70 bg-[#F4F4EE] px-2.5 py-1 border border-black/10">
                  <GraduationCap className="w-3.5 h-3.5 text-black/70" />
                  <span>FORMAL DEGREE</span>
                </span>
                <span className="text-xs font-mono text-black/50">2016 – 2019</span>
              </div>

              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-display font-black text-5xl sm:text-6xl tracking-tighter text-[#121212]">
                  BCA
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#121212] tracking-tight">
                    Bachelor of Computer Applications
                  </h3>
                  <p className="text-xs font-mono text-black/60">Kannur University, Kerala</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 my-4 border-y border-black/10 text-xs font-mono">
                <div className="flex items-center gap-2 text-black/80">
                  <GraduationCap className="w-3.5 h-3.5 text-black/50 shrink-0" />
                  <span>Kannur University</span>
                </div>
                <div className="flex items-center gap-2 text-black/80">
                  <Calendar className="w-3.5 h-3.5 text-black/50 shrink-0" />
                  <span>Class of 2019</span>
                </div>
                <div className="flex items-center gap-2 text-black/80">
                  <MapPin className="w-3.5 h-3.5 text-black/50 shrink-0" />
                  <span>Kannur, Kerala, India</span>
                </div>
                <div className="flex items-center gap-2 text-black/80">
                  <Award className="w-3.5 h-3.5 text-black/50 shrink-0" />
                  <span>Computer Applications</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-black/70 font-normal leading-relaxed">
                Comprehensive academic education covering computer science fundamentals, relational database management systems (RDBMS), object-oriented programming, data structures, algorithms, and web application architecture.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between text-[11px] font-mono text-black/40">
              <span className="uppercase">Core Foundation</span>
              <span className="text-black/80 font-medium uppercase">Graduated 2019</span>
            </div>
          </div>

          {/* Card 2: Python Full Stack Development Intern */}
          <div className="bg-white border border-black/15 p-8 sm:p-10 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,0.06)] hover:border-black transition-all">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-black/10">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase text-black/70 bg-[#F4F4EE] px-2.5 py-1 border border-black/10">
                  <Code2 className="w-3.5 h-3.5 text-black/70" />
                  <span>TECHNICAL INTERNSHIP</span>
                </span>
                <span className="text-xs font-mono font-semibold text-black/70 bg-black/5 px-2 py-0.5 border border-black/10">
                  2021
                </span>
              </div>

              <div className="mb-4">
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#121212] tracking-tight uppercase">
                  Python Full Stack Development Intern
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Briefcase className="w-3.5 h-3.5 text-black/50" />
                  <p className="text-xs font-mono font-semibold text-black/80">
                    Quest Innovative Solutions <span className="font-normal text-black/50">| 2021</span>
                  </p>
                </div>
              </div>

              {/* Bullet Points from user brief */}
              <ul className="space-y-2.5 pt-4 my-4 border-t border-black/10 text-xs sm:text-sm text-black/80 font-normal leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Completed an internship focused on Python Full Stack Development.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Gained practical experience in Python programming and web application development.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Worked with frontend, backend, and database technologies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Developed practical problem-solving and debugging skills through development tasks and projects.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Gained exposure to real-world software development practices and workflows.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between text-[11px] font-mono text-black/40">
              <span className="uppercase">Technical Focus</span>
              <span className="text-black/80 font-medium uppercase">Python · Full Stack · DB</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
