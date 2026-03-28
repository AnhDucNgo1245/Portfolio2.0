import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Database } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const ACHIEVEMENTS = [
  { year: '2025', name: 'Top 8 – Startup Olympics 2025 (NEU)', type: 'comp', tag: 'STARTUP_OLY' },
  { year: '2024', name: 'Top 7 – CodeFest 2024 (JSClub – FPT University)', type: 'comp', tag: 'CODEFEST' },
  { year: '2023', name: 'IELTS 6.0 Certificate', type: 'cert', tag: 'IELTS_VERIF' },
  { year: '2018', name: 'Encouragement Award - AMC Australia', type: 'award', tag: 'AMC_AUS' },
  { year: '2018', name: 'Encouragement Award - City-level Physics', type: 'award', tag: 'PROG_PHYS' },
  { year: '2018', name: '3rd Prize - City-level Scientific Research', type: 'award', tag: 'SCI_RES' },
  { year: '2018', name: 'Excellent Student - Lao Cai City', type: 'award', tag: 'EXCEL_STUD' },
  { year: '2017', name: 'Encouragement Award - Computer Programming', type: 'award', tag: 'PROG_COMP' },
  { year: '2017', name: 'Encouragement Award - AMC Australia', type: 'award', tag: 'AMC_AUS' },
  { year: '2016', name: 'Encouragement Award - AMC Australia', type: 'award', tag: 'AMC_AUS' },
]

const TYPE_STYLES = {
  award: { color: '#fbbf24', label: 'AWARD' },
  cert:  { color: '#06b6d4', label: 'CERT' },
  comp:  { color: '#10b981', label: 'COMP' },
}

// Group achievements by year
const GROUPED_ACHIEVEMENTS = ACHIEVEMENTS.reduce((acc, curr) => {
  if (!acc[curr.year]) acc[curr.year] = [];
  acc[curr.year].push(curr);
  return acc;
}, {});

const YEARS = Object.keys(GROUPED_ACHIEVEMENTS).sort((a, b) => b - a);

function AchievementCard({ item, index }) {
  const style = TYPE_STYLES[item.type]

  return (
    <motion.div
      whileHover={{ y: -5, x: 5 }}
      className="relative mb-4 group last:mb-0"
    >
      {/* Decorative Border Glow on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/20 rounded-lg blur transition-all duration-500" />
      
      <div className="relative bg-[#0a1120]/40 border border-slate-800 group-hover:border-cyan-500/30 p-4 backdrop-blur-md transition-all duration-300">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[8px] font-mono font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-sm border"
            style={{ color: style.color, borderColor: style.color + '40', background: style.color + '10' }}>
            {style.label}
          </span>
          <span className="text-[8px] font-mono text-slate-500 tracking-widest uppercase">#{item.tag}</span>
        </div>

        <h4 className="text-white font-cyber text-[13px] sm:text-[15px] tracking-wide group-hover:text-cyan-400 transition-all leading-tight uppercase font-black">
          {item.name}
        </h4>
      </div>
    </motion.div>
  )
}

function YearBlock({ year, items, isFirst }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="relative pl-12 sm:pl-20 mb-16 last:mb-0">
      {/* Year Label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        className="absolute left-0 top-0 flex flex-col items-center"
      >
        <div className="text-2xl sm:text-3xl font-black text-white/20 select-none font-cyber">
          {year}
        </div>
        
        {/* Connection Node */}
        <div className="relative mt-2">
          <div className="w-3 h-3 bg-[#020617] border-2 border-cyan-500 rotate-45 relative z-10" />
          <div className="absolute inset-x-0 top-1.5 h-[1px] w-12 sm:w-20 bg-gradient-to-r from-cyan-500 to-transparent -translate-x-full" />
          {isFirst && (
            <div className="absolute -inset-2 bg-cyan-500/20 blur-sm rounded-full animate-pulse" />
          )}
        </div>
      </motion.div>

      {/* Vertical Stem Line Fragment */}
      <div className="absolute left-[5.5px] top-4 bottom-[-64px] w-[1px] bg-gradient-to-b from-cyan-500 via-cyan-500/20 to-transparent opacity-20" />

      {/* Cards List */}
      <div className="space-y-4">
        {items.map((item, i) => (
          <AchievementCard key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  )
}

export default function AchievementsSection() {
  return (
    <SectionWrapper id="achievements" title="UNLOCKED ARCHIVES" subtitle="milestones">
      <div className="max-w-4xl mx-auto relative px-4 md:px-0">
        
        {/* Terminal Dashboard Header */}
        <div className="max-w-4xl mx-auto mb-16 relative bg-[#020617]/95 border border-cyan-500/20 p-6 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
             style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
            <div className="flex items-center gap-3">
              <Database className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_5px_currentColor] animate-pulse" />
              <div className="flex flex-col">
                <span className="text-white text-[10px] font-black uppercase tracking-[0.4em] font-cyber">
                  CHRONOLOGY_SYSTEM
                </span>
                <span className="text-cyan-500/50 text-[8px] font-mono uppercase tracking-[0.2em]">
                  UPLINK_STATUS: SECURE // DESCENDING_REFS
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-[9px] font-mono tracking-[0.2em] text-cyan-400/50">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 animate-pulse" />
                SYNC_ONLINE
              </div>
              <div className="w-px h-6 bg-slate-800 mx-2 hidden sm:block" />
              <div className="hidden sm:block">REF: ARCH.V3.0</div>
            </div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {YEARS.map((year, i) => (
            <YearBlock 
              key={year} 
              year={year} 
              items={GROUPED_ACHIEVEMENTS[year]} 
              isFirst={i === 0}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}



