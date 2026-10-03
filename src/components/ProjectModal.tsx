import React from 'react';
import { X, ExternalLink, Github, Database, FileSpreadsheet, BarChart3, Check } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onUpdateGithubUrl: (id: string, newUrl: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onUpdateGithubUrl,
}) => {
  const [isEditingUrl, setIsEditingUrl] = React.useState(false);
  const [currentUrl, setCurrentUrl] = React.useState('');

  React.useEffect(() => {
    if (project) {
      setCurrentUrl(project.githubUrl);
      setIsEditingUrl(false);
    }
  }, [project]);

  if (!project) return null;

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentUrl.trim()) {
      onUpdateGithubUrl(project.id, currentUrl.trim());
      setIsEditingUrl(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#F8F8F5] border border-black/30 shadow-2xl p-6 sm:p-10 my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between pb-6 mb-6 border-b border-black/15">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-black/50 uppercase tracking-widest mb-1">
              <span>PROJECT CASE STUDY</span>
              <span>·</span>
              <span>INDEX {project.number}</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#121212] uppercase tracking-tight">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 border border-black/20 hover:border-black text-black hover:bg-black hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-2">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-black/50 mb-2">Project Brief</h4>
            <p className="text-base sm:text-lg text-black/80 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Highlights & Scope */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-black/50 mb-3">Key Analytical Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 bg-white border border-black/10">
                  <BarChart3 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-mono text-black/85">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights & Findings */}
          {project.insights && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-black/50 mb-3">Core Insights Uncovered</h4>
              <ul className="space-y-2 bg-[#EFEFEA] p-4 border border-black/10">
                {project.insights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-mono text-black/75">
                    <span className="text-black font-bold">›</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-black/50 mb-3">Technologies & Tooling</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-black text-white text-xs font-mono tracking-wider uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub Repository Link & In-place Editor */}
          <div className="pt-6 border-t border-black/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-black/50 block mb-1">
                Source Repository URL (Editable)
              </span>
              {isEditingUrl ? (
                <form onSubmit={handleSaveUrl} className="flex items-center gap-2 max-w-md">
                  <input
                    type="url"
                    value={currentUrl}
                    onChange={(e) => setCurrentUrl(e.target.value)}
                    className="flex-1 bg-white border border-black/30 px-3 py-1.5 text-xs font-mono text-black focus:outline-none"
                    placeholder="https://github.com/Ajulraj/..."
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="bg-black text-white px-3 py-1.5 text-xs font-mono uppercase hover:bg-black/80 flex items-center gap-1"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Save</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditingUrl(false)}
                    className="text-xs font-mono text-black/60 px-2 hover:text-black"
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-3">
                  <code className="text-xs font-mono text-black bg-white px-2.5 py-1 border border-black/10">
                    {project.githubUrl}
                  </code>
                  <button
                    onClick={() => setIsEditingUrl(true)}
                    className="text-[11px] font-mono text-black/60 underline hover:text-black"
                  >
                    Change Link
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 text-xs font-mono uppercase tracking-wider hover:bg-black/85 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Open On GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
