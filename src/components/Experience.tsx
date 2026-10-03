import React from 'react';
import { Briefcase, CheckCircle2, FileSpreadsheet, Building2 } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  status: 'present' | 'past';
  tag: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'etlab',
    role: 'APPLICATION SUPPORT ANALYST',
    company: 'ETLAB INFOTECH PRIVATE LIMITED',
    period: 'PRESENT',
    location: 'Kerala, India',
    status: 'present',
    tag: 'FULL-TIME ROLE',
    description: 'Serving as the direct bridge between end-users, administrative teams, and technical engineers. Responsible for real-time problem triage, query management, system consistency, and end-to-end operational uptime across academic enterprise software systems.',
    responsibilities: [
      'Application troubleshooting and issue resolution.',
      'Supporting clients and resolving technical queries.',
      'Coordinating with development teams.',
      'Managing application-related issues and providing technical assistance.',
      'Working with academic and administrative application modules.',
    ],
    skills: [
      'Issue Diagnostic',
      'Database Verification',
      'Module Testing',
      'Client Communications',
      'Cross-Team Escalation',
    ],
  },
  {
    id: 'rites',
    role: 'DATA ENTRY OPERATOR',
    company: 'RITES LTD.',
    period: '2022 – 2025',
    location: 'Kannur, Kerala',
    status: 'past',
    tag: 'PREVIOUS EXPERIENCE',
    description: 'Worked as a Data Entry Operator at RITES Ltd., handling data entry, document management, data verification, and maintaining accurate records. Developed strong attention to detail, data-handling, and documentation skills while working with large volumes of information.',
    responsibilities: [
      'Entered and maintained data accurately in digital systems.',
      'Verified and updated records to ensure data accuracy and consistency.',
      'Managed documents and maintained organized records.',
      'Worked with Excel and other office productivity tools.',
      'Performed data validation and basic data cleaning.',
      'Supported day-to-day administrative and data-related activities.',
    ],
    skills: [
      'Data Entry',
      'Document Management',
      'Data Verification',
      'Excel & Office Productivity',
      'Data Validation',
      'Basic Data Cleaning',
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-36 border-b border-black/10 bg-[#F4F4EE]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-black/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono tracking-widest text-black/40">
                03 / EXPERIENCE
              </span>
              <span className="w-12 h-[1px] bg-black/20" />
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#121212] uppercase">
              PROFESSIONAL EXPERIENCE
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs font-mono uppercase tracking-wider text-black/50 max-w-xs">
            Hands-on technical support, operational systems &amp; data administration
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 md:pl-12 space-y-16">
          
          {/* Thin Vertical Timeline Line */}
          <div className="absolute left-0 top-3 bottom-0 w-[1px] bg-black/20" />

          {experiences.map((exp, expIdx) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline bullet / node marker */}
              <div className="absolute -left-[30px] md:-left-[54px] top-2 flex items-center justify-center">
                <div 
                  className={`w-3.5 h-3.5 rounded-full ring-4 ring-[#F4F4EE] group-hover:scale-125 transition-transform ${
                    exp.status === 'present' ? 'bg-black' : 'bg-black/60'
                  }`} 
                />
              </div>

              {/* Main Experience Card / Editorial Panel */}
              <div className="bg-white border border-black/15 p-8 sm:p-12 transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.06)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                
                {/* Header Meta */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-black/10">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-black/50 uppercase mb-1">
                      {exp.status === 'present' ? (
                        <Briefcase className="w-3.5 h-3.5" />
                      ) : (
                        <Building2 className="w-3.5 h-3.5" />
                      )}
                      <span>{exp.tag}</span>
                      <span>·</span>
                      <span>{exp.location}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#121212] tracking-tight uppercase">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col md:items-end">
                    <span className="font-display font-bold text-lg text-black">
                      {exp.company}
                    </span>
                    {exp.status === 'present' ? (
                      <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 border border-emerald-200 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        PRESENT
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-black/70 bg-[#F4F4EE] px-2.5 py-1 border border-black/10 mt-1">
                        <FileSpreadsheet className="w-3 h-3 text-black/50" />
                        {exp.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Scope & Role Context */}
                <p className="text-sm md:text-base text-black/75 mb-8 font-normal leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-black/50">
                    Key Responsibilities &amp; Operational Scope
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 bg-[#F9F9F7] border border-black/5 hover:border-black/20 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-black/80 font-mono leading-snug">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Applied Skills */}
                <div className="mt-8 pt-6 border-t border-black/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-black/60">
                  <span className="text-black font-semibold uppercase">Applied Skills:</span>
                  {exp.skills.map((skill, sIdx) => (
                    <React.Fragment key={skill}>
                      <span>{skill}</span>
                      {sIdx < exp.skills.length - 1 && <span>·</span>}
                    </React.Fragment>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
