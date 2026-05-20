import { ArrowDown, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Lanyard from './Lanyard';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow Effect */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(circle at top, var(--accent-glow), transparent 60%)",
        }}
      />

      {/* Optional Mesh */}
      <div className="absolute inset-0 bg-mesh opacity-40 z-0" />

      {/* Lanyard — hidden on mobile, pinned to top-right on desktop */}
      <div className="hidden lg:block absolute top-0 right-32 w-[300px] h-[600px] z-30 pointer-events-none">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>

      {/* Main Layout */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-32 w-full">

        {/* LEFT SIDE — Text Content */}
        <div className="max-w-2xl w-full">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-bright/30 bg-accent-bright/5 text-xs font-medium text-accent-bright mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-bright animate-pulse" />
            Available for Freelance · Cebu City, PH
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]"
          >
            Data Entry
            <br />
            <span className="text-accent-bright">
              Specialist.
            </span>
          </motion.h1>

          {/* Sub Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8"
          >
            <p className="text-2xl sm:text-3xl font-display font-semibold text-foreground/95 tracking-tight">
              200,000+ Listings.
              <br />
              <span className="text-foreground/50">
                Built for Accuracy at Scale.
              </span>
            </p>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              I specialize in high-volume trading card and collectibles catalogs -
              structuring accurate listings, organized inventory systems, and
              search-optimized product data at scale.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent-bright text-background font-semibold hover:glow-accent transition-shadow"
            >
              See My Work
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href="https://v2.onlinejobs.ph/jobseekers"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-surface/50 backdrop-blur font-semibold hover:bg-surface transition-colors"
            >
              <Mail className="w-4 h-4" />
              Hire Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}