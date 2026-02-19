import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, GraduationCap, Briefcase, Heart } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'

const experience = [
  {
    role: 'Web Developer',
    company: 'Retail Target Software Solutions (Pvt) Ltd',
    period: 'Present',
    type: 'Full-time',
    desc: 'Develop and maintain responsive web applications with React.js and Node.js. Work with MSSQL for database design, queries, and data management.',
    color: '#00f5a0',
  },
  {
    role: 'Data Entry Operator',
    company: "St. Anthony's HOMEMART",
    period: 'Oct 2024 – Feb 2025',
    type: 'Full-time',
    desc: 'Managed and updated WordPress website content, ensuring accuracy, consistency, and proper formatting.',
    color: '#00d9f5',
  },
  {
    role: 'System Implementer & Web Developer',
    company: 'Sri Lanka Ports Authority (SLPA)',
    period: 'Nov 2023 – May 2024',
    type: 'Internship',
    desc: 'Implemented EDDS, coordinated stakeholders, and developed the Ship Berthing Schedule interface using HTML, CSS, and JavaScript.',
    color: '#a78bfa',
  },
]

const education = [
  {
    degree: 'iCET Certified Developer (Fullstack)',
    school: 'Institute of Computer Engineering Technology (iCET)',
    year: '2025',
    badge: '🎓',
  },
  {
    degree: 'Higher National Diploma in Information Technology',
    school: 'Advanced Technological Institute Dehiwala – SLIATE',
    year: '2021–2023',
    badge: '🏫',
  },
  {
    degree: 'Diploma in English Language',
    school: 'British Way English Academy',
    year: '2020',
    badge: '🇬🇧',
  },
]

const interests = ['Web Development', 'UI/UX Design', 'Open Source', 'Java', 'Problem Solving', 'Learning New Tech']

function TimelineItem({ item, i, isExp }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="relative pb-8 pl-8 last:pb-0"
    >
      {/* line */}
      <div className="absolute left-2.5 top-5 bottom-0 w-px bg-border" />
      {/* dot */}
      <div
        className="absolute left-0 flex items-center justify-center w-5 h-5 border-2 rounded-full top-3"
        style={{ borderColor: isExp ? item.color : '#a78bfa', background: '#050810' }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: isExp ? item.color : '#a78bfa' }} />
      </div>

      <div className="p-5 border glass rounded-xl border-border card-hover">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="text-base font-bold text-white font-display">{isExp ? item.role : item.degree}</h3>
            <p className="text-sm font-body text-muted">{isExp ? item.company : item.school}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="px-2 py-1 font-mono text-xs rounded-md bg-white/5 text-muted">
              {isExp ? item.period : item.year}
            </span>
            {isExp && (
              <span className="px-2 py-1 font-mono text-xs rounded-md" style={{ background: `${item.color}15`, color: item.color }}>
                {item.type}
              </span>
            )}
          </div>
        </div>
        {isExp && <p className="text-sm leading-relaxed text-gray-400 font-body">{item.desc}</p>}
      </div>
    </motion.div>
  )
}

export default function About() {
  return (
    <PageTransition>
      <main className="pb-16 pt-28">
        <div className="max-w-6xl px-6 mx-auto">
          <SectionHeading
            eyebrow="// about me"
            title="Who I Am"
            subtitle="A passionate Full Stack Developer from Sri Lanka, building modern web experiences with clean code and creative thinking."
          />

          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid items-center gap-8 p-8 mb-16 border glass rounded-2xl border-border md:grid-cols-2"
          >
            {/* Avatar */}
            <div className="flex flex-col items-center gap-4">
              <div
                className="flex items-center justify-center w-40 h-40 border-2 morph border-accent/30 text-7xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,245,160,0.1), rgba(0,217,245,0.1))',
                  boxShadow: '0 0 40px rgba(0,245,160,0.15)',
                }}
              >
                👨‍💻
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white font-display">Gayani</h3>
                <p className="text-sm text-muted font-body">Web Developer</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted font-body">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-accent" /> Sri Lanka</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-accent" /> 2+ yrs exp</span>
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="mb-5 leading-relaxed text-gray-300 font-body">
                I'm an enthusiastic and fast-learning web developer with strong expertise in <span className="font-medium text-accent">JavaScript, React.js, Node.js, HTML5, CSS3, MySQL and MSSQL</span>.
              </p>
              <p className="mb-6 leading-relaxed text-gray-400 font-body">
                I thrive on building responsive, user-friendly websites and web applications, troubleshooting backend issues, and managing database operations. My passion for continuous learning drives me to explore new technologies and improve constantly.
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((it) => (
                  <span key={it} className="text-xs font-mono px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline sections */}
          <div className="grid gap-12 md:grid-cols-2">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Briefcase className="w-5 h-5 text-accent" />
                <h2 className="text-xl font-bold text-white font-display">Experience</h2>
              </div>
              {experience.map((item, i) => (
                <TimelineItem key={i} item={item} i={i} isExp={true} />
              ))}
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <GraduationCap className="w-5 h-5 text-accent" />
                <h2 className="text-xl font-bold text-white font-display">Education</h2>
              </div>
              {education.map((item, i) => (
                <TimelineItem key={i} item={item} i={i} isExp={false} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
