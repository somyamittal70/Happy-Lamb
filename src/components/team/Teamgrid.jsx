import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const TEAM = [
  { name: "Arjun Mehta", role: "Founder / Director", initials: "AM" },
  { name: "Priya Nair", role: "Director of Photography", initials: "PN" },
  { name: "Rohan Kapoor", role: "Lead Editor", initials: "RK" },
  { name: "Sana Iqbal", role: "Colorist", initials: "SI" },
  { name: "Vikram Rao", role: "Sound Designer", initials: "VR" },
  { name: "Meera Joshi", role: "Executive Producer", initials: "MJ" },
];

function avatarUrl(initials) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    initials,
  )}&background=141414&color=ffba00&size=256&font-size=0.36&bold=true`;
}

function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-md border p-6"
      style={{ borderColor: "#222222", backgroundColor: "#0a0a0a" }}
    >
      <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
        <span
          className="absolute inset-0 rounded-full border transition-colors duration-300 group-hover:border-transparent"
          style={{ borderColor: "#8a6d2e" }}
        />
        <motion.span
          className="absolute inset-0 rounded-full"
          initial={{ scale: 0.85, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          style={{
            background:
              "radial-gradient(circle, rgba(255,186,0,0.18) 0%, rgba(255,186,0,0) 70%)",
          }}
        />
        <img
          src={avatarUrl(member.initials)}
          alt={member.name}
          className="h-20 w-20 rounded-full object-cover"
        />
      </div>

      <p
        className="mt-5 text-center font-body text-[16px] font-medium"
        style={{ color: "#ffffff" }}
      >
        {member.name}
      </p>
      <p
        className="mt-1 text-center font-mono text-[11px] tracking-[0.1em]"
        style={{ color: "#8a8a8a" }}
      >
        {member.role.toUpperCase()}
      </p>

      {/* socials reveal on hover */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="mt-4 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      >
        {[ Mail].map((Icon, i) => (
          <a
            key={i}
            href="#"
            aria-label="social link"
            className="flex h-8 w-8 items-center justify-center rounded-full border transition-colors"
            style={{ borderColor: "#2a2a2a" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#ffba00")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <Icon size={13} style={{ color: "#ffffff" }} />
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function TeamGrid() {
  return (
    <section
      className="w-full px-6 py-24 lg:px-[96px] lg:py-32"
      style={{ backgroundColor: "#050505" }}
    >
      <p
        className="font-mono text-[12px] tracking-[0.25em]"
        style={{ color: "#ffba00" }}
      >
        SCENE 03 — MEET THE CREW
      </p>
      <h2
        className="mt-4 max-w-xl font-display uppercase leading-[0.95]"
        style={{ color: "#ffffff", fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)" }}
      >
        On this shoot
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </section>
  );
}
