export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cream flex flex-col justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Decorative large year */}
      <div className="absolute right-0 bottom-0 translate-x-8 translate-y-4 select-none pointer-events-none">
        <span className="deco-number" style={{ fontSize: "clamp(10rem, 28vw, 24rem)" }}>
          RT
        </span>
      </div>

      {/* Thin vertical rule */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sand to-transparent ml-6 lg:ml-12 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-forest" />
          <span className="text-xs tracking-[0.3em] uppercase text-forest font-medium">
            Računovodstvo &amp; Finansije · Laktaši, BiH
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.02] tracking-tight text-charcoal max-w-4xl mb-8"
          style={{ animationFillMode: "both" }}
        >
          Pouzdani
          <br />
          partner u{" "}
          <em className="not-italic text-forest">vođenju</em>
          <br />
          vaših finansija.
        </h1>

        {/* Subtext */}
        <p className="text-lg text-muted max-w-xl leading-relaxed mb-12 font-light">
          Stručna podrška u računovodstvu, poreskom savjetovanju i
          finansijskom planiranju — za mala i srednja preduzeća u
          Republici Srpskoj i šire.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-charcoal text-cream text-sm font-medium tracking-widest uppercase hover:bg-forest transition-colors duration-400 group"
          >
            Zakažite konsultacije
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-charcoal/30 text-charcoal text-sm font-medium tracking-widest uppercase hover:border-forest hover:text-forest transition-colors duration-300"
          >
            Naše usluge
          </a>
        </div>

        {/* Bottom info bar */}
        <div className="mt-20 pt-8 border-t border-sand flex flex-col sm:flex-row gap-6 sm:gap-12">
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted mb-1">Osnovano</div>
            <div className="font-serif text-lg font-semibold text-charcoal">2008.</div>
          </div>
          <div className="h-px w-px bg-sand self-stretch hidden sm:block" />
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted mb-1">Sjedište</div>
            <div className="font-serif text-lg font-semibold text-charcoal">Laktaši, BiH</div>
          </div>
          <div className="h-px w-px bg-sand self-stretch hidden sm:block" />
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted mb-1">Status</div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-forest" />
              <span className="font-serif text-lg font-semibold text-charcoal">Aktivan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
