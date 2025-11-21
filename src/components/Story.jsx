import { Brain, Compass, Rocket } from 'lucide-react'

export default function Story() {
  const items = [
    {
      icon: Compass,
      title: 'Warum jetzt?',
      text: 'Regulatorik, Fachkräftemangel und Kostendruck treffen auf reife KI-Tools. Wer pragmatisch startet, baut schnelle Erfolge auf und schafft interne Akzeptanz.',
    },
    {
      icon: Brain,
      title: 'Wie starten?',
      text: 'Mit fokussierten Use-Cases, die messbaren Nutzen bringen: Dokumentation, Qualitätssicherung, Wissensmanagement. Sicher und auditierbar.',
    },
    {
      icon: Rocket,
      title: 'Wie skalieren?',
      text: 'Von der Demo zum produktiven Betrieb: Daten-Governance, Model-Monitoring und Schulung – modular und branchenerprobt.',
    },
  ]

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Warum jetzt mit KI starten?</h2>
          <p className="mt-2 text-blue-200/80">Ein klarer Pfad vom ersten Schritt bis zum skalierbaren Betrieb.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                <i.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{i.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
