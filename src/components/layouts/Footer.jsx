import { useState } from "react";
import { motion } from "framer-motion";

// Brand tokens - Light Theme Focus
const BRAND = {
  gold: "#ffba00",
  bg: "#ffffff",
  cardBg: "#f8f9fa",
  textPrimary: "#111827",
  textSecondary: "#4b5563",
  border: "#e5e7eb",
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const icons = {
  instagram: (
    <div className="relative p-2 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-sm hover:scale-105 transition-transform">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
      </svg>
    </div>
  ),

  facebook: (
    <div className="relative p-2 rounded-xl bg-[#1877F2] text-white shadow-sm hover:scale-105 transition-transform">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.5 8.5H16.5V5.5H14.2C12 5.5 10.5 7 10.5 9.3V11.5H8.5V14.5H10.5V20.5H13.5V14.5H15.6L16 11.5H13.5V9.6C13.5 8.9 13.9 8.5 14.5 8.5Z"
          fill="currentColor"
        />
      </svg>
    </div>
  ),

  youtube: (
    <div className="relative p-2 rounded-xl bg-[#FF0000] text-white shadow-sm hover:scale-105 transition-transform">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10.3 9.5L14.8 12L10.3 14.5V9.5Z" fill="currentColor" />
      </svg>
    </div>
  ),

  twitter: (
    <div className="relative p-2 rounded-xl bg-black text-white shadow-sm hover:scale-105 transition-transform">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.5 4H21L15.2 10.6L22 20H16.6L12.4 14.4L7.6 20H5L11.2 12.9L4.7 4H10.2L14 9.1L18.5 4Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
          fill="currentColor"
        />
      </svg>
    </div>
  ),

  mail: (
    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20 group-hover:bg-[#ffba00] group-hover:text-black transition-all duration-300">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 6.5L12 13L20 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </div>
  ),

  phone: (
    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20 group-hover:bg-[#ffba00] group-hover:text-black transition-all duration-300">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 3.5C6 3.5 5 4.5 5 5.8C5 13 11 19 18.2 19C19.5 19 20.5 18 20.5 17L20.5 15.3C20.5 14.7 20 14.2 19.4 14.1L16.4 13.5C15.9 13.4 15.4 13.6 15.1 14L14.1 15.2C11.9 14.1 10 12.2 8.9 10L10.1 9C10.5 8.6 10.6 8.1 10.5 7.6L9.9 4.6C9.8 4 9.3 3.5 8.7 3.5H7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  ),

  pin: (
    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20 group-hover:bg-[#ffba00] group-hover:text-black transition-all duration-300">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 21C12 21 18.5 14.9 18.5 10.2C18.5 6.6 15.6 3.7 12 3.7C8.4 3.7 5.5 6.6 5.5 10.2C5.5 14.9 12 21 12 21Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="10.1" r="2.3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    </div>
  ),
};

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", icon: icons.instagram },
  { label: "Facebook", href: "https://facebook.com", icon: icons.facebook },
  { label: "YouTube", href: "https://youtube.com", icon: icons.youtube },
  { label: "Twitter", href: "https://twitter.com", icon: icons.twitter },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
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
    <footer className="relative bg-white text-gray-900 border-t border-gray-200 overflow-hidden font-sans">
      {/* Signature Animated Gold Accent Line */}
      <motion.div
        style={{ backgroundColor: BRAND.gold }}
        className="h-[3px] w-full origin-left shadow-sm"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
          
          {/* Brand & Mission (Span 5) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-8">
            <motion.div whileHover={{ scale: 1.02 }} className="mb-5">
              <img
                src="/HL-logo.png"
                alt="Happy Lamb Production"
                className="h-10 w-auto"
              />
            </motion.div>

            <p className="text-[15px] leading-relaxed text-gray-600 max-w-sm mb-7 font-normal">
              Stories crafted with precision. We are a creative production studio focused on narrative integrity, visual excellence, and cinematic flair.
            </p>

            {/* Social Media Section */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-2.5">
                {SOCIALS.map(({ label, href, icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links Navigation (Span 3) */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ffba00]" />
              <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-gray-800">
                Quick Links
              </h3>
            </div>
            <ul className="space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[15px] font-medium text-gray-600 hover:text-black transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-transparent group-hover:bg-[#ffba00] transition-colors" />
                    <span className="transition-transform group-hover:translate-x-1 duration-200">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Studio Info & Micro Newsletter (Span 4) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffba00]" />
                <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-gray-800">
                  Contact Us
                </h3>
              </div>

              {/* Light Micro-Cards */}
              <div className="space-y-3 text-[14px]">
                <div className="group flex items-center gap-3.5 p-3 rounded-2xl bg-gray-50 border border-gray-100 hover:border-amber-400/50 hover:bg-white hover:shadow-md transition-all duration-200">
                  <span className="shrink-0">{icons.pin}</span>
                  <span className="text-gray-700 font-medium">
                    221B Studio Lane, Greater Noida, UP, India
                  </span>
                </div>

                <a
                  href="tel:+911234567890"
                  className="group flex items-center gap-3.5 p-3 rounded-2xl bg-gray-50 border border-gray-100 hover:border-amber-400/50 hover:bg-white hover:shadow-md transition-all duration-200"
                >
                  <span className="shrink-0">{icons.phone}</span>
                  <span className="text-gray-700 font-medium group-hover:text-black">
                    +91 12345 67890
                  </span>
                </a>

                <a
                  href="mailto:info@happylamb.in"
                  className="group flex items-center gap-3.5 p-3 rounded-2xl bg-gray-50 border border-gray-100 hover:border-amber-400/50 hover:bg-white hover:shadow-md transition-all duration-200"
                >
                  <span className="shrink-0">{icons.mail}</span>
                  <span className="text-gray-700 font-medium group-hover:text-black">
                    info@happylamb.in
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar Info */}
        <motion.div
          variants={itemVariants}
          className="pt-8 flex flex-col-reverse items-center justify-between gap-4 text-center sm:flex-row sm:text-left text-xs text-gray-500 font-medium"
        >
          <p>© {new Date().getFullYear()} Happy Lamb Production. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://deboxtechnology.com"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 hover:text-black transition-colors"
            >
              <span>Developed By</span>
              <span className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">
                Debox Technology
              </span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}