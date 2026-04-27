import { BookOpen } from 'lucide-react';

const courses = {
  '1° Anno': [
    'Analisi Matematica I (12 CFU)',
    'Fondamenti di Programmazione (9 CFU)',
    'Algebra Lineare (6 CFU)',
    'Analisi Matematica II (6 CFU)',
    'Algoritmi e Strutture Dati (6 CFU)',
    'Basi di Dati (9 CFU)',
    'Fisica Generale I (12 CFU)',
  ],
  '2° Anno': [
    'Ricerca Operativa (9 CFU)',
    'Elettrotecnica (6 CFU)',
    'Progettazione Web (6 CFU)',
    'Reti Logiche (9 CFU)',
    'Calcolatori Elettronici (9 CFU)',
    'Economia e Organizzazione Aziendale (6 CFU)',
    'Fondamenti di Automatica (9 CFU)',
    'Calcolo Numerico (6 CFU)',
  ],
  '3° Anno': [
    'Ingegneria del Software (6 CFU)',
    'Reti Informatiche (9 CFU)',
    'Sistemi Operativi (9 CFU)',
    'Comunicazioni Numeriche (9 CFU)',
    'Elettronica Digitale (9 CFU)',
    'Lingua Inglese (3 CFU)',
    'Tesi di Laurea (3 CFU)',
  ],
};

const yearColors: Record<string, string> = {
  '1° Anno': 'bg-blue-500',
  '2° Anno': 'bg-teal-500',
  '3° Anno': 'bg-slate-600',
};

const yearBorder: Record<string, string> = {
  '1° Anno': 'border-blue-200 bg-blue-50',
  '2° Anno': 'border-teal-200 bg-teal-50',
  '3° Anno': 'border-slate-200 bg-slate-50',
};

const yearText: Record<string, string> = {
  '1° Anno': 'text-blue-700',
  '2° Anno': 'text-teal-700',
  '3° Anno': 'text-slate-700',
};

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">
            Formazione
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-3">Percorso Accademico</h2>
        </div>

        {/* Timeline */}
        <div className="relative mb-16 space-y-8">
          {/* University */}
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-blue-600 mt-1 ring-4 ring-blue-100 flex-shrink-0" />
              <div className="w-0.5 bg-slate-200 flex-1 my-2" />
            </div>
            <div className="pb-6">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                  2022 &ndash; 2026
                </span>
                <span className="text-xs text-slate-400">Pisa, Italia</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Laurea Triennale in Ingegneria Informatica
              </h3>
              <p className="text-slate-500 text-sm mt-1">Universita&apos; di Pisa</p>
            </div>
          </div>

          {/* High School */}
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-teal-500 mt-1 ring-4 ring-teal-100 flex-shrink-0" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs font-semibold px-3 py-1 bg-teal-100 text-teal-700 rounded-full">
                  2017 &ndash; 2022
                </span>
                <span className="text-xs text-slate-400">Marsiconuovo, Italia</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Diploma Scienze Applicate — 96/100
              </h3>
              <p className="text-slate-500 text-sm mt-1">I.I.S. G. Peano</p>
            </div>
          </div>
        </div>

        {/* Course grid */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-5 h-5 text-slate-400" />
            <h3 className="text-lg font-semibold text-slate-700">Piano di Studi — Ingegneria Informatica</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(courses).map(([year, list]) => (
              <div
                key={year}
                className={`rounded-2xl border p-6 ${yearBorder[year]}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className={`w-3 h-3 rounded-full ${yearColors[year]}`} />
                  <span className={`font-bold text-sm ${yearText[year]}`}>{year}</span>
                </div>
                <ul className="space-y-2.5">
                  {list.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
