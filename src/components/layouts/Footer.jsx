import { useState } from "react";
import { motion } from "framer-motion";

// Happy Lamb Production — brand tokens (kept identical to Header.jsx)
const BRAND = {
  gold: "#ffba00",
  ink: "#17181a",
  white: "#ffffff",
  slate: "#6b6d70",
  inkSoft: "#242527",
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Our Team", href: "/our-team" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

// --- Inline SVG icons (no external icon library) ---
const icons = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.5 8.5H16.5V5.5H14.2C12 5.5 10.5 7 10.5 9.3V11.5H8.5V14.5H10.5V20.5H13.5V14.5H15.6L16 11.5H13.5V9.6C13.5 8.9 13.9 8.5 14.5 8.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.3 9.5L14.8 12L10.3 14.5V9.5Z" fill="currentColor" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.5 4H21L15.2 10.6L22 20H16.6L12.4 14.4L7.6 20H5L11.2 12.9L4.7 4H10.2L14 9.1L18.5 4Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 6.5L12 13L20 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 3.5C6 3.5 5 4.5 5 5.8C5 13 11 19 18.2 19C19.5 19 20.5 18 20.5 17L20.5 15.3C20.5 14.7 20 14.2 19.4 14.1L16.4 13.5C15.9 13.4 15.4 13.6 15.1 14L14.1 15.2C11.9 14.1 10 12.2 8.9 10L10.1 9C10.5 8.6 10.6 8.1 10.5 7.6L9.9 4.6C9.8 4 9.3 3.5 8.7 3.5H7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 21C12 21 18.5 14.9 18.5 10.2C18.5 6.6 15.6 3.7 12 3.7C8.4 3.7 5.5 6.6 5.5 10.2C5.5 14.9 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10.1" r="2.3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
};

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", icon: icons.instagram },
  { label: "Facebook", href: "https://facebook.com", icon: icons.facebook },
  { label: "YouTube", href: "https://youtube.com", icon: icons.youtube },
  { label: "Twitter", href: "https://twitter.com", icon: icons.twitter },
];

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer style={{ backgroundColor: BRAND.white, color: BRAND.ink }}>
      {/* thin gold rule — same signature as the header */}
      <motion.div
        style={{ backgroundColor: BRAND.gold }}
        className="h-[3px] w-full origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />

      <motion.div
        className="mx-auto max-w-7xl px-5 py-14 sm:px-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Brand column */}
          <motion.div variants={item}>
            <img
              src="/HL-logo.png"
              alt="Happy Lamb Production"
              className="h-12 w-auto mb-4"
            />
            <p style={{ color: BRAND.slate }} className="max-w-xs text-[14.5px] leading-relaxed">
              Stories, crafted with care. We're a production house that
              believes good work starts with a happy, unhurried process.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {SOCIALS.map(({ label, href, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full"
                  style={{ backgroundColor: BRAND.inkSoft, color: BRAND.white }}
                  whileHover={{
                    backgroundColor: BRAND.gold,
                    color: BRAND.ink,
                    y: -3,
                    scale: 1.06,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="h-4 w-4">{icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={item}>
            <h3
              style={{ color: BRAND.gold }}
              className="mb-5 text-[13px] font-semibold uppercase tracking-[0.12em]"
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="group flex items-center gap-2 text-[14.5px]"
                    style={{ color: BRAND.slate }}
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                  >
                    <motion.span
                      className="h-1 w-1 rounded-full"
                      style={{ backgroundColor: BRAND.gold }}
                      variants={{ rest: { scale: 0 }, hover: { scale: 1 } }}
                      transition={{ duration: 0.15 }}
                    />
                    <motion.span
                      variants={{ rest: { color: BRAND.slate }, hover: { color: BRAND.ink } }}
                    >
                      {link.label}
                    </motion.span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item}>
            <h3
              style={{ color: BRAND.gold }}
              className="mb-5 text-[13px] font-semibold uppercase tracking-[0.12em]"
            >
              Contact
            </h3>
            <ul className="flex flex-col gap-4 text-[14.5px]" style={{ color: BRAND.slate }}>
              <li className="flex items-start gap-3">
                <span className="h-4 w-4 mt-0.5 shrink-0" style={{ color: BRAND.gold }}>
                  {icons.pin}
                </span>
                <span>221B Studio Lane, Greater Noida, UP, India</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-4 w-4 shrink-0" style={{ color: BRAND.gold }}>
                  {icons.phone}
                </span>
                <a href="tel:+911234567890" className="hover:opacity-80 transition-colors" style={{ color: BRAND.ink }}>
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-4 w-4 shrink-0" style={{ color: BRAND.gold }}>
                  {icons.mail}
                </span>
                <a
                  href="mailto:info@happylamb.in"
                  className="hover:opacity-80 transition-colors"
                  style={{ color: BRAND.ink }}
                >
                  info@happylamb.in
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={item}
          className="mt-12 flex flex-col-reverse items-center gap-4 pt-6 text-center sm:flex-row sm:justify-between sm:text-left"
          style={{ borderTop: `1px solid #e8e8e8` }}
        >
          <p style={{ color: BRAND.slate }} className="text-[13px]">
            © {new Date().getFullYear()} Happy Lamb Production. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-[13px]" style={{ color: BRAND.slate }}>
            <a href="/privacy" className="hover:opacity-80 transition-colors" style={{ color: BRAND.ink }}>
              Developed By Debox Technnology
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}