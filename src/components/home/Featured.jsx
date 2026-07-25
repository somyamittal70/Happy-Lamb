import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";

/* ---------- Design tokens ---------- */
const GOLD = "#FFC72C";
const INK = "#F5EFE4";
const MUTED = "#948C7E";
const BASE = "#0D0C0B";
const PANEL = "#17140F";
const HAIR = "rgba(245,239,228,0.08)";

const FONT_DISPLAY = "'Oswald', sans-serif";
const FONT_BODY = "'Inter', sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";

const CATEGORIES = ["All Projects", "Brand Films", "Real-Life Stories", "Short Films"];

const PROJECTS = [
  {
    id: 1,
    title: "Mr. India Revival — #FundYourOwnWorth",
    category: "Brand Films",
    client: "ICICI Bank",
    thumbnail: "https://images.pexels.com/photos/4622108/pexels-photo-4622108.jpeg",
    featured: false,
  },
  {
    id: 2,
    title: "Home Lockers ft. Madhuri Dixit",
    category: "Brand Films",
    client: "Godrej",
    thumbnail: "https://i.pinimg.com/1200x/ac/28/23/ac282397dc1dddff1e0a19ba1a60cfff.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Invincible Indians — Medicine Baba",
    category: "Real-Life Stories",
    client: "Bajaj V",
    thumbnail: "https://images.pexels.com/photos/19597973/pexels-photo-19597973.jpeg",
    featured: false,
  },
  {
    id: 4,
    title: "The Excavator Village Story — Unbreakable Trust",
    category: "Brand Films",
    client: "JCB India",
    thumbnail: "https://images.pexels.com/photos/13098128/pexels-photo-13098128.jpeg",
    featured: false,
  },
{
    id: 5,
    title: "Iss Diwali, Kuch Naya!",
    category: "Brand Films",
    client: "Upstox",
    thumbnail: "https://images.pexels.com/photos/34387791/pexels-photo-34387791.jpeg",
    featured: false,
},
  {
    id: 6,
    title: "Rural Roads, Real Stories — Sabka Sathi",
    category: "Real-Life Stories",
    client: "Hero MotoCorp",
    thumbnail: "https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg",
    featured: false,
  },
];
/* ---------- Magnetic tilt card ---------- */
function TiltCard({ project, isHero }) {
  const ref = useRef(null);

  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);

  const springCfg = { stiffness: 180, damping: 18, mass: 0.6 };
  const rotXs = useSpring(rotX, springCfg);
  const rotYs = useSpring(rotY, springCfg);

  const imgX = useTransform(rotYs, [-10, 10], [12, -12]);
  const imgY = useTransform(rotXs, [-10, 10], [-12, 12]);
  const badgeX = useTransform(rotYs, [-10, 10], [-6, 6]);

  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${spotX}% ${spotY}%, rgba(255,199,44,0.16), transparent 65%)`;

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotY.set((px - 0.5) * 16);
    rotX.set((0.5 - py) * 16);
    spotX.set(px * 100);
    spotY.set(py * 100);
  }

  function handleLeave() {
    rotX.set(0);
    rotY.set(0);
    spotX.set(50);
    spotY.set(50);
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45 }}
      className={isHero ? "md:col-span-2" : ""}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX: rotXs, rotateY: rotYs, transformStyle: "preserve-3d" }}
        className="group relative rounded-2xl overflow-hidden"
      >
        {/* gradient border shell */}
        <div
          className="absolute inset-0 rounded-2xl p-[1px] pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgba(255,199,44,0.35), transparent 40%, transparent 70%, rgba(255,199,44,0.15))`,
          }}
        />
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ background: PANEL, border: `1px solid ${HAIR}`, margin: "1px" }}
        >
          {/* cursor spotlight */}
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: spotlight }}
          />

          {/* media */}
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: isHero ? "16/9" : "16/11" }}
          >
            <motion.img
              src={project.thumbnail}
              alt={project.title}
              style={{ x: imgX, y: imgY, scale: 1.12 }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/20" />

            {/* client chip — floats with slight counter-parallax */}
            <motion.div
              style={{ x: badgeX }}
              className="absolute top-4 left-4 z-20 rounded-full px-3.5 py-1.5 backdrop-blur-md"
            >
              <span
                className="text-xs font-medium"
                style={{ fontFamily: FONT_MONO, color: INK, background: "rgba(13,12,11,0.55)", padding: "6px 10px", borderRadius: "999px", border: `1px solid ${HAIR}` }}
              >
                {project.client}
              </span>
            </motion.div>

            {/* play button, pops in with spring */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75 transition-all duration-300 flex h-16 w-16 items-center justify-center rounded-full shadow-2xl"
                style={{ background: GOLD, boxShadow: `0 0 40px ${GOLD}55` }}
              >
                <Play className="h-6 w-6 fill-black text-black translate-x-0.5" />
              </motion.div>
            </div>
          </div>

          {/* content */}
          <div className="relative p-6 sm:p-7 z-20">
            <div
              className="text-xs uppercase tracking-[0.2em] mb-2"
              style={{ fontFamily: FONT_MONO, color: GOLD }}
            >
              {project.category}
            </div>
            <h3
              className={`leading-tight ${isHero ? "text-2xl sm:text-3xl" : "text-xl"}`}
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}
            >
              {project.title}
            </h3>

            <div
              className="mt-6 pt-4 flex items-center justify-between text-sm"
              style={{ borderTop: `1px solid ${HAIR}`, color: MUTED }}
            >
              <span>Watch the story</span>
              <motion.span
                className="inline-flex items-center gap-1.5 font-semibold"
                style={{ color: GOLD }}
                whileHover={{ x: 4 }}
              >
                View Reel <ArrowUpRight className="h-4 w-4" />
              </motion.span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((item) => item.category === activeCategory);

  return (
    <section
      className="relative w-full py-28 overflow-hidden"
      style={{ background: BASE, color: INK, fontFamily: FONT_BODY }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] bg-gradient-to-b from-amber-500/10 via-transparent to-transparent blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b" style={{ borderColor: HAIR }}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-md px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
              style={{ border: `1px solid rgba(255,199,44,0.3)`, background: "rgba(255,199,44,0.08)", color: GOLD }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Selected Portfolio</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 uppercase font-heading  text-4xl sm:text-5xl lg:text-5xl tracking-tight leading-none"
             
            >
              Crafted for <span style={{ color: GOLD }}>Iconic Brands.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-1.5 rounded-2xl p-1.5"
            style={{ border: `1px solid ${HAIR}`, background: "rgba(23,20,15,0.8)" }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="relative rounded-md px-4 py-2.5 text-xs font-heading font-semibold tracking-wide transition-all duration-300 focus:outline-none"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: GOLD }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10" style={{ color: isActive ? "#0D0C0B" : MUTED, fontWeight: isActive ? 700 : 500 }}>
                    {cat}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <TiltCard
                key={project.id}
                project={project}
                isHero={activeCategory === "All Projects" && project.featured}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 flex justify-center"
        >
          <motion.a
            href="/work"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-3 rounded-2xl px-10 py-4.5 text-xs font-bold uppercase tracking-widest transition-colors duration-300"
            style={{ border: `1px solid rgba(255,199,44,0.3)`, color: INK, background: PANEL }}
          >
            <span>Explore All Work</span>
            <ArrowUpRight className="h-4 w-4" style={{ color: GOLD }} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}