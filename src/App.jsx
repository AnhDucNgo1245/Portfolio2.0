import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail, ChevronDown, Menu, X } from "lucide-react";
import ThreeBackground from "./components/ThreeBackground";
import IDCard from "./components/IDCard";
import TypewriterRole from "./components/TypewriterRole";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import ErrorBoundary from "./components/ErrorBoundary";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Archives", href: "#achievements" },
  { label: "Contact", href: "#footer" },
];

function NavbarLink({ label, href }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="text-sm font-bold text-slate-400 hover:text-yellow-500 transition-all tracking-[0.2em] relative px-6 py-2 flex items-center group shrink-0 uppercase italic"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ x: -25, y: -100, opacity: 0, scaleY: 1.5 }}
            animate={{
              x: -35,
              y: -15,
              opacity: 1,
              scaleY: 1,
            }}
            exit={{ x: -25, y: 60, opacity: 0, scaleY: 0.5 }}
            transition={{
              y: { type: "spring", stiffness: 700, damping: 18 },
            }}
            className="absolute z-0 pointer-events-none flex flex-col items-center"
          >
            {/* Cyber Plasma Saber (Yellow) */}
            <svg
              width="24"
              height="150"
              viewBox="0 0 24 150"
              fill="none"
              className="text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.9)]"
            >
              {/* Plasma Blade Aura */}
              <path
                d="M12 10L12 85"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                opacity="0.5"
                className="blur-[1px]"
              />

              {/* Plasma Blade Core */}
              <path
                d="M12 10L12 85"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]"
              />
              <path d="M10.5 10L12 0L13.5 10L12 15L10.5 10Z" fill="white" />

              {/* Angled Tech Guard */}
              <path
                d="M6 82L12 85L18 82L12 89Z"
                fill="#0f172a"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              {/* Tech Hilt */}
              <rect
                x="10"
                y="86"
                width="4"
                height="22"
                rx="1"
                fill="#0f172a"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="9"
                y1="92"
                x2="15"
                y2="92"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.6"
              />
              <line
                x1="9"
                y1="98"
                x2="15"
                y2="98"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.6"
              />
              <line
                x1="9"
                y1="104"
                x2="15"
                y2="104"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.6"
              />

              {/* Glowing Power Cell inside Pommel */}
              <circle
                cx="12"
                cy="112"
                r="3"
                fill="#0f172a"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle
                cx="12"
                cy="112"
                r="1.5"
                fill="#fde047"
                className="animate-pulse shadow-[0_0_5px_rgba(253,224,71,1)]"
              />

              {/* Data Stream / Energy Emitting */}
              <motion.g
                animate={{ y: [0, 6, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "linear",
                }}
              >
                <line
                  x1="12"
                  y1="117"
                  x2="12"
                  y2="135"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="3 2"
                />
                <rect x="11" y="137" width="2" height="3" fill="currentColor" />
                <rect x="10.5" y="125" width="3" height="1" fill="white" />
              </motion.g>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.span
        animate={{ x: isHovered ? 12 : 0 }}
        className="relative z-10 whitespace-nowrap transition-colors"
      >
        {label}
      </motion.span>

      <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-yellow-500 transition-all duration-300 group-hover:w-full opacity-60" />
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#050e1a]/80 border-b border-white/5 shadow-xl"
          : ""
      }`}
    >
      <div className="w-full px-8 py-4 grid grid-cols-2 md:grid-cols-3 items-center">
        {/* Column 1: Logo */}
        <div className="flex justify-start">
          <div className="font-cyber text-cyan-400 text-lg md:text-xl tracking-wider font-bold">
            <span className="opacity-50">✦</span>{" "}
            <span className="glitch-text" data-text="DA's Portfolio">
              DA's Portfolio
            </span>
          </div>
        </div>

        {/* Column 2: Centered Links */}
        <div className="hidden md:flex justify-center">
          <div className="flex gap-8 lg:gap-12 items-center">
            {NAV_LINKS.map((link) => (
              <NavbarLink key={link.label} {...link} />
            ))}
          </div>
        </div>

        {/* Column 3: Mobile Menu Trigger */}
        <div className="flex justify-end">
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-slate-300"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#050e1a]/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-300 hover:text-cyan-400 font-semibold py-2 transition-colors uppercase tracking-widest text-xs"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
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
              Hello, I am
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-4"
          >
            NGO
            <br />
            <span className="text-gradient">DUC ANH</span>
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
            {["Java", "ReactJS", "NodeJS", "Unity", "FPT University"].map(
              (tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.08 }}
                  className="text-xs px-3 py-1 rounded-full border border-cyan-500/20 text-cyan-300/70 font-mono"
                >
                  {tag}
                </motion.span>
              ),
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex gap-4 items-center"
          >
            <a href="#about" className="btn-cyber">
              Explore
            </a>
            <a
              href="https://github.com/AnhDucNgo1245"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-all font-mono font-bold text-xs uppercase tracking-widest"
            >
              <Github className="w-5 h-5" /> // GITHUB_LINK
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
        <span className="text-slate-600 text-[9px] uppercase tracking-[0.4em]">
          Scroll Down
        </span>
        <ChevronDown className="w-5 h-5 text-slate-600" />
      </motion.div>
    </section>
  );
}

function CyberDivider({ icon = "❖" }) {
  return (
    <div className="flex items-center gap-6 px-6 max-w-6xl mx-auto py-4 opacity-40">
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-cyan-400" />
      <span className="font-mono text-xl text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse">
        {icon}
      </span>
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-cyan-500/50 to-cyan-400" />
    </div>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen text-slate-100 font-sans overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200"
      style={{ background: "#050e1a" }}
    >
      <ErrorBoundary
        fallback={
          <div
            className="fixed inset-0 z-0"
            style={{ background: "#020617" }}
          />
        }
      >
        <ThreeBackground />
      </ErrorBoundary>

      {/* Premium Global Overlays */}
      <div className="cyber-grid-floor" />
      <div className="scanlines" />

      <Navbar />

      <div className="relative z-10">
        <HeroSection />
        <CyberDivider icon="✦" />
        <ErrorBoundary>
          <AboutSection />
        </ErrorBoundary>
        <CyberDivider icon="❖" />
        <ErrorBoundary>
          <SkillsSection />
        </ErrorBoundary>
        <CyberDivider icon="⚡" />
        <ErrorBoundary>
          <ProjectsSection />
        </ErrorBoundary>
        <CyberDivider icon="✧" />
        <ErrorBoundary>
          <AchievementsSection />
        </ErrorBoundary>

        {/* Footer */}
        <footer
          id="footer"
          className="border-t border-white/5 py-16 text-center mt-20"
        >
          <div className="font-mono text-5xl text-cyan-400/10 mb-6 tracking-widest">
            {"</>"}
          </div>
          <p className="text-slate-500 text-xs tracking-[0.4em] uppercase mb-2">
            Made with ❤️ by
          </p>
          <h2 className="text-2xl font-black text-white tracking-tighter mb-6 italic uppercase">
            Ngo Duc Anh
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:ngoducanhzza@gmail.com"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/AnhDucNgo1245"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          <p className="text-slate-700 text-[10px] mt-8 tracking-widest uppercase">
            © 2025 · Cyber-Swordcraft Edition
          </p>
        </footer>
      </div>
    </div>
  );
}
