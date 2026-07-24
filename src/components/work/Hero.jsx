import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles, Film, Filter, Clapperboard } from "lucide-react";

/**
 * Design tokens — grounded in the Happy Lamb Production identity
 */
const INK = "#0A0A0A";       // Deep charcoal/black
const LAMB_GOLD = "#FFC72C"; // Exact studio gold-yellow
const PAPER = "#F3EFE4";     // Warm cream accent
// const CLIENTS = ["ICICI BANK", "GODREJ", "JCB INDIA", "BAJAJ V", "UPSTOX"];

// Portfolio Key Metrics
const WORK_STATS = [
  { label: "Commercial Reels", value: "35+" },
  { label: "Documentary Shorts", value: "12" },
  { label: "Music Videos", value: "18" },
  { label: "Combined Views", value: "15M+" },
];

// High-impact cinema camera background
const BG_IMAGE = "7.png";

// Filmstrip Ticker Component
const FilmstripTicker = () => {
  const reduceMotion = useReducedMotion();
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {CLIENTS.map((c, i) => (
        <span key={i} className="flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-[#17140F] whitespace-nowrap">
          {c}
          <span className="h-1.5 w-1.5 rounded-full bg-[#17140F]/50" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="relative w-full overflow-hidden border-y-2 border-[#17140F] shadow-lg"
      style={{
        background: LAMB_GOLD,
        backgroundImage:
          "radial-gradient(circle, rgba(23,20,15,0.6) 1.8px, transparent 1.8px)",
        backgroundSize: "14px 100%",
        backgroundPosition: "0 4px, 0 calc(100% - 4px)",
        backgroundRepeat: "repeat-x",
      }}
    >
      <div className="flex items-center py-3 px-2">
        <div className={reduceMotion ? "flex" : "flex animate-[hlp-scroll_28s_linear_infinite]"}>
          {row}
          {row}
        </div>
      </div>
      <style>{`
        @keyframes hlp-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default function WorkHero() {
  return (
    <section className="relative w-full text-[#F3EFE4] overflow-hidden bg-black">
      
      {/* Background Image Layer with Vignette Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG_IMAGE}
          alt="Studio film set background"
          className="h-full w-full object-cover object-center scale-105"
        />
      </div>


      <div className="mx-auto max-w-7xl px-6 sm:px-8 pt-16 pb-24 relative z-10">

        {/* Hero Main Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          
          {/* Left Column — Headline & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-black uppercase leading-[0.98] tracking-tight text-white"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              Selected works &
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                cinematic stories
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-[#F3EFE4]/80 leading-relaxed max-w-2xl font-light"
            >
              Explore our complete collection of commercial ad films, high-speed automotive spots, music videos, and travel documentaries filmed across 15+ countries.
            </motion.p>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="pt-4 flex flex-wrap items-center gap-4"
            >
              <a
                href="#featured-grid"
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#17140F] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-transform"
                style={{ background: LAMB_GOLD }}
              >
                <Filter className="h-4 w-4" />
                <span>Filter Projects</span>
              </a>

              <a
                href="#showreel"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 hover:border-amber-400/40 transition-all"
              >
                <Play className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span>Play 2026 Showreel</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/10"
        >
          {WORK_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-1">
              <span className="font-black text-3xl sm:text-5xl tracking-tight" style={{ color: LAMB_GOLD }}>
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white/60 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}