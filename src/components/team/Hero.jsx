import { motion } from "framer-motion";
import { Sparkles, Users, Award, Camera, ArrowUpRight, Film } from "lucide-react";

const INK = "#0a0a0a";
const LAMB_GOLD = "#FFC72C";

// Cinema crew / studio background image
const BG_IMAGE = "4.png";

const STATS = [
  { label: "Creative Minds", value: "50+" },
  { label: "National Campaigns", value: "120+" },
  { label: "Industry Awards", value: "18" },
];

export default function TeamHero() {
  return (
    <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden px-6 lg:px-[96px] py-20 bg-black text-white">
      
      {/* Background Image Layer with Layered Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG_IMAGE}
          alt="Production crew on set background"
          className="h-full w-full object-cover object-center scale-105"
        />
        {/* Gradients for high text contrast */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, rgba(255,199,44,0.12) 0%, rgba(0,0,0,0.85) 75%)",
          }}
        /> */}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-12">
        
        {/* Left Column — Manifesto */}
        <div className="lg:col-span-7 space-y-6">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-bold uppercase leading-[0.98] tracking-tight text-white"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)" }}
          >
            Meet the minds
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              crafting iconic
            </span>
            <br />
            stories
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-lg text-[15px] leading-relaxed text-[#F3EFE4]/80 font-light"
          >
            From visionary directors and scriptwriters to Bollywood campaign producers and technical crew — we are a collective of creators obsessed with making brands unforgettable.
          </motion.p>

          {/* Quick Stats Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="pt-6 grid grid-cols-3 gap-4 max-w-lg border-t border-white/10"
          >
            {STATS.map((stat, index) => (
              <div key={index} className="space-y-1">
                <p className="text-2xl sm:text-3xl font-black text-white">{stat.value}</p>
                <p className="text-[11px] uppercase font-bold font-heading tracking-wider text-white/50">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}