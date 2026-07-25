import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Quote, Star, ArrowUpRight, TrendingUp, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

// Client Testimonials Data
const TESTIMONIALS = [
  {
    id: 1,
    quote: "Shivam and his team delivered a masterpiece for our GT3 RS campaign. Their ability to handle high-speed pursuit tracking shots with RED cinema rigs on a tight track schedule was incredible.",
    author: "Marcus Vance",
    role: "Creative Director",
    company: "Porsche Europe",
    project: "GT3 RS Campaign",
    stats: "+2.4M Views in 48 Hours",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    quote: "The visual tone and color grading on our brand documentary exceeded every expectation. They took a complex narrative and turned it into an award-winning cinematic experience.",
    author: "Elena Rostova",
    role: "Head of Content",
    company: "Sony Alpha Films",
    project: "Tokyo Cyberpunk Series",
    stats: "Cannes Corporate Winner",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "Fast turnarounds, flawless 8K RAW deliverables, and a drone flight team that executed proximity aerials in extreme desert winds. Will be booking them for all 2026 activations.",
    author: "David Chen",
    role: "Executive Producer",
    company: "Red Bull Media House",
    project: "Apex Speed Demon Spot",
    stats: "100% On-Time Delivery",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
];

// Production Deliverables Highlights
const CASE_DELIVERABLES = [
  { title: "Master Delivery", detail: "ProRes 4444 XQ & 8K REDCODE RAW Archives" },
  { title: "Social Cutdowns", detail: "9:16 Vertical Reels with Custom Motion Graphics" },
  { title: "Color Mastering", detail: "HDR10 & Rec.709 Color Passes via DaVinci Resolve" },
  { title: "Sound & Score", detail: "Custom 5.1 Surround & Stereo Spatial Mixes" },
];

export default function WorkImpactLight() {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIdx];

  return (
    <section className="relative w-full bg-[#f8f9fa] text-slate-900 py-24 overflow-hidden border-t border-b border-slate-200">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-96 w-96 rounded-md bg-amber-500/10 blur-[170px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs font-bold font-heading uppercase tracking-widest text-amber-600"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Client Validation & Impact</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-3xl sm:text-5xl font-bold font-heading uppercase tracking-tight text-slate-900"
            >
              What Agencies Say About <span className="text-amber-500">Our Work</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-md text-xs sm:text-sm leading-relaxed"
          >
            Real feedback from creative directors, producers, and brand heads who trusted us with high-stakes commercial campaigns and global film sets.
          </motion.p>
        </div>

        {/* Main Grid: Interactive Carousel + Deliverables Breakdown */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Interactive Testimonial Slider (Spans 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-md border border-slate-200 bg-white p-8 sm:p-10 shadow-sm relative">
            <div>
              {/* Top Quote Icon & Rating */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                  <TrendingUp className="h-3.5 w-3.5" />
                  {current.stats}
                </span>
              </div>

              {/* Quote Body */}
              <blockquote className="mt-8 text-base sm:text-xl font-medium text-slate-800 leading-relaxed italic">
                "{current.quote}"
              </blockquote>
            </div>

            {/* Author Footer + Navigation Controls */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="h-12 w-12 rounded-md object-cover border-2 border-amber-400"
                />
                <div>
                  <h4 className="text-base font-bold text-slate-900">{current.author}</h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {current.role} • <span className="text-amber-600 font-semibold">{current.company}</span>
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous Testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next Testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Standard Delivery Standards (Spans 5 cols) */}
          <div className="lg:col-span-5 rounded-md border border-slate-200 bg-slate-900 text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-mono font-bold font-heading text-amber-400 uppercase tracking-widest block">
                Standard Deliverables
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white">
                What Every Campaign Receives
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                We manage the entire pipeline from raw camera acquisition to broadcast-ready master packages.
              </p>

              <div className="mt-6 space-y-4">
                {CASE_DELIVERABLES.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">{item.title}</h4>
                      <p className="text-[11px] text-slate-400">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Trigger */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-amber-400 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black hover:bg-amber-300 transition-colors"
              >
                <span>Start Your Campaign Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}