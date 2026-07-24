import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const DETAILS = [
  {
    icon: Mail,
    label: "ENQUIRIES",
    lines: ["info@happylamb.in"],
  },
  {
    icon: Phone,
    label: "PRODUCTION LINE",
    lines: [`(+91) 9820778491, (+91) 9819778430`],
  },
  {
    icon: MapPin,
    label: "STUDIO",
    lines: [
      `Happy Lamb Production OPC PVT.LTD GSTN : 27AAGCH9980B1ZC
505, 5th Floor, Bhoomi Building, Sanjay Nagar Co.Op. Society
Cama Estate, Behind Future Studio, Goregoan (E.), Mumbai :- 400063`,
    ],
  },
];

export default function ContactInfo() {
  return (
    <div className="w-full max-w-md">
      <p
        className="font-mono text-[12px] tracking-[0.25em]"
        style={{ color: "#ffba00" }}
      >
        SCENE 02 — REACH THE STUDIO
      </p>
      <h2
        className="mt-4 font-display uppercase leading-[0.95]"
        style={{ color: "#111111", fontSize: "clamp(1.9rem, 3.4vw, 2.75rem)" }}
      >
        On location
      </h2>

      <div className="mt-10 space-y-4">
        {DETAILS.map(({ icon: Icon, label, lines }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex items-start gap-4 rounded-md border p-5 shadow-sm transition-colors"
            style={{ borderColor: "#e6e0d2", backgroundColor: "#ffffff" }}
          >
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors"
              style={{ borderColor: "#ffba00", backgroundColor: "#fff8e6" }}
            >
              <Icon size={16} style={{ color: "#c98f00" }} />
            </span>
            <div>
              <p
                className="font-mono text-[11px] tracking-[0.15em]"
                style={{ color: "#8a8a8a" }}
              >
                {label}
              </p>
              {lines.map((line) => (
                <p
                  key={line}
                  className="mt-1 whitespace-pre-line font-body text-[15px] leading-relaxed"
                  style={{ color: "#1a1a1a" }}
                >
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
