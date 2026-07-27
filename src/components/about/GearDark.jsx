import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Film, Palette, Smartphone, Layers, CheckCircle2, ArrowUpRight } from "lucide-react";

const INK = "#17140F";
const GOLD = "#FFC72C";

// Real service capabilities, grouped exactly as the dossier's manifesto describes them
const CAPABILITY_CATEGORIES = [
  {
    id: "film",
    label: "Film & Production",
    icon: <Film className="h-4 w-4" />,
    items: [
      { name: "Ad Films", spec: "Brand campaigns built around a clear narrative arc, from script to final cut", status: "Core Service" },
      { name: "Product Shoots", spec: "Studio and on-location product filming tailored to each brand's positioning", status: "Core Service" },
      { name: "Animation", spec: "Motion and animated content used to explain, promote, or simplify a story", status: "Core Service" },
    ],
  },
  {
    id: "design",
    label: "Design & Advertising",
    icon: <Palette className="h-4 w-4" />,
    items: [
      { name: "Advertising Campaigns", spec: "End-to-end campaign concepts spanning film, print, and digital touchpoints", status: "Core Service" },
      { name: "Photography", spec: "Brand and product photography aligned with a campaign's visual identity", status: "Core Service" },
      { name: "Visual Design", spec: "Design work that carries a brand's tone across every asset it produces", status: "Core Service" },
    ],
  },
  {
    id: "digital",
    label: "Digital & Social",
    icon: <Smartphone className="h-4 w-4" />,
    items: [
      { name: "Social Media Content", spec: "Platform-native cutdowns and content built for feed-first attention", status: "Core Service" },
      { name: "Digital Storytelling", spec: "Content designed to carry a campaign from broadcast to screen", status: "Core Service" },
    ],
  },
  {
    id: "industries",
    label: "Industries We Serve",
    icon: <Layers className="h-4 w-4" />,
    items: [
      { name: "Food & Beverage", spec: "Campaign work across F&B brand storytelling", status: "Industry" },
      { name: "Lifestyle & Leisure", spec: "Lifestyle-led narratives for consumer and leisure brands", status: "Industry" },
      { name: "Sports", spec: "Sports-driven brand and campaign content", status: "Industry" },
      { name: "Technology", spec: "Product and brand films for technology companies", status: "Industry" },
      { name: "Pharmaceuticals", spec: "Campaign work within the pharmaceutical sector", status: "Industry" },
    ],
  },
];

export default function AboutGearDark() {
  const [activeTab, setActiveTab] = useState("film");
  const currentCategory = CAPABILITY_CATEGORIES.find((cat) => cat.id === activeTab);

  return (
    <section className="relative w-full text-white py-24 overflow-hidden border-t border-white/10" style={{ background: INK }}>
      <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-md bg-amber-500/10 blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 h-80 w-80 rounded-md bg-amber-400/5 blur-[150px] pointer-events-none" />

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
              <span>What We Do</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 font-black uppercase text-3xl sm:text-5xl tracking-tight"
            >
              Capabilities &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                Industries
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
            End-to-end creative solutions across film, design, and digital media —
            tailored to each brand's goals, wherever their industry sits.
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="mt-12 flex flex-wrap gap-3">
          {CAPABILITY_CATEGORIES.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className="flex items-center gap-2.5 rounded-md px-6 py-3 text-xs font-bold transition-all"
                style={
                  isActive
                    ? { background: GOLD, color: INK, boxShadow: "0 10px 30px -10px rgba(255,199,44,0.3)" }
                    : { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)" }
                }
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
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
                  className="group relative rounded-md border border-white/10 p-8 flex flex-col justify-between hover:border-amber-400/50 transition-colors"
                  style={{ background: "#1E1B14" }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-[11px] font-bold border"
                        style={{ background: "rgba(255,199,44,0.1)", color: GOLD, borderColor: "rgba(255,199,44,0.2)" }}
                      >
                        <CheckCircle2 className="h-3 w-3" />
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-white/50 leading-relaxed">
                      {item.spec}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 rounded-md border border-white/10 bg-white/5 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md"
        >
          <div>
            <h4 className="text-base font-bold text-white">Have a project that fits one of these?</h4>
            <p className="mt-0.5 text-xs text-white/50">
              Tell us about your brand, timeline, and goals — we'll take it from concept to final delivery.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-md px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all"
            style={{ background: GOLD, color: INK }}
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}