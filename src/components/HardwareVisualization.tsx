export default function HardwareVisualization() {
  return (
    <div className="hw-viz" aria-hidden="true">
      <div className="hw-scene">
        <div className="hw-orbit hw-orbit-1">
          <div className="hw-panel hw-panel-data">
            <span className="hw-panel-line" />
            <span className="hw-panel-line short" />
            <span className="hw-panel-line" />
          </div>
        </div>

        <div className="hw-orbit hw-orbit-2">
          <div className="hw-panel hw-panel-glass" />
        </div>

        <div className="hw-orbit hw-orbit-3">
          <div className="hw-node">
            <span className="hw-gear" />
          </div>
        </div>

        <div className="hw-orbit hw-orbit-4">
          <div className="hw-panel hw-panel-dark">
            <span className="hw-panel-line light" />
            <span className="hw-panel-line light short" />
          </div>
        </div>

        <svg className="hw-lines" viewBox="0 0 400 400">
          <line className="hw-line hw-line-1" x1="200" y1="200" x2="80" y2="120" />
          <line className="hw-line hw-line-2" x1="200" y1="200" x2="320" y2="100" />
          <line className="hw-line hw-line-3" x1="200" y1="200" x2="340" y2="260" />
          <line className="hw-line hw-line-4" x1="200" y1="200" x2="90" y2="280" />
          <circle className="hw-flow hw-flow-1" r="3" cx="0" cy="0">
            <animateMotion dur="3s" repeatCount="indefinite" path="M200,200 L80,120" />
          </circle>
          <circle className="hw-flow hw-flow-2" r="3" cx="0" cy="0">
            <animateMotion dur="3.5s" repeatCount="indefinite" path="M200,200 L320,100" />
          </circle>
        </svg>

        <div className="hw-core">
          <div className="hw-core-body">
            <div className="hw-core-slot" />
            <div className="hw-core-slot" />
          </div>
          <div className="hw-pyramid">
            <div className="hw-pyramid-face f1" />
            <div className="hw-pyramid-face f2" />
            <div className="hw-pyramid-face f3" />
            <div className="hw-pyramid-face f4" />
          </div>
          <div className="hw-core-glow" />
        </div>

        <div className="hw-base-shadow" />
      </div>
    </div>
  )
}
