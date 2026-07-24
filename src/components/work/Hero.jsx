import { motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles, Film, Eye, Filter } from "lucide-react";

// Portfolio Key Metrics
const WORK_STATS = [
  { label: "Commercial Reels", value: "35+" },
  { label: "Documentary Shorts", value: "12" },
  { label: "Music Videos", value: "18" },
  { label: "Combined Views", value: "15M+" },
];

export default function WorkHero() {
  return (
    <section className="relative w-full bg-[#0f1012] text-white pt-32 pb-20 overflow-hidden border-b border-white/10">
      
      {/* Background Cinematic Glows */}
      <div className="absolute top-0 left-1/3 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-amber-600/5 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        
        {/* Top Status & Tag Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Complete Filmography</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Updated 2026 Archive</span>
          </motion.div>
        </div>

        {/* Hero Main Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Description (Spans 7 cols) */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]"
            >
              Selected Works & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Cinematic Stories.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              Explore our complete collection of commercial films, high-speed automotive spots, music videos, and travel documentaries filmed across 15+ countries.
            </motion.p>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#featured-grid"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg hover:bg-amber-300 transition-colors"
              >
                <Filter className="h-4 w-4" />
                <span>Filter Projects</span>
              </a>

              <a
                href="#showreel"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors backdrop-blur-md"
              >
                <Play className="h-3.5 w-3.5 fill-white" />
                <span>Play 2026 Showreel</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Showreel Highlight Frame (Spans 5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#16171b]">
              <img
                src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop"
                alt="Showreel Preview"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1012] via-transparent to-black/40" />

              {/* Badge Overlay Top */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-amber-400 backdrop-blur-md">
                  <Film className="h-3.5 w-3.5" />
                  <span>2026 Director's Cut</span>
                </span>
                <span className="text-xs font-mono font-medium text-white/80 bg-black/70 px-2.5 py-0.5 rounded-md backdrop-blur-md">
                  02:30
                </span>
              </div>

              {/* Central Play Trigger */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#showreel"
                  aria-label="Play Reel"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-black shadow-2xl"
                >
                  <Play className="h-7 w-7 fill-black translate-x-0.5" />
                </motion.a>
              </div>

              {/* Bottom Details Bar */}
              <div className="absolute bottom-4 inset-x-4 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-md flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white block">Official Master Reel</span>
                  <span className="text-slate-400">RED V-Raptor 8K & Anamorphic</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-amber-400" />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Filmography Numbers Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/10"
        >
          {WORK_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl sm:text-5xl font-black font-mono text-amber-400">
                {stat.value}
              </span>
              <span className="mt-1 text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}