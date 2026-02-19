import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Building2, User, Briefcase, Calendar } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'

const items = [
  // Current Experience
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
  },

  // Merged SLPA Internship (System Implementer + Web Developer)
  {
    title: 'Intern – System Implementer & Web Developer',
    subtitle: 'Sri Lanka Ports Authority (SLPA)',
    type: 'experience',
    role: 'Intern',
    period: 'Internship Period', // exact dates දැනෙනවා නම් මෙතන දාන්න (e.g. "2023 - 2024")
    client: 'Sri Lanka Ports Authority (SLPA)',
    tech: [
      'React.js', 'Node.js', 'HTML', 'CSS', 'JavaScript',
      'System Integration', 'Deployment', 'Training', 'Testing', 'MSSQL'
    ],
    desc: 'Contributed to real-world enterprise systems at SLPA. Developed user interfaces for navigation and berthing dashboards using HTML, CSS, and JavaScript. Also managed deployment, integration, testing, and training for the Electronic Document Digitization System (EDDS), collaborating with cross-functional teams to improve operational efficiency.',
    highlights: [
      'Developed real-time ship navigation & berthing dashboard (improved efficiency by 30%)',
      'Deployed & integrated EDDS system (reduced manual handling by 70%, improved retrieval by 40%)',
      'Conducted system testing, user training & cross-team collaboration',
      'Gained hands-on experience in full project lifecycle & enterprise environments'
    ],
    color: '#00d9f5',
    emoji: '🚢📋',
  },

  // Personal Projects
  {
    title: 'Thoga Kade',
    subtitle: 'Shop Management System',
    type: 'personal',
    role: 'Solo Developer',
    github: 'https://github.com',
    tech: ['Java', 'JavaFX', 'MySQL', 'MVC', 'OOP'],
    desc: 'Desktop-based shop management system built with JavaFX following MVC architecture. Includes modules for customers, items, orders, and order details with a user-friendly dashboard.',
    features: ['Customer management', 'Inventory tracking', 'Order management', 'Real-time data updates'],
    color: '#a78bfa',
    emoji: '🛒',
  },
  {
    title: 'Burger Shop System',
    subtitle: 'Restaurant Management App',
    type: 'personal',
    role: 'Solo Developer',
    github: 'https://github.com',
    tech: ['Java', 'Java Swing', 'MVC', 'OOP'],
    desc: 'Desktop application using Java Swing with MVC architecture. Features order placement, updating, search and filter functionality with interactive GUI, validation, and custom ID generation.',
    features: ['Order placement & update', 'Search & filter', 'Custom ID generation', 'Responsive table views'],
    color: '#fb923c',
    emoji: '🍔',
  },
]

function Card({ item, i }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [expanded, setExpanded] = useState(false)

  const isExperience = item.type === 'experience'
  const isPersonal = item.type === 'personal'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="overflow-hidden border glass rounded-2xl border-border card-hover group"
    >
      <div className="w-full h-1" style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}44)` }} />

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-12 h-12 text-2xl rounded-xl"
              style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
            >
              {item.emoji}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white font-display">{item.title}</h3>
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded-full flex items-center gap-1"
                  style={{ background: `${item.color}15`, color: item.color }}
                >
                  {isExperience ? (
                    <><Briefcase className="w-3 h-3" /> Experience</>
                  ) : (
                    <><User className="w-3 h-3" /> Personal</>
                  )}
                </span>
              </div>
              <p className="text-sm text-muted font-body">{item.subtitle}</p>
            </div>
          </div>

          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition-all border rounded-lg w-9 h-9 border-border text-muted hover:text-white hover:border-accent/30"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>

        <div className="flex flex-wrap gap-3 mb-4">
          <span className="px-2 py-1 font-mono text-xs rounded-md text-muted bg-white/5">
            👤 {item.role}
          </span>

          {isExperience && item.period && (
            <span className="px-2 py-1 font-mono text-xs rounded-md text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {item.period}
            </span>
          )}

          {item.client && (
            <span className="px-2 py-1 font-mono text-xs rounded-md text-muted bg-white/5">
              🏢 {item.client}
            </span>
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
              {(item.highlights || item.outcome || item.features) && (
                <div className="pt-3 border-t border-border">
                  <p className="mb-2 font-mono text-xs tracking-wider uppercase text-muted">
                    {item.highlights ? 'Key Responsibilities & Achievements' : item.outcome ? 'Key Outcomes' : 'Key Features'}
                  </p>
                  <ul className="space-y-1.5">
                    {(item.highlights || item.outcome || item.features || []).map((text, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-300 font-body">
                        <span style={{ color: item.color }} className="mt-1">▸</span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 font-mono text-xs border rounded-md"
              style={{ background: `${item.color}08`, borderColor: `${item.color}25`, color: item.color }}
            >
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="font-mono text-xs transition-colors text-muted hover:text-accent"
        >
          {expanded ? '▲ Show less' : '▼ Show more'}
        </button>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' 
    ? items 
    : items.filter(item => item.type === filter)

  return (
    <PageTransition>
      <main className="pb-16 pt-28">
        <div className="max-w-6xl px-6 mx-auto">
          <SectionHeading
            eyebrow="experience & projects"
            title="My Work & Experience"
            subtitle="Professional roles, client/internship projects, and personal builds showcasing my skills."
          />

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              ['all', 'All'],
              ['experience', 'Experience'],
              ['personal', 'Personal']
            ].map(([val, label]) => (
              <button
                key={val}
                onClick={() => setFilter(val)}
                className={`px-5 py-2.5 rounded-lg text-sm font-mono transition-all shadow-sm ${
                  filter === val
                    ? 'bg-accent text-bg font-semibold'
                    : 'border border-border text-muted hover:text-white hover:border-accent/40 hover:bg-white/5'
                }`}
              >
                {label}
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