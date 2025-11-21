import { Presentation, Users, Wrench, Building2 } from 'lucide-react'

export default function Workshops() {
  const items = [
    {
      icon: Presentation,
      title: 'Management Briefing',
      desc: 'Strategische Einordnung von KI, Roadmap-Design und Compliance. 2–3 Stunden.'
    },
    {
      icon: Users,
      title: 'Team-Enablement',
      desc: 'Hands-on Workshops für QM, Produktion, Entwicklung und Vertrieb.'
    },
    {
      icon: Wrench,
      title: 'Use-Case Sprint',
      desc: 'In 5 Tagen vom Problem zur funktionierenden KI-Demo inklusive Evaluation.'
    },
    {
      icon: Building2,
      title: 'On-Prem KI Setup',
      desc: 'Sichere Bereitstellung von Modellen und Datenflüssen in Ihrer Infrastruktur.'
    }
  ]

  return (
    <section id="workshops" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Workshops</h2>
          <p className="mt-2 text-blue-200/80">Für jedes Wissenslevel – von Einstieg bis Expert:innen.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
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
