import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Camera, MapPin, Maximize2, X, Aperture, Layers } from "lucide-react";

// Behind The Scenes Gallery Items
const BTS_GALLERY = [
  {
    id: 1,
    title: "RED V-Raptor Car Rigging",
    location: "Fuji Speedway, Japan",
    category: "Rigging",
    camera: "RED V-Raptor 8K",
    lens: "DZO 25mm T2.1",
    img: "https://images.unsplash.com/photo-1758390851386-79c99432120e?q=80&w=1000&auto=format&fit=crop",
    desc: "Suction-mounted dynamic pursuit rig capturing 120fps high-speed tracking shots at 160 mph.",
  },
  {
    id: 2,
    title: "Night Street Anamorphic Setup",
    location: "Shinjuku, Tokyo",
    category: "Lighting",
    camera: "Sony FX6",
    lens: "Great Joy 1.8x Anamorphic",
    img: "https://images.unsplash.com/photo-1757492166964-518d2c8b9f41?q=80&w=1000&auto=format&fit=crop",
    desc: "Dual LED tube ambient lighting paired with anamorphic glass for authentic cyberpunk lens flares.",
  },
  {
    id: 3,
    title: "7\" Cinelifter FPV Flight Scouting",
    location: "Atacama Desert, Chile",
    category: "Aerial",
    camera: "RED Komodo 6K",
    lens: "Laowa 9mm Zero-D",
    img: "https://images.unsplash.com/photo-1580287925446-7ed8ce2709c3?q=80&w=1000&auto=format&fit=crop",
    desc: "Custom heavy-lift FPV drone configured for close-proximity mountain pass passes.",
  },
  {
    id: 4,
    title: "Director Wireless Monitor Station",
    location: "Reykjavik, Iceland",
    category: "Direction",
    camera: "Sony FX3",
    lens: "G-Master 24-70mm",
    img: "https://images.unsplash.com/photo-1576714645490-1ed8c9a14045?q=80&w=1000&auto=format&fit=crop",
    desc: "Low-latency wireless Teradek feed for agency team video review on glacier location.",
  },
];

export default function WorkBTSDark() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="relative w-full bg-[#0f1012] text-white py-24 overflow-hidden border-t border-white/10">
      
      {/* Background Lighting Accents */}
      <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-amber-600/5 blur-[150px] pointer-events-none" />

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
              <span>Production Reality</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight"
            >
              Behind The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Scenes</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-md text-xs sm:text-sm leading-relaxed"
          >
            A look into the technical execution on set—rigging setups, camera builds, extreme locations, and director workflow behind our final frames.
          </motion.p>
        </div>

        {/* BTS Masonry Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BTS_GALLERY.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl border border-white/10 bg-[#16171b] overflow-hidden flex flex-col justify-between hover:border-amber-400/50 transition-all cursor-pointer"
              onClick={() => setSelectedImg(item)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-900">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1012] via-transparent to-black/30" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-bold text-amber-400 backdrop-blur-md">
                    {item.category}
                  </span>
                  <button
                    aria-label="Expand Image"
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Location Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-[11px] text-slate-300 font-medium">
                  <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Tech Specs Line */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <Camera className="h-3 w-3 text-amber-400/80" />
                    {item.camera}
                  </span>
                  <span className="flex items-center gap-1">
                    <Aperture className="h-3 w-3 text-amber-400/80" />
                    {item.lens}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal / Lightbox View */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-md"
              onClick={() => setSelectedImg(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full rounded-3xl border border-white/10 bg-[#16171b] overflow-hidden p-6 sm:p-8 text-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImg(null)}
                  className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="relative aspect-[4/5] sm:aspect-square w-full overflow-hidden rounded-2xl bg-slate-900">
                    <img
                      src={selectedImg.img}
                      alt={selectedImg.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-400 border border-amber-400/20">
                        <Layers className="h-3.5 w-3.5" />
                        <span>{selectedImg.category} Production</span>
                      </div>

                      <h3 className="mt-4 text-2xl font-extrabold text-white">
                        {selectedImg.title}
                      </h3>

                      <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-slate-400">
                        <MapPin className="h-3.5 w-3.5 text-amber-400" />
                        {selectedImg.location}
                      </p>

                      <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {selectedImg.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-500 uppercase">Camera Rig:</span>
                        <span className="text-amber-400 font-bold">{selectedImg.camera}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-500 uppercase">Optics Package:</span>
                        <span className="text-amber-400 font-bold">{selectedImg.lens}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}