import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const TEAM = [
  { name: "Deepak Gupta", role: "Creative Director", tag: "Founding", initials: "DG", img: "/Deepak-Gupta.webp" },
  { name: "Dilip", role: "Lead Product Designer", tag: null, initials: "D", img: "/dilip.webp" },
  { name: "Kapil Rawat", role: "Engineering Lead", tag: "Founding", initials: "KP", img: "/Kapil_Rawat.webp" },
  { name: "Prince Mishra", role: "Motion & Craft", tag: null, initials: "PM", img: "/Prince_Mishra.webp" },
  { name: "Ratnesh Yadav", role: "Brand Strategist", tag: null, initials: "RY", img: "/Ratnesh-Yadav.webp" },
  { name: "Sarvesh", role: "Studio Operations", tag: null, initials: "S", img: "/sarvesh.webp" },
  { name: "Memon Shadap Razzak", role: "Studio Operations", tag: null, initials: "MSR", img: "/Memon_Shadap_Razzak.webp" },

];

const TILTS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-2", "rotate-1"];

export default function TeamCards() {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(null);
  const dragRef = useRef({ isDown: false, startX: 0, scrollStart: 0 });
  const [dragging, setDragging] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth - 2;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max);
    setProgress(max > 0 ? Math.min(1, el.scrollLeft / max) : 0);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const cardStep = () => {
    const el = trackRef.current;
    const card = el?.querySelector("[data-card]");
    return (card?.offsetWidth || 260) + 24;
  };

  const scrollBy = (dir) => trackRef.current?.scrollBy({ left: dir * cardStep(), behavior: "smooth" });

  const onMouseDown = (e) => {
    dragRef.current = { isDown: true, startX: e.pageX, scrollStart: trackRef.current.scrollLeft };
    setDragging(true);
  };
  const onMouseUp = () => { dragRef.current.isDown = false; setDragging(false); };
  const onMouseMove = (e) => {
    if (!dragRef.current.isDown) return;
    e.preventDefault();
    trackRef.current.scrollLeft = dragRef.current.scrollStart - (e.pageX - dragRef.current.startX);
  };

  return (
    <div
      className="relative min-h-screen w-full bg-[#0e0d0c] text-[#f3eee4] px-[6vw] py-16 md:py-20 select-none overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,340;0,9..144,600&family=Space+Mono&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }

        [data-card] {
          transition: transform .5s cubic-bezier(.16,1,.3,1), filter .5s ease, opacity .5s ease, box-shadow .5s ease;
          box-shadow: 0 1px 0 rgba(243,238,228,0.05);
        }
        [data-card].is-hovered { transform: rotate(0deg) translateY(-14px) scale(1.045); z-index: 10; box-shadow: 0 30px 60px -15px rgba(0,0,0,0.7), 0 0 0 1px rgba(212,255,92,0.15); }
        [data-card].is-dimmed { filter: saturate(0.7) brightness(0.75); opacity: 0.6; transform: scale(0.97); }

        [data-card] img { filter: grayscale(1) contrast(1.05); transition: filter .6s ease, transform .8s cubic-bezier(.16,1,.3,1); }
        [data-card].is-hovered img { filter: grayscale(0) contrast(1.08) saturate(1.05); transform: scale(1.1); }

        [data-card] .overlay { transition: opacity .4s ease; }
        [data-card].is-hovered .overlay { opacity: 1; }

        [data-card] .info { transition: transform .5s cubic-bezier(.16,1,.3,1), opacity .5s ease; }
        [data-card].is-hovered .info { transform: translateY(0); opacity: 1; }

        [data-card] .badge { transition: transform .6s cubic-bezier(.16,1,.3,1); }
        [data-card].is-hovered .badge { transform: rotate(360deg); }

        .grain::before {
          content: "";
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
          pointer-events: none;
          mix-blend-mode: overlay;
        }
      `}</style>

      {/* ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full opacity-[0.12] blur-[120px]"
        style={{ background: "radial-gradient(circle, #d4ff5c 0%, transparent 70%)" }}
      />
      <div className="grain pointer-events-none absolute inset-0" />

      {/* Header */}
      <div className="relative flex flex-wrap justify-between items-end gap-8 mb-16">
        <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#d4ff5c] max-w-[240px] leading-relaxed">
          Studio roster — six people, one bench, endless coffee
        </p>
        <h1 className="font-display font-medium uppercase leading-[0.95] tracking-tight text-[clamp(40px,7vw,88px)]">
          Our Team
        </h1>
        <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#6b6459] whitespace-nowrap">
          <b className="text-[#f3eee4]">06</b> / makers
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={trackRef}
        onScroll={updateEdges}
        onMouseDown={onMouseDown}
        className={`relative flex gap-6 overflow-x-auto no-scrollbar pb-6 pt-6 ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{ scrollSnapType: "x mandatory", scrollBehavior: dragging ? "auto" : "smooth" }}
      >
        {TEAM.map((member, i) => (
          <div
            key={member.name}
            data-card
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`relative flex-none w-[240px] sm:w-[260px] h-[360px] sm:h-[380px] rounded-md overflow-hidden bg-[#1d1917] origin-bottom ${TILTS[i % TILTS.length]} ${hovered === i ? "is-hovered" : ""} ${hovered !== null && hovered !== i ? "is-dimmed" : ""}`}
            style={{ scrollSnapAlign: "start" }}
          >
            <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover" draggable={false} />

            <div className="badge absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0e0d0c]/70 border border-[#f3eee4]/20 backdrop-blur-sm flex items-center justify-center">
              <span className="font-display text-xs text-[#f3eee4]">{member.initials}</span>
            </div>

            {member.tag && (
              <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.1em] uppercase text-[#d4ff5c] bg-[#0e0d0c]/60 border border-[#d4ff5c]/35 rounded-full px-2.5 py-1 backdrop-blur-sm">
                {member.tag}
              </span>
            )}

            <div
              className="overlay absolute inset-0 opacity-80"
              style={{ background: "linear-gradient(to top, rgba(10,8,7,0.95) 0%, rgba(10,8,7,0.55) 35%, rgba(10,8,7,0.05) 65%)" }}
            />

            <div className="info absolute left-0 right-0 bottom-0 p-5 translate-y-2 opacity-90">
              <div className="font-display font-medium text-2xl tracking-tight mb-1">{member.name}</div>
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.1em] uppercase text-[#d4ff5c]">
                <span className="w-3.5 h-px bg-[#d4ff5c] inline-block" />
                {member.role}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll progress bar */}
      <div className="relative h-px bg-[#f3eee4]/10 mt-2 mb-8 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#d4ff5c] rounded-full transition-[width] duration-150 ease-out"
          style={{ width: `${8 + progress * 92}%` }}
        />
      </div>

      {/* Controls */}
      <div className="relative flex flex-col-reverse sm:flex-row justify-between items-stretch sm:items-center gap-5 pt-6 border-t border-[#f3eee4]/10">
        <button className="group inline-flex items-center justify-center gap-2.5 bg-transparent border border-[#f3eee4]/10 text-[#f3eee4] text-[13px] tracking-wide px-5 py-3 rounded-full hover:border-[#d4ff5c] hover:bg-[#d4ff5c]/[0.08] transition-colors">
          View all team members
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        <div className="flex gap-2.5 justify-end">
          <button
            onClick={() => scrollBy(-1)}
            disabled={atStart}
            aria-label="Previous"
            className="w-11 h-11 rounded-full border border-[#f3eee4]/10 bg-[#1d1917] flex items-center justify-center hover:border-[#d4ff5c] hover:bg-[#24201d] active:scale-95 transition-all disabled:opacity-30"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            disabled={atEnd}
            aria-label="Next"
            className="w-11 h-11 rounded-full border border-[#f3eee4]/10 bg-[#1d1917] flex items-center justify-center hover:border-[#d4ff5c] hover:bg-[#24201d] active:scale-95 transition-all disabled:opacity-30"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}