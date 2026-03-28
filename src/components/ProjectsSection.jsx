import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Gamepad2, Globe, Briefcase } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const PROJECTS = [
  {
    period: '05 - 07 / 2024',
    name: '3Rs – Road, Rules, Racer',
    role: 'Leader',
    desc: 'Game giáo dục kết hợp giải trí giúp người chơi học hỏi quy tắc an toàn giao thông.',
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
    desc: 'Website thương mại điện tử chuyên bán gấu bông.',
    tech: ['Java', 'SQL Server', 'TailwindCSS'],
    icon: Briefcase,
    color: '#f59e0b',
    links: []
  },
  {
    period: '03 - 04 / 2025',
    name: 'ToDoList',
    role: 'Developer',
    desc: 'Ứng dụng Web quản lý danh sách công việc.',
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
    desc: 'Ứng dụng Web quản lý sự kiện dành cho trường học.',
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
    desc: 'Web app thương mại điện tử chuyên bán Gundam, hỗ trợ giỏ hàng và đặt hàng.',
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
    desc: 'Fullstack quản lý rạp chiếu phim – tạo phòng chiếu, mua vé, check out.',
    tech: ['ReactJS', 'NodeJS', 'MongoDB'],
    icon: Briefcase,
    color: '#ec4899',
    links: []
  },
  {
    period: '2025',
    name: 'LoveAlarm',
    role: 'Developer',
    desc: 'Mobile app hẹn hò – quét đối phương trong phạm vi 10m qua Bluetooth Low Energy.',
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
      {/* Card */}
      <div className="w-5/12">
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="glass-card p-6 border border-white/10 hover:border-opacity-30 transition-all"
          style={{ '--tw-border-opacity': 0.3, borderColor: project.color + '30' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg" style={{ background: project.color + '20' }}>
              <Icon className="w-5 h-5" style={{ color: project.color }} />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-500">{project.period}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: project.color }}>
                {project.role}
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight italic">
            {project.name}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.desc}</p>
          
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map(t => (
              <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm border"
                style={{ color: project.color, borderColor: project.color + '40', background: project.color + '10' }}>
                {t}
              </span>
            ))}
          </div>
          
          {project.links.length > 0 && (
            <div className="flex gap-3">
              {project.links.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-bold hover:opacity-80 transition-opacity"
                  style={{ color: project.color }}
                >
                  <link.icon className="w-3 h-3" /> {link.label}
                </a>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Center spine */}
      <div className="w-2/12 flex flex-col items-center">
        <div className="flex-1 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <motion.div
          whileHover={{ scale: 1.3 }}
          className="w-4 h-4 rounded-full border-2 z-10 my-2 shadow-lg"
          style={{ borderColor: project.color, background: project.color + '30', boxShadow: `0 0 12px ${project.color}60` }}
        />
        <div className="flex-1 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      {/* Spacer */}
      <div className="w-5/12" />
    </motion.div>
  )
}

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="Dự án" subtitle="timeline · chronological">
      <div className="relative">
        {/* Vertical spine */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />

        {PROJECTS.map((project, i) => (
          <TimelineItem key={project.name} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
