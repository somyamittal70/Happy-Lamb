import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Sparkles, ChevronLeft, ChevronRight, Star } from "lucide-react";

// Client Feedback Data
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

export default function TestimonialsLight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const activeReview = REVIEWS[currentIndex];

  return (
    <section className="relative w-full bg-[#f8f9fa] text-slate-900 py-24 overflow-hidden border-t border-b border-slate-200">
      
      {/* Background Lighting Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[180px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Client Endorsements</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Trusted by Directors & <span className="text-amber-500">Brands</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 text-sm sm:text-base max-w-xl"
          >
            Here is what global agency heads, commercial clients, and creative leads have to say about working together.
          </motion.p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="mt-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xl"
          >
            {/* Top Row: Quote Icon & Rating */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-amber-400">
                <Quote className="h-6 w-6" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Testimonial Quote Text with Animation */}
            <div className="mt-8 min-h-[140px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeReview.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg sm:text-2xl font-semibold leading-relaxed text-slate-800"
                >
                  "{activeReview.quote}"
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Bottom Row: Author Bio & Project Tag */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              
              {/* Author Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={activeReview.avatar}
                  alt={activeReview.author}
                  className="h-14 w-14 rounded-full object-cover border-2 border-amber-400"
                />
                <div>
                  <h3 className="text-base font-bold text-slate-900">{activeReview.author}</h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {activeReview.role} • <span className="text-slate-700 font-semibold">{activeReview.company}</span>
                  </p>
                </div>
              </div>

              {/* Project Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold text-slate-700 self-start sm:self-auto">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                <span>{activeReview.project}</span>
              </div>
            </div>

            {/* Slide Navigation Buttons */}
            <div className="mt-8 flex items-center justify-between pt-4">
              
              {/* Slide Counter Dots */}
              <div className="flex items-center gap-2">
                {REVIEWS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      currentIndex === idx ? "w-8 bg-amber-500" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              {/* Arrow Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous Testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:bg-slate-900 hover:text-amber-400 hover:border-slate-900"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next Testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:bg-slate-900 hover:text-amber-400 hover:border-slate-900"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}