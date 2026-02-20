import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { Github, ExternalLink, Briefcase, User } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'

// ─── Global Image Protection Hook ────────────────────────────────────────────
function useImageProtection() {
  useEffect(() => {
    const handleContextMenu = (e) => {
      if (e.target.tagName === 'IMG') { e.preventDefault(); return false }
    }
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && (e.key === 's' || e.key === 'S' || e.key === 'u' || e.key === 'U')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) ||
        e.key === 'F12'
      ) { e.preventDefault(); return false }
    }
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') { e.preventDefault(); return false }
    }
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('dragstart', handleDragStart)
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('dragstart', handleDragStart)
    }
  }, [])
}

// ─── Protected Image ──────────────────────────────────────────────────────────
function ProtectedImage({ src, alt, className }) {
  return (
    <div
      className="relative w-full h-full select-none"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
    >
      <div className="absolute inset-0 z-10" onContextMenu={(e) => e.preventDefault()} style={{ cursor: 'default' }} />
      <img
        src={src}
        alt={alt}
        className={className}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        style={{ WebkitUserDrag: 'none', userDrag: 'none', pointerEvents: 'none' }}
      />
    </div>
  )
}

const items = [
  // ── Experience ──────────────────────────────────────────────────────────────
  {
    title: 'Web Developer',
    subtitle: 'Retail Target Software Solutions (Pvt) Ltd',
    type: 'experience',
    role: 'Full-time',
    period: 'Present',
    client: 'Retail Target Software Solutions',
    tech: ['React.js', 'Node.js', 'MSSQL', 'Responsive Design', 'Debugging', 'Backend Development'],
    desc: 'Develop and maintain responsive web applications by implementing frontend features with React.js and backend functionality with Node.js, including debugging and resolving code issues to ensure smooth performance. Work with Microsoft SQL Server (MSSQL) for database design, queries, updates, and data management.',
    highlights: [
      'Full-stack feature development (frontend + backend)',
      'Database optimization and complex queries',
      'Code debugging and performance improvements',
      'Collaborating on live production applications'
    ],
    color: '#00bfff',
    emoji: '💼',
    image: '/projects/rt.png',
  },
  {
    title: 'Intern – System Implementer & Web Developer',
    subtitle: 'Sri Lanka Ports Authority (SLPA)',
    type: 'experience',
    role: 'Intern',
    period: 'Internship Period',
    client: 'Sri Lanka Ports Authority (SLPA)',
    tech: ['React.js', 'Node.js', 'HTML', 'CSS', 'JavaScript', 'System Integration', 'Deployment', 'Training', 'Testing', 'MSSQL'],
    desc: 'Contributed to real-world enterprise systems at SLPA. Developed user interfaces for navigation and berthing dashboards using HTML, CSS, and JavaScript. Also managed deployment, integration, testing, and training for the Electronic Document Digitization System (EDDS), collaborating with cross-functional teams to improve operational efficiency.',
    highlights: [
      'Developed real-time ship navigation & berthing dashboard (improved efficiency by 30%)',
      'Deployed & integrated EDDS system (reduced manual handling by 70%, improved retrieval by 40%)',
      'Conducted system testing, user training & cross-team collaboration',
      'Gained hands-on experience in full project lifecycle & enterprise environments'
    ],
    color: '#00d9f5',
    emoji: '🚢',
    image: '/projects/ship-berthing.png',
  },

  // ── Personal Projects ───────────────────────────────────────────────────────
  {
    title: 'Swing BurgerShop Management System',
    subtitle: 'Restaurant Management App',
    type: 'personal',
    role: 'Solo Developer',
    github: 'https://github.com/desundara/Swing-BurgerShop-ManagementSystem',
    tech: ['Java', 'Swing', 'MySQL'],
    desc: 'Designed and developed a desktop application for managing burger shop orders, menus, and basic inventory using Java Swing UI. Implemented user-friendly interfaces for seamless order processing, menu management, and inventory tracking. Ensured reliable data handling and interactive features, gaining hands-on experience in desktop application development and OOP principles.',
    features: ['Order placement & update', 'Search & filter', 'Custom ID generation', 'Responsive table views'],
    color: '#fbbf24',
    emoji: '🍔',
    image: '/projects/burger-shop.png',
  },
  {
    title: 'Fullstack Post App',
    subtitle: 'Full-Stack Web Application',
    type: 'personal',
    role: 'Solo Developer',
    github: 'https://github.com/desundara/Fullstack_Post_App',
    live: 'https://fullstack-post-app-six.vercel.app/login',
    tech: ['React.js', 'Node.js', 'Express', 'MySQL'],
    desc: 'Full-stack post application with user authentication, CRUD operations and responsive design.',
    features: ['User authentication', 'Create / Read / Update / Delete posts', 'Responsive UI', 'REST API integration'],
    color: '#38bdf8',
    emoji: '📝',
    image: '/projects/post_app.png',
  },
  {
    title: 'ThogaKade Shop Management System',
    subtitle: 'Desktop Shop Management',
    type: 'personal',
    role: 'Solo Developer',
    github: 'https://github.com/desundara/ThogaKade-Shop-Management-System',
    tech: ['Java', 'JavaFX', 'MySQL', 'MVC Architecture'],
    desc: 'Shop management and POS system for grocery/general store including stock, orders and customer handling.',
    features: ['Customer management', 'Inventory tracking', 'Order management', 'Real-time data updates'],
    color: '#fb923c',
    emoji: '🛒',
    image: '/projects/thogaKade.png',
  },
  {
    title: 'Rest Countries Explorer',
    subtitle: 'API-Powered Web App',
    type: 'personal',
    role: 'Solo Developer',
    github: 'https://github.com/desundara/Rest-Countries',
    tech: ['JavaScript', 'HTML', 'CSS', 'REST API'],
    desc: 'Interactive application to explore countries information using REST Countries API – search, filter and details view.',
    features: ['Country search', 'Filter by region', 'Detailed country view', 'Responsive design'],
    color: '#34d399',
    emoji: '🌍',
    image: '/projects/rest-countries.png',
  },
  {
    title: 'Clothify Store POS System',
    subtitle: 'Point of Sale System',
    type: 'personal',
    role: 'Solo Developer',
    github: 'https://github.com/desundara/Clothify-Store-POS-System',
    tech: ['Java', 'JavaFX', 'MySQL'],
    desc: 'Point of Sale system for clothing store with inventory management, billing, customer records and reports.',
    features: ['Inventory management', 'Billing & receipts', 'Customer records', 'Sales reports'],
    color: '#a78bfa',
    emoji: '👗',
    image: '/projects/clothify.png',
  },
]

