import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import LanguageSwitch from './LanguageSwitch'
import { useI18n } from '../lib/i18n'

export default function Hero() {
  const { t } = useI18n()
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0">
        <div className="absolute -top-32 right-1/2 h-[700px] w-[700px] translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100">
            Aus Tuttlingen für Europa • MedTech • Industrie 4.0
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            KI-Lösungen und Workshops für MedTech und Industrie
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-lg leading-8 text-blue-200/80">
            Wir implementieren praktische KI in Ihre Prozesse: von Qualitätsmanagement bis automatisierter Dokumentation. Maßgeschneidert, sicher und DSGVO-konform.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#kontakt" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow hover:shadow-lg hover:shadow-cyan-500/20 transition-shadow">
              Kostenlose Erstberatung
            </a>
            <a href="#leistungen" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10">
              Leistungen entdecken
            </a>
          </motion.div>

          <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-blue-100/80">
            <div>
              <div className="text-3xl font-semibold text-white">50+ </div>
              Projekte in Medizin- und Fertigungsindustrie
            </div>
            <div>
              <div className="text-3xl font-semibold text-white">100% </div>
              DSGVO & On-Premise möglich
            </div>
          </div>
        </div>

        <div className="relative h-[480px] w-full rounded-2xl border border-white/10 bg-slate-900/60 p-2 backdrop-blur">
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
            <div className="absolute right-3 top-3"><LanguageSwitch /></div>
          </div>
        </div>
      </div>
    </section>
  )
}
