import React, { useRef, useState, useEffect } from 'react'

export default function BeforeAfter() {
  const containerRef = useRef(null)
  const [pos, setPos] = useState(50)

  useEffect(() => {
    const onMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setPos(percent)
    }

    const el = containerRef.current
    if (!el) return
    el.addEventListener('mousemove', onMove)
    el.addEventListener('touchmove', onMove)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('touchmove', onMove)
    }
  }, [])

  return (
    <section id="before-after" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Before and After</h2>
        <div ref={containerRef} className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop" alt="Before" className="absolute inset-0 w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0" style={{ width: `${pos}%`, overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1755442900348-923bd340acdd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBZnRlcnxlbnwwfDB8fHwxNzYzNjA1MDExfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="After" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-0 bottom-0" style={{ left: `calc(${pos}% - 1px)` }}>
            <div className="w-0.5 h-full bg-amber-300 shadow-[0_0_0_6px_rgba(251,191,36,0.15)]"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 rounded-full bg-amber-300 shadow-lg cursor-ew-resize" />
          </div>
        </div>
      </div>
    </section>
  )
}
