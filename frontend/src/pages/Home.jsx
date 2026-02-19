import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

const staggerParent = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
}

const skills = ['React.js', 'Node.js', 'JavaScript', 'MySQL', 'MSSQL', 'Java', 'Spring Boot', 'TailwindCSS', 'Git', 'REST APIs']

export default function Home() {
  return (
    <PageTransition>
      <main className="flex items-center min-h-screen pt-24 pb-16 bg-bg"> {/* bg-bg = deep navy black from config */}
        <div className="w-full max-w-6xl px-6 mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left Content */}
            <motion.div variants={staggerParent} initial="initial" animate="animate">
              {/* Badge */}
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-mono font-medium">
                  <Sparkles className="w-3 h-3" />
                  Available for work
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1 variants={fadeUp} className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-4">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-accent via-accent2 to-cyan-300 bg-clip-text glow-text">
                  Gayani
                </span>
              </motion.h1>

              {/* Typing */}
              <motion.div variants={fadeUp} className="h-8 mb-6 text-xl text-slate-300 font-display md:text-2xl">
                <TypeAnimation
                  sequence={[
                    'Web Developer',
                    2500,
                    'React.js Specialist',
                    2500,
                    'Node.js Developer',
                    2500,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                  className="font-medium text-accent"
                />
              </motion.div>

              {/* Description */}
              <motion.p variants={fadeUp} className="max-w-lg mb-8 text-base leading-relaxed text-slate-400 font-body">
                Enthusiastic Web Developer with expertise in <span className="font-medium text-accent">React.js, Node.js, JavaScript, MySQL, and MSSQL</span>. Skilled in building responsive web applications and desktop management systems, debugging backend issues, and creating user-friendly interfaces. Passionate about continuous learning, problem-solving, and contributing to modern, high-performance development.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-accent2 text-bg font-display font-semibold text-sm hover:brightness-110 transition-all hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="/Gayani CV-2026.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all border text-accent rounded-xl border-accent/20 hover:border-accent/40 hover:bg-accent/5"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </motion.div>

              {/* Socials */}
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted">Find me on:</span>
                {[
                  { icon: Github, href: 'https://github.com/desundara' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/gayani-samaraweera-ba0657292' },
                  { icon: Mail, href: 'mailto:gayanisamaraweers@gmail.com' },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center transition-all border rounded-lg w-9 h-9 border-border text-muted hover:text-accent hover:border-accent/30 hover:bg-accent/5"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Profile Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="relative flex items-center justify-center"
            >
              {/* Outer glow ring */}
              <div className="absolute rounded-full w-80 h-80 bg-accent/5 animate-pulse-slow" />
              <div className="absolute w-64 h-64 border rounded-full border-accent/10 animate-spin-slow" />
              <div className="absolute border rounded-full w-72 h-72 border-accent2/10"
                style={{ animation: 'spin 15s linear infinite reverse' }} />

              {/* Orbit tech badges */}
              {['⚛️', '🟦', '☁️', '🗄️'].map((emoji, i) => (
                <div
                  key={i}
                  className="absolute flex items-center justify-center w-10 h-10 text-lg border rounded-full glass bg-surface border-accent/20"
                  style={{
                    animation: `orbit ${8 + i * 2}s linear infinite`,
                    animationDelay: `${i * -2}s`,
                    transformOrigin: 'center',
                    top: '50%',
                    left: '50%',
                    marginTop: '-20px',
                    marginLeft: '-20px',
                  }}
                >
                  {emoji}
                </div>
              ))}

              {/* Profile image placeholder */}
              <div className="relative z-10 group">
                {/* Main circular frame with glow */}
                <div 
                  className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-purple-600/20 p-[4px]"
                  style={{
                    boxShadow: `
                      0 0 40px rgba(14, 165, 233, 0.4),
                      inset 0 0 30px rgba(59, 130, 246, 0.25),
                      0 0 80px rgba(59, 130, 246, 0.2)
                    `,
                  }}
                >
                  {/* Inner glow ring */}
                  <div className="absolute inset-0 border-2 rounded-full border-cyan-400/40 animate-pulse-slow opacity-70" />
                  
                  <img
                    src="gaya-Photoroom.png"
                    alt="Gayani"
                    className="object-cover w-full h-full transition-transform duration-500 rounded-full group-hover:scale-110"
                    // loading="lazy" optional
                  />
                </div>

                {/* Floating text / brand */}
                {/* <div className="absolute px-4 py-1 font-mono text-xs -translate-x-1/2 border rounded-full shadow-lg bottom-4 left-1/2 bg-black/40 backdrop-blur-md border-cyan-500/30 text-cyan-300">
                  Gayani.dev
                </div> */}

                {/* Open to work badge - bottom right */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
                  className="absolute flex items-center gap-2 px-4 py-2 border rounded-full shadow-xl -bottom-5 -right-5 glassmorphic border-cyan-400/30 bg-gradient-to-r from-cyan-950/80 to-blue-950/80"
                >
                  <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-sm font-medium text-cyan-200">Open to work</span>
                </motion.div>

                {/* Optional stats badges - left & right */}
                <div className="absolute px-3 py-2 text-sm font-bold text-blue-200 border shadow-lg -left-6 top-1/3 bg-gradient-to-br from-blue-900/70 to-cyan-900/70 backdrop-blur-md rounded-xl border-blue-400/30">
                  1+<br/>Years
                </div>
                
                <div className="absolute px-3 py-2 text-sm font-bold text-purple-200 border shadow-lg -right-6 bottom-1/3 bg-gradient-to-br from-purple-900/70 to-pink-900/70 backdrop-blur-md rounded-xl border-purple-400/30">
                  8+<br/>Projects
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scrolling skills bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="relative py-4 mt-20 overflow-hidden border-y border-border"
          >
            <div className="absolute top-0 left-0 z-10 w-20 h-full pointer-events-none"
              style={{ background: 'linear-gradient(to right, var(--tw-gradient-stops) from-bg to-transparent)' }} />
            <div className="absolute top-0 right-0 z-10 w-20 h-full pointer-events-none"
              style={{ background: 'linear-gradient(to left, var(--tw-gradient-stops) from-bg to-transparent)' }} />
            <div className="flex gap-6 scroll-tags whitespace-nowrap" style={{ width: 'max-content' }}>
              {[...skills, ...skills].map((s, i) => (
                <span key={i} className="inline-flex items-center gap-2 font-mono text-sm text-muted">
                  <span className="text-accent">▸</span> {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  )
}