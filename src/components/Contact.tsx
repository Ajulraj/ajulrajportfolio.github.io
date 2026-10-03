import React, { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, ArrowUpRight, Copy, Check, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLinkedin, setCopiedLinkedin] = useState(false);
  const [copiedGithub, setCopiedGithub] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate responsive clean submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 6000);
    }, 600);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('ajulraj777@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyLinkedinToClipboard = () => {
    navigator.clipboard.writeText('https://www.linkedin.com/in/ajul-raj-1746251a3/');
    setCopiedLinkedin(true);
    setTimeout(() => setCopiedLinkedin(false), 2500);
  };

  const copyGithubToClipboard = () => {
    navigator.clipboard.writeText('https://github.com/Ajulraj');
    setCopiedGithub(true);
    setTimeout(() => setCopiedGithub(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-black/10 bg-[#F8F8F5]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-mono tracking-widest text-black/40">
            06 / CONTACT
          </span>
          <span className="w-12 h-[1px] bg-black/20" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Refined Heading & Compact Social Links */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Refined Heading - Scaled Down */}
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#121212] uppercase mb-4 select-none">
                LET'S CONNECT
              </h2>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base text-black/75 max-w-lg mb-8 leading-relaxed font-normal">
                "I'm always interested in connecting with professionals, exploring opportunities, and discussing technology and data."
              </p>
            </div>

            {/* Refined, Sleek Contact Links (Scaled Down) */}
            <div className="pt-4 border-t border-black/10">
              
              {/* Email with direct mailto + quick copy */}
              <div className="group flex items-center justify-between py-2.5 sm:py-3 border-b border-black/10 hover:border-black transition-colors">
                <a
                  href="mailto:ajulraj777@gmail.com"
                  className="font-display text-sm sm:text-base md:text-lg font-bold text-black group-hover:translate-x-1 transition-transform flex items-center gap-2.5"
                >
                  <Mail className="w-4 h-4 text-black/50 group-hover:text-black transition-colors" />
                  <span>EMAIL</span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block text-xs font-mono text-black/50">ajulraj777@gmail.com</span>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-1.5 border border-black/15 hover:border-black text-black/60 hover:text-black transition-colors"
                    title="Copy Email Address"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href="mailto:ajulraj777@gmail.com"
                    className="p-1.5 border border-black/15 hover:border-black text-black/60 hover:text-black transition-colors"
                    aria-label="Open email client"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="group flex items-center justify-between py-2.5 sm:py-3 border-b border-black/10 hover:border-black transition-colors">
                <a
                  href="https://www.linkedin.com/in/ajul-raj-1746251a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-sm sm:text-base md:text-lg font-bold text-black group-hover:translate-x-1 transition-transform flex items-center gap-2.5"
                >
                  <Linkedin className="w-4 h-4 text-black/50 group-hover:text-black transition-colors" />
                  <span>LINKEDIN</span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block text-xs font-mono text-black/50">ajul-raj-1746251a3</span>
                  <button
                    onClick={copyLinkedinToClipboard}
                    className="p-1.5 border border-black/15 hover:border-black text-black/60 hover:text-black transition-colors"
                    title="Copy LinkedIn URL"
                    aria-label="Copy LinkedIn Link"
                  >
                    {copiedLinkedin ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href="https://www.linkedin.com/in/ajul-raj-1746251a3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 border border-black/15 hover:border-black text-black/60 hover:text-black transition-colors"
                    aria-label="Open LinkedIn profile"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="group flex items-center justify-between py-2.5 sm:py-3 border-b border-black/10 hover:border-black transition-colors">
                <a
                  href="https://github.com/Ajulraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-sm sm:text-base md:text-lg font-bold text-black group-hover:translate-x-1 transition-transform flex items-center gap-2.5"
                >
                  <Github className="w-4 h-4 text-black/50 group-hover:text-black transition-colors" />
                  <span>GITHUB</span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block text-xs font-mono text-black/50">Ajulraj</span>
                  <button
                    onClick={copyGithubToClipboard}
                    className="p-1.5 border border-black/15 hover:border-black text-black/60 hover:text-black transition-colors"
                    title="Copy GitHub URL"
                    aria-label="Copy GitHub Link"
                  >
                    {copiedGithub ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href="https://github.com/Ajulraj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 border border-black/15 hover:border-black text-black/60 hover:text-black transition-colors"
                    aria-label="Open GitHub profile"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="group flex items-center justify-between py-2.5 sm:py-3 border-b border-black/10 hover:border-black transition-colors">
                <a
                  href="https://instagram.com/ajulraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-sm sm:text-base md:text-lg font-bold text-black group-hover:translate-x-1 transition-transform flex items-center gap-2.5"
                >
                  <Instagram className="w-4 h-4 text-black/50 group-hover:text-black transition-colors" />
                  <span>INSTAGRAM</span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block text-xs font-mono text-black/50">@ajulraj</span>
                  <a
                    href="https://instagram.com/ajulraj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 border border-black/15 hover:border-black text-black/60 hover:text-black transition-colors"
                    aria-label="Open Instagram profile"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Clean Contact Form */}
          <div className="lg:col-span-6 bg-white border border-black/15 p-6 sm:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.06)]">
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-black/40 block mb-1">
                DIRECT INQUIRY
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-black uppercase">
                Send a Message
              </h3>
            </div>

            {isSent && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Thank you! Your message has been prepared. I'll get back to you promptly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* NAME */}
              <div className="relative">
                <label className="text-xs font-mono uppercase tracking-widest text-black/50 block mb-1.5">
                  NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name or organization"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-0 border-b-2 border-black/20 focus:border-black py-2.5 px-1 text-sm font-normal text-black placeholder:text-black/30 focus:outline-none transition-colors"
                />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <label className="text-xs font-mono uppercase tracking-widest text-black/50 block mb-1.5">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-0 border-b-2 border-black/20 focus:border-black py-2.5 px-1 text-sm font-normal text-black placeholder:text-black/30 focus:outline-none transition-colors"
                />
              </div>

              {/* MESSAGE */}
              <div className="relative">
                <label className="text-xs font-mono uppercase tracking-widest text-black/50 block mb-1.5">
                  MESSAGE / INQUIRY *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Discuss an opportunity, project collaboration, or technical inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-0 border-b-2 border-black/20 focus:border-black py-2.5 px-1 text-sm font-normal text-black placeholder:text-black/30 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] font-mono text-black/40">
                  * All fields required
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-2 bg-[#121212] text-white px-6 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-black/85 active:scale-[0.98] transition-all border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]"
                >
                  <span>{isSubmitting ? 'PREPARING...' : 'SEND MESSAGE'}</span>
                  <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
