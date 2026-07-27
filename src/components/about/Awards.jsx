import { motion } from "framer-motion";
import { Sparkles, Film } from "lucide-react";

// Inline SVG Laurels — kept as a decorative flourish, no longer tied to a fabricated award
const SVGLaurelLeft = () => (
  <svg className="h-6 w-6 text-[#ffba00]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C12 21 8 18 5 12C3 8 4 4 4 4C4 4 8 5 12 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M10 17C10 17 7 14.5 5 10C3.5 7 4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SVGLaurelRight = () => (
  <svg className="h-6 w-6 text-[#ffba00] scale-x-[-1]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C12 21 8 18 5 12C3 8 4 4 4 4C4 4 8 5 12 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M10 17C10 17 7 14.5 5 10C3.5 7 4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Real flagship campaigns, pulled from the dossier — no fabricated awards or festivals
const CAMPAIGN_HIGHLIGHTS = [
  {
    client: "ICICI Bank",
    title: "Mr. India Revival ft. Anil Kapoor",
    category: "Banking & Culture",
    note: "Reviving a nostalgic icon to make banking feel modern and trustworthy.",
  },
  {
    client: "Godrej",
    title: "Home Lockers ft. Madhuri Dixit",
    category: "Security & Legacy",
    note: "Exhibiting decades of trust through a dual-lock precision showcase.",
  },
  {
    client: "Bajaj V",
    title: "Invincible Indians — Real-Life Stories",
    category: "Documentary Series",
    note: "Honoring everyday heroes across the country, from Kolkata to rural India.",
  },
  {
    client: "JCB India",
    title: "The Excavator Village Story",
    category: "Industrial & Growth",
    note: "A decades-long relationship with Charholi Village, told through real operators.",
  },
];

// Real client roster from the dossier — plain text marks, no logos or images
const BRANDS = ["ICICI BANK", "GODREJ", "BAJAJ V", "JCB INDIA", "UPSTOX"];

export default function AboutAwardsLight() {
  return (
    <section className="relative w-full bg-[#f8f9fa] text-slate-900 py-24 overflow-hidden border-t border-b border-slate-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-md bg-[#ffba00]/10 blur-[180px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ffba00]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Campaign Highlights</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 font-black uppercase text-3xl sm:text-5xl tracking-tight text-slate-900"
            >
              Work That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffba00] via-[#ffba00] to-[#ffba00]">
                Speaks For Itself
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-md text-xs sm:text-sm leading-relaxed"
          >
            A few of the campaigns we're proudest of — spanning banking, security,
            documentary storytelling, and industrial growth.
          </motion.p>
        </div>

        {/* Highlights Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAMPAIGN_HIGHLIGHTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-md border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:border-[#ffba00]/50 transition-all"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <SVGLaurelLeft />
                  <span className="text-xs font-extrabold uppercase tracking-widest text-slate-900">
                    {item.client}
                  </span>
                  <SVGLaurelRight />
                </div>
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#ffba00] bg-[#ffba00]/10 px-3 py-1 rounded-md">
                  <Film className="h-3 w-3" />
                  {item.category}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#ffba00] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Roster */}
        <div className="mt-28 pt-16 border-t border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffba00]">
              Trusted By
            </span>
            <h3 className="mt-2 font-black uppercase text-2xl text-slate-900">
              Brands We've Worked With
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
            {BRANDS.map((brand, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-center rounded-md border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ffba00] transition-colors"
              >
                <span className="text-sm font-black tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}