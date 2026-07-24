import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
      {/* Top accent line with continuous shimmer effect */}
      <div className="relative h-[3px] w-full overflow-hidden bg-amber-400">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent"
        />
      </div>

      {/* Main Bar with conditional Glassmorphism */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-2.5"
            : "bg-white py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
          {/* Logo */}
          <a
            href="/"
            onClick={() => setActive("Home")}
            className="group relative flex items-center shrink-0"
          >
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
                  onClick={() => setActive(link.label)}
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
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Gold underline dot indicator on active */}
                  {isActive && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full"
                      style={{ backgroundColor: BRAND.gold }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            {/* Call to Action Button */}
            <motion.a
              href="/contact"
              onClick={() => setActive("Contact")}
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

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-white border-b border-slate-100 shadow-xl"
          >
            <nav className="flex flex-col px-6 pt-2 pb-6 gap-1">
              {NAV_LINKS.map((link, idx) => {
                const isActive = active === link.label;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 + 0.05, duration: 0.2 }}
                    onClick={() => {
                      setActive(link.label);
                      setIsOpen(false);
                    }}
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

              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.04 + 0.05 }}
                href="/contact"
                onClick={() => {
                  setActive("Contact");
                  setIsOpen(false);
                }}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl py-3.5 text-center text-[15px] font-semibold text-white shadow-md active:scale-[0.98] transition-transform"
                style={{ backgroundColor: BRAND.ink }}
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}