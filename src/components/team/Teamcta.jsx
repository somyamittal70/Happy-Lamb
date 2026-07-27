import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail } from "lucide-react";

const INK = "#000000";
const GOLD = "#FFC72C";

export default function TeamCTA() {
  return (
    <section
      className="relative w-full overflow-hidden py-14 sm:py-20 bg-black px-6 sm:px-10 lg:px-16 border-t border-neutral-100"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&display=swap');
        .display-font { font-family: 'Anton', sans-serif; }
      `}</style>

      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/control1/1200x/53/b0/27/53b027de56295e89a773d411cd4256a2.jpg"
          alt="Production set backdrop"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Centered Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-md pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,199,44,0.22) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className=" mt-6 text-white uppercase font-bold font-heading tracking-tight leading-[0.94]"
          style={{ fontSize: "clamp(2.8rem, 7vw, 4rem)" }}
        >
          Got a project?
          <br />
          Let's shoot it.
        </motion.h2>

        {/* Action Button & Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-8"
        >
          <motion.Link
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-md px-10 py-5 text-sm font-bold font-heading tracking-[0.15em] uppercase transition-shadow shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/15"
            style={{ backgroundColor: GOLD, color: INK }}
          >
            Start a project
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.Link>

          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/70 font-medium">
            <Link
              to="mailto:info@happylamb.in"
              className="inline-flex items-center gap-2 hover:text-black transition-colors"
            >
              <Mail size={15} style={{ color: "#FFFFFF" }} />
              info@happylamb.in
            </Link>
            <span className="hidden sm:inline text-black/20">•</span>
            <Link
              to="tel:+919820778491"
              className="inline-flex items-center gap-2 hover:text-black transition-colors"
            >
              <Phone size={15} style={{ color: "#FFFFFF" }} />
              +91 9820778491
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}