import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LearnGrid from './components/LearnGrid'
import PersonaChips from './components/PersonaChips'
import ModulesTimeline from './components/ModulesTimeline'
import BeforeAfter from './components/BeforeAfter'
import Instructor from './components/Instructor'
import ScheduleFees from './components/ScheduleFees'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import StickyEnrollBar from './components/StickyEnrollBar'

export default function App() {
  useEffect(() => {
    // smooth scroll behavior
    if ('scrollBehavior' in document.documentElement.style) return
    // fallback smooth scroll
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (!id || id.length < 2) return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      const top = el.getBoundingClientRect().top + window.pageYOffset - 64
      window.scrollTo({ top, behavior: 'smooth' })
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <main className="relative">
        <Hero />
        <LearnGrid />
        <PersonaChips />
        <ModulesTimeline />
        <BeforeAfter />
        <Instructor />
        <ScheduleFees />
        <Testimonials />
        <FAQ />
      </main>
      <StickyEnrollBar />
      <footer className="py-16 text-center text-sm text-slate-400/80">© {new Date().getFullYear()} Basics of Photography Program</footer>
    </div>
  )
}
