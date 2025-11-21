import { Stethoscope, Factory, Microscope, PackageSearch } from 'lucide-react'

export default function Sectors() {
  const sectors = [
    { icon: Stethoscope, title: 'Medizintechnik', points: ['Dokumentation & QM', 'Traceability', 'UDI & MDR'] },
    { icon: Factory, title: 'Fertigung', points: ['Qualitätssicherung', 'Bildverarbeitung', 'Predictive'] },
    { icon: Microscope, title: 'Labor & Life Science', points: ['Prozessdaten', 'Assistenten', 'Automatisierung'] },
    { icon: PackageSearch, title: 'Logistik', points: ['Analyse & Prognose', 'Routen-Optimierung', 'Automatisierte Reports'] },
  ]

  return (
    <section id="branchen" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Branchen</h2>
          <p className="mt-2 text-blue-200/80">Lösungen aus Tuttlingen – dem Zentrum der Medizintechnik.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-white">{s.title}</h3>
              <ul className="mt-2 space-y-1 text-sm text-blue-100/80">
                {s.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
