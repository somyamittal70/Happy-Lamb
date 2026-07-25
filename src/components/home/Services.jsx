import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

// Inline SVG Icons for Production Gear & Deliverables
const SVGIcons = {
  camera: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="13.5" r="4.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  clapper: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 11V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V11M4 11H20M4 11L7.5 5H11.5L8 11M20 11L16.5 5H12.5L16 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  editTimeline: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M6 9H14M6 15H10M18 9V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  drone: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="5" cy="5" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="19" cy="5" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="5" cy="19" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="19" cy="19" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  soundWave: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12H5.5L8 6L12 18L16 8L18 15L19.5 12H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  reels: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="3" width="16" height="18" rx="3" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M9.5 9.5L14.5 12L9.5 14.5V9.5Z" fill="currentColor"/>
      <path d="M8 3V5.5M16 3V5.5M8 18.5V21M16 18.5V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
};

/* ---------- Design tokens (shared with the rest of the site) ---------- */
const GOLD = "#FFC72C";
const INK = "#F5EFE4";
const MUTED = "#948C7E";
const BASE = "#0a0a0a";
const PANEL = "#0a0a0a";
const HAIR = "rgba(245,239,228,0.08)";

const FONT_DISPLAY = "'Oswald', sans-serif";
const FONT_BODY = "'Inter', sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";

// Core Services Offered with High-Quality Image References
const SERVICES = [
  {
    id: "01",
    title: "Commercial Film Production",
    icon: SVGIcons.clapper,
    image: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg",
    desc: "End-to-end video production for global brands, fashion labels, and tech startups designed for high conversions and impact.",
    deliverables: ["4K Cinema Master", "Social Cuts (9:16 & 16:9)", "Licensed Audio Score"],
  },
  {
    id: "02",
    title: "Cinematography & Directing",
    icon: SVGIcons.camera,
    image: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg",
    desc: "Director of Photography services for commercials, documentaries, and music videos utilizing cinema grade gear.",
    deliverables: ["RAW Cinema Footage", "Custom Lighting Setup", "Multi-Cam Shoot"],
  },
  {
    id: "03",
    title: "Color Grading & Post-Production",
    icon: SVGIcons.editTimeline,
    image: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg",
    desc: "Transforming flat LOG profiles into vibrant, mood-evoking cinematic looks with precise DaVinci Resolve color pipelines.",
    deliverables: ["DaVinci Resolve Look", "Sound Design & Mix", "VFX & Motion Graphics"],
  },
  {
    id: "04",
    title: "FPV Aerial Videography",
    icon: SVGIcons.drone,
    image: "https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg",
    desc: "High-speed, dynamic aerial perspectives using custom-built FPV drones for chase scenes and sweeping landscapes.",
    deliverables: ["Up to 4K 120FPS Aerials", "Licensed FAA Drone Pilot", "ProRes HQ Export"],
  },
  {
    id: "05",
    title: "Sound Design & Mixing",
    icon: SVGIcons.soundWave,
    image: "https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg",
    desc: "Studio-grade audio post covering dialogue cleanup, foley, ambience layering, and cinematic mixing for immersive playback.",
    deliverables: ["5.1 & Stereo Mix", "Foley & Ambience", "Broadcast-Safe Mastering"],
  },
  {
    id: "06",
    title: "Social Media Content",
    icon: SVGIcons.reels,
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    desc: "Fast-turnaround reels, shorts, and campaign snippets engineered for retention and platform-native storytelling.",
    deliverables: ["Vertical Reels Pack", "Caption & Subtitle Burn", "Trend-Aligned Edits"],
  },
];

// Production Workflow Steps
const WORKFLOW = [
  {
    step: "01",
    phase: "Pre-Production",
    title: "Concept & Storyboard",
    desc: "We define the creative direction, scriptwriting, shot lists, location scouting, and moodboards before rolling cameras.",
  },
  {
    step: "02",
    phase: "Production",
    title: "The Principal Shoot",
    desc: "Lighting, directing talent, capturing 4K 10-bit LOG footage, sound recording, and executing every planned shot.",
  },
  {
    step: "03",
    phase: "Post-Production",
    title: "Editing & Master Grade",
    desc: "Assembly edit, pacing adjustment, custom sound design, visual effects, and professional DaVinci color grading.",
  },
  {
    step: "04",
    phase: "Delivery",
    title: "Multi-Format Export",
    desc: "Delivering high-bitrate masters along with optimized social media cuts ready for immediate deployment.",
  },
];

