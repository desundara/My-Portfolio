import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import FrontendGallery from './pages/FrontendGallery'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen noise bg-mesh">
      <div className="fixed inset-0 z-0 pointer-events-none grid-pattern" />
      <Cursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/frontend-gallery" element={<FrontendGallery />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
