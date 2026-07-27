import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Search } from "lucide-react";

const INK = "#17140F";
const GOLD = "#FFC72C";
const DEEP_GOLD = "#ffba00"; // text-safe variant of GOLD for use on light backgrounds

const YoutubeIcon = (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10.3 9.5L14.8 12L10.3 14.5V9.5Z" fill="currentColor" />
  </svg>
);

// Categories mirror how the dossier itself groups the work
const CATEGORIES = ["All Projects", "Brand Films", "Real-Life Stories", "Short Films"];

// Real projects, pulled from the Happy Lamb Production company dossier
const ALL_PROJECTS = [
  {
    id: 1,
    title: "Mr. India Revival ft. Anil Kapoor",
    category: "Brand Films",
    client: "ICICI Bank",
    thumbnail: "/anil.png",
    tags: ["Celebrity Led", "Banking", "Nostalgia"],
  },
  {
    id: 2,
    title: "#FundYourOwnWorth ft. Konkona Sen Sharma",
    category: "Brand Films",
    client: "ICICI Bank",
    thumbnail: "/knoon.png",
    tags: ["Women Empowerment", "Banking"],
  },
  {
    id: 3,
    title: "Campus Power: The Student Journey",
    category: "Brand Films",
    client: "ICICI Bank",
    thumbnail: "/icici.png",
    tags: ["Education Loans", "Overseas Banking"],
  },
  {
    id: 4,
    title: "Home Lockers ft. Madhuri Dixit",
    category: "Brand Films",
    client: "Godrej",
    thumbnail: "/godrej.png",
    tags: ["Security", "Legacy"],
  },
  {
    id: 5,
    title: "Matrix Home Lockers — Dual-Lock Precision",
    category: "Brand Films",
    client: "Godrej",
    thumbnail: "/godrej2.jpeg",
    tags: ["Dual-Lock", "Product Film"],
  },
  {
    id: 6,
    title: "Invincible Indians — Medicine Baba",
    category: "Real-Life Stories",
    client: "Bajaj V",
    thumbnail: "/bjaj1.png",
    tags: ["NCR", "Healthcare Access"],
  },
  {
    id: 7,
    title: "Invincible Indians — Aagun Pakhi",
    category: "Real-Life Stories",
    client: "Bajaj V",
    thumbnail: "/bjaj2.png",
    tags: ["Kolkata", "Firefighting"],
  },
  {
    id: 9,
    title: "The Excavator Village Story",
    category: "Brand Films",
    client: "JCB India",
    thumbnail: "/jcb1.png",
    tags: ["Charholi Village", "Unbreakable Trust"],
  },
  {
    id: 10,
    title: "Customer Success Story — R.V. Balaji",
    category: "Brand Films",
    client: "JCB India",
    thumbnail: "/jcb2.png",
    tags: ["Tamil Nadu", "Entrepreneur Journey"],
  },
  {
    id: 11,
    title: "Iss Diwali, Kuch Naya!",
    category: "Brand Films",
    client: "Upstox",
    thumbnail: "/diwali.png",
    tags: ["Festive Campaign", "Muhurat Trading"],
  },
  {
    id: 12,
    title: "Budget 2024 ft. Monika Halan",
    category: "Brand Films",
    client: "Upstox",
    thumbnail: "/upstock.jpeg",
    tags: ["Union Budget", "Financial Foresight"],
  },
  {
    id: 13,
    title: "अपार चुनौती (Opportunity)",
    category: "Short Films",
    client: "Happy Lamb Production",
    thumbnail: "/apar.jpeg",
    tags: ["Fiction", "Hindi Short Film"],
  },
];

export default function WorkGridLight() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = ALL_PROJECTS.filter((project) => {
    const matchesCategory = activeCategory === "All Projects" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="featured-grid" className="relative w-full bg-neutral-50 text-[#17140F] py-24 overflow-hidden border-t border-b border-neutral-200">
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-md bg-[#FFC72C]/10 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        {/* Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-neutral-200 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-md px-5 py-2.5 text-xs font-bold transition-all ${
                    isActive ? "shadow-md" : "bg-white text-neutral-600 hover:bg-neutral-100 hover:text-[#17140F] border border-neutral-200"
                  }`}
                  style={isActive ? { backgroundColor: INK, color: GOLD } : undefined}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search by title, client, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-neutral-200 bg-white pl-10 pr-4 py-2.5 text-xs font-medium text-[#17140F] placeholder-neutral-400 focus:outline-none shadow-xs"
              onFocus={(e) => (e.target.style.borderColor = GOLD)}
              onBlur={(e) => (e.target.style.borderColor = "")}
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
                className="group relative rounded-md border border-neutral-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${GOLD}80`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
              >
                {/* Media Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden" style={{ backgroundColor: INK }}>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, rgba(23,20,15,0.8) 0%, transparent 55%, rgba(23,20,15,0.3) 100%)` }}
                  />

                  <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                    <span className="rounded-md px-3 py-1 text-[11px] font-semibold text-neutral-200 backdrop-blur-md" style={{ backgroundColor: `${INK}CC` }}>
                      {project.client}
                    </span>
                    <span className="flex items-center gap-1 rounded-md px-2.5 py-1 text-[11px] font-semibold backdrop-blur-md" style={{ backgroundColor: `${INK}CC`, color: GOLD }}>
                      {YoutubeIcon}
                      <span>YouTube</span>
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs" style={{ backgroundColor: `${INK}66` }}>
                    <motion.div whileHover={{ scale: 1.1 }} className="flex h-12 w-12 items-center justify-center rounded-md shadow-lg" style={{ backgroundColor: GOLD }}>
                      <Play className="h-5 w-5 translate-x-0.5" style={{ fill: INK, color: INK }} />
                    </motion.div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider" style={{ color: DEEP_GOLD }}>
                      <span>{project.category}</span>
                    </div>

                    <h3
                      className="mt-2 text-lg font-bold text-[#17140F] transition-colors"
                      onMouseEnter={(e) => (e.currentTarget.style.color = DEEP_GOLD)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = INK)}
                    >
                      {project.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="rounded-md bg-neutral-100 px-2.5 py-1 text-[10px] font-semibold text-neutral-600">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-500">
                    <span>For: {project.client}</span>
                    <span
                      className="inline-flex items-center gap-1 transition-colors"
                      style={{ color: INK }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = DEEP_GOLD)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = INK)}
                    >
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
          <div className="mt-16 text-center py-12 rounded-md border border-neutral-200 bg-white">
            <p className="text-base font-bold text-[#17140F]">No projects found matching your search.</p>
            <p className="mt-1 text-xs text-neutral-500">Try clearing your filters or search keywords.</p>
            <button
              onClick={() => {
                setActiveCategory("All Projects");
                setSearchQuery("");
              }}
              className="mt-4 rounded-md px-6 py-2 text-xs font-bold"
              style={{ backgroundColor: GOLD, color: INK }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}