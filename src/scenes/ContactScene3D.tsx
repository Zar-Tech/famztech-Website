import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Torus } from '@react-three/drei'
import * as THREE from 'three'

function PulseRing() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 2
      ref.current.rotation.z = state.clock.elapsedTime * 0.2
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.05
      ref.current.scale.set(scale, scale, 1)
    }
  })

  return (
    <Float speed={1} floatIntensity={0.2}>
      <Torus ref={ref} args={[1.2, 0.04, 32, 100]}>
        <meshStandardMaterial
          color="#ff5722"
          emissive="#ff5722"
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.6}
        />
      </Torus>
    </Float>
  )
}

function InnerRing() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 2.5
      ref.current.rotation.z = -state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Torus ref={ref} args={[0.7, 0.025, 32, 100]}>
      <meshStandardMaterial
        color="#ff9800"
        emissive="#ff9800"
        emissiveIntensity={0.3}
        roughness={0.3}
        metalness={0.5}
      />
    </Torus>
  )
}

export default function ContactScene3D() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 4, 5]} intensity={1} />
      <pointLight position={[0, 0, 3]} intensity={0.5} color="#ff5722" />
      <PulseRing />
      <InnerRing />
    </>
  )
}
