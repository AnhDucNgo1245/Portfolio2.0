import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const SKILL_CATEGORIES = {
  'LANGUAGES': [
    { name: 'Java', color: '#f89820', level: 80 },
    { name: 'C/C++', color: '#00599c', level: 65 },
    { name: 'JavaScript', color: '#f7df1e', level: 85 },
    { name: 'C# (Unity)', color: '#9c30b4', level: 70 },
  ],
  'FRONTEND': [
    { name: 'ReactJS', color: '#61dafb', level: 85 },
    { name: 'TailwindCSS', color: '#38bdf8', level: 88 },
    { name: 'HTML/CSS', color: '#e34f26', level: 90 },
  ],
  'BACKEND': [
    { name: 'NodeJS', color: '#68a063', level: 75 },
  ],
  'LINGUISTICS': [
    { name: 'English (IELTS 6.0)', color: '#06b6d4', level: 80 },
    { name: 'Japanese (Learning)', color: '#ff0050', level: 25 },
  ],
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('LANGUAGES')

  return (
    <SectionWrapper id="skills" title="CORE PROTOCOLS" subtitle="weaponry_systems">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {Object.keys(SKILL_CATEGORIES).map(cat => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`relative px-6 py-2 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 overflow-hidden group
              ${activeTab === cat
                ? 'text-slate-900 drop-shadow-md'
                : 'text-cyan-400/70 hover:text-cyan-300'
              }`}
            style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
          >
            {/* Background Layer */}
            <div className={`absolute inset-0 transition-colors duration-300 border border-cyan-500/30
              ${activeTab === cat ? 'bg-cyan-400' : 'bg-[#0f172a] group-hover:bg-[#1e293b]'}`}
            />
            {/* Tech Accents */}
            <div className={`absolute bottom-0 left-0 w-3 h-0.5 ${activeTab === cat ? 'bg-slate-900' : 'bg-cyan-500'}`} />
            <div className={`absolute top-0 right-0 w-3 h-0.5 ${activeTab === cat ? 'bg-slate-900' : 'bg-cyan-500'}`} />
            
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {SKILL_CATEGORIES[activeTab].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="relative group bg-[#0a1526] border border-white/5 p-5 overflow-hidden transition-all hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
              style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
            >
              {/* Animated Target Brackets on Hover */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-slate-900/80 rounded border border-white/5" style={{ borderColor: `${skill.color}30` }}>
                    <div className="w-2 h-2 shadow-[0_0_10px_currentColor] animate-pulse" style={{ backgroundColor: skill.color, color: skill.color }} />
                  </div>
                  <span className="font-bold text-slate-200 group-hover:text-white transition-colors tracking-wide">
                    {skill.name}
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[9px] text-slate-500 font-mono tracking-widest uppercase">PWR_CAPACITY</span>
                  <span className="text-sm font-mono font-black" style={{ color: skill.color, textShadow: `0 0 10px ${skill.color}80` }}>
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Plasma Progress Bar */}
              <div className="relative h-1.5 bg-slate-900 rounded-sm overflow-hidden border border-white/5">
                {/* Segment Markers Overlay */}
                <div className="absolute inset-0 w-full h-full flex justify-between px-1 pointer-events-none z-10 opacity-30">
                  {[...Array(10)].map((_, i) => <div key={i} className="w-[1px] h-full bg-slate-950" />)}
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 1, ease: 'circOut' }}
                  className="relative h-full"
                  style={{ 
                    background: `linear-gradient(90deg, ${skill.color}40, ${skill.color})`,
                    boxShadow: `0 0 10px ${skill.color}`
                  }}
                >
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white opacity-80 animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  )
}
