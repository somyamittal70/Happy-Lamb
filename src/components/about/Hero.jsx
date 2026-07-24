import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles, Clapperboard, Award, Film } from "lucide-react";

/**
 * Design tokens — grounded in the Happy Lamb Production logo
 */
const INK = "#0A0A0A";       // Deep charcoal/black
const LAMB_GOLD = "#FFC72C"; // Exact studio yellow
const PAPER = "#F3EFE4";     // Warm cream accent
const CLIENTS = ["ICICI BANK", "GODREJ", "JCB INDIA", "BAJAJ V", "UPSTOX"];

const STATS = [
  { value: "2023", label: "Studio Founded" },
  { value: "3", label: "Film, Design & Digital" },
  { value: "6+", label: "Industries Served" },
  { value: "5+", label: "Marquee Brand Clients" },
];

// High-impact cinema studio visual background
const HERO_BG_IMAGE = "3.png";

// Repeating sprocket-hole filmstrip ticker
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

export default function AboutHero() {
  return (
    <section className="relative w-full text-[#F3EFE4] overflow-hidden bg-black">
      
      {/* Background Image Layer with Layered Cinematic Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG_IMAGE}
          alt="Film production camera background"
          className="h-full w-full object-cover object-center scale-105"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 pt-16 pb-24 relative z-10">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          
          {/* Left Column — Manifesto & Typography */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-black uppercase leading-[0.98] tracking-tight text-white"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              Gentle name.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                Bold production
              </span>
              <br />
              standards.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-[#F3EFE4]/80 leading-relaxed max-w-2xl font-light"
            >
              Happy Lamb Production is a Mumbai-based creative studio founded by <span className="text-white font-medium">Dilip Gupta</span>, specializing in commercial films, animation, photography, and digital content that brings brands to life.
            </motion.p>
          </div>
        </div>

        {/* Stats Section Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-15 grid grid-cols-2 lg:grid-cols-4 gap-2 pt-10 border-t border-white/10"
        >
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-1">
              <span className="font-black text-2xl sm:text-3xl tracking-tight" style={{ color: LAMB_GOLD }}>
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