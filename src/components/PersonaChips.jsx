import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const personas = [
  { label: 'Beginners', desc: 'If you just bought a camera or use your phone, start here.' },
  { label: 'Aspiring Pros', desc: 'Build a portfolio and learn client-ready workflows.' },
  { label: 'Content Creators', desc: 'Level-up social visuals with strong fundamentals.' },
  { label: 'Designers', desc: 'Create assets and understand visual storytelling.' },
]

export default function PersonaChips() {
  const [active, setActive] = useState(0)

  return (
    <section id="who" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Who this course is for</h2>

        <div className="flex flex-wrap gap-3">
          {personas.map((p, idx) => (
            <button
              key={p.label}
              onClick={() => setActive(idx)}
              className={`px-4 py-2 rounded-full border text-sm transition-all ${
                active === idx ? 'bg-amber-300 text-slate-900 border-transparent' : 'border-white/15 text-slate-200 hover:bg-white/10'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="mt-6 min-h-[84px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-slate-300/90 text-lg"
            >
              {personas[active].desc}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
