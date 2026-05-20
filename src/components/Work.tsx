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
  Table2,
  FileSpreadsheet,
  FolderOpen,
  CheckCircle,
  Copy,
} from "lucide-react";

import { FadeIn } from "./Section";

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

function TCGTab() {
  const [zoomed, setZoomed] = useState<null | {
    src: string;
    label: string;
  }>(null);

  const [example, setExample] = useState<"sports" | "pokemon">(
    "sports"
  );

  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);

    setCopied(id);

    setTimeout(() => {
      setCopied(null);
    }, 2000);
  };

  const currentData =
    example === "sports" ? listingData : listingData1;

  const currentTitle =
    example === "sports" ? listingTitle : listingTitle1;

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
      ? [
          "Sold Listing",
          "PSA 10",
          "eBay Optimized",
          "SSP Identified Correctly",
        ]
      : [
          "High-Demand Pokémon",
          "PSA 10",
          "Special Illustration Rare",
          "Search Optimized",
        ];

  return (
    <div className="space-y-12">
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard
          value="200,000+"
          label="Listings Managed"
        />

        <StatCard
          value="TCG + Non-TCG"
          label="Trading Cards & Collectibles"
        />

        <StatCard
          value="3+ Years"
          label="Zero Tolerance for Errors"
        />
      </div>

      {/* MAIN SECTION */}
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-accent-bright mb-3">
          Real Listing Example
        </p>

        <h3 className="text-2xl md:text-3xl font-bold tracking-tighter">
          Here's exactly how I structure a high-value graded card
          listing.
        </h3>

        <div className="flex items-center gap-4 mb-8 pt-3">
          <div className="flex-1 h-px bg-border" />

          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-accent-bright/30 bg-accent-bright/5">
            <Sparkles className="w-3.5 h-3.5 text-accent-bright" />

            <span className="text-xs font-mono uppercase tracking-widest text-accent-bright">
              Every Detail Matters.
            </span>

            <Sparkles className="w-3.5 h-3.5 text-accent-bright" />
          </div>

          <div className="flex-1 h-px bg-border" />
        </div>

        {/* EXAMPLE SWITCHER */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            {
              id: "sports",
              label: "Example 01 · Sports Card",
            },
            {
              id: "pokemon",
              label: "Example 02 · Pokémon Card",
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setExample(tab.id as "sports" | "pokemon")
              }
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

        {/* CONTENT */}
        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          {/* IMAGES */}
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

          {/* LISTING BREAKDOWN */}
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

            {/* COPY BOX */}
            <div className="rounded-xl border-2 border-accent-bright/60 bg-accent-bright/5 p-5 glow-accent">
              <div className="flex items-center justify-between gap-4 mb-3">
                <p className="text-[10px] font-mono uppercase tracking-widest text-accent-bright">
                  Copy-Ready Listing Title
                </p>

                <button
                  onClick={() =>
                    handleCopy(
                      currentTitle,
                      example
                    )
                  }
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-accent-bright/30 text-xs font-medium hover:bg-accent-bright hover:text-background transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />

                  {copied === example
                    ? "Copied!"
                    : "Copy"}
                </button>
              </div>

              <p className="text-base sm:text-lg font-bold tracking-tight leading-snug">
                {currentTitle}
              </p>

              {/* BADGES */}
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

        {/* STRONGER CLOSING */}
        <p className="mt-8 text-muted-foreground leading-relaxed max-w-3xl text-lg">
          High-value collectors notice every detail - and
          search engines do too. Accurate titles, correct
          parallels, clean metadata, and structured listings
          are what separate overlooked cards from premium
          sales.

          <span className="text-foreground font-medium">
            {" "}
            That precision is the standard I work at.
          </span>
        </p>
      </div>

      {/* LIGHTBOX */}
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
              <CartesianGrid
                stroke="oklch(1 0 0 / 0.06)"
                vertical={false}
              />

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
                  border:
                    "1px solid oklch(1 0 0 / 0.1)",
                  borderRadius: 12,
                  fontSize: 12,
                }}
              />

              <Line
                type="monotone"
                dataKey="traffic"
                stroke="oklch(0.88 0.24 145)"
                strokeWidth={2.5}
                dot={{
                  fill: "oklch(0.88 0.24 145)",
                  r: 4,
                }}
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
            <div
              key={step.label}
              className="p-5 rounded-xl border border-border bg-background/60"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono text-accent-bright">
                  0{i + 1}
                </span>

                <Icon className="w-4 h-4 text-muted-foreground" />
              </div>

              <p className="text-sm font-medium">
                {step.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DataEntryTab() {
  const steps = [
    {
      num: "01",
      icon: Table2,
      label: "Bulk Listing",
      desc: "Alpha and Parallel listing methods for high-volume eCommerce catalogs",
    },
    {
      num: "02",
      icon: FileSpreadsheet,
      label: "Excel Workflows",
      desc: "Structured sheets for bulk listing, inventory tracking, and data validation",
    },
    {
      num: "03",
      icon: FolderOpen,
      label: "File & Image Org.",
      desc: "Organized product image libraries and asset folders in Dropbox at scale",
    },
    {
      num: "04",
      icon: CheckCircle,
      label: "QA & Accuracy",
      desc: "Near-zero error rate across close to 200,000 product entries",
    },
  ];

  return (
    <div className="space-y-8">

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard value="200,000+" label="Product Entries Managed" />
        <StatCard value="3+ Years" label="at TimeBound Media" />
        <StatCard value="~0%" label="Error Rate Target" />
      </div>

      {/* Process breakdown */}
      <div className="grid sm:grid-cols-4 gap-3">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.label}
              className="p-5 rounded-xl border border-border bg-background/60"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono text-accent-bright">{step.num}</span>
                <Icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium mb-1">{step.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Tools used */}
<div className="rounded-2xl border border-border bg-background/60 p-6">
  <p className="text-xs font-mono uppercase tracking-widest text-accent-bright mb-4">
    Tools I Work With
  </p>
  <div className="flex flex-wrap gap-3">
    {[
      {
        name: "Microsoft Excel",
        logo: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
      },
      {
        name: "Google Sheets",
        logo: "https://img.icons8.com/color/48/google-sheets.png",
      },
      {
        name: "Dropbox",
        logo: "https://img.icons8.com/color/48/dropbox.png",
      },
      {
        name: "Google Drive",
        logo: "https://img.icons8.com/color/48/google-drive--v2.png",
      },
      {
        name: "Canva",
        logo: "https://img.icons8.com/color/48/canva.png",
      },
    ].map((tool) => (
      <div
        key={tool.name}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-border bg-surface text-sm text-foreground/80"
      >
        <img
          src={tool.logo}
          alt={tool.name}
          className="w-5 h-5 object-contain"
          loading="lazy"
        />
        {tool.name}
      </div>
    ))}
  </div>
</div>

      {/* Case study */}
      <div className="rounded-2xl border border-border bg-background/60 p-6">
        <span className="text-xs font-mono uppercase tracking-wider text-accent-bright">
          Case Study
        </span>
        <h3 className="mt-2 text-xl font-bold tracking-tight">
          TimeBound Media · Trading Cards & Collectibles Catalog
        </h3>
        <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">What I did</p>
            <p className="mt-1">
              Managed and maintained close to 200,000 product entries across
              trading card and collectibles listings - using Alpha and Parallel
              listing methods with strict SOP adherence
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Outcome</p>
            <p className="mt-1 text-accent-bright">
              Consistent near-zero error rate maintained over 3+ years of
              high-volume daily data entry
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}