import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

function DeviceMockup({
  position,
  rotation,
  size,
  screenColor,
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  size: [number, number, number]
  screenColor: string
}) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6 + position[0]) * 0.06
    }
  })

  const [w, h, d] = size
  const screenW = w * 0.88
  const screenH = h * 0.82

  return (
    <Float speed={1.2} floatIntensity={0.3}>
      <group ref={groupRef} position={position} rotation={rotation}>
        <RoundedBox args={[w, h, d]} radius={0.04} smoothness={4}>
          <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
        </RoundedBox>
        <mesh position={[0, 0, d / 2 + 0.01]}>
          <planeGeometry args={[screenW, screenH]} />
          <meshStandardMaterial color={screenColor} emissive={screenColor} emissiveIntensity={0.2} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  )
}

export default function ProductsScene3D() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 6]} intensity={1.4} />
      <pointLight position={[-4, 3, 5]} intensity={0.5} color="#ff5722" />
      <DeviceMockup
        position={[-1.6, 0.2, 0]}
        rotation={[0, 0.4, 0.1]}
        size={[0.7, 1.3, 0.06]}
        screenColor="#ff5722"
      />
      <DeviceMockup
        position={[0.3, -0.1, 0.3]}
        rotation={[0, -0.2, -0.05]}
        size={[1.6, 1.0, 0.05]}
        screenColor="#1a1a1a"
      />
      <DeviceMockup
        position={[1.8, 0.3, -0.2]}
        rotation={[0, -0.5, 0.08]}
        size={[0.65, 1.2, 0.06]}
        screenColor="#ff9800"
      />
    </>
  )
}
