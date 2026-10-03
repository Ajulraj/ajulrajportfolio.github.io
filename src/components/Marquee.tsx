import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'DATA ANALYTICS',
    'ARTIFICIAL INTELLIGENCE',
    'PYTHON',
    'SQL',
    'PROBLEM SOLVING',
    'TECHNOLOGY',
  ];

  return (
    <div className="border-b border-black/10 py-5 bg-[#F4F4EE] overflow-hidden select-none" aria-hidden="true">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* First repetition */}
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {items.map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center gap-8">
              <span className="font-display text-sm md:text-base font-semibold tracking-[0.2em] text-black/80">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
            </div>
          ))}
        </div>
        {/* Second repetition for continuous loop */}
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {items.map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center gap-8">
              <span className="font-display text-sm md:text-base font-semibold tracking-[0.2em] text-black/80">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
