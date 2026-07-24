import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Sparkles, ChevronLeft, ChevronRight, Star, Building2 } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    quote:
      "Shivam delivered an outstanding brand commercial for our European launch. His mastery over cinema lighting, camera pacing, and color grading turned a tight 3-day shoot into an award-winning campaign.",
    author: "Elena Rostova",
    role: "Creative Director",
    company: "Porsche Global Media",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    project: "GT3 RS Launch Film",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Working with Shivam on our tech launch was effortless. He took complete ownership from pre-production storyboarding to the final DaVinci color master. The video gained 2.4 million organic views across social channels.",
    author: "Marcus Vance",
    role: "Head of Marketing",
    company: "Sony Alpha Films",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    project: "Cinema Line Campaign",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "His FPV drone perspectives and dynamic editing gave our travel documentary an edge we couldn't find anywhere else. Absolute professional on set, tight turnaround times, and world-class deliverable quality.",
    author: "Aria Chen",
    role: "Executive Producer",
    company: "National Geographic Digital",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    project: "Nordic Expedition Series",
    rating: 5,
  },
];

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.98 }),
  center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit: (dir) => ({ x: dir < 0 ? 60 : -60, opacity: 0, scale: 0.98, transition: { duration: 0.3 } }),
};

export default function GlassTestimonials() {
  const [[page, direction], setPage] = useState([0, 0]);
  const currentIndex = Math.abs(page % REVIEWS.length);

  const paginate = (newDir) => setPage([page + newDir, newDir]);
  const activeReview = REVIEWS[currentIndex];

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24 text-slate-900 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-200/30 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Client Praise
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mt-3 tracking-tight">
            Trusted by Industry <span className="text-amber-500">Leaders</span>
          </h2>
        </div>

        {/* Floating Card */}
        <div className="mt-14 max-w-3xl mx-auto">
          <div className="relative rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/70 p-8 sm:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)]">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div className="p-3 rounded-2xl bg-slate-900 text-amber-400 shadow-md">
                <Quote className="w-6 h-6" />
              </div>
              <div className="flex gap-1 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200/60">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Quote Body */}
            <div className="py-8 min-h-[150px] flex items-center overflow-hidden">
              <AnimatePresence custom={direction} mode="wait">
                <motion.p
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="text-xl sm:text-2xl font-medium text-slate-800 leading-relaxed italic"
                >
                  "{activeReview.quote}"
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img src={activeReview.avatar} alt={activeReview.author} className="w-13 h-13 rounded-full object-cover ring-2 ring-amber-400/80" />
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{activeReview.author}</h4>
                  <p className="text-xs text-slate-500 font-medium">{activeReview.role} • <span className="text-slate-800">{activeReview.company}</span></p>
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
                {activeReview.project}
              </div>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between pt-4">
              <div className="flex gap-2">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage([i, i > currentIndex ? 1 : -1])}
                    className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "w-8 bg-amber-500" : "w-2 bg-slate-200"}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => paginate(-1)} className="p-3 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => paginate(1)} className="p-3 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}