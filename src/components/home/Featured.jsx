import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Sparkles, Film } from "lucide-react";

const INK = "#17140F";
const LAMB_GOLD = "#FFC72C";

const SVGIcons = {
  youtube: (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.3 9.5L14.8 12L10.3 14.5V9.5Z" fill="currentColor" />
    </svg>
  ),
};

const CATEGORIES = ["All Projects", "Brand Films", "Real-Life Stories", "Short Films"];

const PROJECTS = [
  {
    id: 1,
    title: "Mr. India Revival — #FundYourOwnWorth",
    category: "Brand Films",
    client: "ICICI Bank",
    platform: "youtube",
    thumbnail: "https://images.pexels.com/photos/4622108/pexels-photo-4622108.jpeg",
    featured: true,
  },
  {
    id: 2,
    title: "Home Lockers ft. Madhuri Dixit",
    category: "Brand Films",
    client: "Godrej",
    platform: "youtube",
    thumbnail: "https://images.pexels.com/photos/39624/pexels-photo-39624.jpeg",
    featured: false,
  },
  {
    id: 3,
    title: "Invincible Indians — Medicine Baba",
    category: "Real-Life Stories",
    client: "Bajaj V",
    platform: "youtube",
    thumbnail: "https://images.pexels.com/photos/19597973/pexels-photo-19597973.jpeg",
    featured: false,
  },
  {
    id: 4,
    title: "The Excavator Village Story — Unbreakable Trust",
    category: "Brand Films",
    client: "JCB India",
    platform: "youtube",
    thumbnail: "https://images.pexels.com/photos/13098128/pexels-photo-13098128.jpeg",
    featured: false,
  },
  {
    id: 5,
    title: "Iss Diwali, Kuch Naya!",
    category: "Brand Films",
    client: "Upstox",
    platform: "youtube",
    thumbnail: "https://images.pexels.com/photos/29611783/pexels-photo-29611783.jpeg",
    featured: false,
  },
];

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((item) => item.category === activeCategory);

  return (
    <section className="relative w-full text-[#F3EFE4] py-28 overflow-hidden" style={{ background: INK }}>
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 -right-32 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 h-[450px] w-[450px] rounded-full bg-amber-400/5 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-amber-300"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Selected Portfolio</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 font-black uppercase text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-none"
            >
              Crafted for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                Iconic Brands.
              </span>
            </motion.h2>
          </div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-md"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="relative rounded-xl px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 rounded-xl shadow-lg"
                      style={{ background: LAMB_GOLD }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors ${
                      isActive ? "text-black font-bold" : "text-[#F3EFE4]/60 hover:text-[#F3EFE4]"
                    }`}
                  >
                    {cat}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Projects Grid Container */}
        <motion.div layout className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isHero = activeCategory === "All Projects" && project.featured;

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group relative rounded-3xl border border-white/10 bg-[#1F1C16] overflow-hidden flex flex-col justify-between hover:border-amber-400/40 transition-colors duration-500 shadow-2xl ${
                    isHero ? "md:col-span-2 lg:col-span-2 aspect-auto" : ""
                  }`}
                >
                  {/* Media Wrapper */}
                  <div className={`relative w-full overflow-hidden bg-black/40 ${isHero ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F1C16] via-black/20 to-black/50" />

                    {/* Top Badges */}
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                      <span className="rounded-full border border-white/20 bg-black/50 px-3.5 py-1 text-xs font-medium text-[#F3EFE4] backdrop-blur-md shadow-md">
                        {project.client}
                      </span>
                      
                      <span
                        className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs font-semibold backdrop-blur-md"
                        style={{ color: LAMB_GOLD }}
                      >
                        {SVGIcons[project.platform]}
                        <span className="capitalize">{project.platform}</span>
                      </span>
                    </div>

                    {/* Interactive Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-[2px]">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex h-16 w-16 items-center justify-center rounded-full text-black shadow-2xl"
                        style={{ background: LAMB_GOLD }}
                      >
                        <Play className="h-7 w-7 fill-black translate-x-0.5" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Card Content Footer */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Film className="h-3.5 w-3.5 text-amber-400" />
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                          {project.category}
                        </span>
                      </div>
                      <h3 className={`font-bold text-[#F3EFE4] group-hover:text-amber-300 transition-colors ${isHero ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                        {project.title}
                      </h3>
                    </div>

                    {/* CTA Bar */}
                    <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#F3EFE4]/50 font-medium">
                      <span>Client: <strong className="text-[#F3EFE4] font-semibold">{project.client}</strong></span>
                      <span className="inline-flex items-center gap-1.5 text-amber-400 font-bold group-hover:translate-x-1 transition-transform duration-300">
                        Watch Film <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 flex justify-center"
        >
          <a
            href="/work"
            className="group relative inline-flex items-center gap-3 rounded-xl border border-amber-400/30 bg-white/[0.04] px-9 py-4 text-xs font-bold uppercase tracking-widest text-[#F3EFE4] backdrop-blur-md transition-all duration-300 hover:bg-amber-400 hover:text-black hover:border-amber-400 shadow-xl"
          >
            <span>Explore All Work</span>
            <ArrowUpRight className="h-4 w-4 text-amber-400 group-hover:text-black transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}