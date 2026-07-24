import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Clock,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

// Design System Tokens
const PALETTE = {
  INK: "#0a0a0a",
  LAMB_GOLD: "#FFC72C",
  DEEP_GOLD: "#B9860A",
  PAPER: "#FFFFFF",
  PAPER_PURE: "#FFFFFF",
  BORDER: "rgba(23, 20, 15, 0.12)",
  BORDER_DARK: "rgba(243, 239, 228, 0.12)",
  INK_MUTED: "rgba(23, 20, 15, 0.65)",
  INK_FAINT: "rgba(23, 20, 15, 0.45)",
};

const PROJECT_TYPES = [
  "Feature Film",
  "Commercial / Ad Film",
  "Documentary",
  "Corporate Video",
  "Music Video",
  "Other Creative Project",
];

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@happylamb.in",
    href: "mailto:info@happylamb.in",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91  9820778491",
    href: "tel:+919820778491",
  },
  {
    icon: MapPin,
    label: "Studio Hub",
    value: `Happy Lamb Production OPC PVT.LTD GSTN : 27AAGCH9980B1ZC
505, 5th Floor, Bhoomi Building, Sanjay Nagar Co.Op. Society
Cama Estate, Behind Future Studio, Goregoan (E.), Mumbai :- 400063`,
    href: "#",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: PROJECT_TYPES[0],
    message: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | submitting | sent

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API Call
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Main Pitch Form                              */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-3xl border p-8 sm:p-12 shadow-xl backdrop-blur-md relative overflow-hidden flex flex-col justify-between"
            style={{
              backgroundColor: PALETTE.PAPER,
              borderColor: PALETTE.BORDER,
            }}
          >

            <div>
              {/* Header Badge */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.25em] mb-4 border"
                style={{
                  color: PALETTE.DEEP_GOLD,
                  borderColor: "rgba(185, 134, 10, 0.25)",
                  backgroundColor: "rgba(255, 199, 44, 0.1)",
                }}
              >
                <Sparkles size={12} />
                Tell Us Your Story
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="font-black uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[0.95]"
                style={{ color: PALETTE.INK }}
              >
                Pitch the project
              </motion.h2>

              <p
                className="mt-3 text-sm sm:text-base max-w-md leading-relaxed"
                style={{ color: PALETTE.INK_MUTED }}
              >
                Have a concept ready to bring to light? Fill out the brief below and our production leads will reach out.
              </p>
            </div>

            {/* Form Section */}
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="my-auto py-12 px-6 rounded-2xl border text-center flex flex-col items-center justify-center"
                  style={{
                    borderColor: "rgba(255, 199, 44, 0.5)",
                    backgroundColor: PALETTE.PAPER_PURE,
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-inner"
                    style={{ backgroundColor: PALETTE.LAMB_GOLD }}
                  >
                    <CheckCircle2 size={32} style={{ color: PALETTE.INK }} />
                  </motion.div>

                  <h3
                    className="text-xl font-bold uppercase tracking-wide"
                    style={{ color: PALETTE.INK }}
                  >
                    Enquiry Received
                  </h3>
                  <p
                    className="mt-2 text-sm max-w-xs leading-relaxed"
                    style={{ color: PALETTE.INK_MUTED }}
                  >
                    Thank you! A senior producer from our studio will review your brief and follow up within 24 hours.
                  </p>

                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-xs font-bold uppercase tracking-widest underline underline-offset-4 cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ color: PALETTE.DEEP_GOLD }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-6"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Name Field */}
                    <div className="relative">
                      <input
                        required
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder=" "
                        className="peer w-full border-b-2 bg-transparent py-2.5 text-base outline-none transition-all duration-300"
                        style={{
                          color: PALETTE.INK,
                          borderColor: PALETTE.BORDER,
                        }}
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 top-2.5 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 pointer-events-none peer-focus:-top-3.5 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                        style={{ color: PALETTE.INK_FAINT }}
                      >
                        Your Name *
                      </label>
                    </div>

                    {/* Phone Field */}
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder=" "
                        className="peer w-full border-b-2 bg-transparent py-2.5 text-base outline-none transition-all duration-300"
                        style={{
                          color: PALETTE.INK,
                          borderColor: PALETTE.BORDER,
                        }}
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-0 top-2.5 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 pointer-events-none peer-focus:-top-3.5 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                        style={{ color: PALETTE.INK_FAINT }}
                      >
                        Phone Number
                      </label>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <input
                      required
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder=" "
                      className="peer w-full border-b-2 bg-transparent py-2.5 text-base outline-none transition-all duration-300"
                      style={{
                        color: PALETTE.INK,
                        borderColor: PALETTE.BORDER,
                      }}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 top-2.5 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 pointer-events-none peer-focus:-top-3.5 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                      style={{ color: PALETTE.INK_FAINT }}
                    >
                      Email Address *
                    </label>
                  </div>

                  {/* Custom Project Type Dropdown */}
                  <div className="relative">
                    <span
                      className="block text-[10px] font-bold uppercase tracking-[0.15em] mb-1"
                      style={{ color: PALETTE.INK_FAINT }}
                    >
                      Project Type
                    </span>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full border-b-2 bg-transparent py-2.5 text-left text-base outline-none flex items-center justify-between transition-colors"
                      style={{
                        color: PALETTE.INK,
                        borderColor: PALETTE.BORDER,
                      }}
                    >
                      <span>{form.projectType}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                        style={{ color: PALETTE.INK_FAINT }}
                      />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-20 left-0 right-0 mt-2 py-2 rounded-xl border shadow-2xl overflow-hidden"
                          style={{
                            backgroundColor: PALETTE.PAPER_PURE,
                            borderColor: PALETTE.BORDER,
                          }}
                        >
                          {PROJECT_TYPES.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => {
                                update("projectType", type);
                                setDropdownOpen(false);
                              }}
                              className="w-full text-left px-4 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 flex items-center justify-between"
                              style={{ color: PALETTE.INK }}
                            >
                              {type}
                              {form.projectType === type && (
                                <div
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: PALETTE.LAMB_GOLD }}
                                />
                              )}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <textarea
                      required
                      rows={3}
                      id="message"
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder=" "
                      className="peer w-full border-b-2 bg-transparent py-2.5 text-base outline-none transition-all duration-300 resize-none"
                      style={{
                        color: PALETTE.INK,
                        borderColor: PALETTE.BORDER,
                      }}
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-0 top-2.5 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 pointer-events-none peer-focus:-top-3.5 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                      style={{ color: PALETTE.INK_FAINT }}
                    >
                      Project Details & Timeline *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === "submitting"}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] shadow-lg transition-all disabled:opacity-60 cursor-pointer overflow-hidden relative group"
                    style={{
                      backgroundColor: PALETTE.LAMB_GOLD,
                      color: PALETTE.INK,
                    }}
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        <span>Submit Brief</span>
                        <Send
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Contact Details & Status Card               */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden border shadow-2xl"
            style={{
              backgroundColor: PALETTE.INK,
              borderColor: PALETTE.BORDER_DARK,
            }}
          >
            {/* Top Section */}
            <div>
              {/* Studio Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[11px] font-medium text-white/80 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <Clock size={12} className="ml-1 opacity-60" />
                <span>IST (UTC+5:30) • Open for Commissions</span>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white"
              >
                Reach Us Directly
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Prefer a quick chat before pitching? Reach out directly to our production desk or stop by our studio space.
              </p>

              {/* Contact Links Stack */}
              <div className="mt-10 space-y-4">
                {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-white/[0.03] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: "rgb(2, 2, 2)" }}
                      >
                        <Icon size={18} style={{ color: PALETTE.LAMB_GOLD }} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                          {label}
                        </p>
                        <p className="text-sm font-semibold text-white/90">
                          {value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-white/30 transition-transform duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Quote Banner */}
            <div className="mt-12 pt-6 border-t border-white/10">
              <p className="text-xs italic text-white/50 leading-relaxed">
                “Every story deserves a frame that honors its spirit.”
              </p>
              <p
                className="mt-1 text-[11px] font-bold uppercase tracking-wider"
                style={{ color: PALETTE.LAMB_GOLD }}
              >
                — Happy Lamb Studios
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}