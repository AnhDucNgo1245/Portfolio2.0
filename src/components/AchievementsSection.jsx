import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const ACHIEVEMENTS = [
  { year: '2016', name: 'Giải Khuyến Khích Toán Úc AMC', type: 'award' },
  { year: '2017', name: 'Giải Khuyến Khích Toán Úc AMC', type: 'award' },
  { year: '2017', name: 'Giải Khuyến Khích Lập trình Tin học cấp thành phố', type: 'award' },
  { year: '2018', name: 'Học sinh giỏi cấp thành phố – TP. Lào Cai', type: 'award' },
  { year: '2018', name: 'Giải 3 Nghiên Cứu Khoa Học cấp thành phố', type: 'award' },
  { year: '2018', name: 'Giải Khuyến Khích HS giỏi Vật lý cấp thành phố', type: 'award' },
  { year: '2018', name: 'Giải Khuyến Khích Toán Úc AMC', type: 'award' },
  { year: '2023', name: 'IELTS 6.0 – Chứng chỉ tiếng Anh quốc tế', type: 'cert' },
  { year: '2024', name: 'Top 7 – CodeFest 2024 (JSClub – FPT University Hanoi)', type: 'comp' },
  { year: '2025', name: 'Top 8 – Startup Olympics 2025 (NEU)', type: 'comp' },
]

const TYPE_STYLES = {
  award: { color: '#fbbf24', label: 'Giải thưởng' },
  cert:  { color: '#06b6d4', label: 'Chứng chỉ' },
  comp:  { color: '#10b981', label: 'Cuộc thi' },
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
      className="flex gap-5 group"
    >
      {/* Year + line */}
      <div className="flex flex-col items-center w-14 shrink-0">
        <div className="text-xs font-mono font-bold" style={{ color: style.color }}>
          {item.year}
        </div>
        <div className="flex-1 w-px mt-2" style={{ background: `linear-gradient(to bottom, ${style.color}40, transparent)` }} />
      </div>

      {/* Dot */}
      <div className="mt-[2px] shrink-0">
        <motion.div
          whileHover={{ scale: 1.4 }}
          className="w-3 h-3 rounded-full border-2 mt-0.5"
          style={{
            borderColor: style.color,
            background: style.color + '30',
            boxShadow: `0 0 8px ${style.color}50`
          }}
        />
      </div>

      {/* Content */}
      <div className="pb-8 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded-sm border"
            style={{ color: style.color, borderColor: style.color + '40', background: style.color + '10' }}>
            {style.label}
          </span>
        </div>
        <p className="text-slate-200 font-semibold group-hover:text-white transition-colors leading-relaxed">
          {item.name}
        </p>
      </div>
    </motion.div>
  )
}

export default function AchievementsSection() {
  return (
    <SectionWrapper id="achievements" title="Thành tích" subtitle="honors · awards">
      <div className="max-w-3xl mx-auto glass-card p-10">
        <div className="flex items-center gap-3 mb-10">
          <Trophy className="w-6 h-6 text-yellow-400" />
          <span className="text-slate-400 text-sm uppercase tracking-widest">Hành trình</span>
        </div>
        {ACHIEVEMENTS.map((item, i) => (
          <AchievementItem key={i} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
