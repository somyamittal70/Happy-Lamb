import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Film, HelpCircle } from "lucide-react";

// Dark Design System Tokens
const DARK_PALETTE = {
  BG: "#050505",
  CARD_BG: "#0A0A0A",
  CARD_HOVER: "#121212",
  GOLD: "#FFC72C",
  GOLD_DEEP: "#FFBA00",
  BORDER: "rgba(255, 255, 255, 0.08)",
  BORDER_ACTIVE: "rgba(255, 199, 44, 0.4)",
  TEXT_PRIMARY: "#FFFFFF",
  TEXT_MUTED: "rgba(255, 255, 255, 0.65)",
  TEXT_FAINT: "rgba(255, 255, 255, 0.45)",
};

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
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group overflow-hidden rounded-2xl border transition-all duration-300 shadow-lg"
      style={{
        borderColor: isOpen ? DARK_PALETTE.BORDER_ACTIVE : DARK_PALETTE.BORDER,
        backgroundColor: DARK_PALETTE.CARD_BG,
      }}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors cursor-pointer hover:bg-white/[0.02]"
      >
        <div className="flex items-center gap-4">
          <span
            className="font-mono text-xs font-bold tracking-widest px-2.5 py-1 rounded-md border"
            style={{
              color: isOpen ? "#000000" : DARK_PALETTE.TEXT_FAINT,
              backgroundColor: isOpen ? DARK_PALETTE.GOLD : "transparent",
              borderColor: isOpen
                ? DARK_PALETTE.GOLD_DEEP
                : DARK_PALETTE.BORDER,
            }}
          >
            Q{String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="font-extrabold text-base sm:text-lg tracking-tight uppercase"
            style={{ color: DARK_PALETTE.TEXT_PRIMARY }}
          >
            {item.q}
          </span>
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors"
          style={{
            borderColor: isOpen ? DARK_PALETTE.GOLD_DEEP : DARK_PALETTE.BORDER,
            backgroundColor: isOpen ? DARK_PALETTE.GOLD : "transparent",
          }}
        >
          <Plus
            size={16}
            style={{ color: isOpen ? "#000000" : DARK_PALETTE.TEXT_MUTED }}
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="px-6 pb-6 pt-1 border-t text-sm sm:text-base leading-relaxed"
              style={{
                borderColor: DARK_PALETTE.BORDER,
                color: DARK_PALETTE.TEXT_MUTED,
              }}
            >
              <p
                className="pt-3 border-l-2 pl-4"
                style={{ borderColor: DARK_PALETTE.GOLD }}
              >
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  const left = FAQS.slice(0, 3);
  const right = FAQS.slice(3, 6);

  const toggle = (i) => setOpenIndex((current) => (current === i ? null : i));

  return (
    <section
      className="relative w-full px-4 py-16 sm:py-24 sm:px-8 lg:px-16 font-sans overflow-hidden"
      style={{ backgroundColor: DARK_PALETTE.BG }}
    >
      <div className="mx-auto max-w-7xl px-12">
        {/* Header Section */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em]"
            style={{ color: DARK_PALETTE.GOLD_DEEP }}
          >
            <Film size={14} />
            <span>Scene 04 — Questions On Set</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[0.95]"
            style={{ color: DARK_PALETTE.TEXT_PRIMARY }}
          >
            Frequently{" "}
            <span className="bg-gradient-to-r from-[#FFC72C] via-[#FFBA00] to-[#B9860A] bg-clip-text text-transparent">
              Asked
            </span>
          </motion.h2>

          <p
            className="mt-3 text-sm sm:text-base leading-relaxed"
            style={{ color: DARK_PALETTE.TEXT_MUTED }}
          >
            Everything you need to know about locking in a timeline, budget
            scoping, and running pre-production with our studio.
          </p>
        </div>

        {/* Two-Column Accordion Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 items-start">
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
      </div>
    </section>
  );
}
