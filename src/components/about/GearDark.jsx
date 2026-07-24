import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Cpu, Camera, Film, Disc, Monitor, CheckCircle2 } from "lucide-react";

// Gear Categories & Items
const GEAR_CATEGORIES = [
  {
    id: "cameras",
    label: "Cinema Bodies",
    icon: <Camera className="h-4 w-4" />,
    items: [
      { name: "RED V-Raptor 8K VV", spec: "8K 120fps RAW / 17+ Stops Dynamic Range", status: "Primary Body" },
      { name: "Sony FX6 Cinema Line", spec: "Full-Frame / Dual Base ISO 800 & 12800", status: "B-Cam / Documentary" },
      { name: "Sony FX3 Rigged", spec: "4K 120fps 10-bit 4:2:2 / Gimbal Setup", status: "C-Cam / Action" },
    ],
  },
  {
    id: "lenses",
    label: "Glass & Lenses",
    icon: <Film className="h-4 w-4" />,
    items: [
      { name: "DZOFilm VESPID Cyber Primes", spec: "16mm, 25mm, 35mm, 50mm, 75mm, 125mm T2.1", status: "Cinema Prime Set" },
      { name: "Sony G-Master Trinity", spec: "16-35mm, 24-70mm, 70-200mm f/2.8 GM II", status: "Commercial Zoom Set" },
      { name: "Anamorphic Great Joy 1.8x", spec: "35mm, 50mm, 85mm T2.9 Anamorphic", status: "Cinematic Scope" },
    ],
  },
  {
    id: "aerial",
    label: "FPV & Aerial",
    icon: <Disc className="h-4 w-4" />,
    items: [
      { name: "Custom 7\" Cinelifter FPV Drone", spec: "Carries RED Komodo / 4K 120fps high-speed chase", status: "Licensed FAA Part 107" },
      { name: "DJI Inspire 3 Cinema Drone", spec: "8K CinemaDNG RAW / Waypoint Pro 3D", status: "Heavy Aerial Rig" },
      { name: "DJI Avata 2 FPV", spec: "Indoor commercial fly-throughs & tight spaces", status: "Proximity Aerials" },
    ],
  },
  {
    id: "post",
    label: "Post & Color",
    icon: <Monitor className="h-4 w-4" />,
    items: [
      { name: "DaVinci Resolve Studio 19", spec: "Hardware Color Suite / Advanced Node Workflows", status: "Primary NLE & Grading" },
      { name: "Mac Studio M2 Ultra (128GB)", spec: "Real-time 8K REDCODE RAW playback & render", status: "Edit Suite Engine" },
      { name: "EIZO ColorEdge CG319X", spec: "DCI-P3 99% / 4K HDR Hardware Calibrated Monitor", status: "Mastering Display" },
    ],
  },
];

export default function AboutGearDark() {
  const [activeTab, setActiveTab] = useState("cameras");

  const currentCategory = GEAR_CATEGORIES.find((cat) => cat.id === activeTab);

  return (
    <section className="relative w-full bg-[#0f1012] text-white py-24 overflow-hidden border-t border-white/10">
      
      {/* Background Lighting Accents */}
      <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-amber-500/10 blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-amber-600/5 blur-[150px] pointer-events-none" />

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
              <span>Technical Arsenal</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight"
            >
              Camera Gear & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Post Stack</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-md text-xs sm:text-sm leading-relaxed"
          >
            We deploy cinema-grade 8K camera packages, custom FPV cinelifters, and calibrated DaVinci color mastering suites tailored for global agency specs.
          </motion.p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="mt-12 flex flex-wrap gap-3">
          {GEAR_CATEGORIES.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2.5 rounded-full px-6 py-3 text-xs font-bold transition-all ${
                  isActive
                    ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {currentCategory?.items.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-3xl border border-white/10 bg-[#16171b] p-8 flex flex-col justify-between hover:border-amber-400/50 transition-colors"
                >
                  <div>
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-3 py-1 text-[11px] font-bold text-amber-400 border border-amber-400/20">
                        <CheckCircle2 className="h-3 w-3" />
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-mono">
                      {item.spec}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    <span>In-House Gear</span>
                    <span className="text-amber-400">Ready To Shoot</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Insurance & Rental Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-black">
              <Cpu className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Full Production Insurance & Global Logistics</h4>
              <p className="mt-0.5 text-xs text-slate-400">
                All camera packages carry $1M+ worldwide equipment insurance & FAA Part 107 aerial flight permits.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="shrink-0 rounded-full border border-amber-400/40 bg-amber-400/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-amber-400 hover:bg-amber-400 hover:text-black transition-all"
          >
            Request Full Tech Spec Sheet
          </a>
        </motion.div>

      </div>
    </section>
  );
}