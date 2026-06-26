import { useMemo, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
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
  Copy,
  CheckCircle,
  Package,
  ShoppingCart,
  ExternalLink,
} from "lucide-react";

import { FadeIn } from "./Section";

import cardFront from "@/assets/card-front.png";
import cardBack from "@/assets/card-back.png";

const tabs = [
  { id: "tcg", label: "Trading Card Listings" },
  { id: "seo", label: "SEO Optimization" },
  { id: "dropshipping", label: "Dropshipping Operations" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const listingData = [
  { label: "Player", value: "DK Metcalf" },
  { label: "Year", value: "2021" },
  { label: "Product", value: "Donruss Optic Downtown" },
  { label: "Parallel", value: "Lazer Prizm" },
  { label: "Card Number", value: "#DT32" },
  { label: "Team", value: "Seattle Seahawks" },
  { label: "Grade", value: "PSA 10 — GEM MINT" },
];

const listingTitle =
  "DK METCALF 2021 DONRUSS OPTIC DOWNTOWN SSP LAZER PRIZM #DT32 PSA 10";

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

export function Work() {
  const [active, setActive] = useState<TabId>("tcg");

  return (
    <section id="work" className="relative py-32 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-accent-bright mb-4">
            02 — My Work
          </p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-4xl">
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
              transition={{ duration: 0.3 }}
            >
              {active === "tcg" && <TradingCardTab />}
              {active === "seo" && <SEOTab />}
              {active === "dropshipping" && <DropshippingTab />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function TradingCardTab() {
  return (
    <div className="space-y-10">
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard value="200K+" label="Listings Managed" />
        <StatCard value="TCG + Non-TCG" label="Catalog Experience" />
        <StatCard value="<0.1%" label="Error Rate Target" />
      </div>

      <SectionIntro
        label="Real Listing Example"
        title="How I turn card details into a clean marketplace listing."
        body="A simple example of how I structure trading card data: image check, metadata validation, title formatting, and final QA before listing."
      />

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: cardFront, label: "Front" },
              { src: cardBack, label: "Back" },
            ].map((img) => (
              <div key={img.label}>
                <div className="aspect-[3/4] rounded-xl bg-background border border-border overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 text-center text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {img.label}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-2 mb-5">
            <CheckCircle className="w-4 h-4 text-accent-bright" />
            <p className="text-xs font-mono uppercase tracking-widest">
              Listing Breakdown
            </p>
          </div>

          <div className="divide-y divide-border rounded-xl border border-border overflow-hidden">
            {listingData.map((row) => (
              <div key={row.label} className="grid grid-cols-[130px_1fr]">
                <div className="px-4 py-3 bg-surface/30 text-sm text-muted-foreground">
                  {row.label}
                </div>
                <div className="px-4 py-3 text-sm font-mono font-medium">
                  {row.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-accent-bright/40 bg-accent-bright/5 p-4">
            <p className="text-[10px] font-mono uppercase tracking-widest text-accent-bright mb-2">
              Final Listing Title
            </p>
            <p className="font-bold leading-snug">{listingTitle}</p>
          </div>
        </Card>
      </div>

      <TitleBuilderMini />
    </div>
  );
}

function SEOTab() {
  return (
    <div className="space-y-10">
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard value="Keywords" label="Research & Mapping" />
        <StatCard value="On-Page" label="Title, Content & Structure" />
        <StatCard value="Growth" label="Track, Review & Improve" />
      </div>

      <SectionIntro
        label="SEO Workflow"
        title="Simple SEO process for better search visibility."
        body="I focus on practical SEO work: keyword research, competitor checks, title optimization, content cleanup, and tracking improvements over time."
      />

      <Card>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold tracking-tight text-lg">
              Organic Traffic Growth Over Time
            </h3>
            <p className="text-sm text-muted-foreground">
              Sample trend from optimization work
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
      </Card>

      <div className="grid sm:grid-cols-4 gap-3">
        {[
          { icon: Search, label: "Keyword Research" },
          { icon: Target, label: "Competitor Analysis" },
          { icon: BarChart3, label: "On-Page Fixes" },
          { icon: TrendingUp, label: "Track & Improve" },
        ].map((step, i) => {
          const Icon = step.icon;
          return (
            <Card key={step.label} compact>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono text-accent-bright">
                  0{i + 1}
                </span>
                <Icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium">{step.label}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function DropshippingTab() {
  return (
    <div className="space-y-10">
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard value="5+" label="Platforms Worked Across" />
        <StatCard value="Margin" label="Product Research Checks" />
        <StatCard value="Catalog" label="Listing & Inventory Tracking" />
      </div>

      <SectionIntro
        label="Operations Sample"
        title="A cleaner way to track sourcing, margins, and listing status."
        body="This sample shows how I organize dropshipping product research for remote eCommerce teams: source, margin, selling platform, status, and next action."
      />

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="bg-surface/50 text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                {[
                  "Product",
                  "Source",
                  "Cost",
                  "Sell Price",
                  "Margin",
                  "Platform",
                  "Status",
                ].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dropshippingItems.map((item) => (
                <tr
                  key={item.product}
                  className="border-t border-border/60 hover:bg-surface/30"
                >
                  <td className="px-4 py-3 font-medium">{item.product}</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {item.source}
                  </td>
                  <td className="px-4 py-3">{item.cost}</td>
                  <td className="px-4 py-3 text-accent-bright font-medium">
                    {item.sell}
                  </td>
                  <td className="px-4 py-3 font-mono">{item.margin}</td>
                  <td className="px-4 py-3">{item.platform}</td>
                  <td className="px-4 py-3">
                    <span className={statusClass(item.status)}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            icon: Package,
            title: "Product Sourcing",
            body: "Find products from supplier platforms and organize source links, pricing, and category data.",
          },
          {
            icon: ShoppingCart,
            title: "Marketplace Listing",
            body: "Prepare product details for Shopify, eBay, Michaels, Amazon, or other eCommerce platforms.",
          },
          {
            icon: ExternalLink,
            title: "Tracking & Updates",
            body: "Monitor stock, selling price, listing status, and remarks in a clean tracking workflow.",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title}>
              <Icon className="w-5 h-5 text-accent-bright mb-4" />
              <h3 className="font-bold tracking-tight mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.body}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-background/60">
      <p className="text-3xl md:text-4xl font-bold tracking-tighter text-accent-bright">
        {value}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function SectionIntro({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div>
      <p className="text-xs font-mono uppercase tracking-widest text-accent-bright mb-3">
        {label}
      </p>
      <h3 className="text-2xl md:text-3xl font-bold tracking-tighter max-w-3xl">
        {title}
      </h3>
      <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed">
        {body}
      </p>
    </div>
  );
}

function Card({
  children,
  compact = false,
}: {
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-background/60 ${
        compact ? "p-5" : "p-6"
      }`}
    >
      {children}
    </div>
  );
}

/* ───────────────────── Title Builder Mini ───────────────────── */

type BuilderRow = {
  year: string;
  product: string;
  player: string;
  rc: boolean;
  auto: boolean;
  serial: string;
  batch: string;
};

function buildTitle(r: Row) {
  return [
    r.player,
    r.year,
    r.product,
    r.rc ? "RC" : "",
    r.auto ? "AUTO" : "",
    r.serial,
    r.batch,
  ]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();
}

function TitleBuilderMini() {
  const [copied, setCopied] = useState(false);
  const [row, setRow] = useState<Row>({
  player: "VICTOR RODRIGUES",
  year: "2025",
  product: "BOWMAN CHROME 1ST PURPLE REFRACTOR",
  rc: true,
  auto: true,
  serial: "/250",
  batch: "QIDXXX",
});

  const title = useMemo(() => buildTitle(row), [row]);
  const len = title.length;
  const over = len > 76;

  async function copyTitle() {
    await navigator.clipboard.writeText(title);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div>
      <SectionIntro
        label="Workflow Tool"
        title="A simplified title builder for bulk listing work."
        body="This shows the logic behind my listing workflow: enter the key fields once, auto-build the title, and keep it inside the required character limit."
      />

      <div className="mt-6 rounded-2xl border border-border bg-background/60 overflow-hidden">
        <div className="border-b border-border bg-surface/40 px-5 py-3 flex items-center justify-between gap-4">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            TitleBuilder.xlsx
          </p>
          <p
            className={`text-xs font-mono ${
              over ? "text-red-400" : "text-accent-bright"
            }`}
          >
            {len} / 76
          </p>
        </div>

        <div className="p-5 grid md:grid-cols-4 gap-3">
          <Input label="Year" value={row.year} onChange={(year) => setRow({ ...row, year })} />
          <Input label="Product / Set" value={row.product} onChange={(product) => setRow({ ...row, product })} />
          <Input label="Player" value={row.player} onChange={(player) => setRow({ ...row, player })} />
          <Input label="Serial" value={row.serial} onChange={(serial) => setRow({ ...row, serial })} />
          <Input label="Batch" value={row.batch} onChange={(batch) => setRow({ ...row, batch })} />

          <Toggle label="RC" checked={row.rc} onChange={(rc) => setRow({ ...row, rc })} />
          <Toggle label="AUTO" checked={row.auto} onChange={(auto) => setRow({ ...row, auto })} />
        </div>

        <div className="border-t border-border bg-accent-bright/5 p-5">
          <div className="flex items-center justify-between gap-4 mb-2">
            <p className="text-[10px] font-mono uppercase tracking-widest text-accent-bright">
              Generated Title
            </p>
            <button
              onClick={copyTitle}
              className="inline-flex items-center gap-2 rounded-lg border border-accent-bright/30 px-3 py-1.5 text-xs font-medium hover:bg-accent-bright hover:text-background transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <p className="font-mono text-sm font-semibold break-words">
            {title || "—"}
          </p>
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="space-y-1 md:col-span-1">
      <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent-bright"
      />
    </label>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{ accentColor: "oklch(0.88 0.24 145)" } as CSSProperties}
      />
      <span className="text-sm font-medium">{label}</span>
    </label>
  );
}

/* ───────────────────── Dropshipping Data ───────────────────── */

const dropshippingItems = [
  {
    product: "Stainless Steel French Press 34oz",
    source: "AliExpress",
    cost: "$6.80",
    sell: "$24.99",
    margin: "~63%",
    platform: "Shopify",
    status: "Active",
  },
  {
    product: "Silicone Pet Food Mat",
    source: "CJDropshipping",
    cost: "$3.50",
    sell: "$14.95",
    margin: "~57%",
    platform: "Shopify",
    status: "Active",
  },
  {
    product: "Resistance Bands Set",
    source: "Walmart",
    cost: "$7.20",
    sell: "$19.99",
    margin: "~48%",
    platform: "eBay",
    status: "Testing",
  },
  {
    product: "Gel Pens Fine Point",
    source: "AliExpress",
    cost: "$2.90",
    sell: "$9.99",
    margin: "~55%",
    platform: "Shopify",
    status: "Active",
  },
  {
    product: "Wooden Puzzle Animal Set",
    source: "CJDropshipping",
    cost: "$5.10",
    sell: "$17.99",
    margin: "~52%",
    platform: "Michaels",
    status: "Paused",
  },
];

function statusClass(status: string) {
  const base =
    "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium";

  if (status === "Active") {
    return `${base} bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30`;
  }

  if (status === "Testing") {
    return `${base} bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/30`;
  }

  return `${base} bg-yellow-500/15 text-yellow-400 ring-1 ring-yellow-500/30`;
}