import React from 'react';
import { X, Printer, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const resumeText = `# AJULRAJ
Application Support Analyst | Aspiring Data Analyst
Email: ajulraj777@gmail.com | Location: Kannur, Kerala, India
GitHub: https://github.com/Ajulraj | LinkedIn: https://www.linkedin.com/in/ajul-raj-1746251a3/

--------------------------------------------------
SUMMARY
--------------------------------------------------
Application Support Analyst passionate about data analytics, technology, and problem-solving.
Experienced in application support, troubleshooting technical issues, assisting users, and coordinating
with development teams to ensure smooth operations. Continuously developing expertise in Python, SQL,
Excel, and Power BI while integrating emerging AI technologies to automate workflows and drive insights.

--------------------------------------------------
WORK EXPERIENCE
--------------------------------------------------
APPLICATION SUPPORT ANALYST
ETLab Infotech Private Limited | Present | Kerala, India
- Application troubleshooting and issue resolution.
- Supporting clients and resolving technical queries.
- Coordinating with development teams.
- Managing application-related issues and providing technical assistance.
- Working with academic and administrative application modules.

DATA ENTRY OPERATOR
RITES Ltd. | 2022 – 2025 | Kannur, Kerala
- Entered and maintained data accurately in digital systems.
- Verified and updated records to ensure data accuracy and consistency.
- Managed documents and maintained organized records.
- Worked with Excel and other office productivity tools.
- Performed data validation and basic data cleaning.
- Supported day-to-day administrative and data-related activities.

--------------------------------------------------
EDUCATION & TECHNICAL INTERNSHIP
--------------------------------------------------
Python Full Stack Development Intern
Quest Innovative Solutions | 2021
- Completed an internship focused on Python Full Stack Development.
- Gained practical experience in Python programming and web application development.
- Worked with frontend, backend, and database technologies.
- Developed practical problem-solving and debugging skills through development tasks and projects.
- Gained exposure to real-world software development practices and workflows.

Bachelor of Computer Applications (BCA)
Kannur University (2019)

--------------------------------------------------
TECHNICAL SKILLS
--------------------------------------------------
- Programming: Python, HTML, CSS
- Data Analytics: SQL, Excel, Pandas, Power BI, Data Cleaning, Exploratory Analysis
- Tools: GitHub, VS Code, Spreadsheets, AI Automation Tools
- Professional Skills: Application Support, Incident Troubleshooting, Client Communication

--------------------------------------------------
PROJECTS
--------------------------------------------------
1. WEALTH TRACKER
   - Personal income and expense tracking dashboard.
   - Monthly and yearly financial analysis, data visualization, expense insights.
   - Technologies: Excel, Python, SQL
`;

    const blob = new Blob([resumeText], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ajulraj_Resume_Data_Analyst.md';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-[#F8F8F5] border border-black/30 shadow-2xl p-6 sm:p-10 my-8 overflow-hidden text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-black/15">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-black/50">CURRICULUM VITAE</span>
            <span className="text-black/30">/</span>
            <span className="text-xs font-mono uppercase text-black font-semibold">AJULRAJ</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 border border-black/20 hover:border-black text-black hover:bg-black hover:text-white transition-colors"
            aria-label="Close resume"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 p-3 bg-[#EFEFEA] border border-black/10">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 text-xs font-mono uppercase tracking-wider hover:bg-black/80 transition-colors font-semibold"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-2 bg-white text-black border border-black/25 px-4 py-2.5 text-xs font-mono uppercase tracking-wider hover:border-black transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Text / Markdown</span>
            </button>
          </div>

          <div className="text-[11px] font-mono text-black/50">
            A4 Formatted · 2026 Edition
          </div>
        </div>

        {/* Printable Editorial Resume View */}
        <div id="printable-resume" className="space-y-8 max-h-[60vh] overflow-y-auto pr-3 text-left">
          
          {/* Resume Header */}
          <div className="border-b border-black/15 pb-6">
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-black mb-1">
              AJULRAJ
            </h1>
            <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-black/70 mb-3">
              Application Support Analyst · Aspiring Data Analyst
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-black/60">
              <a href="mailto:ajulraj777@gmail.com" className="hover:text-black">ajulraj777@gmail.com</a>
              <span>·</span>
              <a href="https://github.com/Ajulraj" target="_blank" rel="noopener noreferrer" className="hover:text-black">github.com/Ajulraj</a>
              <span>·</span>
              <a href="https://www.linkedin.com/in/ajul-raj-1746251a3/" target="_blank" rel="noopener noreferrer" className="hover:text-black">linkedin.com/in/ajul-raj-1746251a3</a>
              <span>·</span>
              <span>Kannur, Kerala</span>
            </div>
          </div>

          {/* Professional Profile */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-black/50 mb-2">PROFESSIONAL PROFILE</h2>
            <p className="text-xs sm:text-sm text-black/80 font-normal leading-relaxed">
              Application Support Analyst with background in enterprise application support, technical issue troubleshooting, user assistance, and development team coordination. Passionate about Data Analytics, Artificial Intelligence (AI), and Emerging Technologies. Continuously learning and developing skills in Python, SQL, Excel, and Power BI with a career vision of integrating AI to automate workflows and drive data-driven decision-making.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-black/50 mb-3">PROFESSIONAL EXPERIENCE</h2>
            <div className="space-y-6">
              {/* Role 1: ETLab */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between border-b border-black/10 pb-1">
                  <div>
                    <h3 className="font-display font-bold text-base text-black">APPLICATION SUPPORT ANALYST</h3>
                    <p className="text-xs font-mono text-black/60">ETLab Infotech Private Limited · Kerala, India</p>
                  </div>
                  <span className="text-xs font-mono font-semibold text-emerald-800">PRESENT</span>
                </div>
                <ul className="space-y-1.5 text-xs font-mono text-black/75 pl-1">
                  <li>• Application troubleshooting and issue resolution.</li>
                  <li>• Supporting clients and resolving technical queries.</li>
                  <li>• Coordinating with development teams.</li>
                  <li>• Managing application-related issues and providing technical assistance.</li>
                  <li>• Working with academic and administrative application modules.</li>
                </ul>
              </div>

              {/* Role 2: RITES Ltd. */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between border-b border-black/10 pb-1">
                  <div>
                    <h3 className="font-display font-bold text-base text-black">DATA ENTRY OPERATOR</h3>
                    <p className="text-xs font-mono text-black/60">RITES Ltd. · Kannur, Kerala</p>
                  </div>
                  <span className="text-xs font-mono text-black/70">2022 – 2025</span>
                </div>
                <p className="text-xs font-mono text-black/70 italic">
                  Worked as a Data Entry Operator at RITES Ltd., handling data entry, document management, data verification, and maintaining accurate records. Developed strong attention to detail, data-handling, and documentation skills while working with large volumes of information.
                </p>
                <ul className="space-y-1 text-xs font-mono text-black/75 pl-1">
                  <li>• Entered and maintained data accurately in digital systems.</li>
                  <li>• Verified and updated records to ensure data accuracy and consistency.</li>
                  <li>• Managed documents and maintained organized records.</li>
                  <li>• Worked with Excel and other office productivity tools.</li>
                  <li>• Performed data validation and basic data cleaning.</li>
                  <li>• Supported day-to-day administrative and data-related activities.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Training */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-black/50 mb-3">EDUCATION &amp; TECHNICAL TRAINING</h2>
            <div className="space-y-4">
              {/* Internship */}
              <div className="border-b border-black/10 pb-3">
                <div className="flex items-baseline justify-between mb-1">
                  <div>
                    <h3 className="font-display font-bold text-base text-black">PYTHON FULL STACK DEVELOPMENT INTERN</h3>
                    <p className="text-xs font-mono text-black/60">Quest Innovative Solutions</p>
                  </div>
                  <span className="text-xs font-mono text-black/70">2021</span>
                </div>
                <ul className="space-y-1 text-xs font-mono text-black/75 pl-1">
                  <li>• Completed an internship focused on Python Full Stack Development.</li>
                  <li>• Gained practical experience in Python programming and web application development.</li>
                  <li>• Worked with frontend, backend, and database technologies.</li>
                  <li>• Developed practical problem-solving and debugging skills through development tasks and projects.</li>
                  <li>• Gained exposure to real-world software development practices and workflows.</li>
                </ul>
              </div>

              {/* Degree */}
              <div className="flex items-baseline justify-between pb-1">
                <div>
                  <h3 className="font-display font-bold text-base text-black">BACHELOR OF COMPUTER APPLICATIONS (BCA)</h3>
                  <p className="text-xs font-mono text-black/60">Kannur University, Kerala</p>
                </div>
                <span className="text-xs font-mono text-black/70">2019</span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-black/50 mb-3">TECHNICAL SKILLS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-2.5 bg-white border border-black/10">
                <span className="text-black font-semibold block mb-1">Data Analytics &amp; Tools</span>
                <p className="text-black/70">SQL, Excel, Pandas, Power BI, Data Cleaning, Data Analysis</p>
              </div>
              <div className="p-2.5 bg-white border border-black/10">
                <span className="text-black font-semibold block mb-1">Programming &amp; Web</span>
                <p className="text-black/70">Python, HTML, CSS, Git, GitHub</p>
              </div>
              <div className="p-2.5 bg-white border border-black/10">
                <span className="text-black font-semibold block mb-1">Support &amp; Operations</span>
                <p className="text-black/70">Troubleshooting, Application Support, Client Consulting</p>
              </div>
              <div className="p-2.5 bg-white border border-black/10">
                <span className="text-black font-semibold block mb-1">Emerging Tech &amp; AI</span>
                <p className="text-black/70">AI-driven Automation, Machine Learning Fundamentals</p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-black/50 mb-3">FEATURED PROJECT</h2>
            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 bg-white border border-black/10">
                <div className="flex justify-between font-semibold text-black mb-1">
                  <span>01. WEALTH TRACKER</span>
                  <span>Excel · Python · SQL</span>
                </div>
                <p className="text-black/70">Personal income and expense tracking dashboard featuring monthly/yearly financial analysis, visual trends, and expense insights.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-6 mt-6 border-t border-black/15 flex items-center justify-between text-xs font-mono text-black/50">
          <span>Official CV Representation · Verified 2026</span>
          <button
            onClick={onClose}
            className="text-black underline underline-offset-2 hover:opacity-75"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
