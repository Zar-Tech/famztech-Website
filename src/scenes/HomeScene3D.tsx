import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function GlowOrb() {
  const outerRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (outerRef.current) {
      outerRef.current.rotation.y = state.clock.elapsedTime * 0.08
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <group>
        <Sphere ref={outerRef} args={[1.6, 64, 64]}>
          <meshStandardMaterial
            color="#ff5722"
            transparent
            opacity={0.08}
            roughness={1}
            metalness={0}
          />
        </Sphere>
        <Sphere args={[1.1, 64, 64]}>
          <MeshDistortMaterial
            color="#ff6b35"
            emissive="#ff5722"
            emissiveIntensity={0.15}
            distort={0.2}
            speed={1.5}
            roughness={0.15}
            metalness={0.6}
          />
        </Sphere>
        <Sphere args={[0.55, 32, 32]}>
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ff9800"
            emissiveIntensity={0.3}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </group>
    </Float>
  )
}

export default function HomeScene3D() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-3, 2, 4]} intensity={0.6} color="#ff9800" />
      <GlowOrb />
    </>
  )
}
