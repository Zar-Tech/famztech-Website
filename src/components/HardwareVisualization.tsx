const VIDEO_SRC = '/media/tech-hardware-viz.mp4'
const POSTER_SRC = '/media/tech-hardware-viz-poster.png'

export default function HardwareVisualization() {
  return (
    <div className="hw-viz">
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
    </div>
  )
}