/* ---------- Flip card ---------- */
function ServiceFlipCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-[400px] [perspective:1600px]"
    >
      <div className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* ---- FRONT: image face ---- */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden [backface-visibility:hidden]"
          style={{ border: `1px solid ${HAIR}` }}
        >
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10" />

          {/* number badge */}
          <div
            className="absolute top-5 right-5 rounded-full px-3 py-1 text-xs backdrop-blur-md"
            style={{ fontFamily: FONT_MONO, color: GOLD, background: "rgba(13,12,11,0.55)", border: `1px solid ${HAIR}` }}
          >
            {service.id}
          </div>

          {/* icon badge */}
          <div
            className="absolute top-5 left-5 flex h-11 w-11 items-center justify-center rounded-2xl"
            style={{ background: GOLD, color: BASE }}
          >
            {service.icon}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-7">
            <span
              className="text-[11px] uppercase tracking-[0.2em]"
              style={{ fontFamily: FONT_MONO, color: GOLD }}
            >
              Service {service.id}
            </span>
            <h3
              className="mt-2 text-2xl leading-tight"
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}
            >
              {service.title}
            </h3>
            <span
              className="mt-3 inline-flex items-center gap-1.5 text-xs"
              style={{ color: MUTED }}
            >
              Hover to see details
            </span>
          </div>
        </div>

        {/* ---- BACK: content face ---- */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden p-8 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{ background: PANEL, border: `1px solid rgba(255,199,44,0.3)` }}
        >
          <div>
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl shrink-0"
                style={{ background: GOLD, color: BASE }}
              >
                {service.icon}
              </div>
              <h3
                className="text-xl leading-tight"
                style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}
              >
                {service.title}
              </h3>
            </div>

            <p className="mt-5 text-sm leading-relaxed" style={{ color: MUTED }}>
              {service.desc}
            </p>
          </div>

          <div className="pt-5" style={{ borderTop: `1px solid ${HAIR}` }}>
            <span
              className="text-[11px] uppercase tracking-wider block mb-3"
              style={{ fontFamily: FONT_MONO, color: GOLD }}
            >
              Key Deliverables
            </span>
            <ul className="space-y-2.5">
              {service.deliverables.map((item, dIdx) => (
                <li key={dIdx} className="flex items-center gap-2.5 text-xs font-medium" style={{ color: INK }}>
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" style={{ color: GOLD }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesDark() {
  return (
    <section
      className="relative w-full py-28 overflow-hidden border-t border-b"
      style={{ background: BASE, color: INK, fontFamily: FONT_BODY, borderColor: HAIR }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 h-[450px] w-[450px] rounded-full bg-amber-400/5 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">

        {/* SECTION 1: SERVICES HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-10" style={{ borderColor: HAIR }}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-widest"
              style={{ border: `1px solid rgba(255,199,44,0.3)`, background: "rgba(255,199,44,0.08)", color: GOLD }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>What I Offer</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight"
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 600 }}
            >
              Production <span style={{ color: GOLD }}>Services</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-sm sm:text-base leading-relaxed"
            style={{ color: MUTED }}
          >
            Delivering high-end visual experiences engineered for brand growth, YouTube reach, and festival screenings.
          </motion.p>
        </div>

        {/* SERVICES GRID — FLIP CARDS */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service, idx) => (
            <ServiceFlipCard key={service.id} service={service} index={idx} />
          ))}
        </div>

        {/* SECTION 2: PRODUCTION WORKFLOW */}
        <div className="mt-32">
          <div className="text-center max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-widest"
              style={{ border: `1px solid rgba(255,199,44,0.3)`, background: "rgba(255,199,44,0.08)", color: GOLD }}
            >
              How It Works
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl sm:text-5xl tracking-tight uppercase"
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}
            >
              The Production <span style={{ color: GOLD }}>Process</span>
            </motion.h3>
          </div>

          {/* Workflow Steps */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 shadow-xl"
                style={{ border: `1px solid ${HAIR}`, background: PANEL }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: GOLD }}>
                      {item.phase}
                    </span>
                    <span className="text-xs" style={{ fontFamily: FONT_MONO, color: MUTED }}>
                      STEP {item.step}
                    </span>
                  </div>
                  <h4 className="mt-5 text-lg" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}>
                    {item.title}
                  </h4>
                  <p className="mt-2.5 text-xs leading-relaxed" style={{ color: MUTED }}>
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 flex items-center justify-between" style={{ borderTop: `1px solid ${HAIR}` }}>
                  <span className="text-[10px] uppercase tracking-widest" style={{ fontFamily: FONT_MONO, color: MUTED }}>
                    Phase {item.step}
                  </span>
                  <span className="h-2 w-2 rounded-full" style={{ background: GOLD, boxShadow: `0 0 8px ${GOLD}` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CALL TO ACTION BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
          style={{ border: `1px solid rgba(255,199,44,0.3)`, background: `linear-gradient(90deg, #171510, #1C1811, ${PANEL})` }}
        >
          <div className="absolute top-0 right-0 h-64 w-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>
              Have a Project in Mind?
            </span>
            <h3 className="mt-2 text-2xl sm:text-4xl tracking-tight" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}>
              Let's build your next visual campaign.
            </h3>
            <p className="mt-3 text-xs sm:text-sm max-w-xl leading-relaxed" style={{ color: MUTED }}>
              Available for commercial directors, brand collaborations, and freelance filmmaking projects worldwide.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="relative z-10 shrink-0 inline-flex items-center gap-3 rounded-xl px-9 py-4 text-xs font-bold uppercase tracking-widest transition-colors"
            style={{ background: GOLD, color: BASE, boxShadow: `0 0 20px rgba(255,199,44,0.3)` }}
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}