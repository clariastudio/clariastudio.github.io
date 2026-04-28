import { useEffect, useState } from "react";

const links = [
  { href: "#studio", label: "Studio" },
  { href: "#services", label: "Services" },
  { href: "#projets", label: "Projets" },
  { href: "#methode", label: "Méthode" },
  { href: "#contact", label: "Contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-studio flex h-16 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-1.5 text-foreground">
          <span className="font-serif text-2xl leading-none">Claria</span>
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Studio
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-foreground/90 bg-foreground px-4 py-2 text-xs uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
        >
          Prendre contact
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span className={`h-px w-5 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-studio flex flex-col py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-foreground px-4 py-3 text-center text-xs uppercase tracking-wider text-primary-foreground"
            >
              Prendre contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
