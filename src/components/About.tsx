import { FadeIn } from "./Section";
import { MapPin, ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile.png";

const quickFacts = [
  { value: "Remote", label: "Work setup" },
  { value: "GMT+8", label: "Time zone" },
  { value: "Cebu", label: "Philippines" },
  { value: "Open", label: "Remote roles" },
];

const skills = [
  "Trading Card Catalogs",
  "Excel & Google Sheets",
  "Amazon Seller Central",
  "SKU Management",
  "Bulk Listing",
  "Inventory Tracking",
  "Dropshipping",
  "SEO",
  "AI Tools",
];

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-accent-bright mb-4 text-center">
            04 — About Me
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="flex justify-center mb-10">
            <div className="relative w-52 h-52">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 180deg, var(--accent-bright), transparent 60%, var(--accent-bright))",
                  filter: "blur(22px)",
                  opacity: 0.45,
                }}
              />

              <div className="relative w-full h-full overflow-hidden rounded-full border-2 border-accent-bright/40 bg-surface">
                <img
                  src={profileImage}
                  alt="Gemvie Frank Franco"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-background px-3 py-1 text-xs font-medium shadow-sm">
                <MapPin className="h-3 w-3 text-accent-bright" />
                Cebu, Philippines
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="mx-auto mt-6 max-w-2xl text-center">
            <h2 className="mb-5 text-3xl font-bold tracking-tighter md:text-4xl">
              I organize messy product data into clean catalog systems.
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm Gemvie, an eCommerce Data Specialist based in Cebu,
              Philippines. I enjoy organizing complex product data, building
              reliable spreadsheet workflows, and keeping catalog operations
              accurate across trading cards, collectibles, Amazon, and
              marketplace listings.{" "}
              <span className="font-medium text-foreground">
                Remote-ready, self-managed, and comfortable working with
                fast-moving eCommerce teams.
              </span>
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
            {quickFacts.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-background/60 p-5 text-center"
              >
                <p className="text-2xl font-bold tracking-tighter text-accent-bright">
                  {s.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.28}>
          <div className="mt-10 text-center">
            <p className="mb-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              What I work with
            </p>

            <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-2">
              {skills.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground/80 transition-colors hover:border-accent-bright/40 hover:text-accent-bright"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="mt-12 flex justify-center">
            <a
              href="mailto:gemvie.work@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-accent-bright px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Let's Work Together
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}