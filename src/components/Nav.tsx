import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => handleClick('#hero')}
          className="flex items-center gap-2 font-bold text-slate-900"
        >
          <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Code2 className="w-4 h-4 text-white" />
          </span>
          <span className="text-sm tracking-widest uppercase">Antonio Pepe</span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleClick(l.href)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 pb-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="block w-full text-left py-3 text-sm font-medium text-slate-700 border-b border-slate-50 last:border-0"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
