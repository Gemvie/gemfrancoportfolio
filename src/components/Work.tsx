import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";
import {
  TrendingUp,
  Search,
  Target,
  BarChart3,
  X,
  Sparkles,
  CheckCircle,
  Copy,
  Package,
  ShoppingCart,
} from "lucide-react";

import { FadeIn } from "./Section";
import { TitleBuilder } from "./TitleBuilder";
import { AmazonTracker } from "./AmazonTracker";

import cardFront from "@/assets/card-front.png";
import cardBack from "@/assets/card-back.png";
import cardFront1 from "@/assets/card-front1.png";
import cardBack1 from "@/assets/card-back1.png";

const listingData = [
  { label: "Player Name", value: "DK Metcalf" },
  { label: "Year", value: "2021" },
  { label: "Product", value: "Donruss Optic Downtown" },
  { label: "Rarity", value: "SSP (Super Short Print)" },
  { label: "Parallel", value: "Lazer Prizm" },
  { label: "Card Number", value: "#DT32" },
  { label: "Team", value: "Seattle Seahawks" },
  { label: "Grade", value: "PSA 10 — GEM MINT" },
];

const listingTitle =
  "DK METCALF 2021 DONRUSS OPTIC DOWNTOWN SSP LAZER PRIZM #DT32 PSA 10";

const listingData1 = [
  { label: "Character Name", value: "Ethan's Ho-Oh ex" },
  { label: "Year", value: "2025" },
  { label: "Product", value: "Pokemon Scarlet & Violet" },
  { label: "Rarity", value: "Special Illustration Rare" },
  { label: "Card Number", value: "230/182" },
  { label: "Grade", value: "PSA 10 — GEM MINT" },
];

const listingTitle1 =
  "ETHAN'S HO-OH EX 2025 POKEMON S&V SPECIAL ILLUSTRATION RARE #230/182 PSA 10";

const seoData = [
  { month: "Jan", traffic: 1200 },
  { month: "Feb", traffic: 1450 },
  { month: "Mar", traffic: 1900 },
  { month: "Apr", traffic: 2400 },
  { month: "May", traffic: 3100 },
  { month: "Jun", traffic: 4200 },
  { month: "Jul", traffic: 5600 },
  { month: "Aug", traffic: 7100 },
];

