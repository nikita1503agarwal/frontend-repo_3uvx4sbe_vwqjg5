import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Cpu, Sparkles, Camera, Workflow } from 'lucide-react'

function TiltCard({ icon: Icon, title, desc, gradient = 'from-blue-500 to-cyan-400' }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [12, -12])
  const rotateY = useTransform(x, [-50, 50], [-12, 12])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = e.clientX - rect.left
    const py = e.clientY - rect.top
    x.set(px - rect.width / 2)
    y.set(py - rect.height / 2)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 900 }}
      className="group"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative h-56 rounded-2xl border border-white/10 bg-slate-900/50 p-6 shadow-2xl backdrop-blur will-change-transform"
      >
        <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg shadow-cyan-500/20`}>
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-blue-100/80">{desc}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Animations() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Interaktive 3D-Elemente</h2>
          <p className="mt-2 text-blue-200/80">Leichte 3D-Interaktionen für ein modernes, technisches Erscheinungsbild – performant und mobilfreundlich.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <TiltCard icon={Cpu} title="KI-Inspektor" desc="3D-Karten mit Parallax-Effekt – ideal, um visuelle KI-Use-Cases zu zeigen." />
          <TiltCard icon={Camera} title="Computer Vision" desc="Prod.-Bilddaten, AOI/AXI & Mikroskopie als anschauliche Story." gradient="from-violet-500 to-fuchsia-400" />
          <TiltCard icon={Workflow} title="Workflow-Roboter" desc="Bewegung vermittelt Automatisierung und Geschwindigkeit." gradient="from-emerald-500 to-teal-400" />
          <TiltCard icon={Sparkles} title="GenAI-Assistent" desc="Zeigt intelligenten Support für Teams – sicher und DSGVO-konform." gradient="from-amber-500 to-orange-400" />
        </div>
      </div>
    </section>
  )
}
