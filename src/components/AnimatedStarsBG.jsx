import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function RotatingStars({ count = 2200, radius = 200, innerColor = "#fff", outerColor = "#61dafb" }) {
  const positions = useRef([]);
  const colors = useRef([]);

  if (positions.current.length === 0) {
    for (let i = 0; i < count; i++) {
      const r = Math.pow(Math.random(), 0.5) * radius;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions.current.push([x, y, z]);
      const color = r < radius * 0.3 ? innerColor : outerColor;
      colors.current.push(color);
    }
  }

  const group = useRef();

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.04;
      group.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.25) * 0.05;
    }
  });

  return (
    <group ref={group}>
      {positions.current.map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[Math.random() * 0.15 + 0.04, 6, 6]} />
          <meshBasicMaterial color={colors.current[i]} />
        </mesh>
      ))}
    </group>
  );
}

export default function AnimatedStarsBG() {
  return (
    <Canvas
      camera={{ position: [0, 0, 120], fov: 66 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: '#151d25',
      }}
    >
      <color attach="background" args={['#151d25']} />
      <RotatingStars />
    </Canvas>
  );
}


