import React, { useState } from 'react';
import { Skill } from '../types';
import { Database, Code2, Wrench, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

const allSkills: Skill[] = [
  {
    id: 'sql',
    name: 'SQL',
    category: 'DATA ANALYTICS',
    size: '3xl',
    description: 'Relational database queries, joins, aggregations, filtering & data extraction.',
  },
  {
    id: 'excel',
    name: 'EXCEL',
    category: 'DATA ANALYTICS',
    size: '2xl',
    description: 'Advanced formulas, pivot tables, lookup models, data cleaning & dashboarding.',
  },
  {
    id: 'pandas',
    name: 'PANDAS',
    category: 'DATA ANALYTICS',
    size: '2xl',
    description: 'DataFrames, missing value handling, group-by transformations & time-series analysis.',
  },
  {
    id: 'powerbi',
    name: 'POWER BI',
    category: 'DATA ANALYTICS',
    size: '3xl',
    description: 'Interactive business intelligence reports, KPI visualizations & data modeling.',
  },
  {
    id: 'data-analysis',
    name: 'DATA ANALYSIS',
    category: 'DATA ANALYTICS',
    size: '2xl',
    description: 'Deriving actionable business patterns, summary statistics & metric tracking.',
  },
  {
    id: 'data-cleaning',
    name: 'DATA CLEANING',
    category: 'DATA ANALYTICS',
    size: 'xl',
    description: 'Standardizing raw records, deduplication, schema normalization & validation.',
  },
  {
    id: 'python',
    name: 'PYTHON',
    category: 'PROGRAMMING',
    size: '3xl',
    description: 'Data wrangling, script automation, pandas pipelines & computational logic.',
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'PROGRAMMING',
    size: 'lg',
    description: 'Semantic markup, web document architecture & web accessibility foundations.',
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'PROGRAMMING',
    size: 'lg',
    description: 'Responsive styling, flexible grid systems, modern layouts & visual design.',
  },
  {
    id: 'github',
    name: 'GITHUB',
    category: 'TOOLS & TECHNOLOGIES',
    size: 'xl',
    description: 'Version control workflows, commit history, repositories & code collaboration.',
  },
  {
    id: 'app-support',
    name: 'APPLICATION SUPPORT',
    category: 'PROFESSIONAL SKILLS',
    size: '2xl',
    description: 'Incident triage, user support, ticket diagnostics & system coordination.',
  },
  {
    id: 'troubleshooting',
    name: 'TROUBLESHOOTING',
    category: 'PROFESSIONAL SKILLS',
    size: '2xl',
    description: 'Root cause investigation, edge case replication & defect resolution.',
  },
];

const categories = [
  'ALL',
  'DATA ANALYTICS',
  'PROGRAMMING',
  'TOOLS & TECHNOLOGIES',
  'PROFESSIONAL SKILLS',
] as const;

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const filteredSkills = selectedCategory === 'ALL'
    ? allSkills
    : allSkills.filter((s) => s.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'DATA ANALYTICS':
        return <Database className="w-3.5 h-3.5" />;
      case 'PROGRAMMING':
        return <Code2 className="w-3.5 h-3.5" />;
      case 'TOOLS & TECHNOLOGIES':
        return <Wrench className="w-3.5 h-3.5" />;
      case 'PROFESSIONAL SKILLS':
        return <ShieldCheck className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32 border-b border-black/10 bg-[#F8F8F5]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-black/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono tracking-widest text-black/40">
                02 / SKILLS
              </span>
              <span className="w-12 h-[1px] bg-black/20" />
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#121212] uppercase">
              TECHNICAL SKILLS
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs font-mono uppercase tracking-wider text-black/50 max-w-xs">
            Core competencies, analytical toolset &amp; technical capabilities
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-200 border ${
                  isActive
                    ? 'bg-black text-white border-black font-semibold shadow-sm'
                    : 'bg-white text-black/70 border-black/15 hover:border-black/40 hover:text-black'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Structured Skills Grid with Guaranteed In-Box Bounds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch">
          {filteredSkills.map((skill) => {
            const isHovered = hoveredSkill?.id === skill.id;
            const isLongName = skill.name.length > 12;

            return (
              <div
                key={skill.id}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`group bg-white border p-4 sm:p-5 flex flex-col justify-between h-full transition-all duration-200 overflow-hidden ${
                  isHovered
                    ? 'border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] -translate-y-0.5'
                    : 'border-black/15 hover:border-black/40'
                }`}
              >
                <div className="w-full overflow-hidden">
                  {/* Category Pill Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase text-black/60 bg-[#F4F4EE] px-2 py-0.5 border border-black/10 truncate max-w-[75%]">
                      {getCategoryIcon(skill.category)}
                      <span className="truncate">{skill.category}</span>
                    </span>
                    <span className="text-[10px] font-mono text-black/40 shrink-0">
                      #{skill.id}
                    </span>
                  </div>

                  {/* Standardized Title Container - Auto-scaled for long names to guarantee zero box overflow */}
                  <div className="min-h-[2.5rem] flex items-center mb-2.5 overflow-hidden">
                    <h3
                      className={`font-display font-extrabold text-[#121212] uppercase leading-tight group-hover:text-black break-words ${
                        isLongName
                          ? 'text-sm sm:text-[0.92rem] tracking-tight'
                          : 'text-base sm:text-lg tracking-tight'
                      }`}
                    >
                      {skill.name}
                    </h3>
                  </div>

                  {/* Standardized Description Container */}
                  <p className="text-xs font-mono text-black/70 leading-relaxed min-h-[3rem] break-words">
                    {skill.description}
                  </p>
                </div>

                {/* Standardized Card Footer */}
                <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between text-[10px] font-mono text-black/50">
                  <span className="uppercase">Discipline</span>
                  <span className="text-black/80 font-medium uppercase flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-black/60" />
                    <span>Applied Skill</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Skill Categories Legend */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-8 border-t border-black/10">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-black/40 block mb-2">01 / ANALYTICS</span>
            <h4 className="font-display text-lg font-bold text-black mb-1">DATA ANALYTICS</h4>
            <p className="text-xs text-black/65 font-mono">SQL · Excel · Pandas · Power BI · Data Cleaning</p>
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-black/40 block mb-2">02 / CODE</span>
            <h4 className="font-display text-lg font-bold text-black mb-1">PROGRAMMING</h4>
            <p className="text-xs text-black/65 font-mono">Python scripting · HTML5 · CSS3 layouts</p>
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-black/40 block mb-2">03 / ECOSYSTEM</span>
            <h4 className="font-display text-lg font-bold text-black mb-1">TOOLS &amp; TECH</h4>
            <p className="text-xs text-black/65 font-mono">GitHub · VS Code · Excel BI · AI Automation</p>
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-black/40 block mb-2">04 / PRACTICE</span>
            <h4 className="font-display text-lg font-bold text-black mb-1">PROFESSIONAL</h4>
            <p className="text-xs text-black/65 font-mono">Application Support · Incident Triage · Troubleshooting</p>
          </div>
        </div>

      </div>
    </section>
  );
};
