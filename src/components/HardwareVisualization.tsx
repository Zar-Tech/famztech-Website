const VIDEO_SRC = '/media/tech-hardware-viz.mp4'
const POSTER_SRC = '/media/tech-hardware-viz-poster.png'

export default function HardwareVisualization() {
  return (
    <div className="hw-viz">
      <div className="hw-viz-frame">
        <video
          className="hw-viz-video"
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Tech hardware animated visualization"
        />
        <div className="hw-viz-tint" aria-hidden="true" />
      </div>
    </div>
  )
}
