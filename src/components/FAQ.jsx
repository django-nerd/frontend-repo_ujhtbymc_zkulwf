import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'Do I need a DSLR?', a: 'Any camera works — phone or mirrorless. We teach fundamentals that apply to all gear.' },
  { q: 'Is it beginner friendly?', a: 'Yes. We start from zero and ramp up to professional workflows.' },
  { q: 'Will there be assignments?', a: 'Every module includes practical exercises and feedback.' },
  { q: 'What software do we use?', a: 'Lightroom Classic or any RAW editor. Basics are transferable.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(-1)

  return (
    <section id="faq" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">FAQ</h2>
        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden">
          {faqs.map((f, idx) => (
            <div key={f.q}>
              <button onClick={() => setOpen(open === idx ? -1 : idx)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                <span className="text-white/90 font-medium">{f.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-200 transition-transform ${open === idx ? 'rotate-180' : ''}`} />
              </button>
              {open === idx && (
                <div className="px-6 pb-5 text-slate-300/90">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
