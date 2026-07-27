import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Quote, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, Film, Palette, Smartphone } from "lucide-react";

const INK = "#17140F";
const GOLD = "#FFC72C";

// The studio's own words about each collaboration, per the dossier —
// not quotes attributed to the clients themselves.
const COLLABORATIONS = [
  {
    id: 1,
    quote:
      "We bring iconic storytelling to life — from Anil Kapoor reviving his legendary Mr. India persona to make banking feel nostalgic yet smart, to Konkona Sen Sharma inspiring women with the #FundYourOwnWorth spirit.",
    client: "ICICI Bank",
    project: "Mr. India Revival & Campus Power",
  },
  {
    id: 2,
    quote:
      "We exhibited Godrej's legacy of trust and innovation — from Madhuri Dixit championing Home Lockers to Matrix Home Lockers with dual-lock precision, built on protection, strength, and adaptability.",
    client: "Godrej",
    project: "Home Lockers Campaign",
  },
  {
    id: 3,
    quote:
      "We tell stories of transformation — from reshaping landscapes in Charholi Village to fueling the dreams of Tamil entrepreneurs, where JCB machines stand for progress powered by unbreakable trust.",
    client: "JCB India",
    project: "Customer Success Stories",
  },
];

// Real service scope, from the dossier's manifesto
const WHAT_WE_DELIVER = [
  { title: "Film & Animation", detail: "Ad films, product shoots, and animation built around a clear brand story" },
  { title: "Design & Advertising", detail: "Visual identity, campaign design, and photography for each brand's goals" },
  { title: "Digital & Social Media", detail: "Platform-native content that carries a campaign from screen to feed" },
];

export default function WorkImpactLight() {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % COLLABORATIONS.length);
  const prev = () => setActiveIdx((p) => (p - 1 + COLLABORATIONS.length) % COLLABORATIONS.length);

  const current = COLLABORATIONS[activeIdx];

  return (
    <section className="relative w-full bg-[#f8f9fa] text-slate-900 py-24 overflow-hidden border-t border-b border-slate-200">
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-96 w-96 rounded-md bg-amber-500/10 blur-[170px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Selected Collaborations</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 font-black uppercase text-3xl sm:text-5xl tracking-tight text-slate-900"
            >
              Brands We've Told <span className="text-amber-500">Stories For</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-md text-xs sm:text-sm leading-relaxed"
          >
            A look at the campaigns and productions we've delivered for brands
            across banking, security, industrial, and fintech.
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left: Collaboration Slider */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-md border border-slate-200 bg-white p-8 sm:p-10 shadow-sm relative">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                <div className="p-2.5 rounded-md" style={{ background: INK, color: GOLD }}>
                  <Quote className="h-4 w-4" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700 border border-amber-200">
                  {current.project}
                </span>
              </div>

              <blockquote className="mt-8 text-base sm:text-xl font-medium text-slate-800 leading-relaxed">
                {current.quote}
              </blockquote>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="h-12 w-12 rounded-md flex items-center justify-center font-black text-sm uppercase"
                  style={{ background: "rgba(255,199,44,0.15)", color: "#B9860A" }}
                >
                  {current.client.slice(0, 2)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">{current.client}</h4>
                  <p className="text-xs text-slate-500 font-medium">Happy Lamb Production</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: What We Deliver — real service scope, not fabricated tech specs */}
          <div className="lg:col-span-5 rounded-md border border-slate-200 text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl" style={{ background: INK }}>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest block" style={{ color: GOLD }}>
                What We Deliver
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white">End-to-End Creative Solutions</h3>
              <p className="mt-2 text-xs text-white/50 leading-relaxed">
                Across film, design, and digital media — tailored to each brand's goals.
              </p>

              <div className="mt-6 space-y-4">
                {WHAT_WE_DELIVER.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: GOLD }} />
                    <div>
                      <h4 className="text-xs font-bold text-white">{item.title}</h4>
                      <p className="text-[11px] text-white/50">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors"
                style={{ background: GOLD, color: INK }}
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}