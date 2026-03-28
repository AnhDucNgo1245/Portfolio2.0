import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Mail, ChevronDown, Menu, X } from 'lucide-react'
import ThreeBackground from './components/ThreeBackground'
import IDCard from './components/IDCard'
import TypewriterRole from './components/TypewriterRole'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import AchievementsSection from './components/AchievementsSection'
import ErrorBoundary from './components/ErrorBoundary'

const NAV_LINKS = [
  { label: 'Về tôi', href: '#about' },
  { label: 'Kỹ năng', href: '#skills' },
  { label: 'Dự án', href: '#projects' },
  { label: 'Thành tích', href: '#achievements' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-xl bg-[#050e1a]/80 border-b border-white/5 shadow-xl' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-serif text-cyan-400 text-xl tracking-wider font-bold">
          <span className="opacity-50">劍</span> NDA
        </div>

        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-400 hover:text-cyan-300 transition-colors tracking-wider relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href="mailto:ngoducanhzza@gmail.com"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-400 text-sm font-bold hover:bg-cyan-500/10 transition-all"
        >
          <Mail className="w-4 h-4" /> Liên hệ
        </a>

        <button onClick={() => setMobileOpen(v => !v)} className="md:hidden text-slate-300">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#050e1a]/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-300 hover:text-cyan-400 font-semibold py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-20 relative overflow-hidden">
      <div className="absolute left-0 right-0 top-1/3 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent pointer-events-none" />
      <div className="absolute left-0 right-0 bottom-1/3 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-8 bg-cyan-500" />
            <span className="text-cyan-400/70 text-sm font-bold uppercase tracking-[0.3em]">
              Xin chào, mình là
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-4"
          >
            NGÔ
            <br />
            <span className="text-gradient">ĐỨC ANH</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <TypewriterRole />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {['Java', 'ReactJS', 'NodeJS', 'Unity', 'FPT University'].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.08 }}
                className="text-xs px-3 py-1 rounded-full border border-cyan-500/20 text-cyan-300/70 font-mono"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex gap-4 items-center"
          >
            <a href="#about" className="btn-primary">
              Khám phá
            </a>
            <a
              href="https://github.com/AnhDucNgo1245"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-bold text-sm"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex justify-center"
        >
          <ErrorBoundary>
            <IDCard />
          </ErrorBoundary>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-[9px] uppercase tracking-[0.4em]">Cuộn xuống</span>
        <ChevronDown className="w-5 h-5 text-slate-600" />
      </motion.div>
    </section>
  )
}

function WuxiaDivider({ char = '劍' }) {
  return (
    <div className="flex items-center gap-6 px-6 max-w-6xl mx-auto py-4 opacity-20">
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-cyan-500" />
      <span className="font-serif text-2xl text-cyan-400">{char}</span>
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-cyan-500" />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen text-slate-100 font-sans overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200" style={{ background: '#050e1a' }}>
      <ErrorBoundary fallback={<div className="fixed inset-0 z-0" style={{ background: '#050e1a' }} />}>
        <ThreeBackground />
      </ErrorBoundary>

      <Navbar />

      <div className="relative z-10">
        <HeroSection />
        <WuxiaDivider char="劍" />
        <ErrorBoundary><AboutSection /></ErrorBoundary>
        <WuxiaDivider char="道" />
        <ErrorBoundary><SkillsSection /></ErrorBoundary>
        <WuxiaDivider char="功" />
        <ErrorBoundary><ProjectsSection /></ErrorBoundary>
        <WuxiaDivider char="誌" />
        <ErrorBoundary><AchievementsSection /></ErrorBoundary>

        <footer className="border-t border-white/5 py-16 text-center mt-20">
          <div className="font-serif text-5xl text-cyan-400/10 mb-6">劍</div>
          <p className="text-slate-500 text-xs tracking-[0.4em] uppercase mb-2">Made with ❤️ by</p>
          <h2 className="text-2xl font-black text-white tracking-tighter mb-6 italic uppercase">
            Ngô Đức Anh
          </h2>
          <div className="flex justify-center gap-6">
            <a href="mailto:ngoducanhzza@gmail.com" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/AnhDucNgo1245" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
          <p className="text-slate-700 text-[10px] mt-8 tracking-widest uppercase">
            © 2025 · Cyber-Swordcraft Edition
          </p>
        </footer>
      </div>
    </div>
  )
}
