import { motion } from "framer-motion";
import { Sparkles, BookOpen, Clock, ArrowUpRight, TrendingUp, Newspaper } from "lucide-react";

const INK = "#0a0a0a";
const LAMB_GOLD = "#FFC72C";

// Cinema & Editorial Background Image
const BG_IMAGE = "2.png";

// Featured Blog Article Highlight
const FEATURED_POST = {
  category: "Production Insights",
  title: "The Art of Anamorphic Lenses in Modern Brand Commercials",
  readTime: "6 min read",
  date: "2026 Edition",
  image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop",
};

const TRENDING_TOPICS = [
  { name: "Directing", count: "14 articles" },
  { name: "Cinematography", count: "22 articles" },
  { name: "Post-Production", count: "18 articles" },
];

export default function BlogHero() {
  return (
    <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden px-6 lg:px-[96px] py-20 bg-black text-white">
      
      {/* Background Image Layer with Vignette Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG_IMAGE}
          alt="Studio set and lens background"
          className="h-full w-full object-cover object-center scale-105"
        />
        {/* Layered Vignette and Gradient Overlays */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" /> */}
        {/* <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, rgba(255,199,44,0.12) 0%, rgba(0,0,0,0.85) 75%)",
          }}
        /> */}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-12">
        
        {/* Left Column — Editorial Manifesto & Header */}
        <div className="lg:col-span-7 space-y-6">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black uppercase leading-[0.98] tracking-tight text-white"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)" }}
          >
            Behind the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              scenes & story
            </span>
            <br />
            craft
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-lg text-[15px] leading-relaxed text-[#F3EFE4]/80 font-light"
          >
            Deep dives into filmmaking techniques, campaign breakdowns, lighting setups, and industry insights directly from our directors, producers, and creative crew.
          </motion.p>

          {/* Quick Category / Trending Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="pt-4 border-t border-white/10"
          >
            <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-3 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" /> Popular Categories
            </p>
            <div className="flex flex-wrap gap-2">
              {TRENDING_TOPICS.map((topic, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-white/80 hover:border-amber-400/40 transition-colors cursor-pointer"
                >
                  {topic.name} <span className="text-amber-400 text-[10px] ml-1">({topic.count})</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}