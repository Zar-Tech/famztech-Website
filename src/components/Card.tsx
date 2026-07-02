import type { ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
}

/** A surface card. The inner wrapper is the target of the reveal animation. */
function Card({ className = '', children }: Props) {
  return (
    <li className={`card ${className}`.trim()}>
      <div className="card-inner">{children}</div>
    </li>
  )
}

export default Card
