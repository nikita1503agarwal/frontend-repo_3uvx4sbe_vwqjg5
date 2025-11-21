import { useState } from 'react'
import { Menu, X, Brain, Phone, Calendar, Factory } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Branchen', href: '#branchen' },
    { label: 'Kontakt', href: '#kontakt' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2 text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30">
                <Brain className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm uppercase tracking-widest text-blue-200/80">KI aus Tuttlingen</div>
                <div className="-mt-0.5 text-xl font-semibold">MedTech AI Solutions</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-blue-100/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#kontakt" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white shadow hover:shadow-lg hover:shadow-cyan-500/20 transition-shadow">
                <Phone className="h-4 w-4" />
                Beratung anfragen
              </a>
            </nav>

            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white" onClick={() => setOpen(!open)} aria-label="Menü">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-blue-100/90 hover:bg-white/5">
                    {item.label}
                  </a>
                ))}
                <a href="#kontakt" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white">
                  <Calendar className="h-4 w-4" /> Termin vereinbaren
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
