import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Stars() {
    const coordinates = []
    for(let i = 0; i < 2000; i++){
      coordinates[i] = [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20]
    }
    return (
      coordinates.map((coordinate, index) => (
        <Sphere key={index} position={coordinate} />
      ))
    )
  }
  
  function Sphere(props) {
    const mesh = useRef();
  
    useFrame(() => {
      mesh.current.rotation.x += 0.01;
      mesh.current.position.x += (Math.random() -0.5) * .001;
      mesh.current.position.y += (Math.random() -0.5) * .001;
    });
  
    return (
      <mesh ref={mesh} {...props}>
        <sphereGeometry args={[0.006, 16, 16]} />
        <meshPhongMaterial color="#ffd" />
      </mesh>
    );
  }

  /*
function Stars() {
    let group = useRef()
    let theta = 0
    useFrame(() => {
      // Some things maybe shouldn't be declarative, we're in the render-loop here with full access to the instance
      const r = 5 * Math.sin(THREE.Math.degToRad((theta += 0.1)))
      const s = Math.cos(THREE.Math.degToRad(theta * 2))
      group.current.rotation.set(r, r, r)
      group.current.scale.set(s, s, s)
    })
    const [geo, mat, vertices, coords] = useMemo(() => {
      const geo = new THREE.SphereBufferGeometry(1, 10, 10)
      const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color('lightblue') })
      const coords = new Array(2000).fill().map(i => [Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400])
      return [geo, mat, vertices, coords]
    }, [])
    return (
      <group ref={group}>
        {coords.map(([p1, p2, p3], i) => (
          <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
        ))}
      </group>
    )
  }
  */