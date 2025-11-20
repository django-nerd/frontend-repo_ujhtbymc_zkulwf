import React from 'react'
import { motion } from 'framer-motion'

export default function Instructor() {
  return (
    <section id="instructor" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/60">
            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop" alt="Instructor" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Your Instructor</h2>
          <p className="mt-4 text-slate-300/90">Jordan Hale is a commercial photographer with a decade of experience across fashion, music, and editorial. Their approach blends technical precision with cinematic storytelling.</p>
          <p className="mt-3 text-slate-300/90">Expect hands-on demos, field assignments, and constructive feedback to build a confident, versatile workflow.</p>
        </motion.div>
      </div>
    </section>
  )
}
