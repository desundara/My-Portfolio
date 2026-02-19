import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'

const skillGroups = [
  {
    category: 'Frontend',
    emoji: '🎨',
    color: '#00f5a0',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'HTML5 & CSS3', level: 92 },
      { name: 'Tailwind CSS', level: 83 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    category: 'Backend',
    emoji: '⚙️',
    color: '#00d9f5',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'REST APIs', level: 82 },
      { name: 'Spring Boot', level: 65 },
      { name: 'Java', level: 75 },
    ],
  },
  {
    category: 'Database',
    emoji: '🗄️',
    color: '#a78bfa',
    skills: [
      { name: 'MySQL', level: 82 },
      { name: 'MSSQL', level: 78 },
    ],
  },
  {
    category: 'Tools & Others',
    emoji: '🛠️',
    color: '#fb923c',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'JavaFX', level: 72 },
      { name: 'Adobe Photoshop', level: 65 },
      { name: 'Canva', level: 80 },
    ],
  },
]

const concepts = [
  'OOP', 'MVC Architecture', 'REST APIs', 'Responsive Design',
  'Problem Solving', 'Critical Thinking', 'Teamwork', 'Fast Learning',
  'Effective Communication', 'Version Control', 'Agile',
]

function SkillBar({ name, level, color, i }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="font-body text-sm text-gray-300">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
        />
      </div>
    </div>
  )
}

function SkillCard({ group, i }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="glass rounded-2xl p-6 border border-border card-hover"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{group.emoji}</span>
        <h3 className="font-display font-bold text-white text-lg">{group.category}</h3>
      </div>
      {group.skills.map((skill, si) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} color={group.color} i={si} />
      ))}
    </motion.div>
  )
}

export default function Skills() {
  return (
    <PageTransition>
      <main className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="// skills"
            title="My Expertise"
            subtitle="Technologies and tools I work with to build modern, scalable web applications."
          />

          {/* Skill cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {skillGroups.map((group, i) => (
              <SkillCard key={group.category} group={group} i={i} />
            ))}
          </div>

          {/* Concepts & Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-2xl p-8 border border-border"
          >
            <h3 className="font-display font-bold text-white text-lg mb-6 flex items-center gap-2">
              <span>💡</span> Concepts & Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {concepts.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-border text-sm font-mono text-gray-300 hover:border-accent/30 hover:text-accent hover:bg-accent/5 transition-all cursor-default"
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  )
}
