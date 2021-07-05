import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Stars from "./Stars";

export default function ThreejsBacgkround() {
  const textOn = false;
  return (
    <div className="fixed w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls />
          <directionalLight />
          <ambientLight intensity={1} />
          {textOn && <Text />}
          <Stars />
          <BigSphere />
          <GroundPlane />
        </Suspense>
      </Canvas>
    </div>
  );
}

function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -500, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

function BigSphere(props) {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.position.z += 0.02;
  });

  return (
    <mesh ref={mesh} position={[0, 0, -100]} {...props}>
      <dodecahedronGeometry />
      <meshPhongMaterial color='#eef' />
    </mesh>
  );
}

function Text(props) {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.position.x += 0.0001;
  });

  return (
    <mesh ref={mesh} {...props}>
      <dodecahedronGeometry />
      <meshPhongMaterial color="#eea" />
    </mesh>
  );
}