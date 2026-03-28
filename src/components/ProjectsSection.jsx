import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Gamepad2, Globe, Briefcase, Smile, Package } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const PROJECTS = [
  {
    period: '2025',
    name: 'LoveAlarm',
    role: 'Developer',
    desc: 'Dating mobile app – scan for partners within a 10m radius via Bluetooth Low Energy.',
    tech: ['React Native', 'BLE', 'MongoDB'],
    icon: Briefcase,
    color: '#f43f5e',
    links: []
  },
  {
    period: '2025',
    name: 'CinemaManagement',
    role: 'Fullstack Developer',
    desc: 'Fullstack cinema management system – create screening rooms, book tickets, checkout.',
    tech: ['ReactJS', 'NodeJS', 'MongoDB'],
    icon: Briefcase,
    color: '#ec4899',
    links: []
  },
  {
    period: '2025',
    name: 'GundamShop',
    role: 'Fullstack Developer',
    desc: 'E-commerce web app specializing in selling Gundam models, supporting cart and ordering features.',
    tech: ['ReactJS', 'TailwindCSS', 'Redux', 'MongoDB'],
    icon: Briefcase,
    color: '#f97316',
    links: [
      { label: 'Website', href: 'https://ocan.ducanh.haiduong.name.vn/', icon: Globe },
      { label: 'GitHub', href: 'https://github.com/AnhDucNgo1245/GundamShop', icon: Github },
    ]
  },
  {
    period: '2025',
    name: 'DatVietSteel WMS',
    role: 'Fullstack Developer',
    desc: 'Professional warehouse management system designed for industrial steel inventory and logistics.',
    tech: ['ReactJS', 'NodeJS', 'Postgres', 'Supabase'],
    icon: Package,
    color: '#94a3b8',
    links: [
      { label: 'Frontend', href: 'https://github.com/AnhDucNgo1245/wms-fe', icon: Github },
      { label: 'Backend', href: 'https://github.com/AnhDucNgo1245/warehouse-be', icon: Github },
    ]
  },
  {
    period: '2025',
    name: 'EmotiQ',
    role: 'Developer',
    desc: 'AI-assisted web platform for tracking and analyzing emotional patterns in real-time.',
    tech: ['ReactJS', 'AI Integration', 'TailwindCSS'],
    icon: Smile,
    color: '#fb7185',
    links: [
      { label: 'GitHub', href: 'https://github.com/AnhDucNgo1245/EmotiQ_DOLAH', icon: Github },
    ]
  },
  {
    period: '01 - 03 / 2025',
    name: 'BeCompany',
    role: 'Fullstack Developer',
    desc: 'E-commerce website specializing in selling teddy bears.',
    tech: ['Java', 'SQL Server', 'TailwindCSS'],
    icon: Briefcase,
    color: '#f59e0b',
    links: [
      { label: 'GitHub', href: 'https://github.com/AnhDucNgo1245/becompany', icon: Github },
    ]
  },
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
]