const tabs = [
  { id: "tcg", label: "Trading Card Listings" },
  { id: "seo", label: "SEO Work" },
  { id: "dataentry", label: "Data Entry" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function Work() {
  const [active, setActive] = useState<TabId>("tcg");

  return (
    <section id="work" className="relative py-32 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-accent-bright mb-4">
            02 — My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Real catalogs. Real numbers.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-2 p-1.5 rounded-full border border-border bg-background/60 w-fit">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  active === t.id
                    ? "bg-accent-bright text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              {active === "tcg" && <TCGTab />}
              {active === "seo" && <SEOTab />}
              {active === "dataentry" && <DataEntryTab />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-background/60">
      <p className="text-3xl md:text-4xl font-bold tracking-tighter text-accent-bright">
        {value}
      </p>

      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

// ─── TCG TAB ────────────────────────────────────────────────────────────────

function TCGTab() {
  const [zoomed, setZoomed] = useState<null | {
    src: string;
    label: string;
  }>(null);

  const [example, setExample] = useState<"sports" | "pokemon">("sports");
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const currentData = example === "sports" ? listingData : listingData1;
  const currentTitle = example === "sports" ? listingTitle : listingTitle1;
  const currentImages =
    example === "sports"
      ? [
          { src: cardFront, label: "Front" },
          { src: cardBack, label: "Back" },
        ]
      : [
          { src: cardFront1, label: "Front" },
          { src: cardBack1, label: "Back" },
        ];
  const currentBadges =
    example === "sports"
      ? ["Sold Listing", "PSA 10", "eBay Optimized", "SSP Identified Correctly"]
      : ["High-Demand Pokémon", "PSA 10", "Special Illustration Rare", "Search Optimized"];

  return (
    <div className="space-y-16">
      {/* ── Stats ── */}
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard value="200,000+" label="Listings Managed" />
        <StatCard value="TCG + Non-TCG" label="Trading Cards & Collectibles" />
        <StatCard value="3+ Years" label="Zero Tolerance for Errors" />
      </div>

      {/* ── Real Listing Example ── */}
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-accent-bright mb-3">
          Real Listing Example
        </p>

        <h3 className="text-2xl md:text-3xl font-bold tracking-tighter">
          Here's exactly how I structure a high-value graded card listing.
        </h3>

        <div className="flex items-center gap-4 mb-8 pt-3">
          <div className="flex-1 h-px bg-border" />
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-accent-bright/30 bg-accent-bright/5">
            <Sparkles className="w-3.5 h-3.5 text-accent-bright" />
            <span className="text-xs font-mono uppercase tracking-widest text-accent-bright">
              Built for Marketplace Accuracy
            </span>
            <Sparkles className="w-3.5 h-3.5 text-accent-bright" />
          </div>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Example switcher */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: "sports", label: "Example 01 · Sports Card" },
            { id: "pokemon", label: "Example 02 · Pokémon Card" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setExample(tab.id as "sports" | "pokemon")}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                example === tab.id
                  ? "bg-accent-bright text-background"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          {/* Images */}
          <div className="rounded-2xl border border-border bg-gradient-to-br from-surface to-background p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-4">
              {currentImages.map((img) => (
                <div key={img.label} className="space-y-2">
                  <button
                    onClick={() => setZoomed(img)}
                    className="block w-full aspect-[3/4] rounded-xl overflow-hidden bg-background shadow-2xl ring-1 ring-border hover:ring-accent-bright/60 transition-all hover:scale-[1.02]"
                  >
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </button>
                  <p className="text-center text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {img.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Listing breakdown */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-border bg-background/60 overflow-hidden">
              <div className="px-6 py-4 border-b border-border bg-surface/40 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-bright" />
                <h4 className="text-xs font-mono uppercase tracking-widest">
                  Listing Breakdown
                </h4>
              </div>
              <div className="p-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-bright/20 bg-accent-bright/5 mb-5">
                  <CheckCircle className="w-4 h-4 text-accent-bright" />
                  <span className="text-xs font-medium">
                    Structured for collector search behavior
                  </span>
                </div>
              </div>
              <div className="divide-y divide-border">
                {currentData.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr]"
                  >
                    <div className="px-5 py-3 text-xs sm:text-sm text-muted-foreground bg-surface/20">
                      {row.label}
                    </div>
                    <div className="px-5 py-3 text-sm font-medium font-mono">
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Copy box */}
            <div className="rounded-xl border-2 border-accent-bright/60 bg-accent-bright/5 p-5 glow-accent">
              <div className="flex items-center justify-between gap-4 mb-3">
                <p className="text-[10px] font-mono uppercase tracking-widest text-accent-bright">
                  Copy-Ready Listing Title
                </p>
                <button
                  onClick={() => handleCopy(currentTitle, example)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-accent-bright/30 text-xs font-medium hover:bg-accent-bright hover:text-background transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  {copied === example ? "Copied!" : "Copy"}
                </button>
              </div>
              <p className="text-base sm:text-lg font-bold tracking-tight leading-snug">
                {currentTitle}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {currentBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-full bg-background border border-border text-xs font-medium text-muted-foreground"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-muted-foreground leading-relaxed max-w-3xl text-lg">
          High-value collectors notice every detail, and search engines do too. Accurate
          titles, correct parallels, clean metadata, and structured listings are what separate
          overlooked cards from premium sales.
          <span className="text-foreground font-medium"> That precision is the standard I work at.</span>
        </p>
      </div>

      {/* ── Title Builder ── */}
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-accent-bright mb-3">
          Interactive Tool
        </p>
        <h3 className="text-2xl md:text-3xl font-bold tracking-tighter mb-2">
          Try the listing title builder.
        </h3>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          This mirrors the exact workflow used across 200,000+ entries at TimeBound Media,
          field inputs, RC/Auto flags, serial number, and a live character counter capped at 76.
        </p>
        <TitleBuilder />
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomed(null)}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center hover:bg-accent-bright hover:text-background transition-colors"
              onClick={() => setZoomed(null)}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={zoomed.src}
              alt={zoomed.label}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── SEO TAB ────────────────────────────────────────────────────────────────

function SEOTab() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-border bg-background/60 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold tracking-tight text-lg">
              Organic Traffic Growth Over Time
            </h3>
            <p className="text-sm text-muted-foreground">
              Sample trend from on-page optimization work
            </p>
          </div>
          <TrendingUp className="w-5 h-5 text-accent-bright" />
        </div>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={seoData}>
              <CartesianGrid stroke="oklch(1 0 0 / 0.06)" vertical={false} />
              <XAxis
                dataKey="month"
                stroke="oklch(0.7 0 0)"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="oklch(0.7 0 0)"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: "oklch(0.2 0 0)",
                  border: "1px solid oklch(1 0 0 / 0.1)",
                  borderRadius: 12,
                  fontSize: 12,
                }}
              />
              <Line
                type="monotone"
                dataKey="traffic"
                stroke="oklch(0.88 0.24 145)"
                strokeWidth={2.5}
                dot={{ fill: "oklch(0.88 0.24 145)", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid sm:grid-cols-4 gap-3">
        {[
          { icon: Search, label: "Keyword Research" },
          { icon: Target, label: "Competitor Analysis" },
          { icon: BarChart3, label: "On-Page Fixes" },
          { icon: TrendingUp, label: "Track & Improve" },
        ].map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="p-5 rounded-xl border border-border bg-background/60">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono text-accent-bright">0{i + 1}</span>
                <Icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium">{step.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── DATA ENTRY TAB ─────────────────────────────────────────────────────────

type DataSubTab = "asc" | "dropshipping";

function DataEntryTab() {
  const [sub, setSub] = useState<DataSubTab>("asc");

  return (
    <div className="space-y-8">
      {/* Sub-tab switcher */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: "asc" as const, icon: Package, label: "ASC Team Careers · Amazon Catalog" },
          { id: "dropshipping" as const, icon: ShoppingCart, label: "Dropshipping · Product Research" },
        ].map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setSub(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              sub === id
                ? "bg-accent-bright text-background"
                : "border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={sub}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {sub === "asc" ? <ASCSubSection /> : <DropshippingSubSection />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ── ASC Team Careers ──────────────────────────────────────────────────────

function ASCSubSection() {
  return (
    <div className="space-y-8">
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard value="Amazon SC" label="Seller Central Operations" />
        <StatCard value="SKU & ASIN" label="Catalog & Inventory Management" />
        <StatCard value="2026 –" label="Current Part-Time Role" />
      </div>

      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-accent-bright mb-3">
          Live Work Sample
        </p>
        <h3 className="text-xl md:text-2xl font-bold tracking-tighter mb-2">
          Amazon Listing Tracker
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl text-sm">
          This tracker mirrors the catalog management workflow at ASC Team Careers, covering
          ASIN sourcing, pricing, inventory status, listing health, and optimizer remarks across
          multiple source platforms.
        </p>
        <AmazonTracker />
      </div>
    </div>
  );
}

// ── Dropshipping ──────────────────────────────────────────────────────────

type DSStatus = "Active" | "Paused" | "Testing";

type DSItem = {
  product: string;
  category: string;
  source: string;
  sourcePrice: string;
  sellingPrice: string;
  margin: string;
  platform: string;
  status: DSStatus;
  notes: string;
};

const DS_ITEMS: DSItem[] = [
  {
    product: "Stainless Steel French Press 34oz",
    category: "Home & Kitchen",
    source: "AliExpress",
    sourcePrice: "$6.80",
    sellingPrice: "$24.99",
    margin: "~63%",
    platform: "Shopify",
    status: "Active",
    notes: "Top seller — reorder threshold at 15 units",
  },
  {
    product: "Silicone Pet Food Mat (Large)",
    category: "Pet Supplies",
    source: "CJDropshipping",
    sourcePrice: "$3.50",
    sellingPrice: "$14.95",
    margin: "~57%",
    platform: "Shopify",
    status: "Active",
    notes: "Bundle with pet bowl for AOV boost",
  },
  {
    product: "Resistance Bands Set (5-Pack)",
    category: "Sports & Outdoors",
    source: "Walmart",
    sourcePrice: "$7.20",
    sellingPrice: "$19.99",
    margin: "~48%",
    platform: "eBay",
    status: "Testing",
    notes: "Running 3-day price test vs $17.99",
  },
  {
    product: "Gel Pens Fine Point (24-Pack)",
    category: "Office Products",
    source: "AliExpress",
    sourcePrice: "$2.90",
    sellingPrice: "$9.99",
    margin: "~55%",
    platform: "Shopify",
    status: "Active",
    notes: "Consistent reorder — low AOV but high volume",
  },
  {
    product: "Wooden Puzzle Animal Set",
    category: "Toys & Games",
    source: "CJDropshipping",
    sourcePrice: "$5.10",
    sellingPrice: "$17.99",
    margin: "~52%",
    platform: "Etsy",
    status: "Paused",
    notes: "Suppressed — supplier out of stock",
  },
];

const dsBadgeMap: Record<DSStatus, string> = {
  Active: "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30",
  Testing: "bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/30",
  Paused: "bg-yellow-500/15 text-yellow-400 ring-1 ring-yellow-500/30",
};

function DropshippingSubSection() {
  return (
    <div className="space-y-8">
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard value="Product Research" label="Sourcing & Margin Analysis" />
        <StatCard value="Multi-Platform" label="Shopify · eBay · Etsy" />
        <StatCard value="Catalog Ops" label="Listing, Pricing & Inventory" />
      </div>

      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-accent-bright mb-3">
          Sample Tracker
        </p>
        <h3 className="text-xl md:text-2xl font-bold tracking-tighter mb-2">
          Dropshipping Product Research Sheet
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl text-sm">
          A sample of how I track sourced products, covering margin, platform, status, and
          notes. Built for eCommerce stores across Shopify, eBay, and Etsy.
        </p>

        <div className="rounded-xl border border-border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  {["Product", "Category", "Source", "Source Price", "Selling Price", "Margin", "Platform", "Status", "Notes"].map((h) => (
                    <th key={h} className="whitespace-nowrap px-4 py-3 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DS_ITEMS.map((item, i) => (
                  <tr key={i} className="border-t border-border/60 hover:bg-muted/20">
                    <td className="whitespace-nowrap px-4 py-3 font-medium">{item.product}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">{item.category}</td>
                    <td className="whitespace-nowrap px-4 py-3">{item.source}</td>
                    <td className="whitespace-nowrap px-4 py-3">{item.sourcePrice}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-accent-bright font-medium">{item.sellingPrice}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-mono">{item.margin}</td>
                    <td className="whitespace-nowrap px-4 py-3">{item.platform}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${dsBadgeMap[item.status]}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-muted-foreground text-xs">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-4 rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Note:</span> Product selection,
          margin calculation, and catalog management for dropshipping stores — applied across
          Shopify, eBay, and Etsy platforms.
        </p>
      </div>
    </div>
  );
}