// ─── Card Component ───────────────────────────────────────────────────────────
function Card({ item, i }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [expanded, setExpanded] = useState(false)

  const isExperience = item.type === 'experience'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="flex flex-col overflow-hidden border glass rounded-2xl border-border card-hover group"
    >
      <div className="w-full h-1" style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}44)` }} />

      {/* Project image */}
      {item.image && (
        <div className="relative overflow-hidden aspect-video bg-black/40">
          <ProtectedImage
            src={item.image}
            alt={item.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Hover overlay for personal projects with links */}
          {!isExperience && (item.github || item.live) && (
            <div className="absolute inset-0 z-30 flex items-end justify-center gap-3 pb-4 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:opacity-100">
              {item.github && (
                <a href={item.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white border rounded-lg bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition">
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
              )}
              {item.live && (
                <a href={item.live} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-accent text-bg hover:bg-accent/90 transition shadow-lg">
                  <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      )}

      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-2xl rounded-xl"
              style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
              {item.emoji}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-bold text-white font-display">{item.title}</h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full flex items-center gap-1"
                  style={{ background: `${item.color}15`, color: item.color }}>
                  {isExperience ? <><Briefcase className="w-3 h-3" /> Experience</> : <><User className="w-3 h-3" /> Personal</>}
                </span>
              </div>
              <p className="text-sm text-muted font-body">{item.subtitle}</p>
            </div>
          </div>

          {isExperience && item.github && (
            <a href={item.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center transition-all border rounded-lg w-9 h-9 border-border text-muted hover:text-white hover:border-accent/30">
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 font-mono text-xs rounded-md text-muted bg-white/5">👤 {item.role}</span>
          {isExperience && item.period && (
            <span className="px-2 py-1 font-mono text-xs border rounded-md text-cyan-300 bg-cyan-950/40 border-cyan-500/30">
              📅 {item.period}
            </span>
          )}
          {item.client && (
            <span className="px-2 py-1 font-mono text-xs rounded-md text-muted bg-white/5">🏢 {item.client}</span>
          )}
        </div>

        <p className="mb-4 text-sm leading-relaxed text-gray-400 font-body">{item.desc}</p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4 overflow-hidden"
            >
              <div className="pt-3 border-t border-border">
                <p className="mb-2 font-mono text-xs tracking-wider uppercase text-muted">
                  {item.highlights ? 'Key Responsibilities & Achievements' : 'Key Features'}
                </p>
                <ul className="space-y-1.5">
                  {(item.highlights || item.features || []).map((text, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300 font-body">
                      <span style={{ color: item.color }} className="mt-1">▸</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
          {item.tech.map((t) => (
            <span key={t} className="px-2 py-1 font-mono text-xs border rounded-md"
              style={{ background: `${item.color}08`, borderColor: `${item.color}25`, color: item.color }}>
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="font-mono text-xs text-left transition-colors text-muted hover:text-accent"
        >
          {expanded ? '▲ Show less' : '▼ Show more'}
        </button>
      </div>
    </motion.div>
  )
}

// ─── Main Projects Component ──────────────────────────────────────────────────
export default function Projects() {
  useImageProtection()
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? items
    : items.filter(item => item.type === filter)

  const counts = {
    all: items.length,
    experience: items.filter(i => i.type === 'experience').length,
    personal: items.filter(i => i.type === 'personal').length,
  }

  return (
    <PageTransition>
      <main className="pb-16 pt-28">
        <div className="max-w-6xl px-6 mx-auto">
          <SectionHeading
            eyebrow="experience & projects"
            title="My Work & Experience"
            subtitle="Professional roles, client/internship projects, and personal builds showcasing my skills."
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              ['all', 'All'],
              ['experience', 'Experience'],
              ['personal', 'Personal Projects'],
            ].map(([val, label]) => (
              <button
                key={val}
                onClick={() => setFilter(val)}
                className={`px-5 py-2.5 rounded-lg text-sm font-mono transition-all shadow-sm flex items-center gap-2 ${
                  filter === val
                    ? 'bg-accent text-bg font-semibold'
                    : 'border border-border text-muted hover:text-white hover:border-accent/40 hover:bg-white/5'
                }`}
              >
                {label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  filter === val ? 'bg-bg/20 text-bg' : 'bg-white/10 text-muted'
                }`}>
                  {counts[val]}
                </span>
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <Card key={item.title + item.subtitle} item={item} i={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  )
}