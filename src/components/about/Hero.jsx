import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Film, Play } from "lucide-react";

/**
 * Design tokens — grounded in the Happy Lamb Production logo
 * (gold-yellow circle, charcoal-ink sheep mark) and the studio's
 * own tension: a gentle brand name paired with high-impact production.
 */
const INK = "#17140F";       // warm charcoal, not pure black — matches logo's dark mark
const LAMB_GOLD = "#FFC72C"; // exact logo yellow
const PAPER = "#F3EFE4";     // warm cream, used sparingly for contrast
const CLIENTS = ["ICICI BANK", "GODREJ", "JCB INDIA", "BAJAJ V", "UPSTOX"];

const STATS = [
  { value: "2023", label: "Studio Founded" },
  { value: "3", label: "Core Disciplines — Film, Design, Digital" },
  { value: "6", label: "Industries Served" },
  { value: "5+", label: "Marquee Brand Clients" },
];

// Repeating sprocket-hole pattern — a real filmstrip detail, not decoration
const FilmstripTicker = () => {
  const reduceMotion = useReducedMotion();
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {CLIENTS.map((c, i) => (
        <span key={i} className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-[#17140F]/70 whitespace-nowrap">
          {c}
          <span className="h-1 w-1 rounded-full bg-[#17140F]/40" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="relative w-full overflow-hidden border-y-2 border-[#17140F]"
      style={{
        background: LAMB_GOLD,
        backgroundImage:
          "radial-gradient(circle, rgba(23,20,15,0.55) 1.6px, transparent 1.6px)",
        backgroundSize: "14px 100%",
        backgroundPosition: "0 4px, 0 calc(100% - 4px)",
        backgroundRepeat: "repeat-x",
      }}
    >
      <div className="flex items-center py-2.5 px-2">
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
    <section className="relative w-full text-[#F3EFE4] overflow-hidden" style={{ background: INK }}>
      {/* Subtle warm grain / vignette instead of a plain flat dark bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-amber-400/10 blur-[160px]" />

      {/* SIGNATURE: filmstrip credits ticker, running real client names from the dossier */}
      <FilmstripTicker />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 pt-16 pb-24 relative z-10">
        {/* Eyebrow row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-10">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#F3EFE4]/15 bg-[#F3EFE4]/[0.04] px-3.5 py-1.5 text-xs font-medium text-[#F3EFE4]/80"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Currently taking on new productions</span>
          </motion.div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Left: headline + copy */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-serif text-4xl sm:text-6xl leading-[1.08] tracking-tight"
            >
              Gentle name and{" "}
              <span className="italic font-light" style={{ color: LAMB_GOLD }}>
                Bold production
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-base sm:text-lg text-[#F3EFE4]/70 leading-relaxed max-w-2xl font-light"
            >
              Happy Lamb Production is a Mumbai-based creative studio founded by industry
              veteran Dilip Gupta, building end-to-end visual narratives across film,
              design, and digital media — from ad films and animation to photography,
              advertising, and social content.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#17140F] shadow-lg transition-transform hover:-translate-y-0.5"
                style={{ background: LAMB_GOLD }}
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-[#F3EFE4]/20 bg-[#F3EFE4]/5 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#F3EFE4] hover:bg-[#F3EFE4]/10 transition-colors"
              >
                <Play className="h-3.5 w-3.5 fill-[#F3EFE4]" />
                <span>See Client Work</span>
              </a>
            </motion.div>
          </div>

          {/* Right: clapperboard-styled panel — real production artifact, not a stock headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl overflow-hidden border border-[#F3EFE4]/10 shadow-2xl">
              {/* Clapperboard top: diagonal stripes */}
              <div
                className="h-10 w-full"
                style={{
                  backgroundImage: `repeating-linear-gradient(-45deg, ${INK} 0 18px, ${PAPER} 18px 36px)`,
                }}
              />
              <div className="p-6" style={{ background: "#1E1B14" }}>
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-widest text-[#F3EFE4]/50">
                  <span>Production</span>
                  <span>Take 01</span>
                </div>
                <div className="mt-4 flex items-baseline justify-between border-b border-[#F3EFE4]/10 pb-4">
                  <span className="font-serif text-2xl text-[#F3EFE4]">Happy Lamb</span>
                  <span className="text-xs text-[#F3EFE4]/50">Est. 2023</span>
                </div>

                {/* Client roster — the studio's real work, standing in for a portfolio reel */}
                <ul className="mt-5 space-y-3">
                  {CLIENTS.map((c, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between text-sm text-[#F3EFE4]/80 border-b border-[#F3EFE4]/5 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="tracking-wide">{c}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#F3EFE4]/30" />
                    </li>
                  ))}
                </ul>

                <a
                  href="#projects"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                  style={{ color: LAMB_GOLD }}
                >
                  <span>View full slate</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar — real, verifiable facts rather than filler numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-[#F3EFE4]/10"
        >
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-serif text-3xl sm:text-5xl" style={{ color: LAMB_GOLD }}>
                {stat.value}
              </span>
              <span className="mt-2 text-xs sm:text-sm font-medium text-[#F3EFE4]/50 uppercase tracking-wider max-w-[16ch]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}