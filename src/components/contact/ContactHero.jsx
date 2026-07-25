import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Sparkles, Clapperboard } from "lucide-react";

const INK = "#17140F";
const LAMB_GOLD = "#FFC72C";

// Cinema studio background image from Unsplash
const BG_IMAGE = "5.png";

export default function ContactHero() {
  return (
    <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden px-6 lg:px-[96px] py-20 bg-black text-white">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG_IMAGE}
          alt="Film set camera background"
          className="h-full w-full object-cover object-center scale-105"
        />
        {/* Layered Vignette and Gradient Overlays for High Contrast */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" /> */}
        {/* <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, rgba(255,199,44,0.12) 0%, rgba(0,0,0,0.85) 75%)",
          }}
        /> */}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-6 lg:grid-cols-12">
        
        {/* Left Column — Text Manifesto */}
        <div className="lg:col-span-7 space-y-6">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-bold uppercase leading-[0.98] tracking-tight text-white"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)" }}
          >
            Let&apos;s shoot
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              something worth
            </span>
            <br />
            watching
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-lg text-[15px] font-body leading-relaxed text-[#F3EFE4]/80 font-light"
          >
            Tell us about the film, campaign, or story you&apos;re building. Our
            production team will get back to you shortly with a tailored pitch and execution plan.
          </motion.p>

          {/* Quick Contact Micro-Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg"
          >
            <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-heading uppercase font-bold tracking-widest text-white/40">Email Us</p>
                <p className="text-xs font-heading font-semibold text-white">hello@happylamb.com</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-heading uppercase font-bold tracking-widest text-white/40">Studio Hub</p>
                <p className="text-xs font-heading font-semibold text-white">Mumbai, Maharashtra</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}