import React, { useEffect, useState } from 'react'
import { Menu, Camera, X } from 'lucide-react'
import { motion } from 'framer-motion'

const links = [
  { href: '#learn', label: 'What you will learn' },
  { href: '#who', label: 'Who it’s for' },
  { href: '#modules', label: 'Modules' },
  { href: '#before-after', label: 'Before & After' },
  { href: '#instructor', label: 'Instructor' },
  { href: '#schedule', label: 'Schedule & Fees' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'backdrop-blur-xl bg-slate-900/70 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500/20 to-pink-500/20 border border-white/10">
              <Camera className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-white font-semibold tracking-tight">Basics of Photography Program</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-slate-200/80 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#enrol" className="text-sm text-slate-900 bg-amber-300 hover:bg-amber-400 rounded-full px-4 py-2 font-medium transition-colors">Enrol</a>
          </nav>

          <button className="md:hidden p-2 rounded-lg border border-white/10 text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-4 grid gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-200/90 hover:text-white py-2">
                {l.label}
              </a>
            ))}
            <a href="#enrol" onClick={() => setOpen(false)} className="text-slate-900 bg-amber-300 hover:bg-amber-400 rounded-full px-4 py-2 font-medium inline-block w-max">Enrol</a>
          </div>
        </div>
      )}
    </motion.header>
  )
}
