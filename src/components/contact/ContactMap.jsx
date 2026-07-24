import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <section
      className="relative w-full px-6 py-24 lg:px-[96px]"
      style={{ backgroundColor: "#050505" }}
    >
      <p
        className="font-mono text-[12px] tracking-[0.25em]"
        style={{ color: "#ffba00" }}
      >
        SCENE 03 — FIND US ON LOCATION
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mt-6 overflow-hidden rounded-md border"
        style={{ borderColor: "#222222" }}
      >
        {/* slate-style corner tab, echoes a clapperboard label */}
        <div
          className="absolute left-0 top-0 z-10 px-4 py-2 font-mono text-[11px] tracking-[0.15em]"
          style={{ backgroundColor: "#ffba00", color: "#000000" }}
        >
          LOCATION — TAKE 1
        </div>

        <iframe
          title="Happy Lamb Production Location"
          src="https://www.google.com/maps?q=Happy+Lamb+Production+OPC+PVT.+LTD,+505,+5th+Floor,+Bhoomi+Building,+Cama+Estate,+Behind+Future+Studio,+Goregaon+East,+Mumbai+400063&output=embed"
          width="100%"
          height="420"
          style={{
            border: 0,
            filter: "grayscale(1) invert(0.92) contrast(0.9)",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </section>
  );
}
