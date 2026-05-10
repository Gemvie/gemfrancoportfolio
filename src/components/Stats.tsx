import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./Section";

const stats = [
  { value: "200K+", label: "Product Listings Managed" },
  { value: "2", label: "Listing Categories (TCG + Non-TCG)" },
  { value: "3+", label: "Years in eCommerce Data Ops" },
  { value: "100%", label: "Remote & Self-Managed" },
];

function CountUp200K() {
  const [count, setCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;

        const duration = 2000;
        const target = 200000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);

          const currentValue = Math.floor(eased * target);

          setCount(currentValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setFinished(true);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className="text-5xl md:text-6xl font-bold tracking-tighter text-accent-bright"
    >
      {finished ? "200K+" : count.toLocaleString()}
    </p>
  );
}

export function Stats() {
  return (
    <section className="relative py-24 px-6 border-y border-border bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.08}>
            <div>
              {s.value === "200K+" ? (
                <CountUp200K />
              ) : (
                <p className="text-5xl md:text-6xl font-bold tracking-tighter text-accent-bright">
                  {s.value}
                </p>
              )}

              <p className="mt-3 text-sm text-muted-foreground leading-snug">
                {s.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}