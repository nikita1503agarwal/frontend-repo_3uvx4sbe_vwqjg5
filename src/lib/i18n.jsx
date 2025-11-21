import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const dictionaries = {
  de: {
    nav_leistungen: 'Leistungen',
    nav_workshops: 'Workshops',
    nav_branchen: 'Branchen',
    nav_kontakt: 'Kontakt',
    cta_consult: 'Beratung anfragen',
    cta_meeting: 'Termin vereinbaren',
    scroll_title: 'KI im Unternehmen – erlebbar beim Scrollen',
    scroll_sub: 'Scrollen Sie durch die Wertschöpfungskette: von Datenaufnahme bis Skalierung.',
    scroll_btn_vision: 'Vision aktivieren',
    scroll_btn_assistant: 'Assistent zeigen',
    scroll_btn_quality: 'Qualität prüfen',
  },
  en: {
    nav_leistungen: 'Solutions',
    nav_workshops: 'Workshops',
    nav_branchen: 'Industries',
    nav_kontakt: 'Contact',
    cta_consult: 'Request consultation',
    cta_meeting: 'Book a meeting',
    scroll_title: 'AI in your company – scroll to explore',
    scroll_sub: 'Scroll through the value chain: from data capture to scaling.',
    scroll_btn_vision: 'Activate Vision',
    scroll_btn_assistant: 'Show Assistant',
    scroll_btn_quality: 'Run QA',
  },
}

const I18nContext = createContext({ lang: 'de', setLang: () => {}, t: (k) => k })

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('de')

  useEffect(() => {
    const stored = window.localStorage.getItem('lang')
    if (stored && (stored === 'de' || stored === 'en')) setLang(stored)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = useMemo(() => {
    const dict = dictionaries[lang] || dictionaries.de
    return (key) => dict[key] ?? key
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}
