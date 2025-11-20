import React, { useEffect, useState } from 'react'

export default function StickyEnrollBar() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.4)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div id="enrol" className={`fixed bottom-4 inset-x-0 z-40 transition-all ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-xl px-4 py-3 flex items-center justify-between shadow-2xl">
          <div className="text-slate-200 text-sm">
            <span className="font-medium text-white">Basics of Photography Program</span>
            <span className="mx-2 text-slate-400">•</span>
            <span>Enrollments open now</span>
          </div>
          <a href="#schedule" className="px-5 py-2 rounded-full bg-amber-300 text-slate-900 font-semibold hover:bg-amber-400 transition-colors">Choose a batch</a>
        </div>
      </div>
    </div>
  )
}
