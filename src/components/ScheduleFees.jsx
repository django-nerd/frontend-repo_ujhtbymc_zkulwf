import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const batches = [
  { title: 'Morning Batch', time: 'Mon, Wed, Fri • 7:00–9:00 AM', price: '$399', details: 'Great for early risers. Live practicals twice a week.' },
  { title: 'Evening Batch', time: 'Tue, Thu, Sat • 6:00–8:00 PM', price: '$399', details: 'Perfect after work. Includes weekend photo walk.' },
]

export default function ScheduleFees() {
  const [open, setOpen] = useState(0)

  return (
    <section id="schedule" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Schedule and Fees</h2>
        <div className="space-y-4">
          {batches.map((b, idx) => (
            <div key={b.title} className="rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden">
              <button onClick={() => setOpen(open === idx ? -1 : idx)} className="w-full flex items-center justify-between text-left px-6 py-5">
                <div>
                  <h3 className="text-white font-semibold">{b.title}</h3>
                  <p className="text-slate-300/80 text-sm">{b.time}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-slate-900 bg-amber-300 rounded-full px-3 py-1 text-sm font-medium">{b.price}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-200 transition-transform ${open === idx ? 'rotate-180' : ''}`} />
                </div>
              </button>
              {open === idx && (
                <div className="px-6 pb-6 text-slate-300/90">
                  <p>{b.details}</p>
                  <div className="mt-4 flex gap-3">
                    <a href="#enrol" className="px-5 py-2 rounded-full bg-amber-300 text-slate-900 font-semibold hover:bg-amber-400 transition-colors">Enrol</a>
                    <a href="#faq" className="px-5 py-2 rounded-full border border-white/15 text-white/90 hover:bg-white/10 transition-colors">Ask a Question</a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
