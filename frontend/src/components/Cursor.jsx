import { useEffect, useState } from 'react'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const down = () => setClicking(true)
    const up = () => setClicking(false)

    const checkHover = (e) => {
      const el = e.target
      setHovering(
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.classList.contains('cursor-pointer') ||
        el.closest('a') ||
        el.closest('button')
      )
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', checkHover)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  useEffect(() => {
    let raf
    const lerp = (a, b, t) => a + (b - a) * t
    const animate = () => {
      setTrail(prev => ({
        x: lerp(prev.x, pos.x, 0.12),
        y: lerp(prev.y, pos.y, 0.12),
      }))
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [pos])

  return (
    <>
      {/* Inner dot */}
      <div
        className="fixed z-[9999] pointer-events-none mix-blend-difference"
        style={{
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
          width: clicking ? 6 : 8,
          height: clicking ? 6 : 8,
          background: '#00f5a0',
          borderRadius: '50%',
          transition: 'width 0.1s, height 0.1s',
        }}
      />
      {/* Trailing ring */}
      <div
        className="fixed z-[9998] pointer-events-none mix-blend-difference"
        style={{
          left: trail.x,
          top: trail.y,
          transform: 'translate(-50%, -50%)',
          width: hovering ? 48 : clicking ? 20 : 32,
          height: hovering ? 48 : clicking ? 20 : 32,
          border: '1.5px solid rgba(0, 245, 160, 0.6)',
          borderRadius: '50%',
          transition: 'width 0.3s, height 0.3s',
        }}
      />
    </>
  )
}
