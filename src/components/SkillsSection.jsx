import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const SKILL_CATEGORIES = {
  'LANGUAGES': [
    { name: 'JavaScript', color: '#f7df1e', level: 85 },
    { name: 'Java', color: '#f89820', level: 80 },
    { name: 'C# (Unity)', color: '#9c30b4', level: 70 },
    { name: 'C', color: '#00599c', level: 60 },
  ],
  'FRONTEND': [
    { name: 'ReactJS', color: '#61dafb', level: 85 },
    { name: 'Tailwind CSS', color: '#38bdf8', level: 88 },
    { name: 'HTML', color: '#e34f26', level: 90 },
    { name: 'CSS', color: '#264de4', level: 85 },
  ],
  'BACKEND & DB': [
    { name: 'NodeJS', color: '#68a063', level: 75 },
    { name: 'MongoDB', color: '#4db33d', level: 70 },
    { name: 'MySQL', color: '#00758f', level: 65 },
    { name: 'Supabase', color: '#3ecf8e', level: 70 },
  ],
  'TOOLS & IDEs': [
    { name: 'VS Code', color: '#007acc', level: 90 },
    { name: 'Git / GitHub', color: '#f34f29', level: 85 },
    { name: 'Android Studio', color: '#3dda84', level: 60 },
    { name: 'Anti Gravity', color: '#22d3ee', level: 95 },
  ],
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('LANGUAGES')

  return (
    <SectionWrapper id="skills" title="SKILLS PROTOCOLS" subtitle="weaponry_systems">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {Object.keys(SKILL_CATEGORIES).map(cat => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`relative px-8 py-2.5 text-[10px] font-cyber font-bold uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden group
              ${activeTab === cat
                ? 'text-white'
                : 'text-cyan-400/60 hover:text-cyan-300'
              }`}
            style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 65%, 85% 100%, 0 100%, 0 35%)' }}
          >
            {/* Background Layer */}
            <div className={`absolute inset-0 transition-all duration-300 border border-cyan-500/30
              ${activeTab === cat ? 'bg-cyan-500/20 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]' : 'bg-[#020617] group-hover:bg-cyan-500/5'}`}
            />
            {/* Active Indicator Bar */}
            {activeTab === cat && (
              <motion.div 
                layoutId="activeTabGlow"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,1)]"
              />
            )}
            
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
              <div className="relative h-2 bg-slate-900/80 rounded-sm overflow-hidden border border-white/5 p-[1px]">
                {/* Segment Markers Overlay */}
                <div className="absolute inset-0 w-full h-full flex justify-between px-0.5 pointer-events-none z-20">
                  {[...Array(20)].map((_, i) => <div key={i} className="w-[1.5px] h-full bg-[#020617] opacity-60" />)}
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 1.2, ease: 'easeOut' }}
                  className="relative h-full z-10"
                  style={{ 
                    background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                    boxShadow: `0 0 15px ${skill.color}50`
                  }}
                >
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white opacity-40 animate-pulse blur-[1px]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  )
}
