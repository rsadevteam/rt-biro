"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "O nama" },
  { href: "#services", label: "Usluge" },
  { href: "#team", label: "Tim" },
  { href: "#contact", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm border-b border-sand shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-18 py-5">
        {/* Logo */}
        <a
          href="#"
          className="flex flex-col leading-none group"
          onClick={handleLinkClick}
        >
          <span className="font-serif text-xl font-bold tracking-tight text-charcoal">
            RT BIRO
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted font-light">
            Radovan Trninić s.p.
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link text-sm tracking-wide text-charcoal/80 hover:text-charcoal transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="text-sm font-medium px-5 py-2.5 bg-charcoal text-cream hover:bg-forest transition-colors duration-300 tracking-wide"
          >
            Zakažite konsultacije
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-charcoal transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-charcoal transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-charcoal transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-cream border-b border-sand transition-all duration-400 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 pb-6 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="block py-3 text-base font-medium text-charcoal border-b border-sand/60 last:border-0"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="block text-center py-3 bg-charcoal text-cream text-sm font-medium tracking-wide"
            >
              Zakažite konsultacije
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
