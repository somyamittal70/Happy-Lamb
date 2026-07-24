import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "What kind of projects do you take on?",
    a: "Feature films, commercials, documentaries, corporate videos, and music videos — from concept to final grade. If it needs a camera and a story, we're set up for it.",
  },
  {
    q: "How far in advance should we book?",
    a: "For commercial and corporate work, 3–4 weeks ahead is comfortable. Feature and documentary projects usually need a longer pre-production runway — the earlier you loop us in, the more room we have to plan the shoot properly.",
  },
  {
    q: "Do you handle post-production too?",
    a: "Yes — editing, color grading, sound design, and VFX all happen in-house. One team carries the project from set to final delivery, so nothing gets lost in translation.",
  },
  {
    q: "Can you shoot on location outside Delhi NCR?",
    a: "Regularly. We travel for feature and commercial shoots across India and can scope international locations on request — logistics and permits included in the quote.",
  },
  {
    q: "What's included in a typical quote?",
    a: "Crew, equipment, locations, basic post-production, and a dedicated producer as your single point of contact. Anything project-specific — drone units, VFX-heavy sequences, extended shoot days — is scoped separately and flagged upfront.",
  },
  {
    q: "How do we start the conversation?",
    a: "Send us a few lines on the project through the form above — timeline, budget range, and references if you have them. A producer replies within one working day to set up a call.",
  },
];

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="overflow-hidden rounded-md border"
      style={{
        borderColor: isOpen ? "#ffba00" : "#222222",
        backgroundColor: "#0a0a0a",
      }}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-5 py-5 text-left"
      >
        <span
          className="font-mono text-[12px] tracking-[0.1em]"
          style={{ color: isOpen ? "#ffba00" : "#5a5a5a" }}
        >
          Q{String(index + 1).padStart(2, "0")}
        </span>
        <span
          className="flex-1 font-body text-[15px] leading-snug"
          style={{ color: "#ffffff" }}
        >
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border"
          style={{ borderColor: isOpen ? "#ffba00" : "#2a2a2a" }}
        >
          <Plus size={13} style={{ color: isOpen ? "#ffba00" : "#8a8a8a" }} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-5"
          >
            <p
              className="pb-5 pl-[46px] font-body text-[14px] leading-relaxed"
              style={{ color: "#9a9a9a" }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState();

  const left = FAQS.slice(0, 3);
  const right = FAQS.slice(3, 6);

  const toggle = (i) => setOpenIndex((current) => (current === i ? null : i));

  return (
    <section
      className="relative w-full px-6 py-24 lg:px-[96px] lg:py-32"
      style={{ backgroundColor: "#050505" }}
    >
      <p
        className="font-mono text-[12px] tracking-[0.25em]"
        style={{ color: "#ffba00" }}
      >
        SCENE 04 — QUESTIONS ON SET
      </p>
      <h2
        className="mt-4 max-w-xl font-display uppercase leading-[0.95]"
        style={{ color: "#ffffff", fontSize: "clamp(1.9rem, 3.4vw, 2.75rem)" }}
      >
        Frequently asked
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-4">
        <div className="flex flex-col gap-4">
          {left.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {right.map((item, i) => {
            const globalIndex = i + 3;
            return (
              <FAQItem
                key={item.q}
                item={item}
                index={globalIndex}
                isOpen={openIndex === globalIndex}
                onToggle={() => toggle(globalIndex)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
