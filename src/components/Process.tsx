"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Konsultacija",
    desc: "Besplatni uvodni razgovor u kojem analiziramo vaše potrebe, veličinu poslovanja i ciljeve.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Analiza",
    desc: "Detaljni pregled vaše finansijske dokumentacije i poslovnih procesa radi identifikacije prioriteta.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Implementacija",
    desc: "Uspostavljanje sistema vođenja knjiga, priprema dokumentacije i postavljanje toka saradnje.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Podrška",
    desc: "Kontinuirana stručna podrška, redovne konsultacije i ažuriranje u skladu s promjenama zakona.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function Process() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-cream overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <div className="reveal flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-forest" />
            <span className="text-xs tracking-[0.3em] uppercase text-forest font-medium">
              Kako radimo
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="reveal reveal-delay-1 font-serif text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-charcoal max-w-md">
              Proces{" "}
              <em className="not-italic text-forest">saradnje</em>
            </h2>
            <p className="reveal reveal-delay-2 text-muted max-w-sm text-sm leading-relaxed font-light">
              Četiri jasna koraka od prvog kontakta do dugoročnog
              partnerstva.
            </p>
          </div>
        </div>

        {/* Steps — desktop horizontal, mobile vertical */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${i + 1} relative`}
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+36px)] right-0 h-px bg-sand" />
              )}

              <div className="lg:pr-8">
                {/* Step indicator */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 border border-sand flex items-center justify-center text-muted group-hover:border-forest transition-colors duration-300 relative bg-cream z-10">
                    {step.icon}
                  </div>
                  <span className="font-serif text-2xl font-bold text-charcoal/10">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed font-light">
                  {step.desc}
                </p>

                {/* Forest accent bar */}
                <div className="mt-6 h-px w-8 bg-forest" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-20 p-8 lg:p-10 bg-charcoal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl font-semibold text-cream mb-2">
              Spremi za početak?
            </p>
            <p className="text-cream/50 text-sm font-light">
              Zakažite besplatnu uvodnu konsultaciju već danas.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-3 px-7 py-3.5 bg-forest text-cream text-sm font-medium tracking-wider uppercase hover:bg-forest-light transition-colors duration-300"
          >
            Počnite danas
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
