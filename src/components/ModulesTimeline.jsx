import React from 'react'
import { motion } from 'framer-motion'

const modules = [
  { title: 'Module 1: Foundations', points: ['Cameras & Lenses', 'Exposure Triangle', 'Focus & Metering'] },
  { title: 'Module 2: Seeing', points: ['Composition', 'Color & Mood', 'Storytelling'] },
  { title: 'Module 3: Light', points: ['Natural Light', 'Off-camera Flash', 'Practical Setups'] },
  { title: 'Module 4: Edit', points: ['RAW Workflow', 'Retouching Basics', 'Export & Delivery'] },
]

export default function ModulesTimeline() {
  return (
    <section id="modules" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Course modules</h2>
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-10">
            {modules.map((m, i) => (
              <motion.div key={m.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} className="relative grid sm:grid-cols-2 gap-6">
                <div className={`order-2 sm:order-1 ${i % 2 === 0 ? 'sm:pr-16' : 'sm:pl-16'} `}>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                    <h3 className="text-white font-semibold">{m.title}</h3>
                    <ul className="mt-3 space-y-2 text-slate-300/90 text-sm">
                      {m.points.map((p) => (
                        <li key={p} className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-300"></span>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="order-1 sm:order-2">
                  <div className="h-44 rounded-xl bg-gradient-to-br from-amber-500/15 to-pink-500/15 border border-white/10" />
                </div>
                <div className="absolute left-[14px] sm:left-1/2 sm:-translate-x-1/2 top-6 w-3 h-3 rounded-full bg-amber-300 shadow-[0_0_0_6px_rgba(251,191,36,0.15)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
