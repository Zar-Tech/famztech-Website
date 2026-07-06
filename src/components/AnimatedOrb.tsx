export default function AnimatedOrb() {
  return (
    <div className="orb-stage" aria-hidden="true">
      <div className="orb-particles">
        {Array.from({ length: 24 }, (_, i) => (
          <span
            key={i}
            className="orb-particle"
            style={{
              ['--x' as string]: `${10 + Math.random() * 80}%`,
              ['--y' as string]: `${10 + Math.random() * 80}%`,
              ['--d' as string]: `${2 + Math.random() * 3}s`,
              ['--delay' as string]: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="orb-float">
        <div className="orb-glow orb-glow-outer" />
        <div className="orb-glow orb-glow-mid" />
        <div className="orb-ring orb-ring-1" />
        <div className="orb-ring orb-ring-2" />
        <div className="orb-core" />
        <div className="orb-highlight" />
      </div>
    </div>
  )
}
