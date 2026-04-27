import { Award, Shield, Globe, Code } from 'lucide-react';

const certs = [
  {
    icon: Globe,
    title: 'Cambridge Assessment English',
    issuer: 'Cambridge Assessment English',
    date: 'Giugno 2021',
    color: 'text-blue-600 bg-blue-100',
  },
  {
    icon: Code,
    title: 'EIPASS 7 Moduli User',
    issuer: 'European Informatics Passport',
    date: 'Luglio 2021',
    color: 'text-teal-600 bg-teal-100',
  },
  {
    icon: Award,
    title: 'Gamification — 30 ore',
    issuer: 'PON FSEPON-BA-2018-84 — Pensiero Computazionale',
    date: 'Gennaio 2021',
    color: 'text-amber-600 bg-amber-100',
  },
  {
    icon: Award,
    title: 'Digital Footprint — 30 ore',
    issuer: 'I.I.S. G.Peano — PON FSEPON-BA-2018-84',
    date: 'Febbraio 2020',
    color: 'text-amber-600 bg-amber-100',
  },
  {
    icon: Award,
    title: 'Roboticando — 30 ore',
    issuer: 'PON FSEPON-BA-2018-84 — Pensiero Computazionale',
    date: 'Ottobre 2019',
    color: 'text-amber-600 bg-amber-100',
  },
  {
    icon: Award,
    title: 'Un Algoritmo come Soluzione? — 30 ore',
    issuer: 'I.I.S. G.Peano — PON FSEPON-BA-2018-84',
    date: 'Agosto 2019',
    color: 'text-amber-600 bg-amber-100',
  },
  {
    icon: Shield,
    title: 'BLS-AED Esecutore',
    issuer: 'Societa\' Nazionale di Salvamento (GE)',
    date: 'Luglio 2020',
    color: 'text-red-600 bg-red-100',
  },
  {
    icon: Shield,
    title: 'Brevetto di Bagnino di Salvataggio',
    issuer: 'Societa\' Nazionale di Salvamento — Rinnovato 2023',
    date: 'Luglio 2020',
    color: 'text-red-600 bg-red-100',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">
            Attestati & Certificazioni
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-3">Riconoscimenti</h2>
          <p className="text-slate-500 mt-4 max-w-md mx-auto">
            Certificazioni accademiche, linguistiche e professionali ottenute nel corso degli anni.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map(({ icon: Icon, title, issuer, date, color }) => (
            <div
              key={title}
              className="group p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm leading-snug mb-2">{title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">{issuer}</p>
              <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                {date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
