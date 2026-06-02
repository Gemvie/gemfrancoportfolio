import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#services", label: "What I Do" },
  { href: "#work", label: "My Work" },
  { href: "#why", label: "Why Hire Me" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    setOpen(false);

    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-background/30 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="font-bold tracking-tight text-base"
        >
          GF<span className="text-accent-bright">.</span>FRANCO
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          <ul className="flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleClick(e, l.href)}
                  className="text-sm text-muted-foreground hover:text-accent-bright transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <a
            href="https://canva.link/t49kqlije1jywxh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-accent-bright/40 text-sm font-medium text-accent-bright hover:bg-accent-bright hover:text-background transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-md border border-border"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleClick(e, l.href)}
                    className="block py-3 text-sm font-medium hover:text-accent-bright transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}

              {/* Mobile Resume Button */}
              <li className="pt-3">
                <a
                  href="https://canva.link/t49kqlije1jywxh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 rounded-full border border-accent-bright/40 text-sm font-medium text-accent-bright hover:bg-accent-bright hover:text-background transition-all duration-300"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}