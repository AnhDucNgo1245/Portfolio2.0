import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import avatarImg from "../assets/avt.png";

const springConfig = { stiffness: 120, damping: 18 };

export default function IDCard() {
  const cardRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(y, [-100, 100], [20, -20]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(x, [-100, 100], [-25, 25]),
    springConfig,
  );
  const gloss = useSpring(
    useTransform(x, [-100, 100], [0.3, 0.6]),
    springConfig,
  );

  function handleDragEnd() {
    setIsDragging(false);
    x.set(0);
    y.set(0);
  }

  return (
    <div className="flex flex-col items-center select-none relative">
      {/* Dynamic Cyber Plasma Tether Canvas */}
      <svg className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] pointer-events-none z-10" style={{ overflow: "visible" }}>
        {/* Fixed Energy Beam Anchor to Dragged Position */}
        <motion.line
          x1="150" y1="30"
          x2={useTransform(x, v => 150 + v)}
          y2={useTransform(y, v => 96 + v)}
          stroke="#22d3ee" strokeWidth="4"
          className="drop-shadow-[0_0_15px_rgba(34,211,238,1)]"
        />
        <motion.line
          x1="150" y1="30"
          x2={useTransform(x, v => 150 + v)}
          y2={useTransform(y, v => 96 + v)}
          stroke="#ffffff" strokeWidth="1.5"
        />
        <motion.line
          x1="150" y1="30"
          x2={useTransform(x, v => 150 + v)}
          y2={useTransform(y, v => 96 + v)}
          stroke="#ffffff" strokeWidth="6"
          strokeDasharray="4 8"
          className="opacity-50"
        />

        {/* Dynamic Tech Clamp */}
        <motion.g
          style={{
            x: useTransform(x, v => 130 + v), // 150 - 20 (half width of 40)
            y: useTransform(y, v => 96 + v)   // securely locked onto the card's top edge
          }}
          className="drop-shadow-[0_5px_8px_rgba(6,182,212,0.5)]"
        >
          {/* Clamp Base Hexagon */}
          <path d="M12 0 L28 0 L36 10 L32 20 L24 28 L16 28 L8 20 L4 10 Z" fill="#020617" stroke="#22d3ee" strokeWidth="1.5" />
          
          {/* Inner Glowing Core */}
          <circle cx="20" cy="14" r="5" fill="#0f172a" stroke="#22d3ee" strokeWidth="1" />
          <circle cx="20" cy="14" r="2.5" fill="#38bdf8" className="animate-pulse shadow-[0_0_8px_currentColor]" />
          
          {/* Accent Lines */}
          <line x1="8" y1="10" x2="14" y2="14" stroke="#22d3ee" strokeWidth="1.5" opacity="0.7" />
          <line x1="32" y1="10" x2="26" y2="14" stroke="#22d3ee" strokeWidth="1.5" opacity="0.7" />
          <rect x="16" y="2" width="8" height="3" fill="#22d3ee" opacity="0.8" />
        </motion.g>
      </svg>

      {/* Spacing to compensate for the absolute tether */}
      <div className="h-[60px]" />

      <motion.div
        ref={cardRef}
        drag
        dragSnapToOrigin
        dragElastic={0.12}
        dragTransition={{ timeConstant: 300, power: 0.3 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        style={{
          x,
          y,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        whileHover={{ scale: 1.03 }}
        className="relative w-64 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.3)] border border-cyan-500/50 bg-[#020617] group"
      >
        {/* Cyber Grid Background */}
        <div className="absolute inset-0 overflow-hidden bg-[#050e1a]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
        </div>

        {/* Holographic Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-20">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="w-full h-1/4 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
          />
        </div>

        {/* Gloss overlay */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-30"
          style={{
            background: useTransform(
              gloss,
              (v) =>
                `linear-gradient(135deg, rgba(255,255,255,${v}) 0%, transparent 60%)`,
            ),
          }}
        />

        {/* Top Warning/Status Bar */}
        <div className="relative h-4 w-full bg-slate-900 border-b border-cyan-500/30 flex items-center justify-between px-3 z-10">
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-cyan-400 animate-pulse rounded-full" />
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            <div className="w-1.5 h-1.5 bg-yellow-400/50 rounded-full" />
          </div>
          <span className="text-[8px] text-cyan-400/70 tracking-[0.3em] font-mono">
            SYS.REQ // 0x4A
          </span>
        </div>

        <div className="relative px-5 py-6 flex flex-col items-center z-10">
          {/* Cyber-Targeting Avatar */}
          <div className="relative mb-6 mt-1">
            {/* Spinning Reticles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute -inset-3 rounded-full border border-dashed border-cyan-500/40"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="absolute -inset-4 rounded-full border-[1.5px] border-t-cyan-400/60 border-r-emerald-400/60 border-b-transparent border-l-transparent"
            />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300" />

            <img
              src={avatarImg}
              alt="Avatar"
              className="relative w-28 h-28 rounded-full object-cover object-[center_35%] border-2 border-cyan-400/70 shadow-[0_0_15px_rgba(6,182,212,0.5)] bg-slate-900"
              draggable={false}
            />

            {/* Tech Scope Accents */}
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-3 h-[1px] bg-cyan-500/60" />
            <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-3 h-[1px] bg-cyan-500/60" />
            <div className="absolute left-1/2 -top-5 -translate-x-1/2 w-[1px] h-3 bg-emerald-500/60" />
            <div className="absolute left-1/2 -bottom-5 -translate-x-1/2 w-[1px] h-3 bg-emerald-500/60" />
          </div>

          {/* Glitch Name */}
          <div className="relative mb-2 mt-4 text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white font-black text-2xl tracking-[0.14em] uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] whitespace-nowrap">
              NGO DUC ANH
            </h2>
          </div>
          <p className="text-cyan-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20 shadow-[inset_0_0_8px_rgba(6,182,212,0.2)]">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
            SYSTEM_ARCHITECT
          </p>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-5" />

          {/* HUD Info Rows */}
          <div className="w-full space-y-2 text-[10px] font-mono text-slate-400 mb-6 px-1">
            <div className="flex justify-between items-center bg-slate-900/50 p-1.5 rounded border border-white/5">
              <span className="text-cyan-600/70 tracking-wider">
                EMAIL_LINK
              </span>
              <span className="text-slate-300">ngoducanhzza@gmail.com</span>
            </div>
            <div className="flex justify-between items-center bg-slate-900/50 p-1.5 rounded border border-white/5">
              <span className="text-cyan-600/70 tracking-wider">NET_HUB</span>
              <span className="text-cyan-400">AnhDucNgo1245</span>
            </div>
            <div className="flex justify-between items-center bg-slate-900/50 p-1.5 rounded border border-white/5">
              <span className="text-cyan-600/70 tracking-wider">FACILITY</span>
              <span className="text-slate-300 flex items-center gap-1">
                FPT ACADEMY
                <div className="w-1 h-2 bg-emerald-500/80 skew-x-12 animate-pulse" />
              </span>
            </div>
          </div>

          {/* Bottom Data Processing Bar */}
          <div className="w-full flex flex-col gap-1.5">
            <div className="flex justify-between items-end">
              <span className="text-[8px] text-cyan-500/70 font-mono tracking-widest">
                UPLINK_STATUS
              </span>
              <span className="text-[9px] text-emerald-400 font-mono tracking-widest animate-pulse">
                STABLE
              </span>
            </div>
            <div className="w-full h-0.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              />
            </div>
            <div className="flex justify-between items-center mt-1">
              <div className="flex gap-0.5">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`w-0.5 h-[5px] bg-cyan-500/40`} />
                ))}
              </div>
              <p className="text-[7px] text-cyan-700 font-mono tracking-widest">
                ID: CYBER-DEV-1245
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <p className="text-slate-600 text-xs mt-4 tracking-widest uppercase animate-pulse">
        ✦ Drag to rotate ✦
      </p>
    </div>
  );
}
