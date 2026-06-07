import { FadeIn } from "./Section";
import { MapPin, ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile.png";

const stats = [
  { value: "200K+", label: "Listings Managed" },
  { value: "3+", label: "Years Remote" },
  { value: "~0%", label: "Error Rate" },
  { value: "Multi", label: "Platform Experience" },
];

const skills = [
  "Excel & Google Sheets",
  "Amazon Seller Central",
  "SKU Management",
  "Bulk Listing",
  "Dropshipping",
  "SEO",
  "AI Tools",
];

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-surface/30">
      <div className="max-w-5xl mx-auto">

        {/* ── Kicker ── */}
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-accent-bright mb-4 text-center">
            04 — About Me
          </p>
        </FadeIn>

        {/* ── Profile image centered ── */}
        <FadeIn delay={0.05}>
          <div className="flex justify-center mb-10">
            <div className="relative w-52 h-52">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 180deg, var(--accent-bright), transparent 60%, var(--accent-bright))",
                  filter: "blur(22px)",
                  opacity: 0.55,
                }}
              />
              {/* Image */}
              <div className="relative w-full h-full rounded-full border-2 border-accent-bright/40 overflow-hidden bg-surface">
                <img
                  src={profileImage}
                  alt="Gemvie Frank Franco"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Location pill */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-background border border-border text-xs font-medium whitespace-nowrap shadow-sm">
                <MapPin className="w-3 h-3 text-accent-bright" />
                Cebu, Philippines
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── Headline + copy ── */}
        <FadeIn delay={0.12}>
          <div className="text-center max-w-2xl mx-auto mt-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-5">
              I keep eCommerce catalogs accurate,{" "}
              <span className="text-accent-bright">at scale.</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm Gemvie, an eCommerce Data Specialist based in Cebu, Philippines.
              For 3+ years I've managed high-volume product datasets across trading
              cards, collectibles, and Amazon catalog operations. I've handled
              200,000+ listings with a near-zero error rate, built Excel workflows
              from scratch, and expanded into SKU management, dropshipping research,
              and AI-driven automation.{" "}
              <span className="text-foreground font-medium">
                Remote-ready, self-managed, and built for fast-moving eCommerce teams.
              </span>
            </p>
          </div>
        </FadeIn>

        {/* ── Stats row ── */}
        <FadeIn delay={0.2}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-5 rounded-2xl border border-border bg-background/60 text-center"
              >
                <p className="text-2xl font-bold tracking-tighter text-accent-bright">
                  {s.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1 leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── Skills tags ── */}
        <FadeIn delay={0.28}>
          <div className="mt-10 text-center">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
              What I work with
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
              {skills.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-full bg-background border border-border text-foreground/80 hover:border-accent-bright/40 hover:text-accent-bright transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ── CTA ── */}
        <FadeIn delay={0.35}>
          <div className="mt-12 flex justify-center">
            <a
              href="https://gemfrancoportfolio.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-bright hover:underline underline-offset-4"
            >
              View full portfolio
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}