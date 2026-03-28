import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, GraduationCap, Calendar } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import avatarImg from '../assets/avatar.png'

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <SectionWrapper id="about" title="Về tôi" subtitle="about me">
      <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Wuxia decorative rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              className="absolute -inset-6 rounded-full border border-dashed border-cyan-500/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
              className="absolute -inset-10 rounded-full border border-dashed border-emerald-500/10"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-400 blur-2xl opacity-20" />
            
            <img
              src={avatarImg}
              alt="Ngô Đức Anh"
              className="relative w-72 h-72 object-cover rounded-2xl border border-white/10 shadow-2xl"
            />
            
            {/* Floating badge */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 bg-slate-900 border border-cyan-500/30 rounded-xl px-4 py-2 shadow-xl"
            >
              <div className="text-xl font-black text-white">2+</div>
              <div className="text-[10px] text-cyan-400 uppercase tracking-wider">Năm kinh nghiệm</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-black text-white mb-4">
              Chào! Mình là <span className="text-gradient">Đức Anh</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Sinh viên năm 2 ngành Kỹ thuật Phần mềm tại <span className="text-cyan-400 font-semibold">Đại học FPT</span>, 
              đam mê phát triển ứng dụng Fullstack và Game. Thành thạo tiếng Anh (IELTS 6.0), 
              đang học thêm tiếng Nhật.
            </p>
          </div>

          {/* Contact info */}
          <div className="glass-card p-6 space-y-3">
            {[
              { icon: Calendar, text: '12/04/2005' },
              { icon: Phone, text: '0968 315 859' },
              { icon: Mail, text: 'ngoducanhzza@gmail.com' },
              { icon: MapPin, text: 'Vạn Phúc, Hà Đông, Hà Nội' },
              { icon: GraduationCap, text: 'Đại học FPT – Software Engineering' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-sm text-slate-300">
                <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Hobbies */}
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-widest mb-3">Sở thích</div>
            <div className="flex flex-wrap gap-2">
              {['💪 Bóng bàn', '🏀 Bóng rổ', '🎵 Nghe nhạc', '🎮 Chơi game'].map(h => (
                <span key={h} className="text-sm px-3 py-1.5 glass-card border border-white/10 hover:border-cyan-500/30 transition-colors cursor-default">
                  {h}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
