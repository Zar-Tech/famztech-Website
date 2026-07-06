import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

interface SectionCanvasProps {
  children: React.ReactNode
  cameraPosition?: [number, number, number]
  fov?: number
  className?: string
}

export default function SectionCanvas({
  children,
  cameraPosition = [0, 0, 5],
  fov = 45,
  className = '',
}: SectionCanvasProps) {
  return (
    <div className={`section-canvas ${className}`}>
      <Canvas
        camera={{ position: cameraPosition, fov }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  )
}
