import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Film, Palette, Smartphone, Play, X } from "lucide-react";

const INK_LIGHT = "#FAFAFA";
const LAMB_GOLD = "#D97706"; 
const LAMB_GOLD_BG = "#FFC72C"; 

const DISCIPLINES = [
  {
    icon: <Film className="h-5 w-5" />,
    title: "Film & Animation",
    desc: "Ad films, product shoots, and animation built around clear brand narratives.",
  },
  {
    icon: <Palette className="h-5 w-5" />,
    title: "Design & Advertising",
    desc: "Visual identity, campaign design, and photography tailored to each brand's goals.",
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "Digital & Social Media",
    desc: "Platform-native content that carries a campaign from screen to feed.",
  },
];

const INDUSTRIES = [
  "Food & Beverage",
  "Lifestyle",
  "Sports",
  "Technology",
  "Pharmaceuticals",
  "Leisure",
];

export default function AboutLuxury() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative w-full text-neutral-900 py-28 overflow-hidden"
      style={{ background: INK_LIGHT }}
    >

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: LAMB_GOLD }}
            >
              <Film className="h-3.5 w-3.5" />
              <span>The Manifesto</span>
            </motion.div>

            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 font-black uppercase text-3xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-neutral-900"
            >
              Storytelling that helps{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600">
                brands connect.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <div className="text-left">
              <span className="block font-black text-2xl text-amber-600">
                2023
              </span>
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                Studio Founded
              </span>
            </div>
            <div className="h-10 w-[1px] bg-neutral-300" />
            <div className="text-left">
              <span className="block font-black text-2xl text-amber-600">
                Mumbai
              </span>
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                Home Base
              </span>
            </div>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Media Card */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-amber-300/20 via-transparent to-amber-200/20 blur-xl opacity-80 pointer-events-none" />

            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-[2rem] overflow-hidden border border-neutral-200 bg-neutral-100 shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/24702547/pexels-photo-24702547.jpeg"
                alt="Happy Lamb Production on set"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />

              <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white/90 px-4 py-2 backdrop-blur-md text-xs font-semibold text-neutral-900 shadow-md">
                <Film className="h-4 w-4 text-amber-600" />
                <span>End-to-End Production</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl border border-white/20 bg-white/90 backdrop-blur-md text-neutral-900 shadow-lg">
                <p className="text-sm font-bold tracking-wide">Dilip Gupta</p>
                <p className="text-[11px] uppercase tracking-widest font-semibold text-amber-600">
                  Founder, Happy Lamb Production
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text & Cards */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Happy Lamb Production (OPC) Private Limited is a Mumbai-based creative studio founded in 2023 by
              industry veteran <span className="text-neutral-900 font-semibold">Dilip Gupta</span>. We deliver
              end-to-end creative solutions across film, design, and digital media — blending strong storytelling,
              smart strategy, and modern production into high-impact, cost-effective content.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 w-full">
              {DISCIPLINES.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx + 0.2 }}
                  className="group flex items-start gap-4 rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-amber-400/60 hover:shadow-md" 
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700 transition-colors group-hover:bg-[#FFC72C] group-hover:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900">{item.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-neutral-950 shadow-md hover:shadow-lg transition-all"
                style={{ background: LAMB_GOLD_BG }}
              >
                <span>Explore more</span>
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80 p-4 backdrop-blur-md"
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
                src="https://www.youtube-nocookie.com/embed/YOUR_SHOWREEL_ID?autoplay=1"
                title="Happy Lamb Production Showreel"
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