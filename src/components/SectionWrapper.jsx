import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionWrapper({ id, title, subtitle, children, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id={id} className={`py-24 px-6 relative ${className}`} ref={ref}>
      {/* Decorative wuxia elements */}
      <div className="absolute left-0 top-0 w-24 h-24 pointer-events-none opacity-10">
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M10 10 L90 10 M10 10 L10 90" stroke="#06b6d4" strokeWidth="1.5"/>
        </svg>
      </div>
      <div className="absolute right-0 bottom-0 w-24 h-24 pointer-events-none opacity-10 rotate-180">
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M10 10 L90 10 M10 10 L10 90" stroke="#06b6d4" strokeWidth="1.5"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {subtitle && (
            <p className="text-cyan-500/70 text-xs font-bold tracking-[0.4em] uppercase mb-2">
              {subtitle}
            </p>
          )}
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            {title}
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-cyan-500" />
            <div className="w-2 h-2 rotate-45 border border-cyan-400" />
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
