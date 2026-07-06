import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'scale'
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: FadeInProps) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`fade-in ${direction === 'scale' ? 'fade-in-scale' : ''} ${isInView ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
