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
import type { Theme } from '../themes'
import WebGLBoundary from './WebGLBoundary'

type Props = {
  scene: Theme['scene']
}

function Blob({ scene }: Props) {
  const parallax = useRef<Group>(null)
  const spin = useRef<Group>(null)

  useFrame((state, delta) => {
    if (spin.current) {
      spin.current.rotation.y += delta * 0.25
      spin.current.rotation.x += delta * 0.08
    }
    if (parallax.current) {
      // Ease the whole group toward the pointer for a subtle parallax.
      parallax.current.rotation.y = MathUtils.lerp(
        parallax.current.rotation.y,
        state.pointer.x * 0.35,
        0.05,
      )
      parallax.current.rotation.x = MathUtils.lerp(
        parallax.current.rotation.x,
        -state.pointer.y * 0.28,
        0.05,
      )
    }
  })

  return (
    <group ref={parallax}>
      <group ref={spin}>
        <Float speed={1.6} rotationIntensity={1.1} floatIntensity={1.4}>
          <Icosahedron args={[1.35, 16]}>
            <MeshDistortMaterial
              color={scene.blob}
              distort={0.42}
              speed={1.8}
              roughness={0.12}
              metalness={0.55}
            />
          </Icosahedron>
        </Float>
        <Float speed={2.2} rotationIntensity={2} floatIntensity={2}>
          <Torus
            args={[2.4, 0.06, 16, 120]}
            position={[0, 0, -1]}
            rotation={[1.1, 0.4, 0]}
          >
            <meshStandardMaterial
              color={scene.ring}
              emissive={scene.emissive}
              metalness={0.6}
              roughness={0.25}
            />
          </Torus>
        </Float>
      </group>
      <Sparkles
        count={44}
        scale={[6, 6, 6]}
        size={2.4}
        speed={0.4}
        opacity={0.7}
        color={scene.ring}
      />
    </group>
  )
}

function HeroCanvas({ scene }: Props) {
  return (
    <div className="hero-canvas" aria-hidden="true">
      <WebGLBoundary fallback={<div className="hero-canvas-fallback" />}>
        <Canvas
          camera={{ position: [0, 0, 4.6], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.55} />
          <directionalLight
            position={[4, 4, 4]}
            intensity={1.6}
            color={scene.keyLight}
          />
          <pointLight position={[-5, -3, -1]} intensity={22} color={scene.fillLight} />
          <Suspense fallback={null}>
            <Blob scene={scene} />
          </Suspense>
        </Canvas>
      </WebGLBoundary>
    </div>
  )
}

export default HeroCanvas
