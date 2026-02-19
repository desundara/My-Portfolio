import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import PageTransition from '../components/PageTransition'

const staggerParent = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
}

const skills = ['React.js', 'Node.js', 'JavaScript', 'MySQL', 'MSSQL', 'Java', 'Spring Boot', 'TailwindCSS', 'Git', 'REST APIs']

const services = [
  {
    title: 'Web Development',
    color: '#38bdf8',
    desc: 'Building responsive, modern web applications using React.js, Node.js, and JavaScript with clean UI and smooth performance.',
    tags: ['React.js', 'Node.js', 'JavaScript', 'HTML/CSS'],
    emoji: '💻',
    image: '/projects/ship-berthing.png',
  },
  {
    title: 'System Implementation',
    color: '#7dd3fc',
    desc: 'Supporting deployment and integration of systems within organizations, coordinating with stakeholders and ensuring smooth adoption.',
    tags: ['System Deploy', 'Integration', 'Training', 'Testing'],
    emoji: '⚙️',
    image: '/services/system-implementation-illustration.png',
  },
  {
    title: 'Database Management',
    color: '#a78bfa',
    desc: 'Designing and managing MySQL and MSSQL databases, writing optimized queries and ensuring reliable data storage.',
    tags: ['MySQL', 'MSSQL', 'Queries', 'Data Design'],
    emoji: '🗄️',
    image: '/services/database-management-illustration.png',
  },
]

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'gayanisamaraweers@gmail.com', href: 'mailto:gayanisamaraweers@gmail.com', color: '#38bdf8' },
  { icon: Github, label: 'GitHub', value: 'github.com/desundara', href: 'https://github.com/desundara', color: '#7dd3fc' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/gayani', href: 'https://www.linkedin.com/in/gayani-samaraweera-ba0657292', color: '#a78bfa' },
  { icon: MapPin, label: 'Location', value: 'Sri Lanka 🇱🇰', href: null, color: '#fb923c' },
]

const soloProjects = [
  {
    title: "Clothify Store POS System",
    description: "Point of Sale system for clothing store with inventory management, billing, customer records and reports.",
    tech: ["Java", "JavaFX", "MySQL"],
    image: "/projects/clothify.png",
    github: "https://github.com/desundara/Clothify-Store-POS-System",
  },
  {
    title: "Fullstack Post App",
    description: "Full-stack post application with user authentication, CRUD operations and responsive design.",
    tech: ["React.js", "Node.js", "Express", "MySQL"],
    image: "/projects/post_app.png",
    github: "https://github.com/desundara/Fullstack_Post_App",
    live: "https://fullstack-post-app-six.vercel.app/login" // replace or remove if no live demo
  },
  {
    title: "ThogaKade Shop Management System",
    description: "Shop management and POS system for grocery/general store including stock, orders and customer handling.",
    tech: ["Java", "JavaFX", "MySQL", "MVC Architecture"],
    image: "/projects/thogaKade.png",
    github: "https://github.com/desundara/ThogaKade-Shop-Management-System",
  },
  {
    title: "Rest Countries Explorer",
    description: "Interactive application to explore countries information using REST Countries API – search, filter and details view.",
    tech: ["React.js", "TailwindCSS", "REST API"],
    image: "/projects/rest-countries.png",
    github: "https://github.com/desundara/Rest-Countries",
  },
  {
    title: "Swing BurgerShop Management System",
    description: "Desktop application for burger shop order management, menu and basic inventory using Swing UI.",
    tech: ["Java", "Swing", "MySQL"],
    image: "/projects/burger-shop.png",
    github: "https://github.com/desundara/Swing-BurgerShop-ManagementSystem",
  },
]

