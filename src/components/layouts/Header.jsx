import { useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

// Brand Tokens
const BRAND = {
  gold: "#ffba00",
  ink: "#17181a",
  white: "#ffffff",
  slate: "#6b6d70",
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
];

// Figure out which nav link matches the current URL, so the active
// state is correct on first load / after a real page navigation —
// not just while clicking around client-side.
function getActiveFromPath() {
  if (typeof window === "undefined") return "Home";
  const path = window.location.pathname;
  const match = NAV_LINKS.find((l) => l.href === path);
  return match ? match.label : "Home";
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(getActiveFromPath);
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Smoothed scroll-progress value, 0 -> 1 across the whole document
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Re-check on browser back/forward navigation
  useEffect(() => {
    const onPopState = () => setActive(getActiveFromPath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Prevent background scrolling when mobile nav is open, close on Escape
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Scroll progress bar — fills left to right as the page scrolls */}
      <div className="relative h-[3px] w-full bg-[#eee5c9]">
        <motion.div
          className="absolute inset-y-0 left-0 w-full origin-left"
          style={{ scaleX, backgroundColor: BRAND.gold }}
        />
      </div>

      {/* Main Bar with conditional Glassmorphism */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06),0_8px_24px_-12px_rgba(0,0,0,0.15)] py-2.5"
            : "bg-white py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
          {/* Logo — subtle "shutter" rotation on hover, film-reel nod */}
          <a href="/" className="group relative flex items-center shrink-0">
            <motion.img
              whileHover={{ scale: 1.04, rotate: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              src="/HL-logo.png"
              alt="Happy Lamb Production"
              className="h-10 w-auto sm:h-12"
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            onMouseLeave={() => setHovered(null)}
          >
            {NAV_LINKS.map((link) => {
              const isActive = active === link.label;
              const isHovered = hovered === link.label;
              const show = isActive || isHovered;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHovered(link.label)}
                  className="relative px-4 py-2 text-[14px] font-medium tracking-wide"
                  style={{ color: isActive ? BRAND.ink : BRAND.slate }}
                >
                  <span
                    className="relative z-10 transition-colors duration-200"
                    style={{
                      color: isHovered && !isActive ? BRAND.ink : undefined,
                    }}
                  >
                    {link.label}
                  </span>

                  {/* Film-sprocket indicator — two perforation dots flank a gold
                      line that unspools from the center, like a filmstrip frame */}
                  <div className="pointer-events-none absolute -bottom-0.5 left-1/2 flex -translate-x-1/2 items-center gap-1">
                    <motion.span
                      className="h-[3px] w-[3px] rounded-[1px]"
                      style={{ backgroundColor: BRAND.gold }}
                      initial={false}
                      animate={{ scale: show ? 1 : 0, opacity: show ? 1 : 0 }}
                      transition={{ duration: 0.2, delay: show ? 0.1 : 0 }}
                    />
                    <motion.span
                      className="h-[2px] rounded-full"
                      style={{ backgroundColor: BRAND.gold }}
                      initial={false}
                      animate={{ width: show ? 14 : 0, opacity: show ? 1 : 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <motion.span
                      className="h-[3px] w-[3px] rounded-[1px]"
                      style={{ backgroundColor: BRAND.gold }}
                      initial={false}
                      animate={{ scale: show ? 1 : 0, opacity: show ? 1 : 0 }}
                      transition={{ duration: 0.2, delay: show ? 0.1 : 0 }}
                    />
                  </div>
                </a>
              );
            })}

            {/* Call to Action Button */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group ml-4 inline-flex items-center gap-1.5 rounded-md px-5 py-2 text-[14px] font-semibold text-white shadow-sm hover:shadow-md"
              style={{ backgroundColor: BRAND.ink }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </nav>

          {/* Mobile Menu Toggle — animated hamburger, flips to white once the
              iris overlay opens behind it */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="lg:hidden relative z-[60] flex h-10 w-10 items-center justify-center rounded-full transition-colors"
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <motion.span
                className="block h-[2px] w-full rounded-full"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 7 : 0,
                  backgroundColor: isOpen ? BRAND.white : BRAND.ink,
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                className="block h-[2px] w-full rounded-full"
                animate={{
                  opacity: isOpen ? 0 : 1,
                  x: isOpen ? 8 : 0,
                  backgroundColor: isOpen ? BRAND.white : BRAND.ink,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-[2px] w-full rounded-full"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -7 : 0,
                  backgroundColor: isOpen ? BRAND.white : BRAND.ink,
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu — cinematic iris wipe, expanding from the toggle button
          like a camera aperture opening, in place of a stock slide-in drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="iris"
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 38px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 38px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 38px)" }}
            transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
            className="lg:hidden fixed inset-0 z-50 flex flex-col"
            style={{ backgroundColor: BRAND.ink }}
          >
            <nav className="flex flex-1 flex-col items-center justify-center gap-2 px-8">
              {NAV_LINKS.map((link, idx) => {
                const isActive = active === link.label;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: idx * 0.06 + 0.25,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-2 py-2.5 text-[26px] font-medium"
                    style={{ color: isActive ? BRAND.gold : BRAND.white }}
                  >
                    <span
                      className="text-[13px] font-mono"
                      style={{
                        color: isActive ? BRAND.gold : "rgba(255,255,255,0.35)",
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </motion.a>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: NAV_LINKS.length * 0.06 + 0.3,
                duration: 0.4,
              }}
              className="flex justify-center px-8 pb-10"
            >
              <a
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold"
                style={{ backgroundColor: BRAND.gold, color: BRAND.ink }}
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
