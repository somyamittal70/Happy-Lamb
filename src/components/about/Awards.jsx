import { motion } from "framer-motion";
import { Sparkles, Trophy, Award, ExternalLink, Globe } from "lucide-react";

// Inline SVG Laurels
const SVGLaurelLeft = () => (
  <svg className="h-6 w-6 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C12 21 8 18 5 12C3 8 4 4 4 4C4 4 8 5 12 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M10 17C10 17 7 14.5 5 10C3.5 7 4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SVGLaurelRight = () => (
  <svg className="h-6 w-6 text-amber-500 scale-x-[-1]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C12 21 8 18 5 12C3 8 4 4 4 4C4 4 8 5 12 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M10 17C10 17 7 14.5 5 10C3.5 7 4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Awards & Honors Data
const AWARDS = [
  {
    year: "2025",
    title: "Best Commercial Cinematography",
    festival: "Cannes Corporate Media & TV Awards",
    project: "Porsche GT3 RS: Precision in Motion",
    category: "Automotive / Spot",
  },
  {
    year: "2024",
    title: "Official Selection & Best Short Documentary",
    festival: "European Independent Film Festival",
    project: "Tokyo Cyberpunk After Dark",
    category: "Documentary Short",
  },
  {
    year: "2023",
    title: "Vimeo Staff Pick",
    festival: "Vimeo Premieres",
    project: "Echoes in the Desert",
    category: "Music Video",
  },
  {
    year: "2022",
    title: "Best Visual Effects & Color Grading",
    festival: "International Color Awards",
    project: "Nordic Expedition Series",
    category: "Post-Production",
  },
];

// High Profile Brands
const BRANDS = [
  { name: "Sony Alpha Films", logo: "SONY" },
  { name: "Porsche Global", logo: "PORSCHE" },
  { name: "National Geographic", logo: "NAT GEO" },
  { name: "Universal Music", logo: "UNIVERSAL" },
  { name: "Red Bull Media House", logo: "RED BULL" },
];

export default function AboutAwardsLight() {
  return (
    <section className="relative w-full bg-[#f8f9fa] text-slate-900 py-24 overflow-hidden border-t border-b border-slate-200">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[180px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        
        {/* SECTION 1: AWARDS HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Industry Recognition</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Awards & <span className="text-amber-500">Accolades</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-md text-xs sm:text-sm leading-relaxed"
          >
            Recognized by international film festivals, agency panels, and commercial media boards for cinematography, directing, and post-production color pipelines.
          </motion.p>
        </div>

        {/* AWARDS GRID */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {AWARDS.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:border-amber-400/50 transition-all"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <SVGLaurelLeft />
                  <span className="text-xs font-extrabold uppercase tracking-widest text-slate-900">
                    {award.festival}
                  </span>
                  <SVGLaurelRight />
                </div>
                <span className="text-xs font-mono font-bold text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full">
                  {award.year}
                </span>
              </div>

              <div className="mt-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  {award.category}
                </span>
                <h3 className="mt-1 text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {award.title}
                </h3>
                <p className="mt-2 text-xs font-semibold text-slate-600">
                  Project: <span className="text-slate-800">{award.project}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECTION 2: CLIENT BRANDS BANNER */}
        <div className="mt-28 pt-16 border-t border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              Trusted Network
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
              Brands & Media Houses
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
            {BRANDS.map((brand, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, opacity: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-amber-400 transition-colors"
              >
                <span className="text-sm font-black font-mono tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
                  {brand.logo}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}