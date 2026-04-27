import { Github, Mail, MapPin, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          Disponibile per nuove opportunita&apos;
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-4 tracking-tight leading-none">
          Antonio{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            Pepe
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-300 font-light mb-6">
          Ingegnere Informatico &middot; Universita&apos; di Pisa
        </p>

        <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Laureato in Ingegneria Informatica con solide basi in algoritmi, reti, sistemi operativi
          e sviluppo software. Appassionato di tecnologia, programmazione e creativita&apos; digitale.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="https://github.com/apepe11"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all hover:scale-105 shadow-lg"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="mailto:anthonypepe2004@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            <Mail className="w-5 h-5" />
            Contattami
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
          <MapPin className="w-4 h-4" />
          Paterno, Basilicata &mdash; Italia
        </div>
      </div>

      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
