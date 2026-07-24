import { motion } from "framer-motion";
import { Sparkles, Camera, Clapperboard, Award, Compass, Eye, SlidersHorizontal } from "lucide-react";

// Creative Core Principles
const PHILOSOPHIES = [
  {
    icon: <Eye className="h-5 w-5 text-amber-500" />,
    title: "Intentional Framing",
    desc: "Every frame must serve the story. We don't shoot filler content — every camera motion, focal length choice, and lighting cue is calculated.",
  },
  {
    icon: <SlidersHorizontal className="h-5 w-5 text-amber-500" />,
    title: "Color as Emotion",
    desc: "Color grading isn't just applying LUTs. It's crafting atmospheric palettes in DaVinci Resolve that evoke felt emotion before a word is spoken.",
  },
  {
    icon: <Clapperboard className="h-5 w-5 text-amber-500" />,
    title: "Narrative Pacing",
    desc: "Whether it's a 30-second high-energy commercial or a slow-burn documentary, rhythm and sound design dictate audience retention.",
  },
];

// Timeline Milestones
const MILESTONES = [
  { year: "2020", title: "Indie Roots & FPV Aerials", desc: "Started filming high-speed action sports and outdoor travel documentaries." },
  { year: "2022", title: "Commercial Transition", desc: "Directed first major brand campaign for regional tech and automotive brands." },
  { year: "2024", title: "Global Campaigns & RED Rig", desc: "Expanded to international 8K cinema productions and festival short films." },
  { year: "Present", title: "Full-Scale Production", desc: "Leading commercial directors, post-production color pipelines, and aerial teams." },
];

export default function AboutBioLight() {
  return (
    <section className="relative w-full bg-[#f8f9fa] text-slate-900 py-24 overflow-hidden border-t border-b border-slate-200">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        
        {/* SECTION 1: STORY & BIO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Set Photo Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                  alt="Director behind the scenes"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating Badge Overlay */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-amber-400">
                    <Camera className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-amber-600 tracking-wider block">
                      Production Mindset
                    </span>
                    <p className="text-xs font-semibold text-slate-800">
                      "Obsessed with light, motion, and raw human emotion."
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Bio Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>My Journey</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Bridging Commercial Rigor with <span className="text-amber-500">Artistic Vision.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed"
            >
              <p>
                My passion for filmmaking started with a camera and a obsession for framing raw environments. What began as filming local fast-paced action grew into directing high-tier commercial campaigns, travel documentaries, and brand films worldwide.
              </p>
              <p>
                I operate at the intersection of technical DP skills and creative story direction. I believe every brand or narrative has a unique pulse — my job is finding that rhythm through lighting, camera placement, and precision color grading in post.
              </p>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <span className="text-2xl font-black font-mono text-slate-900">4K / 8K</span>
                <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">RAW Workflows</span>
              </div>
              <div>
                <span className="text-2xl font-black font-mono text-slate-900">100%</span>
                <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Custom Color LUTs</span>
              </div>
              <div>
                <span className="text-2xl font-black font-mono text-slate-900">Global</span>
                <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Location Access</span>
              </div>
            </div>
          </div>

        </div>

        {/* SECTION 2: CREATIVE PHILOSOPHY CARDS */}
        <div className="mt-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              Directing Pillars
            </span>
            <h3 className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900">
              The Creative Philosophy
            </h3>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {PHILOSOPHIES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 mb-6">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 3: MILESTONE TIMELINE */}
        <div className="mt-28 pt-16 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                Career Progression
              </span>
              <h3 className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900">
                Key Milestones
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              A chronological look at how our production scale and technical setup evolved over time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MILESTONES.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="text-2xl font-black font-mono text-amber-500">{m.year}</span>
                <h4 className="mt-3 text-base font-bold text-slate-900">{m.title}</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}