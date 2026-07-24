import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowUpRight, Sparkles, Volume2, VolumeX, ShieldCheck, Film, Info } from "lucide-react";

// Brand Tokens
const BRAND = {
  gold: "#FFC72C",
  goldGradient: "linear-gradient(135deg, #FFF099 0%, #F1A80A 50%, #996500 100%)",
};

// Stats sourced from the Happy Lamb Production company dossier
const STATS = [
  { value: "2023", label: "Studio Founded" },
  { value: "5+", label: "Marquee Brand Clients" },
  { value: "6", label: "Industries Served" },
];

export default function LuxuryHero() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative min-h-screen w-full text-white overflow-hidden bg-[#0A0B0D]">

      {/* FULL-SCREEN BACKGROUND IMAGE WITH GRADIENT OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/24702547/pexels-photo-24702547.jpeg"
          alt="Happy Lamb Production - Cinematic Production Background"
          className="h-full w-full object-cover object-center scale-105 filter brightness-[0.45] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-transparent to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 pt-8 pb-16 min-h-screen flex flex-col justify-between">

        {/* HERO CONTENT GRID */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">

          {/* LEFT COLUMN: MAIN HEADLINE & COPY */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.05] uppercase">
              VISUAL STORIES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                WITHOUT BOUNDARIES
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-300 font-light max-w-xl leading-relaxed">
              Mumbai-based creative studio delivering films, design, photography, animation, advertising, and digital storytelling.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#showreel"
                className="group inline-flex items-center gap-3 rounded-xl px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-black shadow-xl"
                style={{ background: BRAND.goldGradient }}
              >
                <Play className="h-4 w-4 fill-black transition-transform group-hover:scale-110" />
                <span>Watch Showreel</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10"
              >
                <span>View Our Projects</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM METRICS PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-2xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center border-b sm:border-b-0 sm:border-r border-white/10 last:border-0 pb-4 sm:pb-0"
              >
                <span className="text-3xl font-extrabold text-amber-400">{stat.value}</span>
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}