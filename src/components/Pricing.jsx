import { Check, Shield, Zap } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '1.990€',
    cadence: 'einmalig',
    highlight: false,
    features: [
      'Discovery-Call (60 Min.)',
      'Workshop: KI-Einstieg (halbtags)',
      '3 priorisierte Use-Cases',
      'Datenschutz-Checkliste',
    ],
  },
  {
    name: 'Pro',
    price: '6.900€',
    cadence: 'pro Sprint (2 Wochen)',
    highlight: true,
    features: [
      'Use-Case Sprint: PoC/Demo',
      'Integration in Testumgebung',
      'ROI- und Risikoabschätzung',
      'Team-Enablement (2 Sessions)',
    ],
  },
  {
    name: 'Enterprise',
    price: 'ab 24.900€',
    cadence: 'Projekt',
    highlight: false,
    features: [
      'On-Prem/Private-Cloud Setup',
      'MDR/ISO 13485 konforme Doku',
      'SLA & Betriebskonzepte',
      'Security- und Compliance-Review',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="preise" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Preise</h2>
          <p className="mt-2 text-blue-200/80">Fair und transparent am Branchendurchschnitt ausgerichtet – modular skalierbar.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl border ${tier.highlight ? 'border-cyan-400/40 bg-slate-900/70' : 'border-white/10 bg-slate-900/50'} p-6 backdrop-blur`}>
              {tier.highlight && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-3 py-1 text-xs font-medium text-white shadow">
                  <Zap className="h-3 w-3" /> Beliebt
                </div>
              )}
              <div className="mb-4">
                <div className="text-sm uppercase tracking-widest text-blue-200/70">{tier.cadence}</div>
                <h3 className="mt-1 text-2xl font-semibold text-white">{tier.name}</h3>
                <div className="mt-4 text-4xl font-bold text-white">{tier.price}</div>
              </div>
              <ul className="space-y-2 text-sm text-blue-100/80">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-cyan-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white">Anfragen</button>
              <div className="mt-3 flex items-center gap-2 text-xs text-blue-200/70">
                <Shield className="h-3 w-3" />
                <span>MDR/ISO 13485 konforme Vorgehensweise verfügbar</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
