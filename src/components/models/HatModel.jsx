"use client";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
export default function HatModel(props) {
  const groupRef = useRef();
  useFrame(() => {
    groupRef.current.rotation.y += 0.004;
  });
  const { nodes, materials } = useGLTF("/models/hat-transformed.glb");
  return (
    <group {...props} dispose={null} ref={groupRef} rotation={[0.4,-1,0]} position={[0,0,0]} scale={[1.8, 1.8, 1.8]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.initialShadingGroup}
        position={[0, -3.867, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/hat-transformed.glb");
