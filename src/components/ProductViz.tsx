interface ProductVizProps {
  type: 'code' | 'bars' | 'grid'
}

export default function ProductViz({ type }: ProductVizProps) {
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
