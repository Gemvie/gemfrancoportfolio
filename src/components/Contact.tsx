import { Mail, ExternalLink } from "lucide-react";
import { FadeIn } from "./Section";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, var(--accent-glow), transparent)",
        }}
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-bright/40 bg-accent-bright/10 text-xs font-medium text-accent-bright mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-bright animate-pulse" />
            Open to Work · Remote · Flexible Hours
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Let's work <span className="text-accent-bright">together.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Available for freelance and contract work — eCommerce data,
            listing management, or SEO.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:gemvie.work@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent-bright text-background font-semibold hover:glow-accent transition-shadow"
            >
              <Mail className="w-4 h-4" />
              gemvie.work@gmail.com
            </a>
            <a
              href="https://v2.onlinejobs.ph/jobseekers"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-surface/50 backdrop-blur font-semibold hover:bg-surface transition-colors"
            >
              Onlinejobs.ph
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </div>
      <footer className="relative mt-24 pt-8 border-t border-border max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Gemvie Frank Franco · Cebu City, PH</p>
        <p className="font-mono">Built with care. Shipped clean.</p>
      </footer>
    </section>
  );
}
