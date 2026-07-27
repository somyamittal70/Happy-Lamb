import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, CheckCircle2, Film, Star } from "lucide-react";
import { Link } from "react-router-dom";

const LAMB_GOLD = "#FFC72C";

const CAPABILITIES = [
  {
    id: "01",
    title: "Stunning Packaging Design",
    category: "Visual Identity & Craft",
    tagline: "Unboxing that creates immediate emotional connections.",
    description:
      "We turn raw product concepts into unforgettable physical experiences. From tactile material selection to shelf-stopping aesthetics, we give your product a soul that customers feel compelled to own.",
    // Premium unsplash image for sleek packaging / product design
    image:
      "https://i.pinimg.com/control1/1200x/c4/4d/be/c44dbeaa17b1f9a9490156a600f6423c.jpg",
    stats: "100% Custom Visual Design",
  },
  {
    id: "02",
    title: "Human-Centered Storytelling",
    category: "Scripts & Narratives",
    tagline: "Connecting with the human behind the purchase.",
    description:
      "The age of transactional selling is over. We write unique, high-converting marketing scripts that speak directly to the real hopes, fears, and aspirations of your audience to forge lifelong loyalty.",
    // Premium unsplash image for creative storytelling / filmmaking script environment
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop",
    stats: "Emotion-First Scriptwriting",
  },
  {
    id: "03",
    title: "Bollywood Talent Integration",
    category: "Celebrity Endorsement",
    tagline: "Bring A-List stars to champion your brand narrative.",
    description:
      "Scale your brand reach exponentially. We seamlessly produce and execute high-impact national campaigns featuring top Bollywood artists and A-list talent customized specifically for your product.",
    // Premium unsplash image for high-end studio camera / film production
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
    stats: "Full Talent & Production Handling",
  },
  {
    id: "04",
    title: "Global Brand Scaling",
    category: "End-to-End Execution",
    tagline: "Transforming local products into global icons.",
    description:
      "We build complete brand ecosystems — combining packaging, video storytelling, digital campaigns, and targeted marketing strategy to launch your product onto the world stage.",
    // Premium unsplash image for high-fashion editorial / luxury product launch
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    stats: "360° Brand Transformation",
  },
];

export default function HireSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeService = CAPABILITIES[activeTab];

  return (
    <section className="relative w-full py-28 px-6 bg-black text-[#F5F2EB] overflow-hidden">
      {/* Dynamic Background Lighting Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-600/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl px-12 mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 border-b border-white/10 pb-10">
          <div className="space-y-4 max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
              style={{
                color: LAMB_GOLD,
                borderColor: "rgba(255,199,44,0.3)",
                background: "rgba(255,199,44,0.08)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" /> Why Hire Happy Lamb
            </div>

            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[1.05]">
              We Don't Just Sell. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                We Make You A Brand.
              </span>
            </h2>
          </div>

          <p className="text-[#F5F2EB]/60 max-w-md text-base sm:text-lg font-light leading-relaxed">
            The era of transactional selling is dead. We create human-centered packaging, Bollywood-led campaigns, and stories that turn products into market icons.
          </p>
        </div>

        {/* Interactive Image Showcase Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Left Column: Interactive Capability List */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            {CAPABILITIES.map((item, index) => {
              const isSelected = index === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`group text-left p-6 rounded-3xl transition-all duration-300 border flex items-center justify-between ${
                    isSelected
                      ? "bg-[#14110C] border-amber-400/50 shadow-2xl shadow-amber-500/10"
                      : "bg-[#090806] border-white/5 hover:border-white/15 hover:bg-[#0F0D0A]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-mono font-bold transition-colors ${
                        isSelected ? "text-amber-400" : "text-white/30"
                      }`}
                    >
                      {item.id}
                    </span>
                    <div>
                      <h3
                        className={`text-lg sm:text-xl font-bold transition-colors ${
                          isSelected ? "text-white" : "text-[#F5F2EB]/60 group-hover:text-white"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#F5F2EB]/40 font-medium mt-0.5">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      isSelected ? "bg-amber-400 scale-125" : "bg-white/10 group-hover:bg-white/30"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Stage (Image + Details) */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-3xl bg-[#0D0B08] border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  {/* Image Container with Gradient Overlay */}
                  <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden group border border-white/10">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B08] via-transparent to-transparent opacity-80" />

                    {/* Badge Overlay */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md"
                        style={{
                          background: "rgba(13, 11, 8, 0.75)",
                          borderColor: "rgba(255, 199, 44, 0.4)",
                          color: LAMB_GOLD,
                        }}
                      >
                        {activeService.stats}
                      </span>
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
                      <Film className="w-3.5 h-3.5" />
                      <span>{activeService.category}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                      "{activeService.tagline}"
                    </h3>

                    <p className="text-sm sm:text-base text-[#F5F2EB]/70 font-light leading-relaxed">
                      {activeService.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Visual Capabilities Banner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-8 rounded-3xl bg-[#0D0B08] border border-white/10 relative overflow-hidden group">
            <div className="relative z-10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">
                Packaging That Connects
              </h4>
              <p className="text-xs text-[#F5F2EB]/60 leading-relaxed font-light">
                We craft physical product forms and packaging that provoke emotion and inspire immediate purchase behavior.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#0D0B08] border border-white/10 relative overflow-hidden group">
            <div className="relative z-10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Star className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">
                Bollywood Artist Network
              </h4>
              <p className="text-xs text-[#F5F2EB]/60 leading-relaxed font-light">
                Direct access to top Bollywood talent and A-list celebrities tailored specifically for your brand campaigns.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#0D0B08] border border-white/10 relative overflow-hidden group">
            <div className="relative z-10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">
                Human-Centered Strategy
              </h4>
              <p className="text-xs text-[#F5F2EB]/60 leading-relaxed font-light">
                Marketing scripts and campaign positioning anchored on real human hopes, fears, and relationships.
              </p>
            </div>
          </div>
        </div>

        {/* Call-To-Action Banner */}
        <div className="rounded-3xl p-8 sm:p-14 border border-white/10 bg-gradient-to-r from-[#0D0B08] via-[#14110C] to-[#0D0B08] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 max-w-xl text-center md:text-left relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Ready to create something iconic?
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Let's build your brand legacy together.
            </h3>
          </div>
          <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center gap-3 shadow-lg shadow-amber-500/20 transition-all duration-300 whitespace-nowrap text-black relative z-10"
            style={{ background: LAMB_GOLD }}
          >
            Start A Project
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
          </Link>
        </div>

      </div>
    </section>
  );
}