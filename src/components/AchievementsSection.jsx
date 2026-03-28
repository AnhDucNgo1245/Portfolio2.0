import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Database } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const ACHIEVEMENTS = [
  { year: '2016', name: 'Encouragement Award - AMC Australia', type: 'award' },
  { year: '2017', name: 'Encouragement Award - AMC Australia', type: 'award' },
  { year: '2017', name: 'Encouragement Award - City-level Computer Programming', type: 'award' },
  { year: '2018', name: 'City-level Excellent Student - Lao Cai City', type: 'award' },
  { year: '2018', name: '3rd Prize - City-level Scientific Research', type: 'award' },
  { year: '2018', name: 'Encouragement Award - City-level Physics', type: 'award' },
  { year: '2018', name: 'Encouragement Award - AMC Australia', type: 'award' },
  { year: '2023', name: 'IELTS 6.0 Certificate', type: 'cert' },
  { year: '2024', name: 'Top 7 – CodeFest 2024 (JSClub – FPT University)', type: 'comp' },
  { year: '2025', name: 'Top 8 – Startup Olympics 2025 (NEU)', type: 'comp' },
]

const TYPE_STYLES = {
  award: { color: '#fbbf24', label: 'AWARD_LOG' },
  cert:  { color: '#06b6d4', label: 'CERT_DATA' },
  comp:  { color: '#10b981', label: 'COMP_RECORD' },
}

function AchievementItem({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })
  const style = TYPE_STYLES[item.type]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="flex gap-5 group relative"
    >
      {/* Year + line */}
      <div className="flex flex-col items-center w-14 shrink-0 pt-1">
        <div className="text-[11px] font-mono font-black tracking-widest text-center" style={{ color: style.color, textShadow: `0 0 10px ${style.color}80` }}>
          {item.year}
        </div>
        <div className="flex-1 w-[2px] mt-3" style={{ background: `linear-gradient(to bottom, ${style.color}80, transparent)` }} />
      </div>

      {/* Cyber Node */}
      <div className="mt-1 shrink-0">
        <motion.div
          whileHover={{ scale: 1.5, rotate: 45 }}
          className="w-3 h-3 rotate-45 border mt-0.5"
          style={{
            borderColor: style.color,
            background: style.color + '20',
            boxShadow: `0 0 10px ${style.color}80`
          }}
        >
          <div className="w-full h-full bg-white opacity-40 group-hover:opacity-100 group-hover:animate-ping transition-opacity" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="pb-8 flex-1 border-l-2 border-transparent group-hover:border-cyan-500/30 pl-4 transition-colors">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[9px] font-mono font-black uppercase tracking-[0.3em] px-2.5 py-1 border"
            style={{ color: style.color, borderColor: style.color + '50', background: style.color + '15', boxShadow: `inset 0 0 8px ${style.color}20` }}>
            {style.label}
          </span>
          <div className="h-px bg-slate-800 flex-1 hidden sm:block" />
        </div>
        <p className="text-slate-200 font-mono text-[13px] tracking-wide group-hover:text-white transition-all leading-relaxed uppercase font-bold relative">
          {item.name}
          {/* Glitch sub-layer on hover */}
          <span className="absolute inset-0 text-cyan-400 opacity-0 group-hover:opacity-100 -translate-x-0.5 translate-y-0.5 mix-blend-screen pointer-events-none transition-opacity duration-75">
            {item.name}
          </span>
          <span className="absolute inset-0 text-pink-500 opacity-0 group-hover:opacity-100 translate-x-0.5 -translate-y-0.5 mix-blend-screen pointer-events-none transition-opacity duration-150">
            {item.name}
          </span>
        </p>
      </div>
    </motion.div>
  )
}

export default function AchievementsSection() {
  return (
    <SectionWrapper id="achievements" title="UNLOCKED ARCHIVES" subtitle="milestones">
      <div className="max-w-4xl mx-auto relative bg-[#020617]/95 border border-cyan-500/20 p-8 md:p-14 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
           style={{ clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)' }}>
        {/* Terminal Scanlines Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.8)_50%)] bg-[size:100%_4px]" />
        
        {/* Corner Brackets */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/50" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/50" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50" />

        <div className="flex items-center gap-3 mb-10 border-b border-cyan-500/20 pb-4 relative z-10">
          <Database className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_5px_currentColor] animate-pulse" />
          <span className="text-cyan-400/80 text-xs font-mono uppercase tracking-[0.3em] flex items-center gap-2">
            SYSTEM_LOGS
            <div className="w-2 h-0.5 bg-cyan-400/50 animate-ping" />
          </span>
        </div>
        
        <div className="relative z-10">
          {ACHIEVEMENTS.map((item, i) => (
            <AchievementItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
