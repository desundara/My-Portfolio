import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowLeft, ArrowRight, X, ZoomIn } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

// ─── Global Image Protection Hook ────────────────────────────────────────────
function useImageProtection() {
    useEffect(() => {
        const handleContextMenu = (e) => {
        e.preventDefault()
        return false
        }
        const handleDragStart = (e) => {
        if (e.target.tagName === 'IMG') {
            e.preventDefault()
            return false
        }
        }
        const handleKeyDown = (e) => {
        if (
            (e.ctrlKey && (e.key === 's' || e.key === 'S' || e.key === 'u' || e.key === 'U')) ||
            (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) ||
            e.key === 'F12'
        ) {
            e.preventDefault()
            return false
        }
        }
        const handleSelectStart = (e) => {
        if (e.target.tagName === 'IMG') {
            e.preventDefault()
            return false
        }
        }

        document.addEventListener('contextmenu', handleContextMenu)
        document.addEventListener('dragstart', handleDragStart)
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('selectstart', handleSelectStart)

        return () => {
        document.removeEventListener('contextmenu', handleContextMenu)
        document.removeEventListener('dragstart', handleDragStart)
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('selectstart', handleSelectStart)
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
        style={{ WebkitUserSelect: 'none', userSelect: 'none', pointerEvents: 'none' }}
        >
        <div className="absolute inset-0 z-10" style={{ cursor: 'default', pointerEvents: 'all' }}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
        />
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

    // ─── Projects grouped ─────────────────────────────────────────────────────────
    const projects = [
    {
        id: 'loyalty',
        title: 'Loyalty Points System',
        company: 'Retail Target Software Solutions',
        color: '#a78bfa',
        tags: ['React.js', 'Node.js', 'MSSQL'],
        screens: [
        { id: 1, label: 'Landing',      image: '/projects/rt-loyalty-landing.png' },
        { id: 2, label: 'Login',        image: '/projects/rt-loyalty-login.png' },
        { id: 3, label: 'Dashboard',    image: '/projects/rt-loyalty-dashboard.png' },
        { id: 4, label: 'Transactions', image: '/projects/rt-loyalty-transactions.png' },
        { id: 5, label: 'QR Page',      image: '/projects/rt-loyalty-qrpage.png' },
        ],
    },
    {
        id: 'ceylonPos',
        title: 'Ceylon POS',
        company: 'Personal Project',
        color: '#00f5a0',
        tags: ['React.js', 'Node.js', 'MSSQL'],
        screens: [
        { id: 1, label: 'Dashboard',      image: '/projects/ceylonpos-dashboard.png' },
        { id: 2, label: 'Inventory',    image: '/projects/ceylonpos-inventory.png' },
        { id: 3, label: 'Loyalty',        image: '/projects/ceylonpos-loyalty.png' },
        { id: 4, label: 'Reports', image: '/projects/ceylonpos-reports.png' },
        ],
    },
    {
        id: 'dashboard',
        title: 'RT Dashboard',
        company: 'Retail Target Software Solutions',
        color: '#F48F0B',
        tags: ['React.js', 'Node.js', 'MSSQL'],
        screens: [
        { id: 1, label: 'Dashboard',      image: '/projects/rt.png' },
        { id: 1, label: 'Invoice Preview',      image: '/projects/rt-invoice.png' },
        ],
    },
    {
        id: 'ship',
        title: 'Ship Berthing Schedule',
        company: 'Sri Lanka Ports Authority',
        color: '#38bdf8',
        tags: ['HTML', 'CSS', 'JavaScript'],
        screens: [
        { id: 1, label: 'Schedule', image: '/projects/ship-berthing.png' },
        ],
    },
    {
        id: 'post',
        title: 'Fullstack Post App',
        company: 'Personal Project',
        color: '#00f5a0',
        tags: ['React.js', 'Node.js', 'MySQL'],
        screens: [
        { id: 1, label: 'App', image: '/projects/post_app.png' },
        ],
    },
    {
        id: 'countries',
        title: 'Rest Countries Explorer',
        company: 'Personal Project',
        color: '#D128BC',
        tags: ['JavaScript', 'REST API'],
        screens: [
        { id: 1, label: 'Explorer', image: '/projects/rest-countries.png' },
        ],
    },
    {
        id: 'thogakade',
        title: 'ThogaKade Shop System',
        company: 'Personal Project',
        color: '#fb923c',
        tags: ['JavaFX', 'MySQL'],
        screens: [
        { id: 1, label: 'POS', image: '/projects/thogaKade.png' },
        ],
    },
    {
        id: 'clothify',
        title: 'Clothify Store POS',
        company: 'Personal Project',
        color: '#f472b6',
        tags: ['JavaFX', 'MySQL'],
        screens: [
        { id: 1, label: 'POS', image: '/projects/clothify.png' },
        ],
    },
    ]

    const allScreens = projects.flatMap(p =>
    p.screens.map(s => ({ ...s, title: p.title, company: p.company, color: p.color, tags: p.tags }))
    )

    // ─── Lightbox ─────────────────────────────────────────────────────────────────
    function Lightbox({ screen, onClose, onPrev, onNext }) {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: 'rgba(5,8,16,0.96)', backdropFilter: 'blur(20px)' }}
        onClick={onClose}
        >
        <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex items-center justify-between px-4 py-3 mb-2">
            <div>
                <h3 className="text-base font-bold text-white font-display">{screen.title}
                <span className="ml-2 font-mono text-xs font-normal" style={{ color: screen.color }}>— {screen.label}</span>
                </h3>
                <p className="text-xs text-muted font-body">{screen.company}</p>
            </div>
            <button onClick={onClose}
                className="flex items-center justify-center w-8 h-8 transition-all rounded-lg bg-white/10 hover:bg-white/20 text-muted hover:text-white">
                <X className="w-4 h-4" />
            </button>
            </div>

            <div className="relative overflow-hidden border rounded-2xl border-white/10"
            style={{ background: '#0a0e1a', boxShadow: `0 0 60px ${screen.color}20` }}>
            <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${screen.color}, transparent)` }} />
            <ProtectedImage
                src={screen.image}
                alt={screen.label}
                className="object-contain w-full max-h-[70vh]"
            />
            </div>

            <div className="flex items-center justify-between px-1 mt-3">
            <div className="flex flex-wrap gap-2">
                {screen.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 font-mono text-xs rounded-lg"
                    style={{ background: `${screen.color}15`, color: screen.color, border: `1px solid ${screen.color}25` }}>
                    {tag}
                </span>
                ))}
            </div>
            <div className="flex gap-2">
                <button onClick={onPrev}
                className="flex items-center justify-center w-8 h-8 text-white transition-all rounded-lg bg-white/10 hover:bg-white/20">
                <ArrowLeft className="w-4 h-4" />
                </button>
                <button onClick={onNext}
                className="flex items-center justify-center w-8 h-8 text-white transition-all rounded-lg bg-white/10 hover:bg-white/20">
                <ArrowRight className="w-4 h-4" />
                </button>
            </div>
            </div>
        </motion.div>
        </motion.div>
    )
    }

    // ─── Screen Thumbnail ─────────────────────────────────────────────────────────
    function ScreenThumb({ screen, project, globalIdx, onClick }) {
    return (
        <div
        className="relative overflow-hidden border cursor-pointer rounded-xl border-border group card-hover"
        onClick={() => onClick(globalIdx)}
        >
        <div className="relative overflow-hidden bg-black/40" style={{ aspectRatio: '16/10' }}>
            <ProtectedImage
            src={screen.image}
            alt={screen.label}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 z-30 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
            style={{ background: 'rgba(5,8,16,0.48)' }}>
            <div className="flex items-center justify-center w-8 h-8 border rounded-full bg-white/10 border-white/20 backdrop-blur-sm">
                <ZoomIn className="w-3.5 h-3.5 text-white" />
            </div>
            </div>
            <div className="absolute z-30 bottom-2 left-2">
            <span className="px-2 py-0.5 font-mono text-xs rounded-md backdrop-blur-sm"
                style={{ background: `${project.color}25`, color: project.color, border: `1px solid ${project.color}30` }}>
                {screen.label}
            </span>
            </div>
        </div>
        </div>
    )
    }

    // ─── Project Section ──────────────────────────────────────────────────────────
    function ProjectSection({ project, startIdx, onScreenClick, i }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

    return (
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="mb-12"
        >
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-border">
            <div className="flex items-center gap-3">
            <div className="w-1 h-6 rounded-full" style={{ background: project.color }} />
            <div>
                <h2 className="text-base font-bold text-white font-display">{project.title}</h2>
                <p className="text-xs text-muted font-body">{project.company}</p>
            </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 font-mono text-xs rounded-md"
                style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}20` }}>
                {tag}
                </span>
            ))}
            </div>
        </div>

        <div className={`grid gap-3 ${project.screens.length === 1 ? 'sm:grid-cols-1 max-w-md' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
            {project.screens.map((screen, si) => (
            <ScreenThumb
                key={screen.id}
                screen={screen}
                project={project}
                globalIdx={startIdx + si}
                onClick={onScreenClick}
            />
            ))}
        </div>
        </motion.div>
    )
    }

    // ─── Main ─────────────────────────────────────────────────────────────────────
    export default function FrontendGallery() {
    useImageProtection()

    const [lightboxIdx, setLightboxIdx] = useState(null)

    const prev = (e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + allScreens.length) % allScreens.length) }
    const next = (e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % allScreens.length) }

    let runningIdx = 0
    const projectsWithIdx = projects.map(p => {
        const startIdx = runningIdx
        runningIdx += p.screens.length
        return { ...p, startIdx }
    })

    return (
        <PageTransition>
        <main className="pb-16 pt-28">
            <div className="max-w-6xl px-6 mx-auto">

            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="mb-10">
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                className="inline-flex items-center gap-2 text-sm transition-colors text-muted hover:text-accent font-display">
                <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-14">
                <p className="mb-3 font-mono text-sm tracking-widest uppercase text-accent">my work</p>
                <h1 className="mb-3 text-4xl font-extrabold text-white md:text-5xl font-display">
                UI <span className="text-gradient glow-text">Gallery</span>
                </h1>
                <p className="max-w-md mx-auto text-sm leading-relaxed text-muted font-body">
                Screenshots of interfaces and web apps I've built — click any to view full size.
                </p>
            </motion.div>

            {projectsWithIdx.map((project, i) => (
                <ProjectSection
                key={project.id}
                project={project}
                startIdx={project.startIdx}
                onScreenClick={setLightboxIdx}
                i={i}
                />
            ))}

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                className="flex justify-center mt-10">
                <Link to="/projects" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                className="inline-flex items-center gap-2 py-3 text-sm font-semibold transition-all border group px-7 rounded-xl border-border text-muted font-display hover:border-accent/40 hover:text-accent hover:bg-accent/5">
                View Full Project Details
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </motion.div>

            </div>
        </main>

        <AnimatePresence>
            {lightboxIdx !== null && (
            <Lightbox
                screen={allScreens[lightboxIdx]}
                onClose={() => setLightboxIdx(null)}
                onPrev={prev}
                onNext={next}
            />
            )}
        </AnimatePresence>
        </PageTransition>
    )
}