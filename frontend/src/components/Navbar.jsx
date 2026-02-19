import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-border py-3' : 'py-5'
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl px-6 mx-auto">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center transition-colors border rounded-lg w-9 h-9 bg-accent/10 border-accent/30 group-hover:bg-accent/20">
            <Code2 className="w-4 h-4 text-accent" />
          </div>
          <span className="text-lg font-bold font-display">
            <span className="text-gradient">G</span>ayani
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="items-center hidden gap-1 md:flex">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative px-4 py-2 font-body text-sm font-medium transition-colors rounded-lg ${
                  isActive ? 'text-accent' : 'text-gray-400 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 border rounded-lg bg-accent/10 border-accent/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="/contact"
          className="items-center hidden gap-2 px-4 py-2 text-sm font-semibold transition-all rounded-lg md:flex bg-accent text-bg font-display hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
        >
          Hire Me
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center w-10 h-10 text-gray-400 transition-colors border rounded-lg md:hidden border-border hover:text-white hover:border-accent/30"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t md:hidden border-border glass"
          >
            <nav className="flex flex-col gap-1 p-4">
              {links.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-body text-sm font-medium transition-colors ${
                        isActive ? 'text-accent bg-accent/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
