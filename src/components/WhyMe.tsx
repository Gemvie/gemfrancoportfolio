import { Target, Zap, Wrench, Package, ShoppingCart, ArrowRight } from "lucide-react";
import { FadeIn } from "./Section";

const points = [
  {
    icon: Target,
    tag: "01",
    title: "Detail-Obsessed",
    body: "In trading cards, one wrong set name or condition grade destroys buyer trust. I treat every field like it matters, because in high-value catalogs, it does.",
    stat: "~0%",
    statLabel: "Error rate across 200K+ entries",
  },
  {
    icon: Zap,
    tag: "02",
    title: "High Volume, High Speed",
    body: "Bulk operations at scale without cutting corners. 200,000+ listings managed over 3 years using Alpha and Parallel listing methods with tight turnaround.",
    stat: "200K+",
    statLabel: "Listings managed",
  },
  {
    icon: Wrench,
    tag: "03",
    title: "Workflow Builder",
    body: "I don't just enter data. I build the Excel systems, naming conventions, and image libraries that make your whole operation run smoother and faster.",
    stat: "3+",
    statLabel: "Years of SOP execution",
  },
  {
    icon: Package,
    tag: "04",
    title: "Amazon Catalog Management",
    body: "Hands-on experience with Amazon Seller Central. SKU creation, ASIN management, pricing, inventory tracking, and listing health across active catalogs.",
    stat: "SKU",
    statLabel: "Creation & catalog ops",
  },
  {
    icon: ShoppingCart,
    tag: "05",
    title: "Dropshipping & Product Research",
    body: "Sourcing products across AliExpress, CJDropshipping, Walmart, and eBay. Margin analysis, platform listing, and inventory tracking across Shopify, eBay, and Etsy.",
    stat: "Multi",
    statLabel: "Platform experience",
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
          <p className="mt-4 text-muted-foreground max-w-xl text-lg">
            Three years of high-volume eCommerce operations, Amazon catalog work, and
            dropshipping - all remote, all accurate.
          </p>
        </FadeIn>

        {/* ── Top row: 3 cards ── */}
        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {points.slice(0, 3).map((p, i) => (
            <FadeIn key={p.tag} delay={i * 0.08}>
              <Card p={p} />
            </FadeIn>
          ))}
        </div>

        {/* ── Arrow connector ── */}
        <FadeIn delay={0.3}>
          <div className="flex items-center gap-4 my-4 px-2">
            <div className="flex-1 h-px bg-border" />
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-bright/30 bg-accent-bright/5">
              <ArrowRight className="w-3.5 h-3.5 text-accent-bright" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent-bright">
                Also
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-accent-bright" />
            </div>
            <div className="flex-1 h-px bg-border" />
          </div>
        </FadeIn>

        {/* ── Bottom row: 2 wider cards ── */}
        <div className="grid md:grid-cols-2 gap-4">
          {points.slice(3).map((p, i) => (
            <FadeIn key={p.tag} delay={0.35 + i * 0.08}>
              <Card p={p} wide />
            </FadeIn>
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <FadeIn delay={0.5}>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl border border-accent-bright/20 bg-accent-bright/5">
            <div>
              <p className="font-semibold text-lg tracking-tight">
                Open to remote work globally.
              </p>
              <p className="text-sm text-muted-foreground mt-0.5">
                Available on Upwork, OnlineJobs.ph, and direct hire.
              </p>
            </div>
            <a
              href="mailto:gemvie.work@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-bright text-background text-sm font-semibold hover:opacity-90 transition-opacity shrink-0"
            >
              Get in touch
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
      className={`group relative p-7 rounded-2xl border border-border bg-surface/40 h-full flex flex-col gap-5 hover:border-accent-bright/40 hover:bg-surface/60 transition-all duration-200 ${
        wide ? "md:flex-row md:items-start md:gap-8" : ""
      }`}
    >
      {/* Tag */}
      <span className="absolute top-5 right-5 text-xs font-mono text-muted-foreground/50 group-hover:text-accent-bright/50 transition-colors">
        {p.tag}
      </span>

      {/* Icon + stat */}
      <div className={`flex ${wide ? "flex-col shrink-0" : "flex-row items-start"} gap-4`}>
        <div className="w-11 h-11 rounded-xl bg-accent-bright/10 border border-accent-bright/20 text-accent-bright flex items-center justify-center shrink-0 group-hover:bg-accent-bright group-hover:text-background transition-all duration-200">
          <Icon className="w-5 h-5" />
        </div>
        <div className={wide ? "mt-2" : ""}>
          <p className="text-2xl font-bold tracking-tighter text-accent-bright leading-none">
            {p.stat}
          </p>
          <p className="text-xs text-muted-foreground mt-1 leading-tight max-w-[110px]">
            {p.statLabel}
          </p>
        </div>
      </div>

      {/* Text */}
      <div>
        <h3 className="text-lg font-bold tracking-tight mb-2">{p.title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm">{p.body}</p>
      </div>

      {/* Accent bottom border on hover */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-accent-bright scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
    </div>
  );
}