import { Target, Zap, Wrench } from "lucide-react";
import { FadeIn } from "./Section";

const points = [
  {
    icon: Target,
    title: "Detail-Obsessed",
    body: "In trading cards, one wrong set name or condition grade can destroy buyer trust. I treat every field like it matters - because it does.",
  },
  {
    icon: Zap,
    title: "High Volume, High Speed",
    body: "I've handled bulk operations at scale - 200K+ listings - while maintaining accuracy and meeting tight deadlines.",
  },
  {
    icon: Wrench,
    title: "Workflow Builder",
    body: "I don't just enter data. I build the Excel systems, naming conventions, and image libraries that make your whole operation run smoother.",
  },
];

export function WhyMe() {
  return (
    <section id="why" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-accent-bright mb-4">
            03 — Why Hire Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter max-w-2xl">
            What you actually get when we work together.
          </h2>
        </FadeIn>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-border bg-surface/40 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent-bright text-background flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-3">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
