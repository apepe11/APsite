import { Mail, Phone, MapPin, Github } from 'lucide-react';

const info = [
  {
    icon: Mail,
    label: 'Email',
    value: 'anthonypepe2004@gmail.com',
    href: 'mailto:anthonypepe2004@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telefono',
    value: '+39 320 604 3046',
    href: 'tel:+393206043046',
  },
  {
    icon: MapPin,
    label: 'Posizione',
    value: 'Paterno, Basilicata — Italia',
    href: null,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/apepe11',
    href: 'https://github.com/apepe11',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
            Contatti
          </span>
          <h2 className="text-4xl font-bold text-white mt-3">Parliamoci</h2>
          <p className="text-slate-400 mt-4 max-w-md mx-auto">
            Sono disponibile per collaborazioni, stage, o semplicemente per scambiare idee sul mondo tech.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {info.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="group text-center p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/40 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-slate-800 group-hover:bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                <Icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">{label}</p>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-slate-300 text-sm font-medium hover:text-blue-400 transition-colors break-all"
                >
                  {value}
                </a>
              ) : (
                <p className="text-slate-300 text-sm font-medium">{value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="mailto:anthonypepe2004@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-2xl transition-all hover:scale-105 shadow-xl shadow-blue-500/25 text-lg"
          >
            <Mail className="w-5 h-5" />
            Inviami un&apos;email
          </a>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center">
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Antonio Pepe &mdash; Ingegnere Informatico
          </p>
        </div>
      </div>
    </section>
  );
}
