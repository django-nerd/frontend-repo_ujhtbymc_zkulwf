import React, { useEffect, useRef, useState } from 'react'

const testimonials = [
  { quote: 'Transformed how I see light. The assignments were challenging and fun.', name: 'Ava M.' },
  { quote: 'I finally shoot in manual with confidence. The before/after of my work is unreal.', name: 'Theo R.' },
  { quote: 'Cinematic, practical, and inspiring. Exactly what I needed.', name: 'Mina K.' },
  { quote: 'The feedback sessions were gold. My portraits leveled up fast.', name: 'Jai P.' },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const len = testimonials.length
  const next = () => setIndex((i) => (i + 1) % len)
  const prev = () => setIndex((i) => (i - 1 + len) % len)

  useEffect(() => {
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">What students say</h2>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-10 min-h-[220px]">
          <div className="transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)`, display: 'flex' }}>
            {testimonials.map((t) => (
              <div key={t.name} className="shrink-0 w-full">
                <p className="text-xl text-slate-200">“{t.quote}”</p>
                <p className="mt-4 text-amber-300 font-medium">— {t.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={prev} className="px-3 py-1.5 rounded-full border border-white/15 text-white/90 hover:bg-white/10">Prev</button>
            <button onClick={next} className="px-3 py-1.5 rounded-full bg-amber-300 text-slate-900 font-medium hover:bg-amber-400">Next</button>
          </div>
        </div>
      </div>
    </section>
  )
}
