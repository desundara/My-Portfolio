import { Github, Linkedin, Mail, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const socials = [
  { icon: Github, href: 'https://github.com/desundara', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/gayani-samaraweera-ba0657292', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:gayanisamaraweers@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="py-10 mt-20 border-t border-border">
      <div className="flex flex-col items-center justify-between max-w-6xl gap-6 px-6 mx-auto md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 border rounded-lg bg-accent/10 border-accent/30">
            <Code2 className="w-3.5 h-3.5 text-accent" />
          </div>
          <span className="text-sm font-bold font-display text-gradient">Gayani</span>
        </div>

        <p className="text-sm text-center font-body text-muted">
          © 2026 Gayani. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center transition-all border rounded-lg w-9 h-9 border-border text-muted hover:text-accent hover:border-accent/30"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
