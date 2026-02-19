import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionHeading({ eyebrow, title, subtitle }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="text-center mb-16"
    >
      {eyebrow && (
        <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted max-w-xl mx-auto font-body text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
