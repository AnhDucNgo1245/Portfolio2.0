import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, GraduationCap, Calendar } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import avatarImg from "../assets/avt abt me.png";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <SectionWrapper id="about" title="ABOUT ME" subtitle="system.identity">
      <div
        ref={ref}
        className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Photo with Cyber Radar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:-left-4 mx-auto mt-4">
            {/* Cyber Radar Background */}
            <div className="absolute inset-0 rounded-full border border-cyan-500/20 overflow-hidden bg-slate-900/50 shadow-[inset_0_0_50px_rgba(6,182,212,0.1)]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="w-full h-full origin-center"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 70%, rgba(6,182,212,0.4) 100%)",
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,14,26,0.8)_80%)]" />
              <div className="absolute top-1/2 w-full h-[1px] bg-cyan-500/30" />
              <div className="absolute left-1/2 h-full w-[1px] bg-cyan-500/30" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 rounded-full border border-cyan-500/20" />
            </div>

            {/* Rotating Tech Rings */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute -inset-4 rounded-full border-[1.5px] border-dashed border-cyan-500/40"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="absolute -inset-8 rounded-full border-[2px] border-emerald-500/20 opacity-50"
              style={{
                borderLeftColor: "transparent",
                borderRightColor: "transparent",
              }}
            />

            <div className="absolute inset-3 overflow-hidden rounded-full border-[3px] border-cyan-400/50 shadow-[0_0_25px_rgba(6,182,212,0.3)] bg-slate-900">
              <img
                src={avatarImg}
                alt="Ngô Đức Anh"
                className="relative w-full h-full object-cover object-[center_35%] opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>

            {/* Floating Data Badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-2 -right-4 lg:-right-8 bg-[#0a1526]/90 border-l-2 border-emerald-400 px-5 py-3 shadow-[0_0_20px_rgba(16,185,129,0.3)] flex flex-col gap-0.5 backdrop-blur-md z-10"
              style={{
                clipPath:
                  "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
              }}
            >
              <div className="text-emerald-400 text-[9px] font-mono tracking-widest uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                EXP_LOG
              </div>
              <div className="text-2xl font-black text-white leading-none tracking-wider">
                2+{" "}
                <span className="text-xs text-slate-400 font-mono tracking-widest">
                  YRS
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Info Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-7"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 bg-cyan-400 rotate-45 shadow-[0_0_8px_rgba(6,182,212,1)]" />
              <div className="text-[10px] text-cyan-400 font-mono tracking-[0.4em] font-bold">
                USER_ID: NDA_04
              </div>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-wider font-cyber">
              Identity: <span className="text-gradient">Duc Anh</span>
            </h3>

            <div className="relative bg-slate-900/40 border border-cyan-500/10 p-6 backdrop-blur-sm shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]">
              {/* Target Brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/40" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500/40" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500/40" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/40" />

              <p className="text-slate-300 leading-relaxed font-sans text-sm sm:text-base relative z-10">
                Sophomore Software Engineer at <span className="text-white font-bold tracking-wide">FPT University</span>. 
                I specialize in high-performance Fullstack Web and immersive Game development. 
                Equipped with <span className="text-cyan-400 font-mono">IELTS 6.0</span> proficiency and currently 
                decoding <span className="text-emerald-400 font-mono">Japanese Protocol</span>.
              </p>
            </div>
          </div>

          {/* Contact info HUD */}
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { icon: Calendar, text: "12/04/2005", label: "D.O.B" },
              { icon: Phone, text: "0968 315 859", label: "COMMS" },
              { icon: Mail, text: "ng.ducanh1245@...", label: "NET_LINK" },
              { icon: MapPin, text: "Hanoi", label: "GEO_LOC" },
              { icon: GraduationCap, text: "FPT Univ", label: "FACILITY" },
            ].map(({ icon: Icon, text, label }) => (
              <div
                key={label}
                className="group relative flex items-center gap-3 bg-[#0a1526] border border-white/5 p-2 px-3 overflow-hidden shadow-inner"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-500/30 group-hover:bg-cyan-400 transition-colors shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
                <div className="bg-slate-800/80 p-1.5 rounded border border-white/5">
                  <Icon className="w-3.5 h-3.5 text-cyan-400 drop-shadow-[0_0_3px_rgba(34,211,238,0.8)]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[8px] text-slate-500 font-mono tracking-[0.2em]">
                    {label}
                  </span>
                  <span className="text-xs text-slate-300 font-mono truncate">
                    {text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Hobbies Core Subroutines */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-[1px] bg-emerald-500/60" />
              <div className="text-[10px] text-emerald-400 font-mono tracking-[0.3em] uppercase">
                Sub_Routines
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-emerald-500/40 to-transparent" />
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "🏓 Table Tennis",
                "🏀 Basketball",
                "🎵 Listening to Music",
                "🎮 Gaming",
              ].map((h) => (
                <span
                  key={h}
                  className="text-[10px] px-5 py-2 bg-emerald-950/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all cursor-crosshair shadow-[inset_0_0_12px_rgba(16,185,129,0.1)] font-mono font-bold tracking-widest uppercase flex items-center gap-2"
                  style={{
                    clipPath:
                      "polygon(10px 0, 100% 0, 100% 65%, calc(100% - 10px) 100%, 0 100%, 0 35%)",
                  }}
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
