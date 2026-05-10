import { Layers, Boxes, Search, Play } from "lucide-react";
import { FadeIn } from "./Section";

const services = [
  {
    icon: Layers,
    headline: "I speak the language of Trading Cards.",
    title: "Trading Card & Collectibles Data",
    body: "From Pokémon, Magic: The Gathering, Yu-Gi-Oh!, sports cards, to non-sports collectibles — I've managed 200,000+ SKUs across high-volume eCommerce catalogs. I know how to structure card data: set names, card numbers, conditions, grades, variants, foils, parallel editions, and more. Every listing clean. Every detail right.",
    tags: ["Pokémon TCG", "MTG", "Sports Cards", "Graded Cards", "Bulk Listing", "SKU Management", "Variant Mapping"],
  },
  {
    icon: Boxes,
    headline: "Not just cards — full catalog operations.",
    title: "Non-TCG eCommerce Listings",
    body: "Beyond trading cards, I handle general collectibles, merchandise, and non-TCG product catalogs. Structured Excel workflows, image organization, and bulk listing pipelines that scale without breaking down.",
    tags: ["Catalog Management", "Excel (Advanced)", "Image Organization", "Alpha Tool", "Parallel Tool", "Inventory Tracking"],
  },
  {
    icon: Search,
    headline: "Rank higher. Get found. Sell more.",
    title: "SEO & Organic Growth",
    body: "Keyword research, competitor analysis, and on-page optimization that moves your website up in Google rankings and drives organic traffic without paid ads.",
    tags: ["Keyword Research", "On-Page SEO", "Competitor Analysis", "Traffic Strategy"],
  },
  {
    icon: Play,
    headline: "Content is next.",
    title: "Content Creation",
    soon: true,
    body: "Currently building short-form video content for TikTok — reviewing and promoting AI tools as an affiliate creator. Video editing in CapCut & After Effects. Launching soon.",
    tags: ["CapCut", "TikTok", "AI Affiliate", "Short-Form Video"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-accent-bright mb-4">
            01 — What I Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter max-w-2xl">
            Services built around{" "}
            <span className="text-foreground/50">precision and scale.</span>
          </h2>
        </FadeIn>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="group h-full p-8 rounded-2xl border border-border bg-surface/40 hover:bg-surface hover:border-accent-bright/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent-bright/10 border border-accent-bright/20 flex items-center justify-center text-accent-bright group-hover:bg-accent-bright group-hover:text-background transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    {s.soon && (
                      <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-accent-bright/10 text-accent-bright border border-accent-bright/30">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                    {s.title}
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">
                    {s.headline}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {s.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-background/60 border border-border text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
