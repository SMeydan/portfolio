import { useEffect, useRef } from 'react';

export default function AboutThreeJS() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Load Three.js dynamically
    const script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/threejs/r125/three.min.js';
    script.onload = () => {
      initThreeJS(container);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initThreeJS = (container: HTMLDivElement) => {
    // @ts-ignore - THREE is loaded from CDN
    const THREE = window.THREE;
    if (!THREE) return;

    const devicePixelRatio = window.devicePixelRatio || 1;
    const scene = new THREE.Scene();
    const containerWidth = container.clientWidth || window.innerWidth;
    const containerHeight = container.clientHeight || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(containerWidth, containerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // AI & System Design Theme: A "Brain" or "Neural Network" of interconnected spheres
    const group = new THREE.Group();
    scene.add(group);

    const particleCount = 40;
    const connections = new THREE.Group();
    group.add(connections);

    const spheres: any[] = [];
    const sphereGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const sphereMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x4f46e5, 
        emissive: 0x4f46e5, 
        emissiveIntensity: 0.5,
        shininess: 100 
    });

    for (let i = 0; i < particleCount; i++) {
        const mesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
        mesh.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        );
        mesh.velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 0.01,
            (Math.random() - 0.5) * 0.01,
            (Math.random() - 0.5) * 0.01
        );
        spheres.push(mesh);
        group.add(mesh);
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x818cf8, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const blueLight = new THREE.PointLight(0x3b82f6, 2);
    blueLight.position.set(-5, -5, 2);
    scene.add(blueLight);

    camera.position.z = 8;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        group.rotation.y += 0.002;
        group.rotation.x += 0.001;
        
        // Move particles
        spheres.forEach((s: any) => {
            s.position.add(s.velocity);
            if (Math.abs(s.position.x) > 5) s.velocity.x *= -1;
            if (Math.abs(s.position.y) > 5) s.velocity.y *= -1;
            if (Math.abs(s.position.z) > 5) s.velocity.z *= -1;
        });

        renderer.render(scene, camera);
    }

    const handleResize = () => {
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
    };
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[400px]"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
