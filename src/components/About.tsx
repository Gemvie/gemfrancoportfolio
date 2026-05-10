import { FadeIn } from "./Section";
import profileImage from "@/assets/profile.png";

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-surface/30">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-12 items-center">
        <FadeIn>
          <div className="relative w-56 h-56 mx-auto md:mx-0">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 180deg, var(--accent-bright), transparent 60%, var(--accent-bright))",
                filter: "blur(20px)",
                opacity: 0.5,
              }}
            />

            <div className="relative w-full h-full rounded-full border-2 border-accent-bright/40 overflow-hidden bg-surface">
              <img
                src={profileImage}
                alt="Gemvie"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm font-mono uppercase tracking-widest text-accent-bright mb-4">
            04 — About Me
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
            From Cebu, building catalogs the world relies on.
          </h2>

          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm Gemvie — a data specialist from Cebu, Philippines. I've spent
            3+ years deep inside trading card and collectibles eCommerce —
            managing listings, cleaning data, and building workflows that
            scale. I also have a background in SEO and I'm now expanding into
            content creation.{" "}
            <span className="text-foreground">
              I work remotely, I communicate clearly, and I deliver.
            </span>
          </p>

          <div className="mt-8">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
              Currently learning
            </p>

            <div className="flex flex-wrap gap-2">
              {["CapCut", "After Effects", "TikTok Content", "AI Marketing"].map(
                (t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-full bg-background border border-border"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}