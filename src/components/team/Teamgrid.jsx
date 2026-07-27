import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, Film } from "lucide-react";

const TEAM = [
  {
    name: "Deepak Gupta",
    role: "Editor",
    tag: "",
    img: "/Deepak-Gupta.webp",
    desc: "",
  },
  {
    name: "Dilip Gupta",
    role: "Founder",
    tag: null,
    img: "/dilip.webp",
    desc: "",
  },
  {
    name: "Kapil Rawat",
    role: "Delhi Executive Director",
    tag: "Founding",
    img: "/Kapil_Rawat.webp",
  },
  {
    name: "Prince Mishra",
    role: "Creative Director",
    tag: null,
    img: "/Prince_Mishra.webp",
  },
  {
    name: "Ratnesh Yadav",
    role: "Colorist & Editor",
    tag: null,
    img: "/Ratnesh-Yadav.webp",
  },
  {
    name: "Sarvashreshth Ray",
    role: "Film Director",
    tag: null,
    img: "/sarvesh.webp",
  },
  {
    name: "Memon Shadap Razzak",
    role: "Head Editor",
    tag: null,
    img: "/Memon_Shadap_Razzak.webp",
  },
];

export default function TeamCards() {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const dragRef = useRef({ isDown: false, startX: 0, scrollStart: 0 });
  const [dragging, setDragging] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth - 2;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const cardStep = () => {
    const el = trackRef.current;
    const card = el?.querySelector("[data-card]");
    const gap = window.innerWidth < 640 ? 16 : 24;
    return (card?.offsetWidth || 260) + gap;
  };

  const scrollBy = (dir) =>
    trackRef.current?.scrollBy({ left: dir * cardStep(), behavior: "smooth" });

  const onMouseDown = (e) => {
    dragRef.current = {
      isDown: true,
      startX: e.pageX,
      scrollStart: trackRef.current.scrollLeft,
    };
    setDragging(true);
  };

  const onMouseUp = () => {
    dragRef.current.isDown = false;
    setDragging(false);
  };

  const onMouseMove = (e) => {
    if (!dragRef.current.isDown) return;
    e.preventDefault();
    trackRef.current.scrollLeft =
      dragRef.current.scrollStart - (e.pageX - dragRef.current.startX);
  };

  return (
    <section
      className="w-full bg-black text-white px-4 py-14 sm:py-20 sm:px-6 lg:px-12 lg:py-24 select-none overflow-hidden font-sans tracking-normal"
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }

        [data-card] .overlay { opacity: 0; transition: opacity .35s cubic-bezier(0.16, 1, 0.3, 1); }
        [data-card]:hover .overlay { opacity: 1; }

        [data-card] .card-img { transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        [data-card]:hover .card-img { transform: scale(1.06); }

        [data-card] .info { opacity: 0; transform: translateY(12px); transition: opacity .35s ease, transform .35s ease; }
        [data-card]:hover .info { opacity: 1; transform: translateY(0); }

        /* On touch devices there's no hover — keep info panel legible by default */
        @media (hover: none) {
          [data-card] .overlay { opacity: 1; }
          [data-card] .info { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Container capped at max-w-7xl, centered */}
      <div className="w-full max-w-7xl px-12 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-semibold font-heading uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#FFBA00]">
              <Film size={14} className="shrink-0" />
              <span>Studio Roster — The People Behind The Work</span>
            </div>

            <h2 className="mt-3 text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold font-heading uppercase tracking-tight leading-[0.95] sm:leading-[0.92]">
              Our{" "}
              <span className="bg-gradient-to-r from-[#FFC72C] via-[#FFBA00] to-[#B9860A] bg-clip-text text-transparent">
                Team
              </span>
            </h2>
          </div>

          <div className="text-xs font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/50">
            <span className="text-[#FFC72C] font-bold text-base sm:text-lg">
              {String(TEAM.length).padStart(2, "0")}
            </span>{" "}
            / Key Makers
          </div>
        </div>

        {/* Carousel Track */}
        <div
          ref={trackRef}
          onScroll={updateEdges}
          onMouseDown={onMouseDown}
          className={`flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-4 sm:pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: dragging ? "auto" : "smooth",
          }}
        >
          {TEAM.map((member) => (
            <div
              key={member.name}
              data-card
              className="relative flex-none w-[210px] sm:w-[260px] md:w-[280px] lg:w-[300px] h-[310px] sm:h-[380px] md:h-[410px] lg:h-[440px] rounded-md overflow-hidden bg-[#0A0A0A] border border-white/10 group shadow-2xl"
              style={{ scrollSnapAlign: "start" }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="card-img absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />

              {member.tag && (
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#FFC72C] bg-black/80 border border-[#FFC72C]/40 rounded-md px-2.5 sm:px-3 py-1 backdrop-blur-md">
                  {member.tag}
                </span>
              )}

              {/* Ambient Hover Gradient Overlay */}
              <div
                className="overlay absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.6) 50%, rgba(5,5,5,0) 85%)",
                }}
              />

              {/* Information Panel */}
              <div className="info absolute left-0 right-0 bottom-0 p-4 sm:p-6 z-10">
                <div className="font-bold font-heading text-base sm:text-xl lg:text-2xl tracking-tight text-white mb-1 uppercase leading-snug">
                  {member.name}
                </div>
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold font-heading tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#FFC72C]">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#FFC72C] inline-block rounded-md shrink-0" />
                  <span className="truncate">{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Control Buttons */}
        <div className="flex justify-end gap-3 mt-4 pt-5 sm:pt-6 border-t border-white/10">
          <button
            onClick={() => scrollBy(-1)}
            disabled={atStart}
            aria-label="Previous Team Member"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-md border border-white/15 bg-[#0A0A0A] flex items-center justify-center hover:border-[#FFC72C] hover:bg-[#141414] active:scale-95 transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
          >
            <ArrowLeft size={16} className="text-white sm:hidden" />
            <ArrowLeft size={18} className="text-white hidden sm:block" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            disabled={atEnd}
            aria-label="Next Team Member"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-md border border-white/15 bg-[#0A0A0A] flex items-center justify-center hover:border-[#FFC72C] hover:bg-[#141414] active:scale-95 transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
          >
            <ArrowRight size={16} className="text-white sm:hidden" />
            <ArrowRight size={18} className="text-white hidden sm:block" />
          </button>
        </div>
      </div>
    </section>
  );
}