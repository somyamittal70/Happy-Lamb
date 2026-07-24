import { motion } from "framer-motion";

function ReelVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* pulsing spotlight glow behind the reel */}
      <motion.div
        className="absolute h-[340px] w-[340px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,186,0,0.22) 0%, rgba(255,186,0,0) 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* floating dust particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute block rounded-full"
          style={{
            width: 3,
            height: 3,
            backgroundColor: "#ffba00",
            left: `${10 + ((i * 37) % 80)}%`,
            top: `${10 + ((i * 53) % 80)}%`,
            opacity: 0.5,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{
            duration: 5 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.35,
          }}
        />
      ))}

      {/* rotating film reel, drawn in SVG */}
      <motion.svg
        viewBox="0 0 240 240"
        className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="120"
          cy="120"
          r="100"
          fill="none"
          stroke="#ffba00"
          strokeWidth="10"
        />
        <circle
          cx="120"
          cy="120"
          r="26"
          fill="#0a0a0a"
          stroke="#ffba00"
          strokeWidth="6"
        />
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const x = 120 + Math.cos(angle) * 62;
          const y = 120 + Math.sin(angle) * 62;
          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r="17"
                fill="#050505"
                stroke="#ffba00"
                strokeWidth="4"
              />
            </g>
          );
        })}
      </motion.svg>
    </div>
  );
}

export default function ContactHero() {
  return (
    <section
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden px-6 lg:px-[96px]"
      style={{ backgroundColor: "#050505" }}
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* left — text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[12px] tracking-[0.25em]"
            style={{ color: "#ffba00" }}
          >
            INT./EXT. — PRODUCTION OFFICE — CONTACT
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display uppercase leading-[0.92] tracking-tight"
            style={{
              color: "#ffffff",
              fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)",
            }}
          >
            Let&apos;s shoot
            <br />
            <span style={{ color: "#ffba00" }}>something worth</span>
            <br />
            watching.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-lg font-body text-[15px] leading-relaxed"
            style={{ color: "#c9c9c9" }}
          >
            Tell us about the film, campaign, or story you&apos;re building. Our
            production team replies within one  day.
          </motion.p>
        </div>

   
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(5,5,5,0.35) 0%, rgba(5,5,5,0.85) 60%, #050505 100%)",
        }}
      />
    </section>
  );
}
