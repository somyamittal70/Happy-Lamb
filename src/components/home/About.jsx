import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Award, Camera, Play, Sparkles, X, CheckCircle2 } from "lucide-react";

// Inline SVG Icons
const SVGIcons = {
  youtube: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
  instagram: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  vimeo: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32-2.817 3.63-5.221 5.447-7.21 5.447-1.238 0-2.285-.572-3.14-1.716-.856-1.144-1.713-3.432-2.57-6.864-.858-3.433-1.621-5.15-2.288-5.15-.19 0-.715.382-1.572 1.144L0 7.068c1.143-1.002 2.288-2.003 3.431-3.004 1.572-1.334 2.716-2.049 3.431-2.145 1.715-.19 2.763.858 3.144 3.144.477 2.763.858 5.337 1.143 7.72.382 2.097.81 3.145 1.287 3.145.477 0 1.143-.667 2.001-2.001.858-1.334 1.334-2.478 1.43-3.431.19-1.239-.381-1.859-1.715-1.859-.572 0-1.191.143-1.859.429 1.143-3.717 3.193-5.528 6.148-5.433 2.192.096 3.192 1.382 2.997 3.857z"/>
    </svg>
  ),
  cameraLens: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3V8M12 16V21M3 12H8M16 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  drone: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="5" cy="5" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="19" cy="5" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="5" cy="19" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="19" cy="19" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
};

const HIGHLIGHTS = [
  {
    icon: SVGIcons.cameraLens,
    title: "Cinematic Narrative & Color",
    desc: "Blending narrative depth with 4K HDR visuals, custom soundscapes, and Hollywood-grade DaVinci Resolve grading.",
  },
  {
    icon: SVGIcons.drone,
    title: "Licensed FPV Aerial Coverage",
    desc: "High-speed dynamic perspectives and seamless motion tracking shots designed for immersive storytelling.",
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "Global Brand Collaborations",
    desc: "Directing multi-platform video campaigns for high-profile travel, tech, and luxury lifestyle creators.",
  },
];

const BRANDS = [
  { name: "SONY FILMS", logo: "SONY" },
  { name: "RED DIGITAL", logo: "RED" },
  { name: "DJI GLOBAL", logo: "DJI" },
  { name: "SAN DISK", logo: "SANDISK" },
  { name: "ADOBE CREATIVE", logo: "ADOBE" },
];

export default function AboutLuxury() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative w-full bg-[#FAFAFC] text-slate-900 py-28 overflow-hidden border-t border-slate-200/80">
      
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-1/3 -left-32 h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 h-[400px] w-[400px] rounded-full bg-yellow-500/5 blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Top Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-700"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span>Behind The Lens</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]"
            >
              Driven by <span className="text-amber-600">Passion</span>, <br className="hidden sm:block" />
              Powered by Cinema.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <div className="text-left">
              <span className="block text-2xl font-black text-slate-900">8+ Years</span>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Experience</span>
            </div>
            <div className="h-10 w-[1px] bg-slate-200" />
            <div className="text-left">
              <span className="block text-2xl font-black text-slate-900">500M+</span>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Views Crafted</span>
            </div>
          </motion.div>
        </div>

        {/* Main Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Frame: Filmmaker Media Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Shadow Ring */}
            <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-amber-500/20 via-transparent to-amber-500/10 blur-xl opacity-70 pointer-events-none" />

            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-[2rem] overflow-hidden border border-slate-200/80 bg-slate-900 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
                alt="Filmmaker at work"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              {/* Floating Camera Equipment Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 backdrop-blur-xl text-xs font-semibold text-white">
                <Camera className="h-4 w-4 text-amber-400" />
                <span>RED & SONY Cinema Line</span>
              </div>

              {/* Central Trigger Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group relative flex items-center gap-3 rounded-full border border-white/30 bg-black/60 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-2xl transition-all hover:bg-black/90 hover:border-amber-400/50"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-black shadow-md group-hover:bg-amber-400 transition-colors">
                    <Play className="h-4 w-4 fill-black translate-x-0.5" />
                  </span>
                  <span>Play Origin Reel</span>
                </motion.button>
              </div>

              {/* Bottom Card Footer */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-xl flex items-center justify-between text-white shadow-lg">
                <div>
                  <p className="text-sm font-bold tracking-wide text-white">Shivam Sharma</p>
                  <p className="text-[11px] text-amber-400 uppercase tracking-widest font-mono">Director of Photography</p>
                </div>

                <div className="flex items-center gap-2 text-zinc-300">
                  {[
                    { icon: SVGIcons.youtube, href: "#", label: "YouTube" },
                    { icon: SVGIcons.instagram, href: "#", label: "Instagram" },
                    { icon: SVGIcons.vimeo, href: "#", label: "Vimeo" },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      aria-label={s.label}
                      className="p-2 rounded-full bg-white/10 hover:bg-amber-500 hover:text-black transition-colors"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Copy & High-Status Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Hey, I'm <span className="text-slate-900 font-bold">Shivam</span> — a director of photography, digital creator, and video producer. What started with a single camera and an obsession with lighting has evolved into a global creative studio producing content for high-status brands and millions of viewers worldwide.
            </p>

            {/* Feature Cards Grid */}
            <div className="mt-8 grid grid-cols-1 gap-4 w-full">
              {HIGHLIGHTS.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx + 0.2 }}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:border-amber-500/50 hover:shadow-xl hover:-translate-y-0.5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-black">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-slate-800"
              >
                <span>Read Full Biography</span>
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-slate-800 shadow-sm transition-all hover:bg-slate-50"
              >
                <span>Start Collaboration</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Brand Partner Logo Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 pt-12 border-t border-slate-200/80"
        >
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-8">
            Trusted Gear & Brand Partners
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {BRANDS.map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors cursor-default"
              >
                <CheckCircle2 className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-black tracking-widest font-mono">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* ORIGIN REEL LIGHTBOX MODAL */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-white/20 transition-all"
              >
                <X className="h-5 w-5" />
              </button>

              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Origin Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}