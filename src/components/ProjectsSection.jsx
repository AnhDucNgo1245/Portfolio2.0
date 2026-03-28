import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Gamepad2, Globe, Briefcase } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const PROJECTS = [
  {
    period: '05 - 07 / 2024',
    name: '3Rs – Road, Rules, Racer',
    role: 'Leader',
    desc: 'Educational and entertaining game teaching players traffic safety rules.',
    tech: ['Unity', 'C#', 'Aseprite'],
    icon: Gamepad2,
    color: '#a78bfa',
    links: [
      { label: 'Facebook', href: 'https://www.facebook.com/people/3Rs-Road-RulesRacer/61560319565014/', icon: Globe },
      { label: 'Website', href: 'https://highteam.vercel.app/', icon: ExternalLink },
    ]
  },
  {
    period: '01 - 03 / 2025',
    name: 'BeCompany',
    role: 'Developer',
    desc: 'E-commerce website specializing in selling teddy bears.',
    tech: ['Java', 'SQL Server', 'TailwindCSS'],
    icon: Briefcase,
    color: '#f59e0b',
    links: []
  },
  {
    period: '03 - 04 / 2025',
    name: 'ToDoList',
    role: 'Developer',
    desc: 'Web application for managing to-do lists.',
    tech: ['ReactJS', 'TailwindCSS'],
    icon: Briefcase,
    color: '#10b981',
    links: [
      { label: 'GitHub', href: 'https://github.com/AnhDucNgo1245/ToDo_List.git', icon: Github },
    ]
  },
  {
    period: '04 - 05 / 2025',
    name: 'EventHub',
    role: 'Developer',
    desc: 'Web application for managing school events.',
    tech: ['ReactJS', 'TailwindCSS'],
    icon: Briefcase,
    color: '#06b6d4',
    links: [
      { label: 'GitHub', href: 'https://github.com/AnhDucNgo1245/EventHub.git', icon: Github },
    ]
  },
  {
    period: '2025',
    name: 'GundamShop',
    role: 'Developer',
    desc: 'E-commerce web app specializing in selling Gundam models, supporting cart and ordering features.',
    tech: ['ReactJS', 'TailwindCSS', 'Redux'],
    icon: Briefcase,
    color: '#f97316',
    links: [
      { label: 'GitHub', href: 'https://github.com/AnhDucNgo1245/GundamShop', icon: Github },
    ]
  },
  {
    period: '2025',
    name: 'CinemaManagement',
    role: 'Developer',
    desc: 'Fullstack cinema management system – create screening rooms, book tickets, checkout.',
    tech: ['ReactJS', 'NodeJS', 'MongoDB'],
    icon: Briefcase,
    color: '#ec4899',
    links: []
  },
  {
    period: '2025',
    name: 'LoveAlarm',
    role: 'Developer',
    desc: 'Dating mobile app – scan for partners within a 10m radius via Bluetooth Low Energy.',
    tech: ['React Native', 'BLE'],
    icon: Briefcase,
    color: '#f43f5e',
    links: []
  },
]

function TimelineItem({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const isLeft = index % 2 === 0
  const Icon = project.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`relative flex items-stretch gap-0 ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-12`}
    >
      {/* Target Hologram Card */}
      <div className="w-5/12">
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="group relative bg-[#020617]/80 p-5 px-6 border backdrop-blur-sm transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden"
          style={{ borderColor: project.color + '40' }}
        >
          {/* Holographic Scanline Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="w-full h-full bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.8)_50%)] bg-[size:100%_4px]" />
            <motion.div 
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="w-full h-1/3 opacity-30"
              style={{ background: `linear-gradient(to bottom, transparent, ${project.color}, transparent)` }}
            />
          </div>

          {/* Corner Target Brackets */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: project.color }} />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: project.color }} />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: project.color }} />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: project.color }} />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 border" style={{ background: project.color + '15', borderColor: project.color + '50' }}>
                <Icon className="w-5 h-5 drop-shadow-[0_0_8px_currentColor]" style={{ color: project.color }} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full animate-ping" style={{ backgroundColor: project.color }} />
                  {project.period}
                </div>
                <div className="text-[11px] font-black uppercase tracking-widest drop-shadow-[0_0_5px_currentColor]" style={{ color: project.color }}>
                  {project.role}
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-black text-white mb-2 uppercase tracking-[0.1em] font-mono" style={{ textShadow: `0 0 10px ${project.color}50` }}>
              {project.name}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 font-mono opacity-90">{project.desc}</p>
            
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map(t => (
                <span key={t} className="text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-1 border shadow-[inset_0_0_8px_rgba(255,255,255,0.05)]"
                  style={{ color: project.color, borderColor: project.color + '30', background: project.color + '10' }}>
                  {t}
                </span>
              ))}
            </div>
            
            {project.links.length > 0 && (
              <div className="flex gap-4">
                {project.links.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[10px] font-mono font-bold hover:scale-105 transition-transform uppercase tracking-widest"
                    style={{ color: project.color }}
                  >
                    <link.icon className="w-3.5 h-3.5" /> [{link.label}]
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Cyber Center spine */}
      <div className="w-2/12 flex flex-col items-center">
        <div className="flex-1 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
        <motion.div
          whileHover={{ scale: 1.5, rotate: 45 }}
          className="w-4 h-4 z-10 my-3 rotate-45 border"
          style={{ borderColor: project.color, background: project.color + '20', boxShadow: `0 0 15px ${project.color}80` }}
        >
          <div className="w-full h-full border border-white/20 animate-ping" />
        </motion.div>
        <div className="flex-1 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
      </div>

      {/* Spacer */}
      <div className="w-5/12" />
    </motion.div>
  )
}

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="DEPLOYED ASSETS" subtitle="combat_logs">
      <div className="relative mt-8">
        {/* Vertical cyber spine */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent flex flex-col items-center justify-between py-10">
          <div className="w-1 h-32 bg-cyan-500/30 blur-[2px] animate-pulse" />
          <div className="w-1 h-32 bg-emerald-500/30 blur-[2px] animate-pulse opacity-60" />
          <div className="w-1 h-32 bg-cyan-500/30 blur-[2px] animate-pulse" />
        </div>

        {PROJECTS.map((project, i) => (
          <TimelineItem key={project.name} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
