import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950 pointer-events-none"></div>

      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="inline-block mb-4 text-amber-300/90 tracking-widest uppercase text-xs">Introduction to Professional Photography</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
              Basics of Photography Program
            </h1>
            <p className="mt-6 text-slate-200/90 text-lg md:text-xl max-w-2xl">
              Master exposure, composition, lighting, and post-processing through a cinematic, hands-on journey.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#enrol" className="px-6 py-3 rounded-full bg-amber-300 text-slate-900 font-semibold hover:bg-amber-400 transition-colors shadow-[0_0_30px_rgba(251,191,36,0.25)]">Enrol Now</a>
              <a href="#learn" className="px-6 py-3 rounded-full border border-white/20 text-white/90 hover:bg-white/10 transition-colors">Explore Curriculum</a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-0 right-0 flex items-center justify-center"
      >
        <div className="flex flex-col items-center text-slate-200/80">
          <span className="text-xs mb-2">Scroll</span>
          <span className="w-[2px] h-8 bg-gradient-to-b from-amber-300/0 via-amber-300/70 to-amber-300/0 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
