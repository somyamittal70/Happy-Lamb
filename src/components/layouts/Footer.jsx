import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Brand tokens
const BRAND = {
  gold: "#ffba00",
  ink: "#111827",
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

// Hand-drawn inline SVG icons (no icon library dependency)
const ICONS = {
  instagram: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  ),
  facebook: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 8.5H16.5V5.5H14.2C12 5.5 10.5 7 10.5 9.3V11.5H8.5V14.5H10.5V20.5H13.5V14.5H15.6L16 11.5H13.5V9.6C13.5 8.9 13.9 8.5 14.5 8.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  youtube: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.5"
        y="6"
        width="19"
        height="12"
        rx="3.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M10.3 9.5L14.8 12L10.3 14.5V9.5Z" fill="currentColor" />
    </svg>
  ),
  twitter: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 4H21L15.2 10.6L22 20H16.6L12.4 14.4L7.6 20H5L11.2 12.9L4.7 4H10.2L14 9.1L18.5 4Z"
        fill="currentColor"
      />
    </svg>
  ),
  mail: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 6.5L12 13L20 6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  phone: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 3.5C6 3.5 5 4.5 5 5.8C5 13 11 19 18.2 19C19.5 19 20.5 18 20.5 17L20.5 15.3C20.5 14.7 20 14.2 19.4 14.1L16.4 13.5C15.9 13.4 15.4 13.6 15.1 14L14.1 15.2C11.9 14.1 10 12.2 8.9 10L10.1 9C10.5 8.6 10.6 8.1 10.5 7.6L9.9 4.6C9.8 4 9.3 3.5 8.7 3.5H7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pin: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21C12 21 18.5 14.9 18.5 10.2C18.5 6.6 15.6 3.7 12 3.7C8.4 3.7 5.5 6.6 5.5 10.2C5.5 14.9 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="10.1"
        r="2.3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  ),
  arrowUpRight: (
    <svg
      className="h-3 w-3"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  arrowRight: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  check: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 13L9.5 17.5L19 6.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: ICONS.instagram,
    bg: "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: ICONS.facebook,
    bg: "#1877F2",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: ICONS.youtube,
    bg: "#FF0000",
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: ICONS.twitter,
    bg: "#111827",
  },
];

