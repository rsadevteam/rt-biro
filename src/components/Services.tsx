"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    num: "01",
    title: "Računovodstvo i knjiženje",
    desc: "Vođenje poslovnih knjiga za pravna i fizička lica u skladu sa zakonskim propisima RS — tačno, pouzdano i na vrijeme.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Poresko savjetovanje",
    desc: "Optimizacija poreskih obaveza, priprema prijava i stručno savjetovanje u skladu s važećim poreskim propisima.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Obračun plata i PDV",
    desc: "Precizni obračuni plata, doprinosa i PDV prijava — redovno, bez grešaka i u zakonskim rokovima.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Godišnji obračuni",
    desc: "Izrada godišnjih finansijskih izvještaja i bilansa — sveobuhvatna analiza vašeg poslovanja za proteklu godinu.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Osnivanje preduzeća",
    desc: "Kompletna administrativna i dokumentaciona podrška pri registraciji novog preduzeća ili preduzetnika.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Finansijsko savjetovanje",
    desc: "Stručni savjeti za donošenje poslovnih odluka — analiza troškova, planiranje novčanog toka i finansijska strategija.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-cream overflow-hidden"
    >
      {/* Decorative section number */}
      <div className="absolute right-0 top-0 select-none pointer-events-none overflow-hidden">
        <span className="deco-number" style={{ opacity: 0.035 }}>06</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="reveal flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-forest" />
            <span className="text-xs tracking-[0.3em] uppercase text-forest font-medium">
              Šta nudimo
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="reveal reveal-delay-1 font-serif text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-charcoal max-w-lg">
              Naše{" "}
              <em className="not-italic text-forest">usluge</em>
            </h2>
            <p className="reveal reveal-delay-2 text-muted max-w-sm leading-relaxed text-sm font-light">
              Pružamo sveobuhvatnu finansijsku podršku prilagođenu
              potrebama vašeg poslovanja.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="reveal h-px bg-sand mb-16" />

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-sand">
          {services.map((service, i) => (
            <div
              key={service.num}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} service-card bg-cream p-8 lg:p-10 border border-sand group cursor-default`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted font-medium">
                  {service.num}
                </span>
                <span className="text-muted group-hover:text-forest transition-colors duration-300">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3 leading-snug group-hover:text-forest transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed font-light">
                {service.desc}
              </p>
              <div className="mt-6 h-px w-0 group-hover:w-8 bg-forest transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-sand pt-10">
          <p className="text-muted text-sm font-light max-w-md">
            Nije sigurni koja usluga vam odgovara? Kontaktirajte nas za
            besplatne konsultacije.
          </p>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-3 px-7 py-3.5 border border-charcoal/30 text-charcoal text-sm font-medium tracking-wider uppercase hover:bg-charcoal hover:text-cream hover:border-charcoal transition-all duration-300"
          >
            Kontaktirajte nas
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
