const technical = [
  { name: 'C / C++', level: 90, category: 'Languages' },
  { name: 'HTML & CSS', level: 90, category: 'Languages' },
  { name: 'JavaScript', level: 85, category: 'Languages' },
  { name: 'Python', level: 75, category: 'Languages' },
  { name: 'Kotlin', level: 65, category: 'Languages' },
  { name: 'SQL / Database', level: 75, category: 'Systems' },
  { name: 'Reti Informatiche', level: 80, category: 'Systems' },
  { name: 'Sistemi Operativi', level: 80, category: 'Systems' },
  { name: 'Algoritmi & Strutture Dati', level: 85, category: 'CS' },
  { name: 'Ingegneria del Software', level: 78, category: 'CS' },
];

const tags = [
  'Linux', 'Git', 'Raspberry Pi', 'Android / Kotlin', 'Microsoft Office',
  'FL Studio 20', 'Logic Pro X', 'iMovie', 'Google Chrome', 'Windows',
];

function Bar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-slate-700">{name}</span>
        <span className="text-xs text-slate-400">{level}%</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
            Competenze
          </span>
          <h2 className="text-4xl font-bold text-white mt-3">Stack Tecnologico</h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">
            Linguaggi, sistemi e strumenti acquisiti durante il percorso accademico e personale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {technical.map((s) => (
            <Bar key={s.name} name={s.name} level={s.level} />
          ))}
        </div>

        <div className="border-t border-slate-800 pt-10">
          <p className="text-slate-500 text-sm mb-5 text-center uppercase tracking-widest">
            Strumenti & Tecnologie
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {tags.map((t) => (
              <span
                key={t}
                className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-full hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
