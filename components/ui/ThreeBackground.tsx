"use client";

import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";

/* ─── Constants ──────────────────────────────────────── */
const PARTICLE_COUNT = 220;
const SPREAD = 12;
const CONNECTION_DISTANCE = 2.2;
const COLORS = {
  cyan: new THREE.Color("#00f0ff"),
  purple: new THREE.Color("#7b2fff"),
  pink: new THREE.Color("#ff2d78"),
};
const COLOR_ARRAY = [COLORS.cyan, COLORS.purple, COLORS.pink];

/* ─── Floating Particles ─────────────────────────────── */
function FloatingParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);

  // Pre-compute random offsets for each particle
  const particleData = useMemo(() => {
    const data = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      data.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * SPREAD,
          (Math.random() - 0.5) * SPREAD,
          (Math.random() - 0.5) * SPREAD * 0.6
        ),
        speed: 0.2 + Math.random() * 0.5,
        offset: Math.random() * Math.PI * 2,
        axis: new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize(),
        color: COLOR_ARRAY[Math.floor(Math.random() * COLOR_ARRAY.length)],
        scale: 0.015 + Math.random() * 0.025,
      });
    }
    return data;
  }, []);

  // Scratch objects for animation
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const tempColor = useMemo(() => new THREE.Color(), []);

  // Set initial instance colors
  useMemo(() => {
    // Colors are set in the first frame via useFrame
  }, []);

  // Pre-allocate line geometry buffer (max connections)
  const maxLines = 600;
  const linePositions = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
  const lineColors = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
  const lineGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    geom.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));
    geom.setDrawRange(0, 0);
    return geom;
  }, [linePositions, lineColors]);

  const timeRef = useRef(0);

  useFrame((state, delta) => {
    timeRef.current += delta;
    const t = timeRef.current;
    const mesh = meshRef.current;
    if (!mesh) return;

    const positions: THREE.Vector3[] = [];

    // Update each particle instance
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = particleData[i];
      const phase = t * p.speed + p.offset;

      dummy.position.set(
        p.position.x + Math.sin(phase) * 0.4 * p.axis.x,
        p.position.y + Math.cos(phase * 0.7) * 0.4 * p.axis.y,
        p.position.z + Math.sin(phase * 0.5) * 0.3 * p.axis.z
      );
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);

      // Set color
      mesh.setColorAt(i, p.color);

      positions.push(dummy.position.clone());
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;

    // Draw connection lines between close particles
    let lineIndex = 0;
    for (let i = 0; i < positions.length && lineIndex < maxLines; i++) {
      for (let j = i + 1; j < positions.length && lineIndex < maxLines; j++) {
        const dist = positions[i].distanceTo(positions[j]);
        if (dist < CONNECTION_DISTANCE) {
          const alpha = 1 - dist / CONNECTION_DISTANCE;
          const idx = lineIndex * 6;

          linePositions[idx] = positions[i].x;
          linePositions[idx + 1] = positions[i].y;
          linePositions[idx + 2] = positions[i].z;
          linePositions[idx + 3] = positions[j].x;
          linePositions[idx + 4] = positions[j].y;
          linePositions[idx + 5] = positions[j].z;

          // Blend colors based on distance
          tempColor.copy(COLORS.cyan).multiplyScalar(alpha * 0.4);
          lineColors[idx] = tempColor.r;
          lineColors[idx + 1] = tempColor.g;
          lineColors[idx + 2] = tempColor.b;
          lineColors[idx + 3] = tempColor.r;
          lineColors[idx + 4] = tempColor.g;
          lineColors[idx + 5] = tempColor.b;

          lineIndex++;
        }
      }
    }

    lineGeometry.setDrawRange(0, lineIndex * 2);
    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.color.needsUpdate = true;
  });

  return (
    <>
      <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial transparent opacity={0.85} />
      </instancedMesh>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial vertexColors transparent opacity={0.35} />
      </lineSegments>
    </>
  );
}

/* ─── Wireframe Geometry (center anchor) ─────────────── */
function WireframeAnchor() {
  const meshRef = useRef<THREE.Mesh>(null!);

  const timeRef = useRef(0);

  useFrame((state, delta) => {
    timeRef.current += delta;
    const t = timeRef.current;
    const mesh = meshRef.current;
    if (!mesh) return;
    mesh.rotation.x = t * 0.08;
    mesh.rotation.y = t * 0.12;
    mesh.rotation.z = t * 0.05;
    // Gentle breathing scale
    const scale = 1 + Math.sin(t * 0.5) * 0.05;
    mesh.scale.setScalar(scale);
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.8, 1]} />
      <meshBasicMaterial
        color="#00f0ff"
        wireframe
        transparent
        opacity={0.08}
      />
    </mesh>
  );
}

/* ─── Secondary ring geometry ────────────────────────── */
function FloatingRing() {
  const meshRef = useRef<THREE.Mesh>(null!);

  const timeRef = useRef(0);

  useFrame((state, delta) => {
    timeRef.current += delta;
    const t = timeRef.current;
    const mesh = meshRef.current;
    if (!mesh) return;
    mesh.rotation.x = Math.PI / 2 + Math.sin(t * 0.3) * 0.1;
    mesh.rotation.z = t * 0.06;
    const scale = 1 + Math.sin(t * 0.4 + 1) * 0.03;
    mesh.scale.setScalar(scale);
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[2.8, 0.01, 16, 100]} />
      <meshBasicMaterial color="#7b2fff" transparent opacity={0.15} />
    </mesh>
  );
}

/* ─── Mouse Parallax Camera ──────────────────────────── */
function MouseParallax() {
  const { camera } = useThree();
  const target = useMemo(() => new THREE.Vector3(0, 0, 8), []);

  useFrame((state) => {
    const pointer = state.pointer;
    // Smooth camera movement based on mouse position
    target.x = pointer.x * 1.2;
    target.y = pointer.y * 0.8;
    camera.position.x += (target.x - camera.position.x) * 0.02;
    camera.position.y += (target.y - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ─── Main Component ────────────────────────────────── */
export default function ThreeBackground() {
  const handleCreated = useCallback((state: { gl: THREE.WebGLRenderer }) => {
    state.gl.setClearColor(new THREE.Color("#050510"), 0);
  }, []);

  return (
    <div
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        onCreated={handleCreated}
        style={{ pointerEvents: "auto" }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <FloatingParticles />
        <WireframeAnchor />
        <FloatingRing />
        <MouseParallax />
        <AdaptiveDpr pixelated />
      </Canvas>
    </div>
  );
}
