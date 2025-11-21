import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Workshops from './components/Workshops'
import Sectors from './components/Sectors'
import Animations from './components/Animations'
import SplineScroll from './components/SplineScroll'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Story from './components/Story'
import Contact from './components/Contact'
import { I18nProvider } from './lib/i18n'

function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(56,189,248,0.08),transparent_60%)]" />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Features />
          <Animations />
          <SplineScroll />
          <Workshops />
          <Sectors />
          <Pricing />
          <Testimonials />
          <Story />
          <Contact />
          <footer className="border-t border-white/10 py-10 text-center text-sm text-blue-200/70">
            © {new Date().getFullYear()} MedTech AI Solutions • Tuttlingen, Deutschland
          </footer>
        </main>
      </div>
    </I18nProvider>
  )
}

export default App
