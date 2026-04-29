import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoClaria from "@/assets/logo-claria.png";

const links = [
  { href: "/#studio", label: "Studio" },
  { href: "/services", label: "Services" },
  { href: "/projets", label: "Projets" },
  { href: "/#methode", label: "Méthode" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderLink = (href: string, label: string, onClick?: () => void) => {
    const isHash = href.includes("#");
    const isInternal = !isHash;
    if (isInternal) {
      return (
        <Link
          to={href}
          onClick={onClick}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {label}
        </Link>
      );
    }
    // Hash link — if not on home, prefix with /
    const target = pathname === "/" ? href.replace("/", "") : href;
    return (
      <a
        href={target}
        onClick={onClick}
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {label}
      </a>
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-studio flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center text-foreground" aria-label="Claria Studio — accueil">
          <img
            src={logoClaria}
            alt="Claria Studio"
            className="h-7 w-auto md:h-8"
            loading="eager"
            decoding="async"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <span key={l.href}>{renderLink(l.href, l.label)}</span>
          ))}
        </nav>

        <a
          href={pathname === "/" ? "#contact" : "/#contact"}
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
              <div key={l.href} className="py-3">
                {renderLink(l.href, l.label, () => setOpen(false))}
              </div>
            ))}
            <a
              href={pathname === "/" ? "#contact" : "/#contact"}
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
