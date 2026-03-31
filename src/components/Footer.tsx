const navLinks = [
  { href: "#about", label: "O nama" },
  { href: "#services", label: "Usluge" },
  { href: "#team", label: "Tim" },
  { href: "#contact", label: "Kontakt" },
];

const services = [
  "Računovodstvo i knjiženje",
  "Poresko savjetovanje",
  "Obračun plata i PDV",
  "Godišnji obračuni",
  "Osnivanje preduzeća",
  "Finansijsko savjetovanje",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-light border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex flex-col leading-none mb-6 group">
              <span className="font-serif text-xl font-bold text-cream tracking-tight">
                RT BIRO
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-cream/30 font-light mt-0.5">
                Radovan Trninić s.p.
              </span>
            </a>
            <p className="text-cream/40 text-sm leading-relaxed font-light mb-6 max-w-xs">
              Profesionalne računovodstvene i finansijske usluge u Laktašima i
              cijeloj Republici Srpskoj.
            </p>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 border border-white/10 px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-forest" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-cream/40">
                Aktivan · 2008 –{" "}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-cream/30 mb-6 font-medium">
              Navigacija
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/50 hover:text-cream transition-colors duration-200 font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-cream/30 mb-6 font-medium">
              Usluge
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-cream/50 hover:text-cream transition-colors duration-200 font-light"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-cream/30 mb-6 font-medium">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="text-sm text-cream/50 font-light leading-relaxed">
                Karađorđeva 73A
                <br />
                78250 Laktaši, BiH
              </li>
              <li>
                <a
                  href="tel:+38765256842"
                  className="text-sm text-cream/50 hover:text-cream transition-colors duration-200 font-light"
                >
                  +387 65 256 842
                </a>
              </li>
              <li>
                <a
                  href="tel:+38751532535"
                  className="text-sm text-cream/50 hover:text-cream transition-colors duration-200 font-light"
                >
                  +387 51 532 535
                </a>
              </li>
              <li>
                <a
                  href="mailto:mtbiro@live.com"
                  className="text-sm text-cream/50 hover:text-cream transition-colors duration-200 font-light"
                >
                  mtbiro@live.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/20 text-xs font-light tracking-wide">
            © {year} RT BIRO – Radovan Trninić s.p. Sva prava zadržana.
          </p>
          <p className="text-cream/20 text-xs font-light tracking-wide">
            Dizajn &amp; razvoj:{" "}
            <a
              href="https://rsateam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream/50 transition-colors duration-200"
            >
              RSA Team
            </a>
          </p>
          <p className="text-cream/20 text-xs font-light tracking-wide">
            JIB: 4512767010007 · Šifra djelatnosti: 69.20
          </p>
        </div>
      </div>
    </footer>
  );
}