export default function ProjectsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const activeProj = PROJECTS[selectedIndex]
  const Icon = activeProj.icon

  return (
    <SectionWrapper id="projects" title="MY PROJECTS" subtitle="combat_logs">
      <div className="relative mt-8 grid md:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        
        {/* Left Side: Mission File Selector (Col 1-4) */}
        <div className="md:col-span-4 flex flex-col gap-3">
          <div className="text-cyan-400 font-mono text-[10px] tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 animate-pulse" /> TARGET_ASSETS
          </div>
          
          <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {PROJECTS.map((project, i) => {
              const isActive = i === selectedIndex;
              const ProjIcon = project.icon;
              return (
                <button
                  key={project.name}
                  onClick={() => setSelectedIndex(i)}
                  className={`group relative flex items-center gap-4 p-4 transition-all duration-300 text-left w-full border
                    ${isActive ? 'text-white border-cyan-400 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.1)]' : 'text-slate-500 border-white/5 bg-[#050e1a] hover:border-white/10 hover:bg-[#0a1526]'}
                  `}
                  style={{ 
                    clipPath: 'polygon(10px 0, 100% 0, 100% 65%, calc(100% - 10px) 100%, 0 100%, 0 35%)',
                  }}
                >
                  {/* Active Indicator Glimmer */}
                  {isActive && (
                    <motion.div 
                      layoutId="projActiveGlow"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-transparent pointer-events-none" 
                    />
                  )}
                  
                  <div className="p-2 border bg-slate-900/80 flex-shrink-0" style={{ borderColor: isActive ? project.color : '#1e293b' }}>
                    <ProjIcon className={`w-4 h-4 transition-colors ${isActive ? 'drop-shadow-[0_0_8px_currentColor]' : ''}`} style={{ color: isActive ? project.color : '#475569' }} />
                  </div>
                  
                  <div className="min-w-0 flex-1">
                    <div className="text-[8px] font-mono tracking-[0.3em] uppercase truncate mb-1" style={{ color: isActive ? project.color : '#475569' }}>
                      TASK_{i+1}: {project.role}
                    </div>
                    <div className={`font-black font-cyber tracking-wider text-[11px] truncate uppercase transition-colors ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-400'}`}>
                      {project.name}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Side: Holographic Viewport (Col 5-12) */}
        <div className="md:col-span-8 relative">
          <div className="text-cyan-400 font-mono text-[10px] tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
            <div className="w-2 h-2 rotate-45 border border-cyan-400" /> DECRYPTED_DATA
          </div>

          <div className="relative min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, x: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-x-0 bg-[#020617]/80 p-8 border backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.8)]"
                style={{ borderColor: activeProj.color + '40' }}
              >
                {/* Holographic Scanline Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  <div className="w-full h-full bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.8)_50%)] bg-[size:100%_4px]" />
                  <motion.div 
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="w-full h-1/3 opacity-30"
                    style={{ background: `linear-gradient(to bottom, transparent, ${activeProj.color}, transparent)` }}
                  />
                </div>

                {/* Corner Target Brackets */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2" style={{ borderColor: activeProj.color }} />
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2" style={{ borderColor: activeProj.color }} />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2" style={{ borderColor: activeProj.color }} />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2" style={{ borderColor: activeProj.color }} />

                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Header Row */}
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-6 border-b pb-6" style={{ borderColor: activeProj.color + '20' }}>
                    <div className="flex items-center gap-4 min-w-0 w-full">
                      <div className="p-3 border animate-pulse shrink-0" style={{ background: activeProj.color + '15', borderColor: activeProj.color + '50' }}>
                        <Icon className="w-8 h-8 drop-shadow-[0_0_12px_currentColor]" style={{ color: activeProj.color }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2 mb-1">
                          <div className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: activeProj.color }} />
                          {activeProj.period}
                        </div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-wider font-cyber truncate" style={{ textShadow: `0 0 15px ${activeProj.color}50` }}>
                          <span className="opacity-20 text-xs font-mono mr-2">LOG:</span>
                          {activeProj.name}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="text-left lg:text-right shrink-0 hidden sm:block pt-2 lg:pt-0">
                      <div className="text-[10px] font-mono tracking-widest uppercase mb-1" style={{ color: activeProj.color }}>SYS_ROLE</div>
                      <div className="font-bold text-slate-300 uppercase tracking-widest text-[11px] lg:text-sm">
                        {activeProj.role}
                      </div>
                    </div>
                  </div>
                  
                  {/* Body Content */}
                  <div className="flex-1">
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-mono">
                      {activeProj.desc}
                    </p>
                    
                    <div className="mb-8">
                      <div className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em] mb-3">CONSTRUCTED_WITH</div>
                      <div className="flex flex-wrap gap-2">
                        {activeProj.tech.map(t => (
                          <span key={t} className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 border shadow-[inset_0_0_8px_rgba(255,255,255,0.05)]"
                            style={{ color: activeProj.color, borderColor: activeProj.color + '40', background: activeProj.color + '10' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Footer Actions */}
                  {activeProj.links.length > 0 && (
                    <div className="mt-auto pt-6 border-t flex flex-wrap gap-4" style={{ borderColor: activeProj.color + '20' }}>
                      {activeProj.links.map(link => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-cyber !px-4 !py-2 !text-[10px]"
                          style={{ color: activeProj.color, borderColor: activeProj.color + '50' }}
                        >
                          <link.icon className="w-4 h-4" /> BIND_{link.label}
                        </a>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}
