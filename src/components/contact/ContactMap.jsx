import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  Clock,
  Building,
  Film,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";

// Design System Tokens (Warm Paper Aesthetic)
const PALETTE = {
  INK: "#17140F",
  LAMB_GOLD: "#FFC72C",
  DEEP_GOLD: "#B9860A",
  PAPER: "#FFFFFF",
  PAPER_PURE: "#FFFFFF",
  BORDER: "rgba(23, 20, 15, 0.12)",
  INK_MUTED: "rgba(23, 20, 15, 0.65)",
  INK_FAINT: "rgba(23, 20, 15, 0.45)",
};

const MAP_URL =
  "https://www.google.com/maps?q=Happy+Lamb+Production+OPC+PVT.+LTD,+505,+5th+Floor,+Bhoomi+Building,+Cama+Estate,+Behind+Future+Studio,+Goregaon+East,+Mumbai+400063&output=embed";
const EMBED_URL = `${MAP_URL}&output=embed`;

export default function ContactMap() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(
      "Happy Lamb Production, 505, 5th Floor, Bhoomi Building, Cama Estate, Goregaon East, Mumbai 400063",
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="relative w-full px-4 py-16 sm:py-24 sm:px-8 lg:px-16 overflow-hidden font-sans"
      style={{ backgroundColor: PALETTE.PAPER }}
    >
      <div className="mx-auto max-w-7xl px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em]"
              style={{ color: PALETTE.DEEP_GOLD }}
            >
              <Film size={14} />
              <span>Scene 03 — Location Brief</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-2xl sm:text-5xl font-extrabold uppercase tracking-tight"
              style={{ color: PALETTE.INK }}
            >
              Find Us On{" "}
              <span className="bg-gradient-to-r from-[#FFC72C] via-[#FFBA00] to-[#B9860A] bg-clip-text text-transparent">
                Location
              </span>
            </motion.h2>
          </div>
        </div>

        {/* Viewfinder Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative group rounded-3xl border p-2 sm:p-3 shadow-xl overflow-hidden backdrop-blur-md"
          style={{
            borderColor: PALETTE.BORDER,
            backgroundColor: PALETTE.PAPER_PURE,
          }}
        >
          {/* Map Frame Wrapper */}
          <div className="relative h-[480px] sm:h-[540px] w-full overflow-hidden rounded-2xl bg-stone-200">
            {/* Embedded Google Map (Light Silver/Warm Filtered) */}
            <iframe
              title="Happy Lamb Production Location"
              src={EMBED_URL}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "contrast(0.95) saturate(0.85) sepia(0.08)",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
