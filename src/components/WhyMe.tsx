import {
  Target,
  Zap,
  Wrench,
  Package,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import { FadeIn } from "./Section";

const points = [
  {
    icon: Target,
    tag: "01",
    title: "Accuracy-First Mindset",
    body: "In collectible catalogs, one wrong set name, card number, or condition grade can damage buyer trust. I treat every field with care because accuracy is the foundation of high-value listings.",
    stat: "<0.1%",
    statLabel: "Error rate target across catalog work",
  },
  {
    icon: Zap,
    tag: "02",
    title: "Built for High Volume",
    body: "Experienced in managing 200,000+ listings across fast-moving catalog workflows, using structured Alpha and Parallel methods while keeping turnaround tight and quality consistent.",
    stat: "200K+",
    statLabel: "Listings managed",
  },
  {
    icon: Wrench,
    tag: "03",
    title: "Workflow Optimization",
    body: "Beyond data entry, I build clean Excel systems, naming rules, image libraries, and repeatable SOPs that help catalog operations move faster with fewer mistakes.",
    stat: "3+",
    statLabel: "Years of SOP execution",
  },
  {
    icon: Package,
    tag: "04",
    title: "Amazon Catalog Operations",
    body: "Hands-on Amazon Seller Central experience covering SKU creation, ASIN management, pricing checks, inventory tracking, listing health, and catalog maintenance.",
    stat: "SKU",
    statLabel: "Creation & catalog ops",
  },
  {
    icon: ShoppingCart,
    tag: "05",
    title: "Marketplace Product Research",
    body: "Experienced with product sourcing, margin checks, platform listings, and inventory tracking across AliExpress, CJDropshipping, Walmart, eBay, Shopify, and Michaels.",
    stat: "5+",
    statLabel: "Platforms worked across",
  },
];

export function WhyMe() {
  return (
    <section id="why" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-accent-bright mb-4">
            03 — Why Hire Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter max-w-3xl">
            Reliable catalog support built for speed, scale, and accuracy.
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Three years of remote eCommerce operations across trading card
            catalogs, Amazon workflows, product research, and structured data QA.
          </p>
        </FadeIn>

        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {points.slice(0, 3).map((p, i) => (
            <FadeIn key={p.tag} delay={i * 0.08}>
              <Card p={p} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="flex items-center gap-4 my-5 px-2">
            <div className="flex-1 h-px bg-border/70" />
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-bright/30 bg-accent-bright/5">
              <ArrowRight className="w-3.5 h-3.5 text-accent-bright" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent-bright">
                More Support
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-accent-bright" />
            </div>
            <div className="flex-1 h-px bg-border/70" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4">
          {points.slice(3).map((p, i) => (
            <FadeIn key={p.tag} delay={0.35 + i * 0.08}>
              <Card p={p} wide />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-6 md:p-7 rounded-2xl border border-accent-bright/20 bg-accent-bright/5">
            <div>
              <p className="font-semibold text-xl tracking-tight">
                Open to remote eCommerce and catalog roles.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Available through Upwork, OnlineJobs.ph, or direct hire.
              </p>
            </div>

            <a
              href="mailto:gemvie.work@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-bright text-background text-sm font-semibold hover:opacity-90 transition-opacity shrink-0"
            >
              Let's Work Together
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

type Point = (typeof points)[number];

function Card({ p, wide = false }: { p: Point; wide?: boolean }) {
  const Icon = p.icon;

  return (
    <div
      className={`group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/40 p-7 transition-all duration-300 hover:border-accent-bright/40 hover:bg-surface/70 ${
        wide ? "md:flex md:items-start md:gap-8" : "flex flex-col gap-6"
      }`}
    >
      <span className="absolute top-5 right-5 text-xs font-mono text-muted-foreground/40 group-hover:text-accent-bright/60 transition-colors">
        {p.tag}
      </span>

      <div
        className={`flex ${
          wide ? "shrink-0 flex-col gap-4 min-w-[130px]" : "items-start gap-4"
        }`}
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-bright/20 bg-accent-bright/10 text-accent-bright transition-all duration-300 group-hover:bg-accent-bright group-hover:text-background">
          <Icon className="h-5 w-5" />
        </div>

        <div>
          <p className="text-3xl font-bold leading-none tracking-tighter text-accent-bright">
            {p.stat}
          </p>
          <p className="mt-1.5 max-w-[130px] text-xs leading-tight text-muted-foreground">
            {p.statLabel}
          </p>
        </div>
      </div>

      <div className={wide ? "pt-1" : ""}>
        <h3 className="mb-2.5 text-xl font-bold tracking-tight">{p.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {p.body}
        </p>
      </div>

      <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 rounded-full bg-accent-bright transition-transform duration-300 group-hover:scale-x-100" />
    </div>
  );
}