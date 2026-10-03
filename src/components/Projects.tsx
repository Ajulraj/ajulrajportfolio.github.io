import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, BarChart3, TrendingUp, DollarSign, PieChart } from 'lucide-react';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

// Only Project 01 kept per user specification
const initialProject: Project = {
  id: 'wealth-tracker',
  number: '01',
  title: 'WEALTH TRACKER',
  description: 'Personal income and expense tracking dashboard designed to deliver structured financial visibility, monthly and yearly analysis, and disciplined cash flow management.',
  highlights: [
    'Monthly and yearly financial analysis',
    'Data visualization of cashflow trends',
    'Categorical expense insights & burn-rate breakdown',
    'Automated summary tables and recurring cost tracking',
  ],
  technologies: ['Excel', 'Python', 'SQL'],
  githubUrl: 'https://github.com/Ajulraj/wealth-tracker',
  insights: [
    'Identified top discretionary expense categories accounting for 38% of monthly variance.',
    'Constructed rolling 12-month projections comparing fixed obligations against variable outflows.',
    'Normalized multi-account bank transactions through Python cleaning pipelines.',
  ],
};

export const Projects: React.FC = () => {
  const [project, setProject] = useState<Project>(() => {
    const saved = localStorage.getItem('ajulraj_project_featured');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.id === 'wealth-tracker') return parsed;
      } catch {
        // fallback
      }
    }
    return initialProject;
  });

  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const handleUpdateGithubUrl = (_id: string, newUrl: string) => {
    const updated = { ...project, githubUrl: newUrl };
    setProject(updated);
    localStorage.setItem('ajulraj_project_featured', JSON.stringify(updated));
    if (activeProjectModal) {
      setActiveProjectModal({ ...activeProjectModal, githubUrl: newUrl });
    }
  };

  return (
    <section id="projects" className="py-24 md:py-36 border-b border-black/10 bg-[#F8F8F5]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-black/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono tracking-widest text-black/40">
                04 / PROJECTS
              </span>
              <span className="w-12 h-[1px] bg-black/20" />
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#121212] uppercase">
              FEATURED PROJECT
            </h2>
          </div>

          <span className="mt-4 md:mt-0 text-xs font-mono uppercase tracking-wider text-black/50">
            Selected Showcase · 01 / 01
          </span>
        </div>

        {/* Featured Project Showcase: Project 01 Wealth Tracker */}
        <div className="bg-white border border-black/20 p-8 sm:p-12 lg:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.06)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Index, Title, Description, Highlights */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Index Top Bar */}
                <div className="flex items-center gap-4 pb-6 mb-6 border-b border-black/10">
                  <span className="text-xs font-mono text-black/40 uppercase tracking-widest">
                    PROJECT INDEX
                  </span>
                  <span className="font-display font-black text-4xl sm:text-5xl text-black">
                    {project.number}
                  </span>
                  <span className="text-xs font-mono uppercase bg-[#F4F4EE] px-2.5 py-1 border border-black/10 text-black/70">
                    ANALYTICS &amp; DASHBOARD
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] tracking-tight uppercase mb-6">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-base sm:text-lg text-black/75 mb-8 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Features & Deliverables Highlights */}
                <div className="space-y-3 mb-10 bg-[#F9F9F7] p-6 border border-black/10">
                  <span className="text-xs font-mono uppercase tracking-widest text-black/50 block mb-2">
                    Key Features &amp; Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-mono text-black/80">
                        <span className="text-black font-bold">›</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies & Primary Buttons */}
              <div className="pt-6 border-t border-black/10">
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  <span className="text-xs font-mono uppercase tracking-wider text-black/40 mr-2">
                    Technologies:
                  </span>
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-xs font-mono font-semibold tracking-wider uppercase bg-[#F2F2EC] text-black border border-black/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 text-xs font-mono uppercase tracking-widest hover:bg-black/85 transition-colors font-semibold shadow-sm"
                  >
                    <span>VIEW PROJECT CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-black/70 hover:text-black uppercase underline underline-offset-4"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Dashboard Mockup Card */}
            <div className="lg:col-span-5 bg-[#F4F4EE] border border-black/15 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/10 text-xs font-mono text-black/60">
                  <span className="flex items-center gap-1.5 uppercase font-medium">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>Dashboard Metrics</span>
                  </span>
                  <span>LIVE REPO</span>
                </div>

                {/* Analytical Preview Widgets */}
                <div className="space-y-4 mb-6">
                  <div className="bg-white p-4 border border-black/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-black/50 block">TRACKING CADENCE</span>
                      <span className="font-display font-bold text-lg text-black">Monthly &amp; Yearly</span>
                    </div>
                    <TrendingUp className="w-5 h-5 text-emerald-700" />
                  </div>

                  <div className="bg-white p-4 border border-black/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-black/50 block">FINANCIAL VISUALIZATION</span>
                      <span className="font-display font-bold text-lg text-black">Expense Trends &amp; Inflow</span>
                    </div>
                    <PieChart className="w-5 h-5 text-black/70" />
                  </div>

                  <div className="bg-white p-4 border border-black/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-black/50 block">DATA ENGINE</span>
                      <span className="font-display font-bold text-lg text-black">SQL &amp; Python Scripts</span>
                    </div>
                    <DollarSign className="w-5 h-5 text-black/70" />
                  </div>
                </div>

                {/* Project Insights Box */}
                <div className="p-4 bg-white/70 border border-black/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-black/50 block mb-2">
                    Key Analysis Takeaway
                  </span>
                  <p className="text-xs font-mono text-black/80 leading-relaxed">
                    "Structured personal expense models allow predictive cash flow runway planning, eliminating financial variance through automated categorization."
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between text-[11px] font-mono text-black/50">
                <span>Wealth Tracker v1.0</span>
                <span>Editable GitHub Integration</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onUpdateGithubUrl={handleUpdateGithubUrl}
      />
    </section>
  );
};
