import { User, GraduationCap, Music, Video } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Laurea in Ingegneria Informatica',
    sub: 'Universita\' di Pisa — 2022/2026',
  },
  {
    icon: User,
    title: 'Sviluppatore Full-Stack',
    sub: 'C/C++, HTML, CSS, JavaScript, Python, Kotlin',
  },
  {
    icon: Music,
    title: 'Produzione Musicale',
    sub: 'FL Studio 20 & Logic Pro X',
  },
  {
    icon: Video,
    title: 'Montaggio Video',
    sub: 'iMovie & Movie Maker',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">
              Chi sono
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6 leading-tight">
              Passione per il codice,<br />mente da ingegnere
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Sono Antonio Pepe, ingegnere informatico laureato all&apos;Universita&apos; di Pisa.
              Il mio percorso accademico mi ha fornito solide competenze in matematica, algoritmi,
              reti informatiche, sistemi operativi e ingegneria del software.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              Ho sviluppato progetti in Python su Raspberry Pi e applicazioni mobile con Kotlin,
              dimostrando capacita&apos; sia nello sviluppo embedded che in quello mobile.
              Sono orientato ai risultati, curioso e capace di lavorare sia in autonomia che in team.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Al di fuori dell&apos;informatica, coltivo la passione per la produzione musicale
              e il montaggio video — creativita&apos; che porto anche nel mio lavoro tecnico.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, sub }) => (
              <div
                key={title}
                className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
