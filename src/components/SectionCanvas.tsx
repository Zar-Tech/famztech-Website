import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'

interface SectionCanvasProps {
  children: React.ReactNode
  cameraPosition?: [number, number, number]
  fov?: number
}

export default function SectionCanvas({
  children,
  cameraPosition = [0, 0, 6],
  fov = 45,
}: SectionCanvasProps) {
  return (
    <div className="section-canvas">
      <Canvas
        camera={{ position: cameraPosition, fov }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
      <Loader
        containerStyles={{ display: 'none' }}
        innerStyles={{ display: 'none' }}
        barStyles={{ display: 'none' }}
        dataStyles={{ display: 'none' }}
      />
    </div>
  )
}
