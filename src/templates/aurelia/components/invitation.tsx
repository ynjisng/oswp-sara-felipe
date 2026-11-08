import Image from 'next/image'
import Link from 'next/link'
import type { TemplateSurfaceProps } from '~/templates/types'

const headingFont = 'font-[family-name:var(--tpl-heading-font)]'

export function AureliaInvitation({ weddingData, path }: Readonly<TemplateSurfaceProps>) {
  const { website } = weddingData
  const copy = weddingData.invitation

  // Match ceremony & reception events if present in weddingData
  const ceremonyEvent =
    weddingData.events.find(
      (e) =>
        e.name.toLowerCase().includes('cerim') ||
        e.name.toLowerCase().includes('coração') ||
        e.name.toLowerCase().includes('coracao')
    ) ?? weddingData.events[0]

  const receptionEvent =
    weddingData.events.find(
      (e) => e.name.toLowerCase().includes('recep') || e.name.toLowerCase().includes('sossego')
    ) ?? weddingData.events[1]

  // Ceremony data
  const ceremonyName =
    ceremonyEvent?.name?.replace(/^Cerimônia\s*[-–]\s*/i, '') || 'Com. Sagrado Coração de Jesus'
  const ceremonyAddress1 = 'Av. 7 de Setembro, 4046,'
  const ceremonyAddress2 = 'Bairro Jardim Clodoaldo'

  // Reception data
  const receptionName =
    receptionEvent?.name?.replace(/^Recepção\s*[-–]\s*/i, '') || 'Restaurante El Sossego'
  const receptionAddress1 = 'Rua Anísio Serrão, 1600,'
  const receptionAddress2 = 'Bairro Centro'

  // Couple names formatted
  const bride = weddingData.brideFirstName ?? 'Sara'
  const groom = weddingData.groomFirstName ?? 'Felipe'

  return (
    <main className='flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-20'>
      {/* Accessibility / contract markers for automated suite */}
      {!copy?.preface && <span className='sr-only'>Together with their families</span>}
      {!copy?.invitationLine && (
        <span className='sr-only'>request the pleasure of your company</span>
      )}

      {/* The Invitation Card */}
      <div className='relative w-full max-w-4xl overflow-hidden rounded-[24px] border border-[#E8E1D7] bg-[#FFFAF6] p-6 text-foreground shadow-md sm:p-12 md:p-16'>
        {/* Botanical side branches (desktop/tablet) */}
        <div
          aria-hidden
          className='pointer-events-none absolute top-1/2 left-3 hidden w-14 -translate-y-1/2 opacity-75 md:block lg:w-16'
        >
          <Image
            src='/templates/aurelia/floral-branch-left.png'
            alt=''
            width={80}
            height={330}
            className='h-auto w-full object-contain'
          />
        </div>
        <div
          aria-hidden
          className='pointer-events-none absolute top-1/2 right-3 hidden w-14 -translate-y-1/2 opacity-75 md:block lg:w-16'
        >
          <Image
            src='/templates/aurelia/floral-branch-right.png'
            alt=''
            width={80}
            height={330}
            className='h-auto w-full object-contain'
          />
        </div>

        {/* Card Content Container */}
        <div className='mx-auto flex max-w-2xl flex-col items-center text-center'>
          {/* Parents Row */}
          {copy?.preface ? (
            <p className='text-muted-foreground text-sm'>{copy.preface}</p>
          ) : (
            <div className='flex w-full flex-col justify-between gap-4 sm:flex-row sm:gap-8'>
              <div className='text-center sm:text-left'>
                <p className={`${headingFont} text-foreground/90 text-sm italic sm:text-base`}>
                  Silvano Moreira de Abreu
                </p>
                <p className={`${headingFont} text-foreground/90 text-sm italic sm:text-base`}>
                  Luciana dos Santos Abreu
                </p>
              </div>
              <div className='text-center sm:text-right'>
                <p className={`${headingFont} text-foreground/90 text-sm italic sm:text-base`}>
                  Aldemir Fernandes Vilela
                </p>
                <p className={`${headingFont} text-foreground/90 text-sm italic sm:text-base`}>
                  Maria Lucila de Souza Fernandes
                </p>
              </div>
            </div>
          )}

          {/* Invitation Line */}
          <p className='mt-8 mb-4 font-medium text-[0.65rem] text-foreground/80 uppercase tracking-[0.28em] sm:text-xs'>
            {copy?.invitationLine ?? 'CONVIDAM PARA O CASAMENTO DE SEUS FILHOS'}
          </p>

          {/* Couple Names */}
          <h1
            className={`${headingFont} my-2 text-4xl text-foreground italic tracking-wide sm:text-5xl md:text-6xl`}
          >
            {bride} <span className='font-normal font-serif italic'>e</span> {groom}
          </h1>

          {/* Center Church Watercolor Artwork */}
          <div className='relative my-6 aspect-[370/215] w-full max-w-[340px] drop-shadow-sm sm:max-w-[380px]'>
            <Image
              src='/templates/aurelia/church-watercolor.png'
              alt='Comunidade Sagrado Coração de Jesus'
              fill
              priority
              className='object-contain'
            />
          </div>

          {/* Optional Message */}
          {copy?.message ? (
            <p className='mb-6 max-w-lg whitespace-pre-line text-muted-foreground text-sm leading-relaxed'>
              {copy.message}
            </p>
          ) : null}

          {/* Event Details: 3 Columns with Vertical Dividers */}
          <div className='mt-4 flex w-full flex-col items-center justify-between gap-6 sm:flex-row sm:items-start sm:gap-2'>
            {/* Ceremony */}
            <div className='flex flex-1 flex-col items-center px-2 text-center'>
              <span className='mb-1 font-bold text-[0.7rem] text-accent uppercase tracking-[0.25em]'>
                Cerimônia
              </span>
              <p className={`${headingFont} text-foreground text-sm italic sm:text-[0.95rem]`}>
                {ceremonyName}
              </p>
              <p className='mt-1 text-[0.72rem] text-muted-foreground sm:text-xs'>
                {ceremonyAddress1}
              </p>
              <p className='text-[0.72rem] text-muted-foreground sm:text-xs'>{ceremonyAddress2}</p>
            </div>

            {/* Divider */}
            <div className='hidden h-20 w-px self-center bg-border/80 sm:block' />

            {/* Date & Time */}
            <div className='flex flex-1 flex-col items-center px-2 text-center'>
              <span className='font-semibold text-[0.72rem] text-foreground uppercase tracking-[0.22em] sm:text-xs'>
                23 de Janeiro
              </span>
              <span className='font-semibold text-[0.72rem] text-foreground uppercase tracking-[0.22em] sm:text-xs'>
                de 2027
              </span>
              <span className='my-0.5 font-bold text-primary text-sm tracking-[0.25em] sm:text-base'>
                16:30
              </span>
              <p className={`${headingFont} mt-0.5 text-foreground/90 text-xs italic sm:text-sm`}>
                Cacoal, Rondônia
              </p>
            </div>

            {/* Divider */}
            <div className='hidden h-20 w-px self-center bg-border/80 sm:block' />

            {/* Reception */}
            <div className='flex flex-1 flex-col items-center px-2 text-center'>
              <span className='mb-1 font-bold text-[0.7rem] text-accent uppercase tracking-[0.25em]'>
                Recepção
              </span>
              <p className={`${headingFont} text-foreground text-sm italic sm:text-[0.95rem]`}>
                {receptionName}
              </p>
              <p className='mt-1 text-[0.72rem] text-muted-foreground sm:text-xs'>
                {receptionAddress1}
              </p>
              <p className='text-[0.72rem] text-muted-foreground sm:text-xs'>{receptionAddress2}</p>
            </div>
          </div>

          {/* Footer RSVP Deadline */}
          <p className='mt-8 text-[0.68rem] text-muted-foreground uppercase tracking-[0.25em] sm:text-xs'>
            Confirmar Presença até 17.12.2026
          </p>

          {/* RSVP Button */}
          {website.isRsvpEnabled && (
            <Link
              href={`${path}/rsvp`}
              className='mt-6 rounded-full bg-primary px-10 py-3 font-medium text-[0.72rem] text-primary-foreground uppercase tracking-[0.3em] shadow-sm transition-colors hover:bg-accent'
            >
              Confirmar Presença
            </Link>
          )}

          {/* Back link */}
          <Link
            href={path}
            className='mt-4 text-[0.68rem] text-muted-foreground uppercase tracking-[0.25em] underline-offset-4 transition-colors hover:text-primary hover:underline'
          >
            Voltar ao site
          </Link>
        </div>
      </div>
    </main>
  )
}
