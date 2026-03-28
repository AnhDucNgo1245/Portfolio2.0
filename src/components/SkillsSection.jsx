import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const SKILL_CATEGORIES = {
  'Ngôn ngữ': [
    { name: 'Java', color: '#f89820', level: 80 },
    { name: 'C/C++', color: '#00599c', level: 65 },
    { name: 'JavaScript', color: '#f7df1e', level: 85 },
    { name: 'C# (Unity)', color: '#9c30b4', level: 70 },
  ],
  'Frontend': [
    { name: 'ReactJS', color: '#61dafb', level: 85 },
    { name: 'TailwindCSS', color: '#38bdf8', level: 88 },
    { name: 'HTML/CSS', color: '#e34f26', level: 90 },
  ],
  'Backend': [
    { name: 'NodeJS', color: '#68a063', level: 75 },
  ],
  'Ngoại ngữ': [
    { name: 'Tiếng Anh (IELTS 6.0)', color: '#06b6d4', level: 80 },
    { name: 'Tiếng Nhật (Đang học)', color: '#ff0050', level: 25 },
  ],
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('Ngôn ngữ')

  return (
    <SectionWrapper id="skills" title="Kỹ năng" subtitle="expertise">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {Object.keys(SKILL_CATEGORIES).map(cat => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border
              ${activeTab === cat
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/60 shadow-lg shadow-cyan-500/20'
                : 'bg-white/5 text-slate-400 border-white/10 hover:border-cyan-500/30 hover:text-slate-200'
              }`}
          >
            {cat}
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
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {SKILL_CATEGORIES[activeTab].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-5 group hover:border-white/20"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-slate-200 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                <span className="text-sm font-mono" style={{ color: skill.color }}>
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  )
}
