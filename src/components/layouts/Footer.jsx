import { useState } from "react";
import { motion } from "framer-motion";

// Brand tokens
const BRAND = {
  gold: "#ffba00",
  ink: "#17181a",
  white: "#ffffff",
  slate: "#6b6d70",
  slateLight: "#f4f4f5",
  inkSoft: "#242527",
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
//   { label: "Our Work", href: "/our-work" },
//   { label: "Our Team", href: "/our-team" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const icons = {
  instagram: (
    <div className="relative p-2 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-md hover:scale-105 transition-transform">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
      </svg>
    </div>
  ),

  facebook: (
    <div className="relative p-2 rounded-xl bg-[#1877F2] text-white shadow-md hover:scale-105 transition-transform">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.5 8.5H16.5V5.5H14.2C12 5.5 10.5 7 10.5 9.3V11.5H8.5V14.5H10.5V20.5H13.5V14.5H15.6L16 11.5H13.5V9.6C13.5 8.9 13.9 8.5 14.5 8.5Z"
          fill="currentColor"
        />
      </svg>
    </div>
  ),

  youtube: (
    <div className="relative p-2 rounded-xl bg-[#FF0000] text-white shadow-md hover:scale-105 transition-transform">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10.3 9.5L14.8 12L10.3 14.5V9.5Z" fill="currentColor" />
      </svg>
    </div>
  ),

  twitter: (
    <div className="relative p-2 rounded-xl bg-black text-white shadow-md hover:scale-105 transition-transform border border-white/10">
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
    <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 6.5L12 13L20 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </div>
  ),

  phone: (
    <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
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
    <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
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

  arrowRight: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
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
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
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
    <footer className="relative bg-white text-slate-900 border-t border-slate-100 overflow-hidden">
      {/* Signature Animated Gold Top Border */}
      <motion.div
        style={{ backgroundColor: BRAND.gold }}
        className="h-[3px] w-full origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "circOut" }}
      />

      <motion.div
        className="mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 pb-14 border-b border-slate-100">
          
          {/* Brand Info (Span 5) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-8">
            <motion.img
              whileHover={{ scale: 1.02 }}
              src="/HL-logo.png"
              alt="Happy Lamb Production"
              className="h-12 w-auto mb-5"
            />
            <p className="text-[15px] leading-relaxed text-slate-500 max-w-sm mb-6">
              Stories crafted with care. We are a production house built on creative integrity,
              collaboration, and smooth processes.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5">
              {SOCIALS.map(({ label, href, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-all duration-200"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Navigation (Span 3) */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3
              style={{ color: BRAND.ink }}
              className="mb-5 text-[12px] font-bold uppercase tracking-widest"
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[14.5px] text-slate-600 transition-colors duration-200 hover:text-slate-950"
                  >
                    <motion.span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: BRAND.gold }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details & Newsletter (Span 4) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col justify-between gap-8">
            <div>
              <h3
                style={{ color: BRAND.ink }}
                className="mb-5 text-[12px] font-bold uppercase tracking-widest"
              >
                Get In Touch
              </h3>
              <ul className="space-y-3.5 text-[14.5px] text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-amber-500 shrink-0">{icons.pin}</span>
                  <span>221B Studio Lane, Greater Noida, UP, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-500 shrink-0">{icons.phone}</span>
                  <a href="tel:+911234567890" className="hover:text-slate-950 transition-colors">
                    +91 12345 67890
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-500 shrink-0">{icons.mail}</span>
                  <a href="mailto:info@happylamb.in" className="hover:text-slate-950 transition-colors">
                    info@happylamb.in
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar Footer Info */}
        <motion.div
          variants={itemVariants}
          className="pt-8 flex flex-col-reverse items-center justify-between gap-4 text-center sm:flex-row sm:text-left text-xs text-slate-500"
        >
          <p>© {new Date().getFullYear()} Happy Lamb Production. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {/* <span>•</span> */}
            <a
              href="https://deboxtechnology.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 transition-colors font-medium text-slate-700"
            >
              Developed By Debox Technology
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}