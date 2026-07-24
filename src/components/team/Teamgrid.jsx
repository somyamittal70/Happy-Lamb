import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
    desc: "",
  },
  {
    name: "Prince Mishra",
    role: "Creative Director",
    tag: null,
    img: "/Prince_Mishra.webp",
    desc: `   Objective: Excel and establish value in the film &amp; TV industry.
                                <br><br>
                                Traits: Team coordination,communication, self-motivation, organization,
                                problem-solving, creativity, adaptability, composure under pressure. <br><br>
                                Experience: 5 years in media as a Creative. Proficient in artist handling, channel
                                interactions, script breakdown, set creation, look tests, synopsis prep, and approvals. <br><br>
                                Skills: Analyzing scene properties for scene requirements and artist looks. `,
  },
  {
    name: "Ratnesh Yadav",
    role: "Colorist & Editor",
    tag: null,
    img: "/Ratnesh-Yadav.webp",
    desc: "",
  },
  {
    name: "Sarvashreshth ray",
    role: "Film Directive",
    tag: null,
    img: "/sarvesh.webp",
    desc: `  Sarvashreshth ray carrier begin in 2014-15 he started a carrier with TV SHOWS ek haseena thi from Star
                                Plus as an intership then I joined qubool hain as a assistant director..i assist mr
                                amandeep Singh..i done  lots of tv shows the biggest show is POURS for Sony TV there i learned lots of things   like vfx cg how to
                                handle animal this was Indian biggest shows …i got a big break and big opportunity from
                                mr.vaibhav
                                Singh who gave me name on tv screen as director the show name is apna time bhi aayega..this is big
                                opportunity from me .. after this I growing up as a director.`,
  },
  {
    name: "Memon Shadap Razzak",
    role: "Head Editor",
    tag: null,
    img: "/Memon_Shadap_Razzak.webp",
    desc: ` 6 years exp. Video Editor: Films, Tata Sky, Times of India, Web series.
                                Asst. Video Editor: Nachle with Saroj Khan, Coffee with Karan, etc.
                                Film Assistant: Maximum,The Maya Tape, Rave Party, GUBBARE.
                                Current: Video Editor at PIXELLD STUDIO since Oct 2019.
                                <br><br> Skills: FCP, Adobe Premiere Pro, DaVinci Resolve.`,
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
    return (card?.offsetWidth || 260) + 24;
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
    <div
      className="min-h-screen w-full bg-[#0e0d0c] text-[#f3eee4] px-[6vw] py-16 md:py-20 select-none"
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

        [data-card] .overlay { opacity: 0; transition: opacity .35s ease; }
        [data-card]:hover .overlay { opacity: 1; }

        [data-card] .info { opacity: 0; transform: translateY(8px); transition: opacity .35s ease, transform .35s ease; }
        [data-card]:hover .info { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* Header */}
      <div className="flex flex-wrap justify-between items-end gap-8 mb-14">
        <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#d4ff5c] max-w-[240px] leading-relaxed">
          Studio roster — the people behind the work
        </p>
        <h1 className="font-display font-medium uppercase leading-[0.95] tracking-tight text-[clamp(40px,7vw,88px)]">
          Our Team
        </h1>
        <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#6b6459] whitespace-nowrap">
          <b className="text-[#f3eee4]">
            {String(TEAM.length).padStart(2, "0")}
          </b>{" "}
          / makers
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={trackRef}
        onScroll={updateEdges}
        onMouseDown={onMouseDown}
        className={`flex gap-6 overflow-x-auto no-scrollbar pb-6 ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{
          scrollSnapType: "x mandatory",
          scrollBehavior: dragging ? "auto" : "smooth",
        }}
      >
        {TEAM.map((member) => (
          <div
            key={member.name}
            data-card
            className="relative flex-none w-[240px] sm:w-[260px] h-[360px] sm:h-[380px] rounded-md overflow-hidden bg-[#1d1917]"
            style={{ scrollSnapAlign: "start" }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {member.tag && (
              <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.1em] uppercase text-[#d4ff5c] bg-[#0e0d0c]/60 border border-[#d4ff5c]/35 rounded-full px-2.5 py-1 backdrop-blur-sm">
                {member.tag}
              </span>
            )}

            <div
              className="overlay absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,8,7,0.92) 0%, rgba(10,8,7,0.4) 45%, rgba(10,8,7,0) 70%)",
              }}
            />

            <div className="info absolute left-0 right-0 bottom-0 p-5">
              <div className="font-display font-medium text-2xl tracking-tight mb-1">
                {member.name}
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.1em] uppercase text-[#d4ff5c]">
                <span className="w-3.5 h-px bg-[#d4ff5c] inline-block" />
                {member.role}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-end gap-2.5 mt-4 pt-6 border-t border-[#f3eee4]/10">
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
  );
}
