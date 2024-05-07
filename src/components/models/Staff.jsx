"use client";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
export default function Staff(props) {
  const groupRef = useRef();
  useFrame(() => {
    groupRef.current.rotation.y += 0.007;
  });

  const { nodes, materials } = useGLTF("/models/staff-transformed.glb");

  return (
    <group
      {...props}
      dispose={null}
      ref={groupRef}
      scale={[3, 3, 3]}
      position={[0, -2, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wizard_Staff3_Wizard_Staff3_0.geometry}
        material={materials.Wizard_Staff3}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wizard_Staff3_Wizard_Staff3_0_1.geometry}
        material={materials.Wizard_Staff3}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wizard_Staff3_Wizard_Staff3_0_2.geometry}
        material={materials.Wizard_Staff3}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wizard_Staff3_Wizard_Staff3_0_3.geometry}
        material={materials.Wizard_Staff3}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wizard_Staff2_Wizard_Staff2_0.geometry}
        material={materials.Wizard_Staff2}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
    </group>
  );
}

useGLTF.preload("/models/staff-transformed.glb");
