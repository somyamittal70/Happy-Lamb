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
  )
};

// Core Services Offered with High-Quality Image References
const SERVICES = [
  {
    id: "01",
    title: "Commercial Film Production",
    icon: SVGIcons.clapper,
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRl2ZnBZkIDzO2T4BmrYsOYs0QVhAZLo2sx7h0ywjqAUroClpzoy7w772TbirkamECklWRSp0gfkkHgeeo",
    desc: "End-to-end video production for global brands, fashion labels, and tech startups designed for high conversions and impact.",
    deliverables: ["4K Cinema Master", "Social Cuts (9:16 & 16:9)", "Licensed Audio Score"],
  },
  {
    id: "02",
    title: "Cinematography & Directing",
    icon: SVGIcons.camera,
    image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTyso3cZP2_6kVXqWmH6g21wlG1ut5uPGgTqrZUIVFx9oynldDtaJyTSD7MfrycowYn6t14qruj2w-gtB0",
    desc: "Director of Photography services for commercials, documentaries, and music videos utilizing cinema grade gear.",
    deliverables: ["RAW Cinema Footage", "Custom Lighting Setup", "Multi-Cam Shoot"],
  },
  {
    id: "03",
    title: "Color Grading & Post-Production",
    icon: SVGIcons.editTimeline,
    image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQsqfuRgA2k3b-7G68Se8Z9vpNUqUG-aH-hJVqnSXGsKnDC98icf_LPKvJYDDtTqPj5UmzB_fPc20hWjwc",
    desc: "Transforming flat LOG profiles into vibrant, mood-evoking cinematic looks with precise DaVinci Resolve color pipelines.",
    deliverables: ["DaVinci Resolve Look", "Sound Design & Mix", "VFX & Motion Graphics"],
  },
  {
    id: "04",
    title: "FPV Aerial Videography",
    icon: SVGIcons.drone,
    image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRn5gFPPxcfEc0vnJQJjA39aGDjS5l0WmRA1SHO-updFvpASb_DMxBs5K-HVeAhoEWyb7jzRaAvjZrOxa0",
    desc: "High-speed, dynamic aerial perspectives using custom-built FPV drones for chase scenes and sweeping landscapes.",
    deliverables: ["Up to 4K 120FPS Aerials", "Licensed FAA Drone Pilot", "ProRes HQ Export"],
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

export default function ServicesDark() {
  const [activeService, setActiveService] = useState(SERVICES[0].id);

  return (
    <section className="relative w-full bg-[#08080A] text-[#F3EFE4] py-28 overflow-hidden border-t border-b border-white/10">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 h-[450px] w-[450px] rounded-full bg-amber-400/5 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        
        {/* SECTION 1: SERVICES HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-amber-300"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>What I Offer</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight"
            >
              Production{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                Services
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-md text-sm sm:text-base leading-relaxed"
          >
            Delivering high-end visual experiences engineered for brand growth, YouTube reach, and festival screenings.
          </motion.p>
        </div>

        {/* SERVICES GRID WITH IMAGE PREVIEWS */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => {
            const isActive = activeService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveService(service.id)}
                whileHover={{ y: -6 }}
                className={`group relative rounded-3xl border overflow-hidden transition-all duration-500 flex flex-col justify-between ${
                  isActive
                    ? "border-amber-400/50 bg-[#121318] shadow-[0_0_35px_rgba(251,191,36,0.12)]"
                    : "border-white/10 bg-[#0E0F14] hover:border-amber-400/30 hover:bg-[#121318]"
                }`}
              >
                {/* Visual Image Preview Banner */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-[#121318]/40 to-transparent" />
                  
                  {/* Floating Number Badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-mono font-bold text-amber-400">
                    {service.id}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-8 pt-2 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
                          isActive
                            ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20"
                            : "bg-white/5 text-amber-400 group-hover:bg-amber-400 group-hover:text-black"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SECTION 2: PRODUCTION WORKFLOW */}
        <div className="mt-32">
          <div className="text-center max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-amber-300"
            >
              How It Works
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl sm:text-5xl font-black tracking-tight uppercase text-white"
            >
              The Production <span className="text-amber-400">Process</span>
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
                className="group relative rounded-3xl border border-white/10 bg-[#0E0F14] p-7 flex flex-col justify-between hover:border-amber-400/40 hover:bg-[#121318] transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      {item.phase}
                    </span>
                    <span className="text-xs font-mono font-bold text-white/30 group-hover:text-amber-400 transition-colors">
                      STEP {item.step}
                    </span>
                  </div>
                  <h4 className="mt-5 text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-2.5 text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Phase {item.step}</span>
                  <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
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
          className="mt-24 rounded-3xl border border-amber-400/30 bg-gradient-to-r from-[#171510] via-[#1C1811] to-[#121318] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 h-64 w-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Have a Project in Mind?
            </span>
            <h3 className="mt-2 text-2xl sm:text-4xl font-black tracking-tight">
              Let's build your next visual campaign.
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
              Available for commercial directors, brand collaborations, and freelance filmmaking projects worldwide.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="relative z-10 shrink-0 inline-flex items-center gap-3 rounded-full bg-amber-400 px-9 py-4 text-xs font-bold uppercase tracking-widest text-black shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:bg-amber-300 transition-colors"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}