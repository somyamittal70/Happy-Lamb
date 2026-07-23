import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// Happy Lamb Production — brand tokens
const BRAND = {
  gold: "#ffba00",
  ink: "#17181a", // near-black, matches the sheep silhouette
  white: "#ffffff",
  slate: "#6b6d70", // matches the grey "Production" wordmark
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Our Team", href: "/our-team" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      style={{ backgroundColor: BRAND.white }}
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_16px_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      {/* thin gold rule — a nod to the ring around the logo mark */}
      <div style={{ backgroundColor: BRAND.gold }} className="h-[3px] w-full" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        {/* Logo + wordmark */}
        <a
          href="/"
          onClick={() => setActive("Home")}
          className="flex items-center gap-3 shrink-0"
        >
          <img
            src="/HL-logo.png"
            alt="Happy Lamb Production"
            className="h-11 w-auto sm:h-12"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                className="group relative flex items-center gap-2 px-4 py-2 text-[15px] font-medium tracking-wide transition-colors duration-200"
                style={{ color: isActive ? BRAND.ink : BRAND.slate }}
              >
                {/* small gold dot marks the active/hovered link, echoing the logo's circular badge */}
                <span
                  className="h-1.5 w-1.5 rounded-full transition-transform duration-200 scale-0 group-hover:scale-100"
                  style={{
                    backgroundColor: BRAND.gold,
                    transform: isActive ? "scale(1)" : undefined,
                  }}
                />
                {link.label}
              </a>
            );
          })}

          <a
            href="/contact"
            onClick={() => setActive("Contact")}
            style={{ backgroundColor: BRAND.ink, color: BRAND.white }}
            className="ml-3 rounded-full px-5 py-2 text-[14px] font-semibold tracking-wide transition-transform duration-200 hover:-translate-y-0.5"
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BRAND.gold)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND.ink)}
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden rounded-full p-2 transition-colors duration-200"
          style={{ color: BRAND.ink }}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: BRAND.white, borderTop: `1px solid #eee` }}
      >
        <nav className="flex flex-col px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActive(link.label);
                setIsOpen(false);
              }}
              className="flex items-center gap-3 py-3 text-[16px] font-medium border-b last:border-b-0"
              style={{
                color: active === link.label ? BRAND.ink : BRAND.slate,
                borderColor: "#f1f1f1",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: active === link.label ? BRAND.gold : "transparent",
                }}
              />
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => {
              setActive("Contact");
              setIsOpen(false);
            }}
            style={{ backgroundColor: BRAND.ink, color: BRAND.white }}
            className="mt-4 rounded-full px-5 py-3 text-center text-[15px] font-semibold"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
}