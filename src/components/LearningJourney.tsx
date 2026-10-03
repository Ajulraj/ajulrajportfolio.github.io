import React, { useState } from 'react';
import { ArrowDown, Sparkles, Code2, Database, Table, LineChart, Cpu } from 'lucide-react';

interface JourneyNode {
  id: string;
  step: string;
  title: string;
  icon: React.ReactNode;
  status: 'Mastered Baseline' | 'Active Daily Practice' | 'Active Exploration' | 'Emerging Frontier';
  description: string;
  keyTopics: string[];
}

const journeyNodes: JourneyNode[] = [
  {
    id: 'python',
    step: '01',
    title: 'PYTHON',
    icon: <Code2 className="w-5 h-5" />,
    status: 'Mastered Baseline',
    description: 'Core syntax, data structures, scripting, algorithm design, and computational foundations.',
    keyTopics: ['Functions & Modules', 'Data Structures (Lists, Dicts, Tuples)', 'File I/O & Automation', 'API Requests'],
  },
  {
    id: 'sql',
    step: '02',
    title: 'SQL',
    icon: <Database className="w-5 h-5" />,
    status: 'Mastered Baseline',
    description: 'Relational database architecture, queries, aggregations, joins, subqueries, and window functions.',
    keyTopics: ['Complex Joins & Unions', 'Group By & Aggregations', 'Window Functions & Ranking', 'Query Optimization'],
  },
  {
    id: 'pandas',
    step: '03',
    title: 'PANDAS',
    icon: <Table className="w-5 h-5" />,
    status: 'Active Daily Practice',
    description: 'Tabular data wrangling, missing data imputation, slicing, transforming, and multi-index series.',
    keyTopics: ['DataFrame Manipulations', 'Data Cleaning & Reshaping', 'Merging & Concatenation', 'Statistical Summaries'],
  },
  {
    id: 'data-vis',
    step: '04',
    title: 'DATA VISUALIZATION',
    icon: <LineChart className="w-5 h-5" />,
    status: 'Active Daily Practice',
    description: 'Translating numerical findings into intuitive visual charts, dashboards, and storytelling views.',
    keyTopics: ['Matplotlib & Seaborn', 'Power BI Interactive Dashboards', 'Excel KPI Charts', 'Visual Hierarchy & Palette'],
  },
  {
    id: 'real-world',
    step: '05',
    title: 'REAL-WORLD DATA ANALYTICS PROJECTS',
    icon: <Sparkles className="w-5 h-5" />,
    status: 'Active Exploration',
    description: 'Executing end-to-end data workflows: ingestion, cleaning, exploratory analysis, hypothesis validation, and executive presentation.',
    keyTopics: ['Shopping Behavior Trends', 'Personal Wealth Dashboarding', 'Anomaly & Fraud Diagnostics', 'Business Case Studies'],
  },
  {
    id: 'ai-data',
    step: '06',
    title: 'AI + DATA ANALYTICS',
    icon: <Cpu className="w-5 h-5" />,
    status: 'Emerging Frontier',
    description: 'Integrating Large Language Models, generative AI automation, machine learning pipelines, and predictive analytics into daily data operations.',
    keyTopics: ['Prompt-Driven Data Transformation', 'Automated Insight Generation', 'Predictive Modeling Explorations', 'Agentic Workflow Pipelines'],
  },
];

export const LearningJourney: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('ai-data');

  return (
    <section id="journey" className="py-24 md:py-36 border-b border-black/10 bg-[#F4F4EE]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-black/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono tracking-widest text-black/40">
                05 / JOURNEY
              </span>
              <span className="w-12 h-[1px] bg-black/20" />
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#121212] uppercase">
              MY LEARNING JOURNEY
            </h2>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-mono text-black/60 max-w-sm">
            <span className="text-black font-semibold uppercase block mb-1">Continuous Evolution:</span>
            A flowing, perpetual learning path representing ongoing growth rather than static final states.
          </div>
        </div>

        {/* Continuous Flowing Path Container */}
        <div className="relative">
          
          {/* Vertical spine indicator line */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-8 w-[1.5px] bg-black/15 -translate-x-1/2 pointer-events-none" />

          <div className="space-y-6 lg:space-y-8">
            {journeyNodes.map((node, index) => {
              const isSelected = selectedNode === node.id;
              const isEven = index % 2 === 0;

              return (
                <div key={node.id} className="relative flex flex-col items-center">
                  
                  {/* Central Node Badge on desktop */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10 items-center justify-center">
                    <button
                      onClick={() => setSelectedNode(node.id)}
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-black text-white border-black scale-110 shadow-md ring-4 ring-[#F4F4EE]'
                          : 'bg-white text-black border-black/30 hover:border-black ring-4 ring-[#F4F4EE]'
                      }`}
                      aria-label={`View step ${node.step}: ${node.title}`}
                    >
                      <span className="text-xs font-mono font-bold">{node.step}</span>
                    </button>
                  </div>

                  {/* Flow card layout */}
                  <div className={`w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    
                    {/* Main Node Card */}
                    <div className={`lg:col-span-5 ${isEven ? 'lg:col-start-1 lg:text-right' : 'lg:col-start-8 lg:text-left'}`}>
                      <div
                        onClick={() => setSelectedNode(node.id)}
                        className={`cursor-pointer bg-white border p-6 sm:p-8 transition-all duration-200 text-left shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] ${
                          isSelected
                            ? 'border-black ring-1 ring-black shadow-none translate-x-1 translate-y-1'
                            : 'border-black/15 hover:border-black/40'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="lg:hidden text-xs font-mono font-bold text-black/40">
                              {node.step} /
                            </span>
                            <span className="text-[11px] font-mono tracking-wider uppercase text-black/50 bg-[#F4F4EE] px-2 py-0.5 border border-black/10">
                              {node.status}
                            </span>
                          </div>
                          <div className="text-black/70">{node.icon}</div>
                        </div>

                        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#121212] tracking-tight uppercase mb-2">
                          {node.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-black/75 font-mono leading-relaxed mb-4">
                          {node.description}
                        </p>

                        {/* Expandable Key Topics */}
                        <div className="pt-3 border-t border-black/10">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-black/40 block mb-2">
                            Ongoing Competencies:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {node.keyTopics.map((topic, i) => (
                              <span
                                key={i}
                                className="text-[10px] font-mono bg-[#F9F9F7] text-black/80 px-2 py-1 border border-black/5"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Middle connection gap */}
                    <div className="hidden lg:block lg:col-span-2" />

                    {/* Side Context Note */}
                    <div className={`hidden lg:flex lg:col-span-5 flex-col ${isEven ? 'lg:col-start-8 lg:items-start text-left' : 'lg:col-start-1 lg:items-end text-right'}`}>
                      <div className="max-w-xs text-xs font-mono text-black/50 space-y-1">
                        <span className="text-[10px] uppercase tracking-widest text-black/30">LEARNING PROGRESSION</span>
                        <p className="text-black/70">
                          {index < journeyNodes.length - 1
                            ? `Builds foundation for Step ${journeyNodes[index + 1].step}: ${journeyNodes[index + 1].title}`
                            : 'Active target: Integrating advanced analytical AI workflows into data careers.'}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Flow Arrow down between nodes */}
                  {index < journeyNodes.length - 1 && (
                    <div className="my-3 flex flex-col items-center text-black/40">
                      <ArrowDown className="w-4 h-4 animate-bounce" />
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
