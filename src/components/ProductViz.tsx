const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']

interface ProductVizProps {
  type: 'code' | 'bars' | 'grid' | 'mobile'
}

export default function ProductViz({ type }: ProductVizProps) {
  if (type === 'mobile') {
    return (
      <div className="product-viz-inner product-viz-mobile">
        <div className="viz-mobile-frame">
          <div className="viz-mobile-notch" />
          <div className="viz-mobile-screen">
            <p className="viz-mobile-title">Sabr</p>
            <p className="viz-mobile-sub">Today&apos;s prayers</p>
            <ul className="viz-prayer-list">
              {prayers.map((prayer, i) => (
                <li key={prayer} className={i < 3 ? 'viz-prayer-done' : ''}>
                  <span className="viz-prayer-check" />
                  <span>{prayer}</span>
                </li>
              ))}
            </ul>
            <div className="viz-mobile-streak">
              <span className="viz-streak-num">12</span>
              <span className="viz-streak-label">day streak</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'code') {
    return (
      <div className="product-viz-inner product-viz-code">
        <div className="viz-code-lines">
          {[72, 55, 88, 48, 65].map((w, i) => (
            <div key={i} className="viz-code-line" style={{ width: `${w}%`, animationDelay: `${i * 0.3}s` }} />
          ))}
        </div>
        <div className="viz-code-cursor" />
      </div>
    )
  }

  if (type === 'bars') {
    return (
      <div className="product-viz-inner product-viz-bars">
        {[85, 65, 92, 58, 78].map((h, i) => (
          <div key={i} className="viz-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>
    )
  }

  return (
    <div className="product-viz-inner product-viz-grid">
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="viz-grid-cell" style={{ animationDelay: `${i * 0.08}s` }} />
      ))}
    </div>
  )
}