const CONTACTS = [
  { icon: ICONS.phone, label: "+91 9820778491", href: "tel:+919820778491" },
  {
    icon: ICONS.mail,
    label: "info@happylamb.in",
    href: "mailto:info@happylamb.in",
  },
  {
    icon: ICONS.pin,
    label: `Happy Lamb Production OPC PVT.LTD GSTN : 27AAGCH9980B1ZC
      505, 5th Floor, Bhoomi Building, Sanjay Nagar Co.Op. Society
      Cama Estate, Behind Future Studio, Goregoan (E.), Mumbai :- 400063`,
    href: null,
  },
  
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

function SectionHeading({ children }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: BRAND.gold }}
      />
      <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-gray-800">
        {children}
      </h3>
    </div>
  );
}

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
    <footer className="relative bg-white text-gray-900 border-t border-gray-200 overflow-hidden font-sans">
      {/* Cinema-ticker marquee — scrolls continuously like an end-credits
          strip, instead of a static accent line */}
      <div
        className="relative h-9 w-full overflow-hidden"
        style={{ backgroundColor: BRAND.ink }}
      >
        <motion.div
          className="absolute inset-y-0 left-0 flex items-center gap-8 whitespace-nowrap pr-8 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {[0, 1].map((rep) => (
            <div key={rep} className="flex shrink-0 items-center gap-8">
              {[
                "Cinematic Storytelling",
                "Visual Excellence",
                "Narrative Integrity",
                "Happy Lamb Production",
              ].map((t) => (
                <span key={t} className="flex items-center gap-8">
                  <span>{t}</span>
                  <span
                    className="h-1 w-1 rounded-full"
                    style={{ backgroundColor: BRAND.gold }}
                  />
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle film-grain texture over the whole footer */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035] mix-blend-multiply"
        aria-hidden="true"
      >
        <filter id="footerGrain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#footerGrain)" />
      </svg>

      {/* Soft ambient glow behind the brand column, echoing the header's spotlight */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full opacity-[0.08] blur-3xl"
        style={{ backgroundColor: BRAND.gold }}
      />

      <motion.div
        className="mx-auto max-w-7xl px-6 pt-16 pb-10 sm:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Main Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 pb-14 border-b border-gray-200">
          {/* Brand & Mission */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6"
          >
            <motion.div whileHover={{ scale: 1.02 }} className="mb-5">
              <img
                src="/HL-logo.png"
                alt="Happy Lamb Production"
                className="h-10 w-auto"
              />
            </motion.div>

            <p className="text-[15px] leading-relaxed text-gray-600 max-w-sm mb-7 font-normal">
              Stories crafted with precision. We are a creative production
              studio focused on narrative integrity, visual excellence, and
              cinematic flair.
            </p>

            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <motion.span
                    className="absolute inline-flex h-full w-full rounded-full"
                    style={{ backgroundColor: BRAND.gold }}
                    animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                  <span
                    className="relative inline-flex h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: BRAND.gold }}
                  />
                </span>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  Follow Us
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                {SOCIALS.map(({ label, href, icon, bg }) => (
                  <motion.Link
                    key={label}
                    to={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-sm"
                    style={{ background: bg }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {icon}
                  </motion.Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <SectionHeading>Quick Links</SectionHeading>
            <ul className="space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-2 text-[15px] font-medium text-gray-600 hover:text-black transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-transparent group-hover:bg-[#ffba00] transition-colors" />
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <SectionHeading>Contact Us</SectionHeading>
            <div className="space-y-3 text-[14px]">
              {CONTACTS.map(({ icon, label, href }) => {
                const content = (
                  <>
                    <span className="shrink-0 p-2.5 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20 group-hover:bg-[#ffba00] group-hover:text-black transition-all duration-300">
                      {icon}
                    </span>
                    <span className="text-gray-700 font-medium group-hover:text-black">
                      {label}
                    </span>
                  </>
                );
                const className =
                  "group flex items-start gap-3.5 py-1 transition-colors duration-200";
                return href ? (
                  <a key={label} href={href} className={className}>
                    {content}
                  </a>
                ) : (
                  <div key={label} className={className}>
                    {content}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <SectionHeading>Stay In The Loop</SectionHeading>
            <p className="text-[14px] text-gray-600 mb-4 leading-relaxed">
              Occasional updates on new projects and behind-the-scenes work. No
              spam.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 rounded-2xl border border-amber-400/40 bg-amber-500/5 px-4 py-3 text-[14px] font-medium text-amber-700"
                >
                  {ICONS.check}
                  <span>Thanks — you're on the list.</span>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="flex items-center gap-1.5 rounded-2xl border border-gray-200 bg-gray-50 p-1.5 focus-within:border-amber-400/60 focus-within:bg-white transition-colors duration-200"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full bg-transparent px-3 py-2 text-[14px] text-gray-800 placeholder:text-gray-400 focus:outline-none"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Subscribe"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-black"
                    style={{ backgroundColor: BRAND.gold }}
                  >
                    {ICONS.arrowRight}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom Bar Info */}
        <motion.div
          variants={itemVariants}
          className="pt-8 flex flex-col-reverse items-center justify-between gap-4 text-center sm:flex-row sm:text-left text-xs text-gray-500 font-medium"
        >
          <p>
            © {new Date().getFullYear()} Happy Lamb Production. All rights
            reserved.
          </p>
          <Link
            to="https://deboxtechnology.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 hover:text-black transition-colors"
          >
            <span>Developed By</span>
            <span className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">
              Debox Technology
            </span>
            <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
              {ICONS.arrowUpRight}
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </footer>
  );
}
