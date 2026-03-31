"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "RT BIRO nam je pomogao da u potpunosti uredimo knjiženje i poreske obaveze. Od prvog dana, Radovan i tim su bili izuzetno profesionalni i dostupni za svako pitanje. Napokon imamo mir što se tiče finansija.",
    name: "Nikola Marković",
    role: "Vlasnik"
  },
  {
    quote:
      "Osnivanje moje firme je proteklo bez ikakvog stresa zahvaljujući RT BIRO-u. Sve je urađeno brzo, tačno i uz odličnu komunikaciju. Preporučujem svima koji žele pouzdanog računovodstvenog partnera.",
    name: "Ana Đurić",
    role: "Preduzetnica"
  },
  {
    quote:
      "Sarađujemo godinu dana i zadovoljni smo svakim aspektom usluge. Posebno cijenim što uvijek dobijemo jasna objašnjenja za sve poreske i finansijske obaveze. Stručnost i ljubaznost na visokom nivou.",
    name: "Milenko Savić",
    role: "Direktor"
  },
];

export default function Testimonials() {
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
      id="testimonials"
      ref={sectionRef}
      className="relative bg-cream overflow-hidden"
    >
      {/* Decorative quote mark */}
      <div className="absolute right-8 top-8 select-none pointer-events-none">
        <span
          className="font-serif text-[20rem] font-bold leading-none text-charcoal/[0.03]"
          aria-hidden="true"
        >
          &ldquo;
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="reveal flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-forest" />
            <span className="text-xs tracking-[0.3em] uppercase text-forest font-medium">
              Zadovoljni klijenti
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-serif text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-charcoal max-w-xl">
            Šta klijenti
            <br />
            <em className="not-italic text-forest">kažu o nama.</em>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-0 border border-sand">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${i + 1} p-8 lg:p-10 border-b md:border-b-0 md:border-r border-sand last:border-0 flex flex-col`}
            >
              {/* Quote mark */}
              <div className="mb-6">
                <span className="font-serif text-5xl text-forest leading-none font-bold">
                  &ldquo;
                </span>
              </div>

              {/* Quote text */}
              <blockquote className="font-serif text-lg text-charcoal leading-relaxed italic flex-1 mb-8">
                {t.quote}
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-sand pt-6">
                <p className="font-semibold text-charcoal text-sm mb-0.5">{t.name}</p>
                <p className="text-[11px] tracking-[0.15em] uppercase text-muted">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Rating row */}
        <div className="reveal mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center border-t border-sand pt-10">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#2D6A4F"
                className=""
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <p className="text-muted text-sm font-light">
            Ocijenjeni od strane klijenata · Svi citati su stvarni utisci saradnje
          </p>
        </div>
      </div>
    </section>
  );
}
