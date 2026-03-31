"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  sub: string;
}

const stats: Stat[] = [
  {
    value: 50,
    suffix: "+",
    label: "Klijenata",
    sub: "Uspješno opsluženih",
  },
  {
    value: 18,
    suffix: "+",
    label: "Godina iskustva",
    sub: "Stručnog rada u struci",
  },
  {
    value: 3,
    suffix: "",
    label: "Eksperta",
    sub: "U timu za vašu podršku",
  },
];

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [started, target, duration]);

  return count;
}

function StatItem({ stat, started }: { stat: Stat; started: boolean }) {
  const count = useCountUp(stat.value, 2200, started);

  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-8 lg:px-0 py-12 lg:py-0 border-b lg:border-b-0 lg:border-r border-white/10 last:border-0">
      <div className="font-serif text-7xl lg:text-8xl xl:text-9xl font-bold text-cream leading-none tracking-tight mb-3">
        {count}
        <span className="text-forest text-5xl lg:text-6xl xl:text-7xl">{stat.suffix}</span>
      </div>
      <div className="text-lg font-semibold text-cream mb-1 tracking-wide">
        {stat.label}
      </div>
      <div className="text-xs tracking-[0.2em] uppercase text-cream/40 font-light">
        {stat.sub}
      </div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          entry.target.querySelectorAll(".reveal").forEach((el) => {
            el.classList.add("visible");
          });
        }
      });
    },
    [started]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.25,
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [handleIntersect]);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative bg-charcoal overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-light" />

      {/* Decorative large number */}
      <div className="absolute right-0 bottom-0 select-none pointer-events-none overflow-hidden">
        <span
          className="deco-number deco-number-light"
          style={{ opacity: 0.04, fontSize: "clamp(10rem, 30vw, 26rem)" }}
        >
          18
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="reveal flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-forest" />
            <span className="text-xs tracking-[0.3em] uppercase text-forest font-medium">
              Naši rezultati
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-serif text-3xl lg:text-4xl font-bold text-cream max-w-lg leading-snug">
            Brojke koje govore
            <br />
            <em className="not-italic text-forest">za sebe.</em>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid lg:grid-cols-3 gap-0">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} started={started} />
          ))}
        </div>

        {/* Bottom rule */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center">
          <p className="text-cream/40 text-xs tracking-[0.15em] uppercase">
            RT BIRO – Radovan Trninić s.p. · Laktaši, BiH
          </p>
          <p className="text-cream/40 text-xs tracking-[0.15em] uppercase">
            JIB: 4512767010007
          </p>
        </div>
      </div>
    </section>
  );
}
