"use client";

import { useEffect, useRef } from "react";

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="relative bg-cream-dark overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Decorative section number */}
      <div className="absolute left-0 top-0 select-none pointer-events-none overflow-hidden">
        <span className="deco-number leading-none" style={{ fontSize: "clamp(8rem, 18vw, 16rem)", opacity: 0.035 }}>
          01
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <div className="reveal flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-forest" />
              <span className="text-xs tracking-[0.3em] uppercase text-forest font-medium">
                O nama
              </span>
            </div>
            <h2 className="reveal reveal-delay-1 font-serif text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-charcoal mb-8">
              Preciznost koja
              <br />
              <em className="not-italic text-forest">gradi povjerenje.</em>
            </h2>
            <p className="reveal reveal-delay-2 text-muted leading-relaxed mb-6 text-base lg:text-lg font-light">
              RT BIRO je osnovan 2008. godine sa jednom jasnom misijom — pružiti
              malim i srednjim preduzećima pouzdanu, transparentnu i profesionalnu
              podršku u vođenju finansija i poslovanja.
            </p>
            <p className="reveal reveal-delay-3 text-muted leading-relaxed mb-10 text-base lg:text-lg font-light">
              Naš vlasnik, Radovan Trninić, donosi višegodišnje iskustvo u
              računovodstvu i poreskom savjetovanju. Svaki klijent za nas nije samo
              broj — to je partnerstvo zasnovano na povjerenju i dugoročnoj
              vrijednosti.
            </p>

            {/* Philosophy quote */}
            <div className="reveal reveal-delay-4 border-l-2 border-forest pl-6 py-2">
              <p className="font-serif text-xl italic text-charcoal leading-relaxed">
                &ldquo;Maksimalna profesionalnost i odgovornost u svakom
                trenutku.&rdquo;
              </p>
              <p className="mt-3 text-xs tracking-[0.2em] uppercase text-muted">
                — Radovan Trninić, Vlasnik
              </p>
            </div>
          </div>

          {/* Right — facts */}
          <div className="reveal reveal-delay-2 lg:pt-16">
            <div className="space-y-0 border border-sand">
              {[
                { label: "Vlasnik", value: "Radovan Trninić" },
                { label: "Osnivanje", value: "2008." },
                { label: "Sjedište", value: "Karađorđeva 73A, Laktaši" },
                { label: "JIB", value: "4512767010007" },
                { label: "Šifra djelatnosti", value: "69.20 — Računovodstvo" },
                { label: "Registar", value: "Republika Srpska" },
                { label: "Status", value: "Aktivan" },
              ].map((fact, i) => (
                <div
                  key={fact.label}
                  className={`flex items-start justify-between gap-4 px-6 py-5 ${
                    i < 6 ? "border-b border-sand" : ""
                  } group hover:bg-cream transition-colors duration-200`}
                >
                  <span className="text-xs tracking-[0.2em] uppercase text-muted font-medium flex-shrink-0 pt-0.5">
                    {fact.label}
                  </span>
                  <span className="text-charcoal text-sm font-medium text-right">
                    {fact.value === "Aktivan" ? (
                      <span className="flex items-center gap-2 justify-end">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-forest" />
                        {fact.value}
                      </span>
                    ) : (
                      fact.value
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Vision */}
            <div className="mt-8 p-6 bg-charcoal text-cream">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
                Vizija
              </div>
              <p className="text-sm leading-relaxed text-cream/80 font-light">
                Postati pouzdan partner za mala i srednja preduzeća u oblasti
                računovodstva i finansija na području Laktaša i šire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
