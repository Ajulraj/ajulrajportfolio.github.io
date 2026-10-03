import React from 'react';

const stats = [
  {
    num: '01',
    line1: 'PROFESSIONAL',
    line2: 'EXPERIENCE',
    detail: 'Application support, client assistance, incident resolution & system coordination.',
  },
  {
    num: '02',
    line1: 'DATA',
    line2: 'ANALYTICS',
    detail: 'Python, SQL querying, Excel modeling, Pandas manipulation & Power BI visualization.',
  },
  {
    num: '03',
    line1: 'PROBLEM',
    line2: 'SOLVING',
    detail: 'Root cause analysis, debugging data anomalies, workflow automation & critical thinking.',
  },
];

export const PersonalStats: React.FC = () => {
  return (
    <section className="border-b border-black/10 bg-[#F4F4EE]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
          {stats.map((stat) => (
            <div
              key={stat.num}
              className="group p-8 md:p-12 lg:p-14 hover:bg-white transition-colors duration-300 flex flex-col justify-between"
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className="font-mono text-xs md:text-sm tracking-widest text-black/40 group-hover:text-black transition-colors">
                  {stat.num}
                </span>
                <span className="w-2 h-2 rounded-full border border-black/30 group-hover:bg-black group-hover:scale-125 transition-all" />
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black mb-3 group-hover:translate-x-1 transition-transform">
                  <span>{stat.line1}</span>
                  <br />
                  <span>{stat.line2}</span>
                </h3>
                <p className="text-xs md:text-sm text-black/60 font-mono leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
