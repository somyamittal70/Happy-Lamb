import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const INK = "#17140F";
const LAMB_GOLD = "#FFC72C";
const PAPER = "#FFFFFF";
const BORDER = "rgba(23,20,15,0.15)";

const PROJECT_TYPES = [
  "Feature Film",
  "Commercial / Ad Film",
  "Documentary",
  "Corporate Video",
  "Music Video",
  "Other",
];

const fieldBase =
  "w-full border-0 border-b bg-transparent py-3 text-[15px] outline-none transition-colors placeholder:text-[#17140F]/35 focus:border-b-2";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: PROJECT_TYPES[0],
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | sent

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    // Wire this up to your API route / email service.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl rounded-2xl border p-8 sm:p-10 shadow-sm" 
      style={{ background: PAPER, borderColor: BORDER }}
    >
      <motion.p 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-xs font-bold uppercase tracking-[0.3em]" 
        style={{ color: "#B9860A" }}
      >
        Tell Us Your Story
      </motion.p>
      
      <motion.h2
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-3 font-black uppercase leading-[0.98] tracking-tight"
        style={{ color: INK, fontSize: "clamp(1.9rem, 3.4vw, 2.75rem)" }}
      >
        Pitch the project
      </motion.h2>

      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="mt-10 flex items-start gap-3 rounded-xl border p-5"
            style={{ borderColor: "rgba(255,199,44,0.4)", backgroundColor: "rgba(255,199,44,0.1)" }}
          >
            <CheckCircle2 size={20} style={{ color: "#B9860A" }} className="mt-0.5 shrink-0" />
            <div>
              <p className="text-[15px] font-semibold" style={{ color: INK }}>
                Enquiry received.
              </p>
              <p className="mt-1 text-[13px]" style={{ color: "rgba(23,20,15,0.6)" }}>
                A producer from our team will follow up shortly.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            onSubmit={handleSubmit} 
            className="mt-10 space-y-7"
          >
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
              <label className="block">
                <span className="text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: "rgba(23,20,15,0.45)" }}>
                  Name
                </span>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your full name"
                  className={fieldBase}
                  style={{ color: INK, borderColor: BORDER }}
                  onFocus={(e) => (e.target.style.borderColor = LAMB_GOLD)}
                  onBlur={(e) => (e.target.style.borderColor = BORDER)}
                />
              </label>

              <label className="block">
                <span className="text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: "rgba(23,20,15,0.45)" }}>
                  Phone
                </span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+91 00000 00000"
                  className={fieldBase}
                  style={{ color: INK, borderColor: BORDER }}
                  onFocus={(e) => (e.target.style.borderColor = LAMB_GOLD)}
                  onBlur={(e) => (e.target.style.borderColor = BORDER)}
                />
              </label>
            </div>

            <label className="block">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: "rgba(23,20,15,0.45)" }}>
                Email
              </span>
              <input
                required
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@studio.com"
                className={fieldBase}
                style={{ color: INK, borderColor: BORDER }}
                onFocus={(e) => (e.target.style.borderColor = LAMB_GOLD)}
                onBlur={(e) => (e.target.style.borderColor = BORDER)}
              />
            </label>

            <label className="block">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: "rgba(23,20,15,0.45)" }}>
                Project Type
              </span>
              <select
                value={form.projectType}
                onChange={update("projectType")}
                className={`${fieldBase} appearance-none cursor-pointer`}
                style={{ color: INK, borderColor: BORDER }}
                onFocus={(e) => (e.target.style.borderColor = LAMB_GOLD)}
                onBlur={(e) => (e.target.style.borderColor = BORDER)}
              >
                {PROJECT_TYPES.map((t) => (
                  <option key={t} value={t} style={{ backgroundColor: "#ffffff" }}>
                    {t}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: "rgba(23,20,15,0.45)" }}>
                Message
              </span>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={update("message")}
                placeholder="A few lines on the project, timeline, and budget range."
                className={`${fieldBase} resize-none`}
                style={{ color: INK, borderColor: BORDER }}
                onFocus={(e) => (e.target.style.borderColor = LAMB_GOLD)}
                onBlur={(e) => (e.target.style.borderColor = BORDER)}
              />
            </label>

            <motion.button
              type="submit"
              disabled={status === "submitting"}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="mt-2 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] shadow-md transition-opacity disabled:opacity-60 cursor-pointer"
              style={{ backgroundColor: LAMB_GOLD, color: INK }}
            >
              {status === "submitting" ? (
                <motion.span 
                  animate={{ opacity: [0.4, 1, 0.4] }} 
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  Sending…
                </motion.span>
              ) : (
                "Submit Enquiry"
              )}
              <motion.div animate={{ x: status === "submitting" ? 3 : 0 }}>
                <Send size={14} />
              </motion.div>
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}