import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  Icosahedron,
  MeshDistortMaterial,
  Sparkles,
  Torus,
} from '@react-three/drei'
import { type Group, MathUtils } from 'three'
import WebGLBoundary from '../components/WebGLBoundary'

const GOLD = '#d9b26a'
const TEAL = '#58c7b8'
const VIOLET = '#8b7bff'

function Shard({
  position,
  scale,
  color,
}: {
  position: [number, number, number]
  scale: number
  color: string
}) {
  return (
    <Float speed={2} rotationIntensity={2.5} floatIntensity={2.5}>
      <Icosahedron args={[scale, 0]} position={position}>
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.2}
          flatShading
        />
      </Icosahedron>
    </Float>
  )
}

function Centerpiece() {
  const parallax = useRef<Group>(null)
  const spin = useRef<Group>(null)

  useFrame((state, delta) => {
    if (spin.current) {
      spin.current.rotation.y += delta * 0.2
      spin.current.rotation.z += delta * 0.05
    }
    if (parallax.current) {
      parallax.current.rotation.y = MathUtils.lerp(
        parallax.current.rotation.y,
        state.pointer.x * 0.4,
        0.04,
      )
      parallax.current.rotation.x = MathUtils.lerp(
        parallax.current.rotation.x,
        -state.pointer.y * 0.3,
        0.04,
      )
    }
  })

  return (
    <group ref={parallax}>
      <group ref={spin}>
        <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
          <Icosahedron args={[1.7, 64]}>
            <MeshDistortMaterial
              color={GOLD}
              distort={0.35}
              speed={1.4}
              roughness={0.08}
              metalness={0.85}
            />
          </Icosahedron>
        </Float>
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1.2}>
          <Torus args={[2.9, 0.02, 16, 160]} rotation={[1.2, 0.3, 0]}>
            <meshStandardMaterial
              color={TEAL}
              emissive={TEAL}
              emissiveIntensity={0.4}
              metalness={0.7}
              roughness={0.2}
            />
          </Torus>
        </Float>
        <Shard position={[2.6, 1.4, -1]} scale={0.35} color={TEAL} />
        <Shard position={[-2.7, -1.1, -0.5]} scale={0.45} color={VIOLET} />
        <Shard position={[2.2, -1.6, 0.5]} scale={0.28} color={GOLD} />
      </group>
      <Sparkles count={80} scale={[9, 6, 6]} size={2.2} speed={0.35} color={GOLD} />
    </group>
  )
}

function PremiumScene() {
  return (
    <div className="px-canvas" aria-hidden="true">
      <WebGLBoundary fallback={<div className="px-canvas-fallback" />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={2} color="#fff4e0" />
          <pointLight position={[-6, -2, 2]} intensity={40} color={TEAL} />
          <pointLight position={[4, -4, -3]} intensity={30} color={VIOLET} />
          <Suspense fallback={null}>
            <Centerpiece />
          </Suspense>
        </Canvas>
      </WebGLBoundary>
    </div>
  )
}

export default PremiumScene
