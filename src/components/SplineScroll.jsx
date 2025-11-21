import Spline from '@splinetool/react-spline'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, Brain, CheckCircle2 } from 'lucide-react'
import { useI18n } from '../lib/i18n'

/*
  SplineScroll
  - Embeds a Spline scene
  - Uses scroll position to animate overlay content and sends state messages to Spline 
  - Replace scene URL with your custom KI theme scene for richer interactions
*/

export default function SplineScroll() {
  const ref = useRef(null)
  const { t } = useI18n()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // Parallax/opacity transforms for overlay content
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98])

  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      if (v < 0.33) setPhase(0)
      else if (v < 0.66) setPhase(1)
      else setPhase(2)
    })
    return () => unsub && unsub()
  }, [scrollYProgress])

  // Spline event bridge: when phase changes, send events via window to the Spline scene 
  useEffect(() => {
    const eventName = ['vision', 'assistant', 'quality'][phase]
    window.dispatchEvent(new CustomEvent('spline-phase', { detail: { phase, eventName } }))
  }, [phase])

  return (
    <section id="scroll3d" ref={ref} className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{t('scroll_title')}</h2>
          <p className="mt-2 text-blue-200/80">{t('scroll_sub')}</p>
        </div>
      </div>

      <div className="relative mx-auto h-[520px] max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-2 backdrop-blur">
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          {/* Spline canvas */}
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            onLoad={(app) => {
              // Listen to our custom phase events and trigger Spline state changes
              const handler = (e) => {
                const name = e.detail?.eventName
                // Example: find objects by name from Spline and animate properties
                try {
                  const glow = app?.findObjectByName?.('Glow')
                  const robot = app?.findObjectByName?.('Robot')
                  const lens = app?.findObjectByName?.('Lens')
                  if (name === 'vision' && lens) lens.visible = true
                  if (name === 'assistant' && robot) robot.visible = true
                  if (name === 'quality' && glow) glow.visible = true
                } catch (err) {
                  // noop if names not found in the provided scene
                }
              }
              window.addEventListener('spline-phase', handler)
              app?.setZoom?.(0.9)
              return () => window.removeEventListener('spline-phase', handler)
            }}
            style={{ width: '100%', height: '100%' }}
          />

          {/* Overlay content that responds to scroll */}
          <motion.div style={{ y: y1, opacity, scale }} className="pointer-events-none absolute inset-0">
            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-xl bg-slate-900/60 px-3 py-1.5 text-xs text-blue-100/90">
              <Sparkles className="h-4 w-4 text-cyan-300" /> KI • Computer Vision • GenAI
            </div>

            <div className="absolute inset-x-0 bottom-6 mx-auto max-w-xl text-center">
              {phase === 0 && (
                <div className="pointer-events-auto mx-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <div className="flex items-center justify-center gap-2 text-cyan-300">
                    <Brain className="h-4 w-4" /> Vision
                  </div>
                  <div className="mt-1 text-sm text-blue-100/80">Kamerasysteme erfassen Daten – ideal für AOI/AXI, Mikroskopie und Sichtprüfung.</div>
                </div>
              )}
              {phase === 1 && (
                <div className="pointer-events-auto mx-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <div className="flex items-center justify-center gap-2 text-cyan-300">
                    <Sparkles className="h-4 w-4" /> Assistant
                  </div>
                  <div className="mt-1 text-sm text-blue-100/80">GenAI-Assistent unterstützt Teams bei Doku, Recherche und SOPs – DSGVO-konform.</div>
                </div>
              )}
              {phase === 2 && (
                <div className="pointer-events-auto mx-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <div className="flex items-center justify-center gap-2 text-emerald-300">
                    <CheckCircle2 className="h-4 w-4" /> Quality
                  </div>
                  <div className="mt-1 text-sm text-blue-100/80">Qualitätssicherung mit Audit-Trail und Model-Monitoring für den produktiven Betrieb.</div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Anchored buttons to trigger Spline changes without scrolling */}
      <div className="mx-auto mt-6 flex max-w-6xl flex-wrap items-center justify-center gap-3 px-4">
        <TriggerButton phase={0} label={t('scroll_btn_vision')} />
        <TriggerButton phase={1} label={t('scroll_btn_assistant')} />
        <TriggerButton phase={2} label={t('scroll_btn_quality')} />
      </div>
    </section>
  )
}

function TriggerButton({ phase, label }) {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent('spline-phase', { detail: { phase, eventName: ['vision','assistant','quality'][phase] } }))}
      className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
    >
      {label}
    </button>
  )
}
