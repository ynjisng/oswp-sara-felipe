import type { CSSProperties } from 'react'
import { aureliaSans, aureliaSerif } from '~/templates/fonts'
import type { TemplateTheme } from '~/templates/types'

/**
 * Aurelia theme — botanical garden palette. Warm ivory canvas, deep olive ink,
 * a terracotta primary and an olive-green accent, with sage linework and
 * peach/lavender supporting tones. Headings use a high-contrast display serif
 * (Playfair Display); body and navigation use a calm geometric sans (Jost).
 *
 * Source swatches: olive #5B6A41, eucalyptus #7A9B80, sage #A2B69D,
 * terracotta #C77A58, peach #E9A37C, lavender #8C7B9E, ivory #FDF9F2.
 * Text-bearing tokens are darkened variants of those swatches so every text
 * pairing meets WCAG AA (≥ 4.5:1); the raw terracotta/lavender swatches are
 * exposed as `--tpl-*` tokens for decoration only.
 *
 * The colour tokens override the app design variables, so the palette also
 * flows through shared surfaces such as the RSVP form.
 *
 * oklch values are `L C H` triples consumed via `oklch(var(--token))`.
 */
const cssVars: CSSProperties = {
  // Ivory swatch canvas; ink is a very dark olive (#282E1E, 13.4:1 on ivory).
  '--background': '0.9833 0.0102 81.80',
  '--foreground': '0.2900 0.0300 125.00',
  // Cards lift off the canvas as near-white warm paper (#FFFDFA).
  '--card': '0.9950 0.0050 81.80',
  '--card-foreground': '0.2900 0.0300 125.00',
  '--popover': '0.9950 0.0050 81.80',
  '--popover-foreground': '0.2900 0.0300 125.00',
  // Deepened terracotta (#A25937): readable as small links and under ivory
  // button labels (5.0:1), where the raw swatch would only reach 3.3:1.
  '--primary': '0.5419 0.1077 44.27',
  '--primary-foreground': '0.9833 0.0102 81.80',
  // Peach swatch with olive ink.
  '--secondary': '0.7742 0.0987 49.92',
  '--secondary-foreground': '0.2900 0.0300 125.00',
  // Pale sage fill (#EBF3E9); darkened eucalyptus (#5B725F) for secondary text.
  '--muted': '0.9550 0.0150 139.43',
  '--muted-foreground': '0.5268 0.0400 150.11',
  // Olive swatch: eyebrow labels and button hover (5.6:1 with ivory).
  '--accent': '0.5007 0.0639 125.00',
  '--accent-foreground': '0.9833 0.0102 81.80',
  // Soft sage borders and inputs (#D3DFCF); terracotta focus ring.
  '--border': '0.8900 0.0250 139.43',
  '--input': '0.8900 0.0250 139.43',
  '--ring': '0.5419 0.1077 44.27',
  // Raw swatches for decorative flourishes only — never text.
  '--tpl-terracotta': '0.6544 0.1077 44.27',
  '--tpl-lavender': '0.6108 0.0555 306.83',
  '--tpl-heading-font': 'var(--tpl-aurelia-serif)',
  '--tpl-body-font': 'var(--tpl-aurelia-sans)',
} as CSSProperties

export const aureliaTheme: TemplateTheme = {
  fontClassName: `${aureliaSerif.variable} ${aureliaSans.variable}`,
  rootClassName: 'bg-background text-foreground font-[family-name:var(--tpl-body-font)]',
  cssVars,
}
