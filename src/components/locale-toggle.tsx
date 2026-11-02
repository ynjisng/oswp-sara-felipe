'use client'

import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

export function LocaleToggle() {
  const locale = useLocale()
  const router = useRouter()

  const switchTo = locale === 'en' ? 'pt-br' : locale === 'pt-br' ? 'es' : 'en'

  const handleSwitch = async () => {
    await fetch('/api/locale', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ locale: switchTo }),
    })
    router.refresh()
  }

  return (
    <button
      type='button'
      onClick={handleSwitch}
      className='font-mono text-muted-foreground text-xs uppercase tracking-[0.22em] hover:text-foreground'
      aria-label={`Switch to ${switchTo === 'en' ? 'English' : switchTo === 'es' ? 'Spanish' : 'Portuguese'}`}
    >
      <span className={locale === 'en' ? 'text-foreground' : undefined}>EN</span>
      <span className='mx-1'>|</span>
      <span className={locale === 'pt-br' ? 'text-foreground' : undefined}>PT-BR</span>
      <span className='mx-1'>|</span>
      <span className={locale === 'es' ? 'text-foreground' : undefined}>ES</span>
    </button>
  )
}
