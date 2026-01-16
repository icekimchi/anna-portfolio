import { useState } from 'react';

const experiences = [
  {
    company: 'CareerMind',
    role: 'Product & Service Designer',
    year: '2025 – Present',
    desc: 'Leading the frontend team, designing scalable UI systems and collaborating cross-functionally.'
  },
  {
    company: 'ERTI',
    role: 'Software Engineer Intern',
    year: '2024',
    desc: 'Contributed to a 5G signal measurement and coverage analysis, supporting field testing of next-gen network infrastructure.'
  },
];

export default function StickySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="about" className="relative w-full py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">

          {/* LEFT */}
          <aside className="md:w-1/3 md:sticky md:top-32 self-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Experience
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              I have a diverse background in design and development.
            </p>
          </aside>

          {/* RIGHT */}
          <div className="md:w-2/3 w-full">
            {experiences.map((exp, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border-t border-white/10 transition-colors duration-300 hover:border-white/30"
                >
                  {/* ROW CONTENT (padding 기준) */}
                  <div className="px-2 md:px-4">

                    {/* HEADER */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="
                        group w-full text-left
                        pb-6 md:pb-6
                        flex justify-between items-start
                        transition-colors
                        md:hover:bg-white/5
                      "
                    >
                      <div className="flex w-full justify-between gap-4">

                        {/* LEFT */}
                        <div className="flex flex-col">
                          <h3 className="text-xl md:text-xl font-medium group-hover:text-purple-400 transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-gray-400 text-sm md:text-base">
                            {exp.company}
                          </p>
                        </div>

                        {/* RIGHT */}
                        <div className="flex flex-col items-end shrink-0">
                          <span className="text-xs md:text-sm text-gray-500 font-mono">
                            {exp.year}
                          </span>
                          <span
                            className={`
                              text-xl md:text-2xl
                              text-gray-400
                              transition-transform duration-300
                              ${isOpen ? 'rotate-45' : ''}
                            `}
                          >
                            +
                          </span>
                        </div>

                      </div>
                    </button>

                    {/* DESCRIPTION */}
                    <div
                      className={`
                        overflow-hidden
                        transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                        ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}
                      `}
                    >
                      <p className="pb-6 md:pb-8 text-gray-400 leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>

                    {/* DIVIDER */}
                    <span
                      className={`
                        block w-full h-px mb-6
                        transition-colors duration-300
                        ${isOpen ? 'bg-gray-600' : 'bg-gray-200'}
                        group-hover:bg-black
                      `}
                    />

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}