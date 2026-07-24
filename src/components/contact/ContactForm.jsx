import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const PROJECT_TYPES = [
  "Feature Film",
  "Commercial / Ad Film",
  "Documentary",
  "Corporate Video",
  "Music Video",
  "Other",
];

const fieldBase =
  "w-full border-0 border-b bg-transparent py-3 font-body text-[15px] outline-none transition-colors placeholder:text-[#9a9a9a] focus:border-b-2";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: PROJECT_TYPES[0],
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | sent

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    // Wire this up to your API route / email service.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  };

  return (
    <div className="w-full max-w-xl">
      <p
        className="font-mono text-[12px] tracking-[0.25em]"
        style={{ color: "#c98f00" }}
      >
        SCENE 01 — TELL US YOUR STORY
      </p>
      <h2
        className="mt-4 font-display uppercase leading-[0.95]"
        style={{ color: "#111111", fontSize: "clamp(1.9rem, 3.4vw, 2.75rem)" }}
      >
        Pitch the project
      </h2>

      {status === "sent" ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 flex items-start gap-3 rounded-md border p-5 shadow-sm"
          style={{ borderColor: "#ffba00", backgroundColor: "#fff8e6" }}
        >
          <CheckCircle2
            size={20}
            style={{ color: "#c98f00" }}
            className="mt-0.5 shrink-0"
          />
          <div>
            <p className="font-body text-[15px]" style={{ color: "#111111" }}>
              Enquiry received.
            </p>
            <p
              className="mt-1 font-body text-[13px]"
              style={{ color: "#6a6a6a" }}
            >
              A producer from our team will follow up within one working day.
            </p>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 space-y-7">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            <label className="block">
              <span
                className="font-mono text-[11px] tracking-[0.15em]"
                style={{ color: "#8a8a8a" }}
              >
                NAME
              </span>
              <input
                required
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="Your full name"
                className={fieldBase}
                style={{ color: "#111111", borderColor: "#d8d2c2" }}
                onFocus={(e) => (e.target.style.borderColor = "#ffba00")}
                onBlur={(e) => (e.target.style.borderColor = "#d8d2c2")}
              />
            </label>

            <label className="block">
              <span
                className="font-mono text-[11px] tracking-[0.15em]"
                style={{ color: "#8a8a8a" }}
              >
                PHONE
              </span>
              <input
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="+91 00000 00000"
                className={fieldBase}
                style={{ color: "#111111", borderColor: "#d8d2c2" }}
                onFocus={(e) => (e.target.style.borderColor = "#ffba00")}
                onBlur={(e) => (e.target.style.borderColor = "#d8d2c2")}
              />
            </label>
          </div>

          <label className="block">
            <span
              className="font-mono text-[11px] tracking-[0.15em]"
              style={{ color: "#8a8a8a" }}
            >
              EMAIL
            </span>
            <input
              required
              type="email"
              value={form.email}
              onChange={update("email")}
              placeholder="you@studio.com"
              className={fieldBase}
              style={{ color: "#111111", borderColor: "#d8d2c2" }}
              onFocus={(e) => (e.target.style.borderColor = "#ffba00")}
              onBlur={(e) => (e.target.style.borderColor = "#d8d2c2")}
            />
          </label>

          <label className="block">
            <span
              className="font-mono text-[11px] tracking-[0.15em]"
              style={{ color: "#8a8a8a" }}
            >
              PROJECT TYPE
            </span>
            <select
              value={form.projectType}
              onChange={update("projectType")}
              className={`${fieldBase} appearance-none`}
              style={{ color: "#111111", borderColor: "#d8d2c2" }}
              onFocus={(e) => (e.target.style.borderColor = "#ffba00")}
              onBlur={(e) => (e.target.style.borderColor = "#d8d2c2")}
            >
              {PROJECT_TYPES.map((t) => (
                <option
                  key={t}
                  value={t}
                  style={{ backgroundColor: "#ffffff" }}
                >
                  {t}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span
              className="font-mono text-[11px] tracking-[0.15em]"
              style={{ color: "#8a8a8a" }}
            >
              MESSAGE
            </span>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={update("message")}
              placeholder="A few lines on the project, timeline, and budget range."
              className={`${fieldBase} resize-none`}
              style={{ color: "#111111", borderColor: "#d8d2c2" }}
              onFocus={(e) => (e.target.style.borderColor = "#ffba00")}
              onBlur={(e) => (e.target.style.borderColor = "#d8d2c2")}
            />
          </label>

          <motion.button
            type="submit"
            disabled={status === "submitting"}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="mt-2 inline-flex items-center gap-2 px-7 py-3 font-mono text-[12px] tracking-[0.2em] transition-opacity disabled:opacity-60"
            style={{ backgroundColor: "#ffba00", color: "#000000" }}
          >
            {status === "submitting" ? "SENDING…" : "SUBMIT ENQUIRY"}
            <Send size={14} />
          </motion.button>
        </form>
      )}
    </div>
  );
}
