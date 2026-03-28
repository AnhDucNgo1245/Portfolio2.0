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

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set(e.clientX - cx);
    y.set(e.clientY - cy);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="flex flex-col items-center select-none">
      {/* Ribbon / Lanyard */}
      <svg width="60" height="60" viewBox="0 0 60 60" className="mb-0">
        <path
          d="M30 0 Q20 20 15 40 Q20 50 30 60 Q40 50 45 40 Q40 20 30 0Z"
          fill="url(#ribbon)"
          opacity="0.9"
        />
        <defs>
          <linearGradient id="ribbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        ref={cardRef}
        drag
        dragSnapToOrigin
        dragElastic={0.12}
        dragTransition={{ timeConstant: 300, power: 0.3 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        whileHover={{ scale: 1.03 }}
        className="relative w-72 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/40 border border-cyan-500/30"
      >
        {/* Card background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0c1a2e] to-slate-900" />

        {/* Gloss overlay */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: useTransform(
              gloss,
              (v) =>
                `linear-gradient(135deg, rgba(255,255,255,${v}) 0%, transparent 60%)`,
            ),
          }}
        />

        {/* Top accent bar */}
        <div className="relative h-3 w-full bg-gradient-to-r from-cyan-600 via-emerald-400 to-cyan-600" />

        {/* Wuxia decorative lines */}
        <div className="relative px-6 py-6 flex flex-col items-center">
          {/* Cyber-Wuxia Top Decoration */}
          <div className="w-full flex justify-between items-center mb-6 px-2 opacity-80">
            {/* Left Tech Bars */}
            <div className="flex gap-1.5">
              {[...Array(3)].map((_, i) => (
                <div key={`l-${i}`} className="w-4 h-1.5 bg-cyan-500/50 rounded-full skew-x-[30deg] shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
              ))}
            </div>
            
            {/* Center Cyber-Seal */}
            <div className="relative flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-cyan-400/40 blur-md rounded-full" />
              <div className="w-9 h-9 border border-cyan-400/60 rotate-45 flex items-center justify-center bg-slate-900/90 z-10 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <span className="font-serif text-cyan-300 -rotate-45 text-base drop-shadow-[0_0_8px_rgba(34,211,238,0.9)] font-bold">
                  ✦
                </span>
              </div>
            </div>

            {/* Right Tech Bars */}
            <div className="flex gap-1.5 flex-row-reverse">
              {[...Array(3)].map((_, i) => (
                <div key={`r-${i}`} className="w-4 h-1.5 bg-emerald-500/50 rounded-full -skew-x-[30deg] shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div className="relative mb-6">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 blur-sm opacity-50 group-hover:opacity-70 transition-opacity duration-500 animate-pulse" />
            <img
              src={avatarImg}
              alt="Avatar"
              className="relative w-32 h-32 rounded-full object-cover object-[center_35%] border-2 border-white/10 shadow-lg"
              draggable={false}
            />
          </div>

          {/* Name */}
          <h2 className="text-white font-black text-2xl tracking-wider uppercase mb-1.5 drop-shadow">
            NGÔ ĐỨC ANH
          </h2>
          <p className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Full-stack Developer
          </p>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent mb-4" />

          {/* Info rows */}
          <div className="w-full space-y-1 text-xs text-slate-400 mb-4">
            <div className="flex justify-between">
              <span className="text-slate-600">Email</span>
              <span>ngoducanhzza@gmail.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">GitHub</span>
              <span className="text-cyan-400">AnhDucNgo1245</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">School</span>
              <span>FPT University</span>
            </div>
          </div>

          {/* Bottom QR placeholder decoration */}
          <div className="w-full flex items-center justify-between">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 bg-cyan-500/30 rounded-sm`}
                  style={{ height: `${8 + i * 3}px` }}
                />
              ))}
            </div>
            <p className="text-[9px] text-slate-600 tracking-widest">
              CYBER-SWORDCRAFT
            </p>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 bg-emerald-500/30 rounded-sm`}
                  style={{ height: `${20 - i * 3}px` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="h-3 w-full bg-gradient-to-r from-cyan-900/50 via-emerald-900/50 to-cyan-900/50 border-t border-white/5" />
      </motion.div>

      <p className="text-slate-600 text-xs mt-4 tracking-widest uppercase animate-pulse">
        ✦ Kéo thẻ để xoay ✦
      </p>
    </div>
  );
}
