import { ShieldCheck, LineChart, Workflow, Cpu } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: ShieldCheck,
      title: 'Regulatorisch sicher',
      desc: 'Umsetzung nach MDR/ISO 13485, Datenhoheit und DSGVO-Konformität – On-Prem oder Private Cloud.'
    },
    {
      icon: Workflow,
      title: 'Prozessautomatisierung',
      desc: 'Dokumentation, CAPA, Prüfberichte und Schulungsunterlagen automatisiert mit KI.'
    },
    {
      icon: Cpu,
      title: 'KI-Implementierung',
      desc: 'Von LLM-Assistenten bis Computer Vision – wir integrieren KI in bestehende Systeme.'
    },
    {
      icon: LineChart,
      title: 'Schneller ROI',
      desc: 'Portfolio aus Quick-Wins und skalierbaren Roadmaps – transparent messbar.'
    }
  ]

  return (
    <section id="leistungen" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Leistungen</h2>
            <p className="mt-2 text-blue-200/80">Pragmatisch. Sicher. Produktiv.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur transition hover:bg-slate-900/70">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg shadow-cyan-500/20">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
