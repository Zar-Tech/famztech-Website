const lines = [
  { width: '72%', color: 'var(--color-orange)', delay: '0s' },
  { width: '55%', color: '#ffffff', delay: '0.4s' },
  { width: '88%', color: 'rgba(255,255,255,0.45)', delay: '0.8s' },
  { width: '48%', color: 'var(--color-orange)', delay: '1.2s' },
  { width: '65%', color: '#ffffff', delay: '1.6s' },
  { width: '38%', color: 'rgba(255,255,255,0.35)', delay: '2s' },
]

interface AnimatedCodeEditorProps {
  compact?: boolean
  showChart?: boolean
}

export default function AnimatedCodeEditor({ compact = false, showChart = true }: AnimatedCodeEditorProps) {
  return (
    <div className={`code-editor ${compact ? 'code-editor-compact' : ''}`}>
      <div className="code-editor-header">
        <LoadingDots />
        <span className="code-editor-title">platform.ts</span>
      </div>
      <div className="code-editor-body">
        {lines.map((line, i) => (
          <div key={i} className="code-line-row">
            <span className="code-line-num">{i + 1}</span>
            <div
              className="code-line"
              style={{
                ['--line-width' as string]: line.width,
                ['--line-color' as string]: line.color,
                animationDelay: line.delay,
              }}
            />
          </div>
        ))}
        <div className="code-cursor-row">
          <span className="code-line-num">{lines.length + 1}</span>
          <span className="code-cursor" />
        </div>
        {showChart && (
          <div className="code-editor-chart">
            <DonutChart />
          </div>
        )}
      </div>
    </div>
  )
}

function LoadingDots() {
  return (
    <div className="loading-dots">
      <span /><span /><span />
    </div>
  )
}

function DonutChart() {
  return (
    <svg className="donut-chart" viewBox="0 0 80 80">
      <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
      <circle
        className="donut-segment donut-segment-1"
        cx="40" cy="40" r="30"
        fill="none"
        stroke="var(--color-orange)"
        strokeWidth="8"
        strokeDasharray="60 188"
        strokeLinecap="round"
      />
      <circle
        className="donut-segment donut-segment-2"
        cx="40" cy="40" r="30"
        fill="none"
        stroke="var(--color-amber)"
        strokeWidth="8"
        strokeDasharray="40 188"
        strokeDashoffset="-65"
        strokeLinecap="round"
      />
    </svg>
  )
}
