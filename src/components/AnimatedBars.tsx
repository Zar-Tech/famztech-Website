interface AnimatedBarsProps {
  animate?: boolean
}

const bars = [
  { segments: ['#ff5722', '#ff9800', '#ffffff', 'rgba(255,255,255,0.3)'], width: '95%' },
  { segments: ['#ff9800', '#ff5722', 'rgba(255,255,255,0.4)'], width: '78%' },
  { segments: ['#ffffff', '#ff5722', '#ff9800', 'rgba(255,255,255,0.25)', '#ff5722'], width: '88%' },
  { segments: ['#ff5722', 'rgba(255,255,255,0.35)', '#ff9800'], width: '62%' },
  { segments: ['#ff9800', '#ffffff', '#ff5722'], width: '72%' },
]

export default function AnimatedBars({ animate = true }: AnimatedBarsProps) {
  return (
    <div className="animated-bars">
      {bars.map((bar, i) => (
        <div
          key={i}
          className={`bar-row ${animate ? 'bar-row-animate' : ''}`}
          style={{ ['--bar-delay' as string]: `${i * 0.15}s`, width: bar.width }}
        >
          {bar.segments.map((color, j) => (
            <div
              key={j}
              className="bar-segment"
              style={{
                background: color,
                ['--seg-delay' as string]: `${i * 0.15 + j * 0.08}s`,
              }}
            />
          ))}
          <span className="code-cursor code-cursor-inline" />
        </div>
      ))}
    </div>
  )
}
