import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, RoundedBox, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function Envelope() {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1
    }
  })

  return (
    <Float speed={2} floatIntensity={0.5}>
      <group
        ref={groupRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <RoundedBox args={[2.4, 1.6, 0.15]} radius={0.05} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#1e40af"
            emissive="#3b82f6"
            emissiveIntensity={hovered ? 0.4 : 0.15}
            metalness={0.5}
            roughness={0.3}
          />
        </RoundedBox>
        <mesh position={[0, 0.3, 0.08]} rotation={[0, 0, 0]}>
          <coneGeometry args={[1.2, 0.8, 4]} />
          <meshStandardMaterial
            color="#2563eb"
            emissive="#60a5fa"
            emissiveIntensity={0.2}
            metalness={0.4}
            roughness={0.4}
          />
        </mesh>
        <mesh position={[0, -0.1, 0.09]}>
          <planeGeometry args={[1.6, 0.6]} />
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.3} />
        </mesh>
      </group>
    </Float>
  )
}

function SignalRings() {
  const rings = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (rings.current) {
      rings.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh
        const scale = 1 + ((state.clock.elapsedTime * 0.5 + i * 0.8) % 2)
        mesh.scale.set(scale, scale, 1)
        const mat = mesh.material as THREE.MeshStandardMaterial
        mat.opacity = 0.4 * (1 - ((scale - 1) / 2))
      })
    }
  })

  return (
    <group ref={rings} position={[0, 0, -0.5]}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.8 + i * 0.3, 1.9 + i * 0.3, 64]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={0.3}
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  )
}

function FloatingDots() {
  const ref = useRef<THREE.Group>(null)
  const dotPositions: [number, number, number][] = [
    [-2.5, 1.5, 0], [2.5, 1.2, 0.3], [-2, -1.5, 0.2],
    [2.3, -1.3, -0.1], [-1, 2, -0.2], [1.5, -2, 0.1],
  ]

  useFrame((state) => {
    if (ref.current) {
      ref.current.children.forEach((child, i) => {
        child.position.y = dotPositions[i][1] + Math.sin(state.clock.elapsedTime + i) * 0.2
      })
    }
  })

  return (
    <group ref={ref}>
      {dotPositions.map((pos, i) => (
        <Sphere key={i} args={[0.06, 12, 12]} position={pos}>
          <meshStandardMaterial color="#f59e0b" emissive="#fbbf24" emissiveIntensity={0.6} />
        </Sphere>
      ))}
    </group>
  )
}

export default function ContactScene3D() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[0, 3, 4]} intensity={1.2} color="#60a5fa" />
      <pointLight position={[-3, 0, 2]} intensity={0.5} color="#22d3ee" />
      <SignalRings />
      <Envelope />
      <FloatingDots />
    </>
  )
}
