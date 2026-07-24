import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Film, Award, Clapperboard, Sparkles } from "lucide-react";

// Color Palette
const COLORS = {
  INK: "#17140F",
  INK_MUTED: "rgba(23, 20, 15, 0.65)",
  INK_FAINT: "rgba(23, 20, 15, 0.4)",
  GOLD: "#FFC72C",
  GOLD_DEEP: "#B9860A",
  BORDER: "rgba(23, 20, 15, 0.12)",
  BORDER_HOVER: "rgba(185, 134, 10, 0.35)",
  CARD_BG: "#FFFFFF",
};

const STATS = [
  { value: 12, suffix: "+", label: "Years in production", icon: Film },
  { value: 340, suffix: "+", label: "Projects delivered", icon: Clapperboard },
  { value: 28, suffix: "", label: "Awards & nominations", icon: Award },
  { value: 96, suffix: "%", label: "Repeat clients", icon: Sparkles },
];

function useCountUp(target, active, duration = 1.4) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(stat.value, inView);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl border p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden"
      style={{
        backgroundColor: COLORS.CARD_BG,
        borderColor: COLORS.BORDER,
      }}
    >
      {/* Top Accent Highlight */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, ${COLORS.GOLD}, ${COLORS.GOLD_DEEP})`,
        }}
      />

      <div className="flex items-center justify-between gap-2">
        <div 
          className="flex h-10 w-10 items-center justify-center rounded-xl border transition-colors group-hover:border-amber-400/40"
          style={{ 
            backgroundColor: "rgba(255, 199, 44, 0.12)",
            borderColor: "rgba(185, 134, 10, 0.2)",
          }}
        >
          <Icon size={18} style={{ color: COLORS.GOLD_DEEP }} />
        </div>
      </div>

      <div className="mt-6">
        <p className="font-black tracking-tight leading-none text-4xl sm:text-5xl lg:text-6xl text-stone-900">
          {count}
          <span className="bg-gradient-to-r from-[#FFC72C] via-[#FFBA00] to-[#B9860A] bg-clip-text text-transparent ml-1">
            {stat.suffix}
          </span>
        </p>

        <p 
          className="mt-3 font-mono text-xs font-bold tracking-[0.15em] uppercase"
          style={{ color: COLORS.INK_MUTED }}
        >
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}

export default function TeamStats() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-12">
        
        {/* Header Section */}
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[0.98]"
            style={{ color: COLORS.INK }}
          >
            A track record, not just a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              showreel
            </span>
          </motion.h2>

          <p 
            className="mt-3 text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.INK_MUTED }}
          >
            Quantifiable results behind every frame. From feature productions to high-impact commercial campaigns.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}