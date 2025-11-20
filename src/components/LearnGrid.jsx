import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { title: 'Exposure Mastery', desc: 'Aperture, shutter, ISO — balance for perfect shots.' },
  { title: 'Composition & Framing', desc: 'Rule of thirds, leading lines, negative space.' },
  { title: 'Lighting Fundamentals', desc: 'Natural vs. artificial, modifiers, direction.' },
  { title: 'Portrait & Street', desc: 'Work with people and candid life scenes.' },
  { title: 'Color & Tone', desc: 'Mood through color theory, LUTs, grading.' },
  { title: 'Editing Workflow', desc: 'RAW to final — Lightroom and essentials.' },
]

export default function LearnGrid() {
  return (
    <section id="learn" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white mb-12">What you will learn</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:bg-slate-900/80 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              <div className="h-40 rounded-xl mb-4 bg-gradient-to-br from-amber-500/15 to-pink-500/15 border border-white/10" />
              <h3 className="text-white font-semibold">{it.title}</h3>
              <p className="text-slate-300/80 text-sm mt-1">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
