import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 12, suffix: "+", label: "Years in production" },
  { value: 340, suffix: "+", label: "Projects delivered" },
  { value: 28, suffix: "", label: "Awards & nominations" },
  { value: 96, suffix: "%", label: "Repeat clients" },
];

function useCountUp(target, active, duration = 1.4) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(stat.value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-t pt-6"
      style={{ borderColor: "#e6e0d2" }}
    >
      <p
        className="font-display leading-none"
        style={{ color: "#111111", fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}
      >
        {count}
        <span style={{ color: "#c98f00" }}>{stat.suffix}</span>
      </p>
      <p
        className="mt-3 font-mono text-[12px] tracking-[0.1em]"
        style={{ color: "#6a6a6a" }}
      >
        {stat.label.toUpperCase()}
      </p>
    </motion.div>
  );
}

export default function TeamStats() {
  return (
    <section
      className="w-full px-6 py-24 lg:px-[96px] lg:py-32"
      style={{ backgroundColor: "#ffffff" }}
    >
      <p
        className="font-mono text-[12px] tracking-[0.25em]"
        style={{ color: "#c98f00" }}
      >
        SCENE 02 — BY THE NUMBERS
      </p>
      <h2
        className="mt-4 max-w-xl font-display uppercase leading-[0.95]"
        style={{ color: "#111111", fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)" }}
      >
        A track record, not just a showreel
      </h2>

      <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10">
        {STATS.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  );
}
