import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Eye, Play, Sparkles } from "lucide-react";

// Inline SVG Icons for Platforms & Specs
const SVGIcons = {
  youtube: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.3 9.5L14.8 12L10.3 14.5V9.5Z" fill="currentColor" />
    </svg>
  ),
  instagram: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  ),
  vimeo: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 7.5c-.1 2.3-1.7 5.4-4.8 9.4-3.2 4.1-5.9 6.1-8.1 6.1-1.4 0-2.5-.5-3.3-1.6-.8-1.1-1.6-3.3-2.4-6.6-.8-3.4-1.6-5.1-2.4-5.1-.2 0-.8.4-1.8 1.2L0 9.6c1.1-1 2.3-2 3.6-3 1.8-1.5 3.1-2.3 4-2.3 1.4 0 2.3.9 2.7 2.7.5 2.4.9 4.8 1.2 7.2.4 2.1.9 3.1 1.5 3.1.5 0 1.2-.7 2.1-2.1.9-1.4 1.4-2.6 1.4-3.5 0-1.2-.5-1.8-1.5-1.8-.5 0-1 .1-1.6.3 1.1-3.4 3.1-5 6.1-4.8 2.2.1 3.2 1.5 2.9 4.1z"
        fill="currentColor"
      />
    </svg>
  ),
  filmStrip: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 4V20M17 4V20M3 8H7M17 8H21M3 12H21M3 16H7M17 16H21" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};

// Portfolio Categories
const CATEGORIES = ["All Projects", "Commercial", "Travel & Documentary", "Music Videos"];

// Portfolio Items
const PROJECTS = [
  {
    id: 1,
    title: "Tokyo Cyberpunk After Dark",
    category: "Travel & Documentary",
    client: "Sony Alpha Films",
    platform: "youtube",
    views: "1.8M",
    duration: "04:15",
    thumbnail: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Porsche GT3 RS: Precision in Motion",
    category: "Commercial",
    client: "Porsche Global",
    platform: "vimeo",
    views: "950K",
    duration: "01:30",
    thumbnail: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "Echoes in the Desert",
    category: "Music Videos",
    client: "Universal Music",
    platform: "youtube",
    views: "3.4M",
    duration: "03:45",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Nordic Winter Expedition",
    category: "Travel & Documentary",
    client: "National Geographic",
    platform: "instagram",
    views: "2.1M",
    duration: "02:10",
    thumbnail: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1000&auto=format&fit=crop",
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
    <section className="relative w-full bg-[#0f1012] text-white py-24 overflow-hidden">
      
      {/* Background Lighting Effects */}
      <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-amber-600/5 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Selected Works</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight"
            >
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Productions</span>
            </motion.h2>
          </div>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-2"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-amber-400 text-black shadow-lg"
                      : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Project Showcase Grid */}
        <motion.div layout className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl border border-white/10 bg-[#16171b] overflow-hidden flex flex-col justify-between"
              >
                {/* Media Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16171b] via-transparent to-black/40" />

                  {/* Top Badges */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-md">
                      {project.client}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-amber-400 backdrop-blur-md">
                      {SVGIcons[project.platform]}
                      <span className="capitalize">{project.platform}</span>
                    </span>
                  </div>

                  {/* Play Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-black shadow-xl"
                    >
                      <Play className="h-6 w-6 fill-black translate-x-0.5" />
                    </motion.div>
                  </div>

                  {/* Bottom Duration Badge */}
                  <div className="absolute bottom-3 right-4 text-xs font-mono font-medium text-white/80 bg-black/70 px-2.5 py-0.5 rounded-md backdrop-blur-md">
                    {project.duration}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                      {project.category}
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Eye className="h-3.5 w-3.5 text-slate-500" />
                      {project.views} Views
                    </span>

                    <span className="inline-flex items-center gap-1 text-white font-semibold group-hover:text-amber-400 transition-colors">
                      Watch Reel <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-amber-400/50"
          >
            <span>Explore Complete Filmography</span>
            <ArrowUpRight className="h-4 w-4 text-amber-400" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}