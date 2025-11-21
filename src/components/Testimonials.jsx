import { Star, Quote, BadgeCheck } from 'lucide-react'

const testimonials = [
  {
    quote:
      'In weniger als zwei Wochen hatten wir eine funktionsfähige Demo für die Prüfberichterstellung. Das Team versteht Medizintechnik und Compliance.',
    author: 'Leiter Qualitätssicherung',
    company: 'MedTech OEM, Baden-Württemberg',
    rating: 5,
  },
  {
    quote:
      'Die Workshops haben unser Team abgeholt und praktisch befähigt. Besonders die DSGVO- und MDR-Aspekte wurden sehr klar umgesetzt.',
    author: 'Head of Regulatory Affairs',
    company: 'Klasse IIb Hersteller',
    rating: 5,
  },
  {
    quote:
      'Mit dem On-Prem Setup können wir sensible Projektdaten nutzen – ohne Cloud-Abhängigkeit. Genau das, was wir brauchten.',
    author: 'IT-Leitung',
    company: 'Fertigungsbetrieb, DACH',
    rating: 5,
  },
]

const certs = [
  { label: 'ISO 13485-ready' },
  { label: 'MDR-konforme Dokumentation' },
  { label: 'DSGVO & On-Prem' },
]

export default function Testimonials() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Kund:innenstimmen</h2>
            <p className="mt-2 text-blue-200/80">Vertrauen entsteht durch Ergebnisse – Auszug aus Feedback & Bewertungen.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {certs.map((c) => (
              <span key={c.label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100">
                <BadgeCheck className="h-3 w-3 text-cyan-400" /> {c.label}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="relative rounded-2xl border border-white/10 bg-slate-900/50 p-6">
              <Quote className="absolute -top-3 left-6 h-6 w-6 text-cyan-400" />
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-4 text-blue-100/90">“{t.quote}”</p>
              <div className="mt-6 text-sm text-blue-200/80">
                <div className="font-medium text-white">{t.author}</div>
                <div>{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
