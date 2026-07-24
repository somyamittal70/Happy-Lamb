import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Eye, Play, Sparkles, Filter, Search, SlidersHorizontal } from "lucide-react";

// Platform SVGs
const SVGIcons = {
  youtube: (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.3 9.5L14.8 12L10.3 14.5V9.5Z" fill="currentColor" />
    </svg>
  ),
  vimeo: (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 7.5c-.1 2.3-1.7 5.4-4.8 9.4-3.2 4.1-5.9 6.1-8.1 6.1-1.4 0-2.5-.5-3.3-1.6-.8-1.1-1.6-3.3-2.4-6.6-.8-3.4-1.6-5.1-2.4-5.1-.2 0-.8.4-1.8 1.2L0 9.6c1.1-1 2.3-2 3.6-3 1.8-1.5 3.1-2.3 4-2.3 1.4 0 2.3.9 2.7 2.7.5 2.4.9 4.8 1.2 7.2.4 2.1.9 3.1 1.5 3.1.5 0 1.2-.7 2.1-2.1.9-1.4 1.4-2.6 1.4-3.5 0-1.2-.5-1.8-1.5-1.8-.5 0-1 .1-1.6.3 1.1-3.4 3.1-5 6.1-4.8 2.2.1 3.2 1.5 2.9 4.1z"
        fill="currentColor"
      />
    </svg>
  ),
  instagram: (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  )
};

// Portfolio Categories
const CATEGORIES = ["All Projects", "Commercial", "Automotive", "Travel & Doc", "Music Video"];

// Expanded Work List
const ALL_PROJECTS = [
  {
    id: 1,
    title: "Tokyo Cyberpunk After Dark",
    category: "Travel & Doc",
    client: "Sony Alpha Films",
    platform: "youtube",
    views: "1.8M",
    duration: "04:15",
    year: "2026",
    thumbnail: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop",
    tags: ["Anamorphic", "8K RAW", "Street Night"],
  },
  {
    id: 2,
    title: "Porsche GT3 RS: Precision in Motion",
    category: "Automotive",
    client: "Porsche Global",
    platform: "vimeo",
    views: "950K",
    duration: "01:30",
    year: "2025",
    thumbnail: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1000&auto=format&fit=crop",
    tags: ["High Speed", "FPV Drone", "Track Day"],
  },
  {
    id: 3,
    title: "Echoes in the Desert",
    category: "Music Video",
    client: "Universal Music",
    platform: "youtube",
    views: "3.4M",
    duration: "03:45",
    year: "2025",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
    tags: ["Color Grade", "Sunset", "Performers"],
  },
  {
    id: 4,
    title: "Nordic Winter Expedition",
    category: "Travel & Doc",
    client: "National Geographic",
    platform: "instagram",
    views: "2.1M",
    duration: "02:10",
    year: "2024",
    thumbnail: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1000&auto=format&fit=crop",
    tags: ["Sub-Zero", "Aerials", "Wildlife"],
  },
  {
    id: 5,
    title: "Apex Speed Demon: Superbike Spec",
    category: "Automotive",
    client: "Red Bull Media",
    platform: "youtube",
    views: "1.2M",
    duration: "02:00",
    year: "2025",
    thumbnail: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1000&auto=format&fit=crop",
    tags: ["Cinelifter", "120fps", "Motorsport"],
  },
  {
    id: 6,
    title: "Aura Apparel Autumn Launch",
    category: "Commercial",
    client: "Aura Luxury",
    platform: "vimeo",
    views: "640K",
    duration: "00:45",
    year: "2026",
    thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop",
    tags: ["Studio Lighting", "Fashion", "10-bit LOG"],
  },
];

export default function WorkGridLight() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtering Logic
  const filteredProjects = ALL_PROJECTS.filter((project) => {
    const matchesCategory =
      activeCategory === "All Projects" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="featured-grid" className="relative w-full bg-[#f8f9fa] text-slate-900 py-24 overflow-hidden border-t border-b border-slate-200">
      
      {/* Background Accent */}
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        
        {/* Controls Bar: Filter Pills + Search Input */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-200 pb-8">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
                    isActive
                      ? "bg-slate-900 text-amber-400 shadow-md"
                      : "bg-white text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by title, client, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-amber-500 focus:outline-none shadow-xs"
            />
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400/50 transition-all flex flex-col justify-between"
              >
                {/* Media Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                    <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold text-slate-200 backdrop-blur-md">
                      {project.client}
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] font-semibold text-amber-400 backdrop-blur-md">
                      {SVGIcons[project.platform]}
                      <span className="capitalize">{project.platform}</span>
                    </span>
                  </div>

                  {/* Play Hover Trigger */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/40 backdrop-blur-xs">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-black shadow-lg"
                    >
                      <Play className="h-5 w-5 fill-black translate-x-0.5" />
                    </motion.div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 text-[11px] font-mono font-semibold text-white/90 bg-slate-900/80 px-2 py-0.5 rounded-md backdrop-blur-md">
                    {project.duration}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                      <span>{project.category}</span>
                      <span className="text-slate-400 font-mono">{project.year}</span>
                    </div>

                    <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Tag Pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-600"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Row */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Eye className="h-3.5 w-3.5 text-slate-400" />
                      {project.views}
                    </span>

                    <span className="inline-flex items-center gap-1 text-slate-900 group-hover:text-amber-600 transition-colors">
                      Watch Reel <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="mt-16 text-center py-12 rounded-3xl border border-slate-200 bg-white">
            <p className="text-base font-bold text-slate-800">No projects found matching your search.</p>
            <p className="mt-1 text-xs text-slate-500">Try clearing your filters or search keywords.</p>
            <button
              onClick={() => {
                setActiveCategory("All Projects");
                setSearchQuery("");
              }}
              className="mt-4 rounded-full bg-amber-400 px-6 py-2 text-xs font-bold text-black"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}