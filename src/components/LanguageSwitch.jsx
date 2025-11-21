import { Globe } from 'lucide-react'
import { useI18n } from '../lib/i18n'

export default function LanguageSwitch({ className = '' }) {
  const { lang, setLang } = useI18n()
  const other = lang === 'de' ? 'en' : 'de'
  const label = lang === 'de' ? 'EN' : 'DE'

  return (
    <button
      onClick={() => setLang(other)}
      className={`inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 hover:bg-white/10 ${className}`}
      aria-label={`Switch language to ${other.toUpperCase()}`}
    >
      <Globe className="h-4 w-4" /> {label}
    </button>
  )
}
