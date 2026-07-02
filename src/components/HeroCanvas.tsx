import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Icosahedron, MeshDistortMaterial, Torus } from '@react-three/drei'
import type { Group } from 'three'
import WebGLBoundary from './WebGLBoundary'

function Blob() {
  const group = useRef<Group>(null)

  useFrame((_, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.25
    group.current.rotation.x += delta * 0.08
  })

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={1.1} floatIntensity={1.4}>
        <Icosahedron args={[1.35, 16]}>
          <MeshDistortMaterial
            color="#ff6a45"
            distort={0.42}
            speed={1.8}
            roughness={0.12}
            metalness={0.55}
          />
        </Icosahedron>
      </Float>
      <Float speed={2.2} rotationIntensity={2} floatIntensity={2}>
        <Torus args={[2.4, 0.06, 16, 120]} position={[0, 0, -1]} rotation={[1.1, 0.4, 0]}>
          <meshStandardMaterial
            color="#2dd4bf"
            emissive="#0b3b34"
            metalness={0.6}
            roughness={0.25}
          />
        </Torus>
      </Float>
    </group>
  )
}

function HeroCanvas() {
  return (
    <div className="hero-canvas" aria-hidden="true">
      <WebGLBoundary fallback={<div className="hero-canvas-fallback" />}>
        <Canvas
          camera={{ position: [0, 0, 4.6], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.55} />
          <directionalLight position={[4, 4, 4]} intensity={1.6} color="#ffd9c2" />
          <pointLight position={[-5, -3, -1]} intensity={22} color="#2dd4bf" />
          <Suspense fallback={null}>
            <Blob />
          </Suspense>
        </Canvas>
      </WebGLBoundary>
    </div>
  )
}

export default HeroCanvas
