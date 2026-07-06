import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const badges = [
  '150+ Success Stories',
  '4.9 Client Rating',
  '99.9% Uptime SLA',
  'Trusted by 50+ Teams',
]

export default function RotatingBadge() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % badges.length), 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/10 shadow-sm">
      <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
      <div className="relative h-5 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="block text-sm font-medium text-charcoal whitespace-nowrap"
          >
            {badges[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}
