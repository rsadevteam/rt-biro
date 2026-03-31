"use client";

import { useEffect, useRef } from "react";

const team = [
  {
    initials: "RT",
    name: "Radovan Trninić",
    title: "Vlasnik",
    bio: "Osnivač RT BIRO-a sa višegodišnjim iskustvom u računovodstvu i finansijama.",
    tags: ["Računovodstvo", "Porezno pravo", "Finansijsko planiranje"],
  },
  {
    initials: "MT",
    name: "Milkica Trninić",
    title: "Računovođa & Poreski savjetnik",
    bio: "Stručnjak za obračun plata, PDV i pripremu finansijskih izvještaja. Višegodišnje iskustvo u radu s preduzećima različitih veličina i djelatnosti na području BiH.",
    tags: ["Obračun plata", "PDV", "Finansijski izvještaji"],
  },
  {
    initials: "BK",
    name: "Božana Knežević",
    title: "Računovodstveni asistent",
    bio: "Specijalizovan za administrativnu podršku, vođenje poslovnih knjiga i pripremu dokumentacije za registraciju novih preduzeća i preduzetnika u RS.",
    tags: ["Knjiženje", "Administrativna podrška", "Osnivanje"],
  },
];

export default function Team() {
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
      id="team"
      ref={sectionRef}
      className="relative bg-cream-dark overflow-hidden"
    >
      {/* Decorative section number */}
      <div className="absolute left-0 top-0 select-none pointer-events-none overflow-hidden">
        <span className="deco-number" style={{ opacity: 0.04 }}>03</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="reveal flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-forest" />
            <span className="text-xs tracking-[0.3em] uppercase text-forest font-medium">
              Naš tim
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-serif text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-charcoal">
            Stručnjaci kojima
            <br />
            <em className="not-italic text-forest">možete vjerovati.</em>
          </h2>
        </div>

        {/* Divider */}
        <div className="reveal h-px bg-sand mb-16" />

        {/* Team grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`reveal reveal-delay-${i + 1} group`}
            >
              {/* Avatar */}
              <div className="mb-6 relative">
                <div className="w-20 h-20 bg-charcoal flex items-center justify-center">
                  <span className="font-serif text-2xl font-bold text-cream tracking-wider">
                    {member.initials}
                  </span>
                </div>
                <div className="absolute bottom-0 left-20 w-8 h-px bg-forest" />
              </div>

              {/* Info */}
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-1">
                {member.name}
              </h3>
              <p className="text-[11px] tracking-[0.2em] uppercase text-forest font-medium mb-4">
                {member.title}
              </p>
              <p className="text-muted text-sm leading-relaxed font-light mb-6">
                {member.bio}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 border border-sand text-muted font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
