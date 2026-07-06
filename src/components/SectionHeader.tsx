import type { ReactNode } from 'react'

interface SectionHeaderProps {
  label: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export default function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  dark = false,
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <header className={`section-header ${alignClass} ${className}`}>
      <p className={`section-label ${dark ? 'section-label-dark' : ''}`}>{label}</p>
      <h2 className={`heading-lg ${dark ? 'text-white' : 'text-black'} text-balance`}>{title}</h2>
      {description && (
        <p className={`body-lg mt-5 max-w-prose ${align === 'center' ? 'mx-auto' : ''} ${dark ? 'text-white/55' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </header>
  )
}
