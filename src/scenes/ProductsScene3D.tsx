import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, RoundedBox, Text } from '@react-three/drei'
import * as THREE from 'three'

const products = [
  { name: 'CloudX', color: '#3b82f6', position: [-2.2, 0.5, 0] as [number, number, number] },
  { name: 'SecureAI', color: '#22d3ee', position: [0, -0.3, 0.5] as [number, number, number] },
  { name: 'DataFlow', color: '#f59e0b', position: [2.2, 0.4, -0.3] as [number, number, number] },
]

function ProductCube({
  name,
  color,
  position,
  index,
}: {
  name: string
  color: string
  position: [number, number, number]
  index: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4 + index * 1.2
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.15
      const scale = hovered ? 1.15 : 1
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1)
    }
  })

  return (
    <Float speed={1.5 + index * 0.3} rotationIntensity={0.2} floatIntensity={0.4}>
      <group position={position}>
        <RoundedBox
          ref={meshRef}
          args={[1.2, 1.2, 1.2]}
          radius={0.08}
          smoothness={4}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered ? 0.6 : 0.25}
            metalness={0.7}
            roughness={0.2}
          />
        </RoundedBox>
        <Text
          position={[0, -0.9, 0]}
          fontSize={0.22}
          color="#e2e8f0"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      </group>
    </Float>
  )
}

function DisplayPlatform() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <mesh ref={ref} position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[2.5, 3.2, 64]} />
      <meshStandardMaterial color="#1e3a5f" emissive="#3b82f6" emissiveIntensity={0.15} transparent opacity={0.6} side={THREE.DoubleSide} />
    </mesh>
  )
}

export default function ProductsScene3D() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <spotLight position={[0, 8, 4]} intensity={1.5} angle={0.4} penumbra={0.5} color="#ffffff" />
      <pointLight position={[-4, 2, 2]} intensity={0.8} color="#3b82f6" />
      <pointLight position={[4, 2, 2]} intensity={0.8} color="#f59e0b" />
      <DisplayPlatform />
      {products.map((p, i) => (
        <ProductCube key={p.name} {...p} index={i} />
      ))}
    </>
  )
}
