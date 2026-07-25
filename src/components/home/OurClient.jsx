import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const GOLD = "#FFC72C";
const INK = "#F5EFE4";
const MUTED = "#948C7E";
const BASE = "#0a0a0a";
const HAIR = "rgb(10, 10, 10)";

const FONT_DISPLAY = "'Oswald', sans-serif";
const FONT_BODY = "'Inter', sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";

const CLIENTS = [
  { name: "Prompt", src: "/client1.jpeg" },
  { name: "Skyway", src: "/client2.jpg" },
  { name: "Cofsils", src: "/clent3.png" },
];

// Duplicate the list so the strip can loop seamlessly
const LOOP = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

export default function OurClients() {
  return (
    <section
      className="relative w-full py-24 overflow-hidden border-t border-b"
      style={{ background: BASE, color: INK, fontFamily: FONT_BODY, borderColor: HAIR }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        @keyframes clientMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
        .client-track {
          animation: clientMarquee 22s linear infinite;
        }
        .client-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] bg-amber-500/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-xl px-3.5 py-1 text-xs font-semibold uppercase tracking-widest"
            style={{ border: `1px solid rgba(255,199,44,0.3)`, background: "rgba(255,199,44,0.08)", color: GOLD }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Our Clients</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-5xl uppercase tracking-tight"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600 }}
          >
            Some Great Companies <span style={{ color: GOLD }}>Use Our Services</span>
          </motion.h2>
        </div>

        {/* Marquee row */}
        <div className="relative mt-16">
          {/* fade edges */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 z-10"
            style={{ background: `linear-gradient(to right, ${BASE}, transparent)` }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 z-10"
            style={{ background: `linear-gradient(to left, ${BASE}, transparent)` }}
          />

          <div className="overflow-hidden">
            <div className="client-track flex items-center w-max">
              {LOOP.map((client, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center shrink-0 mx-6 sm:mx-10 rounded-2xl px-8 sm:px-10 py-6 sm:py-7"
                  style={{ border: `1px solid ${HAIR}`, background: "rgba(255,255,255,0.02)" }}
                >
                  <img
                    src={client.src}
                    alt={client.name}
                    className="h-25 sm:h-30 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}