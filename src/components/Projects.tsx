import { Github, ExternalLink, Users, Cpu, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Progetto Raspberry Pi',
    repo: 'Progetto-Raspberry',
    description:
      'Progetto di automazione e controllo basato su Raspberry Pi sviluppato in Python. Implementa logiche di sensing e controllo hardware mediante script Python.',
    lang: 'Python',
    langColor: 'bg-yellow-400',
    tags: ['Python', 'Raspberry Pi', 'Embedded', 'IoT'],
    icon: Cpu,
    collab: false,
    url: 'https://github.com/apepe11/Progetto-Raspberry',
  },
  {
    title: 'Mobile & Social Sensing System',
    repo: 'ProgettoMSSS',
    description:
      'Applicazione Android sviluppata in Kotlin nell\'ambito di un progetto universitario di gruppo. Il sistema raccoglie dati da sensori mobile e li integra in un contesto di social sensing.',
    lang: 'Kotlin',
    langColor: 'bg-orange-400',
    tags: ['Kotlin', 'Android', 'Mobile', 'Sensing'],
    icon: Smartphone,
    collab: true,
    url: 'https://github.com/apepe11/ProgettoMSSS',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-3">Progetti</h2>
          <p className="text-slate-500 mt-4 max-w-md mx-auto">
            Progetti sviluppati durante il percorso accademico, disponibili su GitHub.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map(({ title, description, lang, langColor, tags, icon: Icon, collab, url, repo }) => (
            <div
              key={repo}
              className="group bg-white rounded-2xl border border-slate-200 p-8 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 bg-slate-100 group-hover:bg-blue-50 rounded-xl flex items-center justify-center transition-colors">
                  <Icon className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
                </div>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-600 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${langColor}`} />
                  <span className="text-xs text-slate-500 font-medium">{lang}</span>
                </div>
                <div className="flex items-center gap-3">
                  {collab && (
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Users className="w-3.5 h-3.5" />
                      Progetto di gruppo
                    </div>
                  )}
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    {repo}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/apepe11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 font-medium text-sm rounded-xl hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
          >
            <Github className="w-4 h-4" />
            Vedi tutti i repository su GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
