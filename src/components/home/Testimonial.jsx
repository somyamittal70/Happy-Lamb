import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Film, ArrowUpRight, Sparkles, Award } from "lucide-react";
import { Link } from "react-router-dom";

// Paper-dossier palette
const PAPER = "#FFFFFF";
const INK = "#17140F";
const LAMB_GOLD = "#FFC72C";
const LAMB_GOLD_DEEP = "#B9860A";

const COLLABORATIONS = [
  {
    id: 1,
    client: "ICICI Bank",
    project: "Mr. India Revival & Campus Power",
    category: "Banking & Culture",
    tagline: "Reviving nostalgic icons for modern banking.",
    quote:
      "We bring iconic storytelling to life — from Anil Kapoor reviving his legendary Mr. India persona to make banking feel nostalgic yet smart, to Konkona Sen Sharma inspiring women with the #FundYourOwnWorth spirit.",
    tag: "Celebrity-Led",
    thumbnail: "/anil.png",
  },
  {
    id: 2,
    client: "Godrej",
    project: "Home Lockers Campaign",
    category: "Security & Legacy",
    tagline: "Exhibiting a legacy of trust and innovation.",
    quote:
      "We exhibited Godrej's legacy of trust and innovation — from Madhuri Dixit championing Home Lockers to Matrix Home Lockers with dual-lock precision, built on protection, strength, and adaptability.",
    tag: "Brand Film",
    thumbnail: "godrej.png",
  },
  {
    id: 3,
    client: "Bajaj V",
    project: "Invincible Indian Stories",
    category: "Documentary Series",
    tagline: "Honoring everyday heroes across the nation.",
    quote:
      "Bajaj V presents Invincible Indians — stories of ordinary people whose selfless service to society evokes pride every day, from a medicine collector in NCR to a 40-year veteran of the Kolkata Fire Department.",
    tag: "Real Stories",
    thumbnail: "bjaj2.png",
  },
  {
    id: 4,
    client: "JCB India",
    project: "Customer Success Stories",
    category: "Industrial & Growth",
    tagline: "Unbreakable trust powering regional progress.",
    quote:
      "We tell stories of transformation — from reshaping landscapes in Charholi Village to fueling the dreams of Tamil entrepreneurs, where JCB machines stand for progress powered by unbreakable trust.",
    tag: "Docu-Style",
    thumbnail: "/jcb1.png",
  },
  {
    id: 5,
    client: "Upstox",
    project: "Diwali & Budget Campaigns",
    category: "Fintech & Festivities",
    tagline: "Merging festive tradition with financial foresight.",
    quote:
      "We brought festive tradition and financial foresight together for Upstox — from 'Iss Diwali, Kuch Naya!' spotlighting Muhurat Trading to sharp, expert takes on the Union Budget.",
    tag: "Seasonal Campaign",
    thumbnail: "/upstock.jpeg",
  },
];

export default function LightShowroomCollaborations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = COLLABORATIONS[activeIndex];

  return (
    <section
      className="relative w-full py-28 px-6 overflow-hidden"
      style={{ background: PAPER, color: INK }}
    >
      <div className="max-w-7xl px-12 mx-auto w-full relative z-10 space-y-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#17140F]/15 pb-8">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border mb-3"
              style={{
                color: LAMB_GOLD_DEEP,
                borderColor: "rgba(185, 134, 10, 0.25)",
                background: "rgba(255, 199, 44, 0.15)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" /> Selected Collaborations
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#17140F]">
              Company Dossier
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#17140F]/50">
              Interactive Case Index
            </span>
            <div className="h-2 w-2 rounded-full bg-amber-600 animate-pulse" />
          </div>
        </div>

        {/* Featured Case Stage (Hero Bento) */}
        <div className="rounded-3xl border border-[#17140F]/15 bg-white/70 p-6 sm:p-10 shadow-xl backdrop-blur-md relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Image Preview Plate */}
              <div className="lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#17140F]/10 group">
                <img
                  src={active.thumbnail}
                  alt={`${active.client} — ${active.project}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17140F]/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md"
                    style={{ background: LAMB_GOLD, color: INK }}
                  >
                    <Film className="w-3 h-3" />
                    {active.tag}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-mono text-white/70 uppercase tracking-widest">
                    {active.category}
                  </p>
                  <h3 className="text-2xl font-black uppercase tracking-tight">
                    {active.client}
                  </h3>
                </div>
              </div>

              {/* Dossier Copy */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: LAMB_GOLD_DEEP }}
                  >
                    {active.project}
                  </span>
                  <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#17140F] leading-snug">
                    "{active.tagline}"
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-[#17140F]/80 font-normal leading-relaxed">
                  {active.quote}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-[#17140F]/10">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#17140F]/60">
                    <Award className="w-4 h-4 text-amber-600" />
                    Happy Lamb Dossier File
                  </div>

                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-transform hover:-translate-y-0.5 shadow-md"
                    style={{ background: INK, color: PAPER }}
                  >
                    View Project
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bento Selector Rail (Interactive Cards Below) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {COLLABORATIONS.map((item, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`group text-left p-4 rounded-2xl transition-all duration-300 border flex flex-col justify-between relative overflow-hidden ${
                  isSelected
                    ? "bg-white border-amber-600 shadow-lg scale-[1.02]"
                    : "bg-white/40 border-[#17140F]/10 hover:bg-white/80 hover:border-[#17140F]/20"
                }`}
              >
                {/* Active Indicator Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${
                    isSelected ? "bg-amber-500" : "bg-transparent"
                  }`}
                />

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? "text-amber-700" : "text-[#17140F]/30"
                      }`}
                    >
                      0{item.id}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#17140F]/40">
                      {item.tag}
                    </span>
                  </div>

                  <h4
                    className={`font-bold text-sm line-clamp-1 transition-colors ${
                      isSelected ? "text-[#17140F]" : "text-[#17140F]/70 group-hover:text-[#17140F]"
                    }`}
                  >
                    {item.client}
                  </h4>
                </div>

                <p className="text-[11px] text-[#17140F]/50 font-medium line-clamp-1 mt-3">
                  {item.project}
                </p>
              </button>
            );
          })}
        </div>

        {/* Footer Branding Stamp */}
        <div className="pt-6 border-t border-[#17140F]/15 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shadow-sm"
              style={{ background: LAMB_GOLD, color: INK }}
            >
              HLP
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#17140F]/70">
              Happy Lamb Production — Dossier Archive
            </p>
          </div>
          <span className="text-xs font-mono text-[#17140F]/40">Est. 2023</span>
        </div>

      </div>
    </section>
  );
}