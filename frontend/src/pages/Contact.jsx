import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle, Loader, AlertCircle } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const contactInfo = [
  { icon: Mail,     label: 'Email',    value: 'gayanisamaraweers@gmail.com',       href: 'mailto:gayanisamaraweers@gmail.com',                        color: '#00f5a0' },
  { icon: Github,   label: 'GitHub',   value: 'github.com/desundara',              href: 'https://github.com/desundara',                              color: '#00d9f5' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/gayanisamaraweera', href: 'https://www.linkedin.com/in/gayani-samaraweera-ba0657292/', color: '#a78bfa' },
  { icon: MapPin,   label: 'Location', value: 'Sri Lanka 🇱🇰',                     href: null,                                                        color: '#fb923c' },
]

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const formRef      = useRef(null)
  const nameInputRef = useRef(null)
  const location     = useLocation()

  useEffect(() => {
    if (location.hash === '#message-form') {
      const timer = setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        setTimeout(() => nameInputRef.current?.focus(), 500)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [location])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject,
          message:    form.message,
          reply_to:   form.email,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <PageTransition>
      <main className="pb-16 pt-28">
        <div className="max-w-6xl px-6 mx-auto">
          <SectionHeading
            eyebrow="contact"
            title="Let's Work Together"
            subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
          />

          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="p-8 mb-6 border glass rounded-2xl border-border">
                <h3 className="mb-2 text-xl font-bold text-white font-display">Open to Opportunities</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-400 font-body">
                  I'm currently open to new job opportunities, freelance projects, and collaborations.
                  Whether it's a full-time role, part-time work, or an exciting project — let's talk!
                </p>
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent">Available for work</span>
                </div>
              </div>

              <div className="space-y-3">
                {contactInfo.map(({ icon: Icon, label, value, href, color }, i) => (
                  <motion.div key={label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 border glass rounded-xl border-border card-hover">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg"
                      style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                      <Icon className="w-4 h-4" style={{ color }} />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted">{label}</p>
                      {href ? (
                        <a href={href} target="_blank" rel="noopener noreferrer"
                          className="text-sm text-white transition-colors font-body hover:text-accent">{value}</a>
                      ) : (
                        <p className="text-sm text-white font-body">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div ref={formRef} id="message-form"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <form onSubmit={handleSubmit} className="p-8 border glass rounded-2xl border-border">
                <h3 className="mb-6 text-xl font-bold text-white font-display">Send a Message</h3>

                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-mono text-muted mb-1.5">Your Name *</label>
                    <input ref={nameInputRef} type="text" name="name" value={form.name} onChange={handleChange} required
                      placeholder="Kamal Perera"
                      className="w-full px-4 py-3 text-sm text-white transition-all border bg-white/5 border-border rounded-xl font-body placeholder:text-muted focus:outline-none focus:border-accent/50 focus:bg-accent/5" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-muted mb-1.5">Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required
                      placeholder="kamal@email.com"
                      className="w-full px-4 py-3 text-sm text-white transition-all border bg-white/5 border-border rounded-xl font-body placeholder:text-muted focus:outline-none focus:border-accent/50 focus:bg-accent/5" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-mono text-muted mb-1.5">Subject *</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} required
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 text-sm text-white transition-all border bg-white/5 border-border rounded-xl font-body placeholder:text-muted focus:outline-none focus:border-accent/50 focus:bg-accent/5" />
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-mono text-muted mb-1.5">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 text-sm text-white transition-all border resize-none bg-white/5 border-border rounded-xl font-body placeholder:text-muted focus:outline-none focus:border-accent/50 focus:bg-accent/5" />
                </div>

                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 px-4 py-3 mb-4 text-sm text-red-400 border rounded-xl bg-red-500/10 border-red-500/20">
                    <AlertCircle className="flex-shrink-0 w-4 h-4" />
                    Failed to send. Please try again or email directly.
                  </motion.div>
                )}

                <button type="submit" disabled={status === 'sending' || status === 'sent'}
                  className="flex items-center justify-center w-full gap-2 px-6 py-3 text-sm font-semibold transition-all rounded-xl font-display disabled:opacity-70"
                  style={{
                    background: status === 'sent' ? '#00f5a022' : '#00f5a0',
                    color:      status === 'sent' ? '#00f5a0'   : '#050810',
                    border:     status === 'sent' ? '1px solid #00f5a030' : 'none',
                  }}>
                  {status === 'idle'    && <><Send className="w-4 h-4" /> Send Message</>}
                  {status === 'sending' && <><Loader className="w-4 h-4 animate-spin" /> Sending...</>}
                  {status === 'sent'    && <><CheckCircle className="w-4 h-4" /> Message Sent!</>}
                  {status === 'error'   && <><Send className="w-4 h-4" /> Try Again</>}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}