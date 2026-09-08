import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useScrolled, useActiveSection } from '../hooks/useScroll';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Our Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const sectionIds = links.map((l) => l.href.replace('#', ''));

export default function Navbar() {
  const scrolled = useScrolled(32);
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(22,21,15,0.08)]' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex items-center justify-between h-20">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
          className="font-display text-[22px] tracking-tight text-ink"
        >
          Book Matrix
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="relative text-[13.5px] font-medium text-ink/75 hover:text-ink transition-colors duration-300 py-1"
              >
                {link.label}
                {active === link.href.replace('#', '') && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-brass"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
          className="hidden md:inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ink border-b border-brass pb-0.5 hover:gap-2.5 transition-all duration-300"
        >
          Book a Free Consultation
          <ArrowUpRight size={15} className="text-brass" />
        </a>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden bg-ivory border-t border-ivory-rule"
          >
            <ul className="container-page py-6 flex flex-col gap-5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="text-[17px] font-medium text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
                  className="btn-primary w-full"
                >
                  Book a Free Consultation
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
