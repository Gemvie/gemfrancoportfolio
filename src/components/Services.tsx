import { Layers, Boxes, ShoppingCart, Search, Database } from "lucide-react";
import { FadeIn } from "./Section";

const services = [
  {
    num: "01",
    icon: Layers,
    title: "Trading Card & Collectibles",
    headline: "I speak the language of trading cards.",
    body: "From Pokémon, Magic: The Gathering, Yu-Gi-Oh!, and sports cards to graded slabs and non-sports collectibles. I've managed 200,000+ SKUs across high-volume eCommerce catalogs. Set names, card numbers, conditions, grades, variants, foils, parallels, every field clean, every detail right.",
    tags: ["Pokémon TCG", "MTG", "Sports Cards", "Graded Cards", "SKU Management", "Variant Mapping", "Parallel Editions"],
    featured: true,
  },
  {
    num: "02",
    icon: Boxes,
    title: "Non-TCG Catalog Operations",
    headline: "Full catalog ops beyond trading cards.",
    body: "General collectibles, merchandise, and non-TCG product catalogs handled at scale. Structured Excel workflows, bulk listing pipelines using Alpha and Parallel methods, and image library organization built for speed and consistency.",
    tags: ["Catalog Management", "Excel (Advanced)", "Image Organization", "Alpha Tool", "Parallel Tool", "Inventory Tracking"],
    featured: false,
  },
  {
    num: "03",
    icon: ShoppingCart,
    title: "Amazon Catalog & Dropshipping",
    headline: "End-to-end Amazon and dropshipping operations.",
    body: "Hands-on Amazon Seller Central experience, SKU creation, ASIN management, pricing, inventory tracking, and listing health monitoring. On the dropshipping side: product sourcing across AliExpress, CJDropshipping, Walmart, and eBay with margin analysis and multi-platform catalog management across Shopify, eBay, and Etsy.",
    tags: ["Amazon Seller Central", "SKU Creation", "ASIN Management", "Product Sourcing", "Margin Analysis", "Shopify", "eBay", "Etsy"],
    featured: true,
  },
  {
    num: "04",
    icon: Search,
    title: "SEO & Organic Growth",
    headline: "Rank higher. Get found. Sell more.",
    body: "Keyword research, competitor analysis, and on-page optimization that moves your site up in Google rankings and drives organic traffic without paid ads. Applied across eCommerce and content-driven websites.",
    tags: ["Keyword Research", "On-Page SEO", "Competitor Analysis", "Traffic Strategy", "Google Rankings"],
    featured: false,
  },
  {
    num: "05",
    icon: Database,
    title: "Data Entry & QA",
    headline: "Accuracy at scale, every time.",
    body: "Reliable, high-volume data entry for eCommerce and collectibles businesses. Spreadsheet management, inventory tracking, structured product listings, and asset organization every workflow built for speed, consistency, and near-zero errors across the board.",
    tags: ["Bulk Data Entry", "Excel Workflows", "Inventory Tracking", "QA & Validation", "Asset Management", "SOP Execution"],
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
            Five core areas covering the full eCommerce data stack from
            trading card catalogs to Amazon operations and organic growth.
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