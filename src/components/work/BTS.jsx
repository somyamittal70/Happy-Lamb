import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MapPin, Maximize2, X, Layers, Users } from "lucide-react";

// Behind The Scenes — grounded in real Happy Lamb Production shoots
// and locations named in the company dossier. No fabricated camera/lens specs.
const BTS_GALLERY = [
  {
    id: 1,
    title: "The Excavator Village Story",
    location: "Charholi Village, Maharashtra",
    category: "On Location",
    client: "JCB India",
    img: "/jcb1.png",
    desc: "Documenting JCB's decades-long relationship with the village, built around real machine operators and their daily work.",
  },
  {
    id: 2,
    title: "Success Story — R.V. Balaji",
    location: "Tamil Nadu",
    category: "On Location",
    client: "JCB India",
    img: "/jcb2.png",
    desc: "Following a Tamil entrepreneur's journey, shot on his own land to keep the story authentic to the region and its work culture.",
  },
  {
    id: 3,
    title: "Invincible Indians — Aagun Pakhi",
    location: "Kolkata, West Bengal",
    category: "Real-Life Story",
    client: "Bajaj V",
    img: "/bjaj1.png",
    desc: "Shot with Bipin Ganatra, a 40-year veteran firefighter, capturing his everyday route through the city he serves.",
  },
  {
    id: 4,
    title: "अपार चुनौती — Production Still",
    location: "Mumbai, Maharashtra",
    category: "Short Film",
    client: "Happy Lamb Production",
    img: "/apar1.jpeg",
    desc: "A heartfelt fiction short on loss, hope, and opportunity — written & directed by Sarvashreshth Ray, produced by Dilip Gupta.",
    team: [
      { role: "Director", name: "Sarvashreshth Ray" },
      { role: "Producer", name: "Dilip Gupta" },
      { role: "Cinematographer", name: "Jitendra Merai" },
      { role: "Editor", name: "Manish Shah" },
    ],
  },
];

export default function WorkBTSDark() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="relative w-full bg-[#17140F] text-white py-24 overflow-hidden border-t border-white/10">
      <div className="absolute top-1/2 left-0 h-96 w-96 rounded-md bg-amber-500/10 blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-md bg-amber-400/5 blur-[150px] pointer-events-none" />

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
              className="mt-3 font-black uppercase text-3xl sm:text-5xl tracking-tight"
            >
              Behind The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                Scenes
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-md text-xs sm:text-sm leading-relaxed font-light"
          >
            A look at where our stories are actually shot — real villages, real
            cities, and the people at the heart of each production.
          </motion.p>
        </div>

        {/* BTS Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BTS_GALLERY.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-md border border-white/10 bg-[#1E1B14] overflow-hidden flex flex-col justify-between hover:border-amber-400/50 transition-all cursor-pointer"
              onClick={() => setSelectedImg(item)}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0f0d09]">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17140F] via-transparent to-black/30" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="rounded-md border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-bold text-amber-400 backdrop-blur-md">
                    {item.category}
                  </span>
                  <button
                    aria-label="Expand"
                    className="flex h-7 w-7 items-center justify-center rounded-md bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-[11px] text-white/70 font-medium">
                  <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/50 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-medium text-white/40">
                  <span>For: {item.client}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
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
                className="relative max-w-4xl w-full rounded-md border border-white/10 bg-[#1E1B14] overflow-hidden p-6 sm:p-8 text-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImg(null)}
                  className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="relative aspect-[4/5] sm:aspect-square w-full overflow-hidden rounded-md bg-[#0f0d09]">
                    <img src={selectedImg.img} alt={selectedImg.title} className="h-full w-full object-cover" />
                  </div>

                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="inline-flex items-center gap-1.5 rounded-md bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-400 border border-amber-400/20">
                        <Layers className="h-3.5 w-3.5" />
                        <span>{selectedImg.category}</span>
                      </div>

                      <h3 className="mt-4 text-2xl font-extrabold text-white">{selectedImg.title}</h3>

                      <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-white/50">
                        <MapPin className="h-3.5 w-3.5 text-amber-400" />
                        {selectedImg.location}
                      </p>

                      <p className="mt-4 text-xs sm:text-sm text-white/70 leading-relaxed">{selectedImg.desc}</p>
                    </div>

                    {/* Crew credits — shown only where the dossier verifies them */}
                    {selectedImg.team ? (
                      <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
                        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/40 mb-2">
                          <Users className="h-3.5 w-3.5" />
                          <span>Credits</span>
                        </div>
                        {selectedImg.team.map((member, i) => (
                          <div key={i} className="flex items-center justify-between text-xs">
                            <span className="text-white/40 uppercase">{member.role}</span>
                            <span className="text-amber-400 font-bold">{member.name}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-white/40 uppercase">Client</span>
                          <span className="text-amber-400 font-bold">{selectedImg.client}</span>
                        </div>
                      </div>
                    )}
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