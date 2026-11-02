export const SPANISH_COUNTRY_CODES = new Set([
  'MX',
  'ES',
  'AR',
  'CO',
  'CL',
  'PE',
  'VE',
  'EC',
  'BO',
  'PY',
  'UY',
  'GT',
  'SV',
  'HN',
  'NI',
  'CR',
  'PA',
  'CU',
  'DO',
  'PR',
  'GQ',
])

export type Locale = 'en' | 'es' | 'pt-br'

export function getLocaleFromCountry(countryCode: string | null | undefined): Locale {
  if (!countryCode) return 'pt-br'

  const normalizedCountryCode = countryCode.toUpperCase()
  if (normalizedCountryCode === 'BR') return 'pt-br'
  return SPANISH_COUNTRY_CODES.has(normalizedCountryCode) ? 'es' : 'en'
}
