import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function TeamCTA() {
  return (
    <section
      className="relative w-full overflow-hidden px-6 py-24 lg:px-[96px] lg:py-32"
      style={{ backgroundColor: "#ffffff" }}
    >
      <p
        className="font-mono text-[12px] tracking-[0.25em]"
        style={{ color: "#c98f00" }}
      >
        SCENE 04 — JOIN THE PRODUCTION
      </p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-5 max-w-2xl font-display uppercase leading-[0.94]"
        style={{ color: "#111111", fontSize: "clamp(2.1rem, 5vw, 4rem)" }}
      >
        Let's disscuse make something cool together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-5 max-w-md font-body text-[15px] leading-relaxed"
        style={{ color: "#5a5a5a" }}
      >
        We're always open to meeting directors, DOPs, editors, and producers who
        care about the craft as much as we do.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        href="/contact"
        className="group mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-mono text-[12px] tracking-[0.2em]"
        style={{ backgroundColor: "#111111", color: "#ffffff" }}
      >
        <span>GET IN TOUCH</span>
        <ArrowUpRight
          size={15}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          style={{ color: "#ffba00" }}
        />
      </motion.a>
    </section>
  );
}
