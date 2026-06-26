import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./Section";

const stats = [
  {
    id: "listings",
    value: "200K+",
    label: "Product Listings Managed",
    sub: "Across Trading Card Catalogs",
  },
  {
    id: "years",
    value: "3+",
    label: "Years in eCommerce Data Ops",
    sub: "Professional eCommerce Operations",
  },
  {
    id: "error",
    value: "<0.1%",
    label: "Error Rate",
    sub: "Across all catalog work",
  },
  {
    id: "platforms",
    value: "5+",
    label: "Platforms Worked Across",
    sub: "eBay · Amazon · Shopify · Etsy · TCG tools",
  },
];

// ── Reusable count-up hook ────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, threshold = 0.4) {
  const [count, setCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const startTime = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(animate);
          else setFinished(true);
        };
        requestAnimationFrame(animate);
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, threshold]);

  return { ref, count, finished };
}

// ── Animated stat values ─────────────────────────────────────────────────────
function Stat200K() {
  const { ref, count, finished } = useCountUp(200000, 2200);
  return (
    <p ref={ref} className="text-5xl md:text-6xl font-bold tracking-tighter text-accent-bright">
      {finished ? "200K+" : count.toLocaleString()}
    </p>
  );
}

function StatYears() {
  const { ref, count, finished } = useCountUp(3, 1200);
  return (
    <p ref={ref} className="text-5xl md:text-6xl font-bold tracking-tighter text-accent-bright">
      {finished ? "3+" : `${count}+`}
    </p>
  );
}

function StatPlatforms() {
  const { ref, count, finished } = useCountUp(5, 1000);
  return (
    <p ref={ref} className="text-5xl md:text-6xl font-bold tracking-tighter text-accent-bright">
      {finished ? "5+" : `${count}+`}
    </p>
  );
}

function StatStatic({ value }: { value: string }) {
  return (
    <p className="text-5xl md:text-6xl font-bold tracking-tighter text-accent-bright">
      {value}
    </p>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export function Stats() {
  return (
    <section className="relative py-24 px-6 border-y border-border bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <FadeIn key={s.id} delay={i * 0.08}>
            <div className="group">
              {s.id === "listings"   && <Stat200K />}
              {s.id === "years"      && <StatYears />}
              {s.id === "error"      && <StatStatic value={s.value} />}
              {s.id === "platforms"  && <StatPlatforms />}

              <p className="mt-3 text-sm font-medium text-foreground leading-snug">
                {s.label}
              </p>
              <p className="mt-1 text-xs text-muted-foreground leading-snug">
                {s.sub}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}