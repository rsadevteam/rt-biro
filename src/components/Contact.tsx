"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="relative bg-charcoal overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-light" />

      <div className="absolute right-0 bottom-0 select-none pointer-events-none overflow-hidden">
        <span className="deco-number deco-number-light" style={{ opacity: 0.04 }}>
          08
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="reveal flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-forest" />
            <span className="text-xs tracking-[0.3em] uppercase text-forest font-medium">
              Stupite u kontakt
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-serif text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-cream max-w-xl">
            Razgovarajmo o
            <br />
            <em className="not-italic text-forest">vašem poslovanju.</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — contact info */}
          <div className="reveal reveal-delay-2">
            <p className="text-cream/60 leading-relaxed mb-12 font-light text-base">
              Svaki poslovni izazov je jedinstven. Kontaktirajte nas za
              besplatnu uvodnu konsultaciju i saznajte kako možemo pomoći
              vašem preduzeću.
            </p>

            <div className="space-y-0 border border-white/10">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Adresa",
                  value: "Karađorđeva 73A",
                  sub: "78250 Laktaši, BiH",
                  href: null,
                  subHref: null,
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.44 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
                    </svg>
                  ),
                  label: "Telefon",
                  value: "+387 65 256 842",
                  href: "tel:+38765256842",
                  sub: "+387 51 532 535",
                  subHref: "tel:+38751532535",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "E-mail",
                  value: "mtbiro@live.com",
                  href: "mailto:mtbiro@live.com",
                  sub: null,
                  subHref: null,
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  label: "Radno vrijeme",
                  value: "Pon – Pet: 08:00 – 16:00",
                  href: null,
                  sub: "Sub – Ned: Zatvoreno",
                  subHref: null,
                },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`flex gap-5 px-6 py-5 ${
                    i < 3 ? "border-b border-white/10" : ""
                  } hover:bg-white/[0.03] transition-colors duration-200`}
                >
                  <div className="text-forest mt-0.5 flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-cream/30 mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="block text-cream text-sm font-medium hover:text-forest transition-colors duration-200">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-cream text-sm font-medium">{item.value}</div>
                    )}
                    {item.sub && (
                      item.subHref ? (
                        <a href={item.subHref} className="block text-cream/50 text-sm font-light hover:text-forest transition-colors duration-200">
                          {item.sub}
                        </a>
                      ) : (
                        <div className="text-cream/50 text-sm font-light">{item.sub}</div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — map */}
          <div className="reveal reveal-delay-3 border border-white/10 overflow-hidden flex flex-col">
            <iframe
              src="https://maps.google.com/maps?q=Karađorđeva+73A,+Laktaši,+Bosnia+and+Herzegovina&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "380px", filter: "grayscale(1) invert(0.9) contrast(0.85)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RT BIRO lokacija"
            />
            <div className="px-6 py-4 flex items-center gap-3 border-t border-white/10 flex-shrink-0">
              <span className="text-forest">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span className="text-cream/40 text-xs tracking-wide">
                Karađorđeva 73A, 78250 Laktaši, BiH
              </span>
              <a
                href="https://maps.google.com/?q=Karađorđeva+73A,+Laktaši,+Bosnia+and+Herzegovina"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs text-forest/70 hover:text-forest transition-colors duration-200 tracking-wide"
              >
                Otvori u Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
