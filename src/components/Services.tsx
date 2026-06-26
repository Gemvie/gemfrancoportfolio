import { Layers, Boxes, ShoppingCart, Search, Database } from "lucide-react";
import { FadeIn } from "./Section";

const services = [
  {
    num: "01",
    icon: Layers,
    title: "Trading Card & Collectibles",
    headline: "Specialized trading card catalog work.",
    body: "Experienced in Pokémon, Magic: The Gathering, Yu-Gi-Oh!, sports cards, graded slabs, and non-sports collectibles. I manage set names, card numbers, conditions, grades, variants, foils, parallels, and SKU details with clean, accurate structure.",
    tags: ["Pokémon TCG", "MTG", "Sports Cards", "Graded Cards", "SKU Management", "Variant Mapping", "Parallel Editions"],
    featured: true,
  },
  {
    num: "02",
    icon: Boxes,
    title: "Non-TCG Catalog Operations",
    headline: "Clean catalog systems beyond cards.",
    body: "Structured product catalogs for collectibles, merchandise, and non-TCG items using organized Excel workflows, bulk listing methods, image folders, inventory tracking, and repeatable processes built for speed and consistency.",
    tags: ["Catalog Management", "Excel Advanced", "Image Organization", "Alpha Tool", "Parallel Tool", "Inventory Tracking"],
    featured: false,
  },
  {
    num: "03",
    icon: ShoppingCart,
    title: "Amazon Catalog & Dropshipping",
    headline: "Marketplace listings from setup to scale.",
    body: "Hands-on experience with Amazon Seller Central, SKU creation, ASIN management, pricing, inventory tracking, and listing health. Also skilled in product sourcing, margin checks, and multi-platform catalog management across Shopify, eBay, and Michaels.",
    tags: ["Amazon Seller Central", "SKU Creation", "ASIN Management", "Product Sourcing", "Margin Analysis", "Shopify", "eBay", "Michaels"],
    featured: true,
  },
  {
    num: "04",
    icon: Search,
    title: "SEO & Organic Growth",
    headline: "Optimized listings that get found.",
    body: "Keyword research, competitor analysis, on-page optimization, and product content improvements designed to improve search visibility, rankings, and organic traffic for eCommerce and content-driven websites.",
    tags: ["Keyword Research", "On-Page SEO", "Competitor Analysis", "Traffic Strategy", "Google Rankings"],
    featured: false,
  },
  {
    num: "05",
    icon: Database,
    title: "Data Entry & QA",
    headline: "High-volume accuracy with clean QA.",
    body: "Reliable data entry for product listings, spreadsheets, inventory systems, and asset organization. Every workflow is built around accuracy, consistency, validation, and smooth SOP execution at scale.",
    tags: ["Bulk Data Entry", "Excel Workflows", "Inventory Tracking", "QA Validation", "Asset Management", "SOP Execution"],
    featured: false,
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-accent-bright mb-4">
            01 — What I Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter max-w-2xl">
            Services built around{" "}
            <span className="text-foreground/50">precision and scale.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl text-lg">
           Five focused service areas covering catalog operations, marketplace listings, SEO, and high-volume data accuracy.
          </p>
        </FadeIn>

        {/* ── Grid ── */}
        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            // Last item (odd count) spans full width on desktop
            const isLast = i === services.length - 1;
            return (
              <FadeIn
                key={s.num}
                delay={i * 0.07}
                className={isLast ? "md:col-span-2" : ""}
              >
                <div className="group relative h-full p-8 rounded-2xl border border-border bg-surface/40 hover:bg-surface hover:border-accent-bright/40 transition-all duration-300 overflow-hidden flex flex-col gap-5">

                  {/* Number tag */}
                  <span className="absolute top-6 right-7 text-xs font-mono text-muted-foreground/40 group-hover:text-accent-bright/50 transition-colors">
                    {s.num}
                  </span>

                  {/* Icon row */}
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-accent-bright/10 border border-accent-bright/20 flex items-center justify-center text-accent-bright group-hover:bg-accent-bright group-hover:text-background transition-colors duration-200 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      {s.title}
                    </p>
                  </div>

                  {/* Headline + body */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">
                      {s.headline}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {s.body}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-background/60 border border-border text-foreground/70 group-hover:border-accent-bright/20 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Accent slide-in line */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-accent-bright scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}