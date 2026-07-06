import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Sphere } from '@react-three/drei'
import * as THREE from 'three'

const orbs = [
  { pos: [0, 0, 0] as [number, number, number], size: 0.5, color: '#ff5722' },
  { pos: [-1.4, 0.8, 0.3] as [number, number, number], size: 0.28, color: '#ff6b35' },
  { pos: [1.3, 0.6, -0.2] as [number, number, number], size: 0.32, color: '#ff9800' },
  { pos: [-1.1, -0.9, 0.1] as [number, number, number], size: 0.22, color: '#e64a19' },
  { pos: [1.2, -0.7, 0.4] as [number, number, number], size: 0.25, color: '#ff6b35' },
  { pos: [0.2, 1.3, -0.3] as [number, number, number], size: 0.18, color: '#ff9800' },
  { pos: [-0.3, -1.2, 0.2] as [number, number, number], size: 0.2, color: '#ff5722' },
]

function FloatingOrb({
  position,
  size,
  color,
  delay,
}: {
  position: [number, number, number]
  size: number
  color: string
  delay: number
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + delay) * 0.12
    }
  })

  return (
    <Float speed={1 + delay * 0.2} floatIntensity={0.25}>
      <Sphere ref={ref} args={[size, 32, 32]} position={position}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.25}
          roughness={0.2}
          metalness={0.5}
        />
      </Sphere>
    </Float>
  )
}

export default function AboutScene3D() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.12
    }
  })

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 4, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-3, -2, 4]} intensity={0.4} color="#ff5722" />
      <group ref={groupRef}>
        {orbs.map((orb, i) => (
          <FloatingOrb key={i} position={orb.pos} size={orb.size} color={orb.color} delay={i} />
        ))}
      </group>
    </>
  )
}
