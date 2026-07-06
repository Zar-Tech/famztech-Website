import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Sphere, Line } from '@react-three/drei'
import * as THREE from 'three'

const nodes = [
  { position: [0, 0, 0] as [number, number, number], color: '#3b82f6', size: 0.35 },
  { position: [-1.8, 1.2, 0.5] as [number, number, number], color: '#22d3ee', size: 0.22 },
  { position: [1.8, 1.0, -0.3] as [number, number, number], color: '#f59e0b', size: 0.22 },
  { position: [-1.5, -1.3, 0.2] as [number, number, number], color: '#a78bfa', size: 0.2 },
  { position: [1.6, -1.1, 0.4] as [number, number, number], color: '#34d399', size: 0.2 },
  { position: [0, 1.8, -0.5] as [number, number, number], color: '#f472b6', size: 0.18 },
  { position: [0, -1.8, -0.2] as [number, number, number], color: '#60a5fa', size: 0.18 },
]

const connections: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  [1, 5], [2, 5], [3, 6], [4, 6], [1, 3], [2, 4],
]

function NetworkNode({
  position,
  color,
  size,
  isCenter,
}: {
  position: [number, number, number]
  color: string
  size: number
  isCenter?: boolean
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current && isCenter) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  const content = (
    <Sphere ref={ref} args={[size, 24, 24]} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={isCenter ? 0.5 : 0.3}
        metalness={0.6}
        roughness={0.3}
      />
    </Sphere>
  )

  if (isCenter) {
    return <Float speed={1.5} floatIntensity={0.3}>{content}</Float>
  }
  return content
}

function ConnectionLines() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.15
    }
  })

  return (
    <group ref={groupRef}>
      {connections.map(([a, b], i) => (
        <Line
          key={i}
          points={[nodes[a].position, nodes[b].position]}
          color="#3b82f6"
          transparent
          opacity={0.35}
          lineWidth={1}
        />
      ))}
    </group>
  )
}

export default function AboutScene3D() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 4, 5]} intensity={1} color="#60a5fa" />
      <pointLight position={[-3, -2, 4]} intensity={0.5} color="#f59e0b" />
      <ConnectionLines />
      {nodes.map((node, i) => (
        <NetworkNode key={i} {...node} isCenter={i === 0} />
      ))}
    </>
  )
}