function ServiceCard({ service, i }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.12 }}
      className="relative flex flex-col h-full overflow-hidden border glass rounded-2xl border-border card-hover group"
    >
      {/* Background gradient blob */}
      <div 
        className="absolute w-32 h-32 transition-opacity duration-500 rounded-full opacity-0 -top-10 -right-10 group-hover:opacity-10 blur-2xl"
        style={{ background: service.color }} 
      />
      <div 
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-60"
        style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }} 
      />

      {/* Service Image / Illustration */}
      <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-black/40 to-black/10">
        <img
          src={service.image}
          alt={`${service.title} illustration`}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl rounded-xl"
          style={{ 
            background: `${service.color}15`, 
            border: `1px solid ${service.color}30` 
          }}>
          {service.emoji}
        </div>

        <h3 className="mb-3 text-lg font-bold text-white transition-colors font-display group-hover:text-accent">
          {service.title}
        </h3>

        <p className="flex-grow mb-6 text-sm leading-relaxed text-gray-400 font-body">
          {service.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {service.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 font-mono text-xs rounded-md"
              style={{ 
                background: `${service.color}10`, 
                color: service.color, 
                border: `1px solid ${service.color}25` 
              }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Home() {
  const { ref: servRef, inView: servInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: conRef, inView: conInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <PageTransition>
      <main className="flex items-center min-h-screen pt-24 pb-16">
        <div className="w-full max-w-6xl px-6 mx-auto">

          {/* HERO */}
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div variants={staggerParent} initial="initial" animate="animate">
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-mono font-medium">
                  <Sparkles className="w-3 h-3" />
                  Available for work
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-4">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="text-gradient glow-text">Gayani</span>
              </motion.h1>

              <motion.div variants={fadeUp} className="h-8 mb-6 text-xl text-gray-400 font-display md:text-2xl">
                <TypeAnimation
                  sequence={['Web Developer', 2500, 'React.js Specialist', 2500, 'Node.js Developer', 2500, 'UI/UX Enthusiast', 2500]}
                  wrapper="span"
                  repeat={Infinity}
                  className="font-medium text-accent"
                />
              </motion.div>

              <motion.p variants={fadeUp} className="max-w-lg mb-8 text-base leading-relaxed text-gray-400 font-body">
                Enthusiastic Web Developer with expertise in <span className="font-medium text-white">React.js, Node.js, JavaScript, MySQL and MSSQL</span>. Passionate about building responsive web applications and continuously growing in modern development.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
                <Link to="/projects"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-bg font-display font-semibold text-sm hover:bg-accent/90 transition-all hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5">
                  View Projects
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a href="/Gayani CV-2026.pdf" download
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all border rounded-xl border-border font-display hover:border-accent/30 hover:bg-white/5">
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted">Find me on:</span>
                {[
                  { icon: Github, href: 'https://github.com/desundara' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/gayani-samaraweera-ba0657292' },
                  { icon: Mail, href: 'mailto:gayanisamaraweers@gmail.com' },
                ].map(({ icon: Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center transition-all border rounded-lg w-9 h-9 border-border text-muted hover:text-accent hover:border-accent/30 hover:bg-accent/5">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute rounded-full w-80 h-80 bg-accent/5 animate-pulse-slow" />
              <div className="absolute w-64 h-64 border rounded-full border-accent/10 animate-spin-slow" />
              <div className="absolute border rounded-full w-72 h-72 border-accent2/10"
                style={{ animation: 'spin 15s linear infinite reverse' }} />

              {['⚛️', '💻', '🌐', '📱', '🗄️'].map((emoji, i) => (
                <div key={i} className="absolute flex items-center justify-center w-10 h-10 text-lg rounded-full glass"
                  style={{
                    animation: `orbit ${8 + i * 2}s linear infinite`,
                    animationDelay: `${i * -2}s`,
                    transformOrigin: 'center',
                    top: '50%', left: '50%',
                    marginTop: '-20px', marginLeft: '-20px',
                  }}>{emoji}</div>
              ))}

              <div className="relative z-10 group">
                <div className="relative overflow-hidden rounded-full w-60 h-60 md:w-72 md:h-72"
                  style={{
                    boxShadow: '0 0 40px rgba(56,189,248,0.35), inset 0 0 30px rgba(56,189,248,0.1), 0 0 80px rgba(56,189,248,0.15)',
                    border: '3px solid rgba(56,189,248,0.3)',
                  }}>
                  <div className="absolute inset-0 border-2 rounded-full border-accent/30 animate-pulse-slow" />
                  <img src="gaya-Photoroom.png" alt="Gayani"
                    className="object-cover w-full h-full transition-transform duration-500 rounded-full group-hover:scale-105" />
                </div>

                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: 'spring', stiffness: 400 }}
                  className="absolute -bottom-3 -right-3 glass px-3 py-1.5 rounded-full border border-accent/20 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-xs text-accent">Open to work</span>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="absolute left-0 px-2 py-2 border top-1/4 glass rounded-xl border-border">
                  <p className="text-2xl font-bold font-display text-accent">1+</p>
                  <p className="text-xs text-muted font-body">Years Exp.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                  className="absolute right-0 px-2 py-2 border bottom-1/4 glass rounded-xl border-border">
                  <p className="text-2xl font-bold font-display text-accent2">8+</p>
                  <p className="text-xs text-muted font-body">Projects</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* SCROLLING SKILLS BAR */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="relative py-4 mt-16 overflow-hidden border-y border-border">
            <div className="absolute top-0 left-0 z-10 w-20 h-full pointer-events-none"
              style={{ background: 'linear-gradient(to right, #020408, transparent)' }} />
            <div className="absolute top-0 right-0 z-10 w-20 h-full pointer-events-none"
              style={{ background: 'linear-gradient(to left, #020408, transparent)' }} />
            <div className="flex gap-6 scroll-tags whitespace-nowrap" style={{ width: 'max-content' }}>
              {[...skills, ...skills].map((s, i) => (
                <span key={i} className="inline-flex items-center gap-2 font-mono text-sm text-muted">
                  <span className="text-accent">▸</span> {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* SERVICES SECTION */}
          <div className="mt-28">
            <motion.div ref={servRef}
              initial={{ opacity: 0, y: 30 }}
              animate={servInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center">
              <p className="mb-3 font-mono text-sm tracking-widest uppercase text-accent">services</p>
              <h2 className="mb-4 text-4xl font-bold text-white font-display md:text-5xl">What I Do</h2>
              <p className="max-w-xl mx-auto text-base leading-relaxed text-muted font-body">
                Services I offer based on my skills and experience in web development.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <ServiceCard key={service.title} service={service} i={i} />
              ))}
            </div>
          </div>

          {/* SOLO PROJECTS SECTION */}
          <div className="mt-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-12 text-center"
            >
              <p className="mb-3 font-mono text-sm tracking-widest uppercase text-accent">portfolio</p>
              <h2 className="mb-4 text-4xl font-bold text-white font-display md:text-5xl">My Solo Projects</h2>
              <p className="max-w-2xl mx-auto text-base leading-relaxed text-gray-400 font-body">
                Personal projects built with different technologies – showcasing UI, logic and full features.
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {soloProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex flex-col overflow-hidden transition-all duration-300 border group rounded-2xl border-border/60 bg-gradient-to-b from-white/5 to-transparent hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
                >
                  <div className="relative overflow-hidden aspect-video bg-black/50">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-end justify-center gap-4 pb-6 transition-opacity opacity-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent group-hover:opacity-100 duration-400">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm font-medium hover:bg-white/20 transition border border-white/20"
                      >
                        GitHub
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 bg-accent text-bg rounded-lg text-sm font-medium hover:bg-accent/90 transition shadow-lg"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow p-6">
                    <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="flex-grow mb-4 text-sm text-gray-400 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs border rounded-full bg-accent/10 text-accent border-accent/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CONTACT SECTION */}
          <div className="mt-24">
            <motion.div ref={conRef}
              initial={{ opacity: 0, y: 30 }}
              animate={conInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="overflow-hidden border glass rounded-2xl border-border">

              <div className="flex flex-col items-start justify-between gap-4 p-8 border-b border-border md:flex-row md:items-center">
                <div>
                  <p className="mb-2 font-mono text-sm tracking-widest uppercase text-accent">contact</p>
                  <h2 className="text-3xl font-bold text-white font-display">Get In Touch</h2>
                  <p className="mt-1 text-sm text-muted font-body">Let's build something great together!</p>
                </div>
                <Link to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-bg font-display font-semibold text-sm hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20 flex-shrink-0">
                  Send Message <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                {contactDetails.map(({ icon: Icon, label, value, href, color }, i) => (
                  <motion.div key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={conInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="p-6 border-r border-b border-border last:border-r-0 hover:bg-white/[0.02] transition-colors group">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-xl"
                      style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                      <Icon className="w-4 h-4" style={{ color }} />
                    </div>
                    <p className="mb-1 font-mono text-xs tracking-wider uppercase text-muted">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-gray-300 break-all transition-colors font-body hover:text-accent">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-300 font-body">{value}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}