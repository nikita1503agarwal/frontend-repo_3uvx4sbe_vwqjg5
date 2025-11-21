import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      if (!res.ok) throw new Error('Error')
      setStatus('sent')
      e.target.reset()
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Kontakt</h2>
          <p className="mt-2 text-blue-200/80">Kostenlose Erstberatung – wir melden uns innerhalb von 24h.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
          <input required name="name" placeholder="Ihr Name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none focus:ring-2 focus:ring-cyan-400/50" />
          <input required name="email" type="email" placeholder="E-Mail" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none focus:ring-2 focus:ring-cyan-400/50" />
          <textarea required name="message" placeholder="Ihr Anliegen" rows="5" className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none focus:ring-2 focus:ring-cyan-400/50" />
          <div className="sm:col-span-2 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-medium text-white">
              <Send className="h-4 w-4" /> Absenden
            </button>
            {status === 'sending' && <span className="text-blue-200/80">Wird gesendet…</span>}
            {status === 'sent' && <span className="text-green-300">Vielen Dank! Wir melden uns schnellstmöglich.</span>}
            {status === 'error' && <span className="text-red-300">Leider ein Fehler. Bitte später erneut versuchen.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
