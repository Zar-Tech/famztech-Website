import { useRef, type ReactNode, type PointerEvent } from 'react'

type Props = {
  className?: string
  children: ReactNode
}

const MAX_TILT = 8

/** A card that tilts in 3D toward the pointer for an interactive feel. */
function TiltCard({ className = '', children }: Props) {
  const ref = useRef<HTMLLIElement>(null)

  function handleMove(event: PointerEvent<HTMLLIElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height
    const ry = (px - 0.5) * 2 * MAX_TILT
    const rx = (0.5 - py) * 2 * MAX_TILT
    el.style.setProperty('--rx', `${rx.toFixed(2)}deg`)
    el.style.setProperty('--ry', `${ry.toFixed(2)}deg`)
    el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
    el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
  }

  function reset() {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <li
      ref={ref}
      className={`card tilt ${className}`.trim()}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      <div className="tilt-inner">{children}</div>
    </li>
  )
}

export default TiltCard
