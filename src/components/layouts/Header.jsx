import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
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

  // Prevent background scrolling when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
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
          {/* Logo */}
          <a href="/" className="group relative flex items-center shrink-0">
            <motion.img
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              src="/HL-logo.png"
              alt="Happy Lamb Production"
              className="h-10 w-auto sm:h-12 transition-transform duration-200"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 text-[14px] font-medium tracking-wide transition-colors duration-200"
                  style={{ color: isActive ? BRAND.ink : BRAND.slate }}
                >
                  <span className="relative z-10 transition-colors duration-200 hover:text-[#17181a]">
                    {link.label}
                  </span>

                  {/* Active Indicator Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-full bg-slate-100/80 -z-0"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Gold underline dot indicator on active */}
                  {isActive && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full"
                      style={{ backgroundColor: BRAND.gold }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}

            {/* Call to Action Button */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group ml-4 inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-[14px] font-semibold text-white transition-colors duration-300 shadow-sm hover:shadow-md"
              style={{ backgroundColor: BRAND.ink }}
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden relative z-50 rounded-full p-2 text-slate-800 hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu — slides in from the right, with a dimmed backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
            />

            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden fixed inset-y-0 right-0 z-50 flex h-full w-[82%] max-w-sm flex-col bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                <span
                  className="font-semibold text-[15px]"
                  style={{ color: BRAND.ink }}
                >
                  Menu
                </span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="rounded-full p-2 text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  <X size={22} />
                </motion.button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-4">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = active === link.label;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.1, duration: 0.25 }}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-[16px] font-medium transition-all ${
                        isActive
                          ? "bg-slate-100/80 font-semibold"
                          : "hover:bg-slate-50 text-slate-600"
                      }`}
                      style={{ color: isActive ? BRAND.ink : undefined }}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: BRAND.gold }}
                        />
                      )}
                    </motion.a>
                  );
                })}
              </nav>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 + 0.1 }}
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl py-3.5 text-center text-[15px] font-semibold text-white shadow-md active:scale-[0.98] transition-transform"
                  style={{ backgroundColor: BRAND.ink }}
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
