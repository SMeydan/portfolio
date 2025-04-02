import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import reactLogo from '../assets/logos/react.png';  // Yolu kendi dosya konumunuza göre ayarlayın
import pythonLogo from '../assets/logos/python.png';
import nodeLogo from '../assets/logos/nodejs.png';
import cssLogo from '../assets/logos/css.png';
import htmlLogo from '../assets/logos/html.png';
import jsLogo from '../assets/logos/js.png';
import fastapiLogo from '../assets/logos/fastapi.png';
import djangoLogo from '../assets/logos/django.png';
import flaskLogo from '../assets/logos/flask.png';
import lookerLogo from '../assets/logos/lookerstudio.png';
import mssqlLogo from '../assets/logos/mssql.png';
import postgreLogo from '../assets/logos/postgresql.png';
import powerbiLogo from '../assets/logos/powerbi.png';


const SolarSystem = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Sahne, Kamera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;
    camera.position.y = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Işıklar - Güçlendirilmiş
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2, 50);
    pointLight.position.set(0, 0, 0);
    pointLight.castShadow = true;
    scene.add(pointLight);

    // Güneş - Işıma efekti güçlendirildi
    const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sunMaterial = new THREE.MeshStandardMaterial({
      color: 0xffdd00,
      emissive: 0xff8800,
      emissiveIntensity: 1,
      roughness: 0.2,
      metalness: 0.5,
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Güneş ışıma efekti
    const sunLight = new THREE.PointLight(0xffffcc, 2, 50);
    sun.add(sunLight);

    // Yörünge çizgileri
    const createOrbit = (radius) => {
      const orbitGeometry = new THREE.RingGeometry(radius - 0.05, radius + 0.05, 64);
      const orbitMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.3,
      });
      const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
      orbit.rotation.x = Math.PI / 2;
      scene.add(orbit);
      return orbit;
    };

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    
    // Gezegenler ve yörüngeleri
    const planets = [];
    const orbits = [];

    // Logo pozisyonları için enum
    const LogoPosition = {
      FRONT: 'front',
      BACK: 'back',
      LEFT: 'left',
      RIGHT: 'right',
      TOP: 'top',
      BOTTOM: 'bottom'
    };

    const addLogoToSphere = (planet, logoUrl, position = LogoPosition.FRONT, scale = 0.5) => {
        if (!logoUrl) return;
      
        textureLoader.load(logoUrl, (texture) => {
          // Yeni yaklaşım: Düz mesh kullanarak logo ekleme
          const logoGeometry = new THREE.PlaneGeometry(1, 1);
          const logoMaterial = new THREE.MeshBasicMaterial({ 
            map: texture, 
            transparent: true,
            side: THREE.DoubleSide,
            depthWrite: false
          });
          
          const logo = new THREE.Mesh(logoGeometry, logoMaterial);
          
          // Logo boyutunu ayarla
          const logoSize = planet.geometry.parameters.radius * scale;
          logo.scale.set(logoSize, logoSize, logoSize);
          
          // Logo pozisyonunu ayarla
          const distanceFromSurface = planet.geometry.parameters.radius * 1.01; // Yüzeye daha yakın
          
          switch(position) {
            case LogoPosition.FRONT:
              logo.position.z = distanceFromSurface;
              logo.lookAt(0, 0, 0); // Güneşe doğru bak
              break;
            case LogoPosition.BACK:
              logo.position.z = -distanceFromSurface;
              logo.lookAt(0, 0, 0); // Güneşe doğru bak
              break;
            case LogoPosition.LEFT:
              logo.position.x = -distanceFromSurface;
              logo.lookAt(0, 0, 0); // Güneşe doğru bak
              break;
            case LogoPosition.RIGHT:
              logo.position.x = distanceFromSurface;
              logo.lookAt(0, 0, 0); // Güneşe doğru bak
              break;
            case LogoPosition.TOP:
              logo.position.y = distanceFromSurface;
              logo.lookAt(0, 0, 0); // Güneşe doğru bak
              break;
            case LogoPosition.BOTTOM:
              logo.position.y = -distanceFromSurface;
              logo.lookAt(0, 0, 0); // Güneşe doğru bak
              break;
          }
          
          planet.add(logo);
        }, undefined, (error) => {
          console.warn(`Logo yüklenemedi: ${logoUrl}`, error);
        });
      };
    const planetData = [
        { 
            radius: 5, 
            speed: 0.01, 
            size: 0.8, 
            color: 0x00CFFF,  // Daha parlak React mavisi
            rotationSpeed: 0.02,
            mainLogo: reactLogo,
            secondaryLogo: reactLogo,
          },
          { 
            radius: 8, 
            speed: 0.009, 
            size: 1.0, 
            color: 0x4584F3, // Daha parlak Python mavisi
            rotationSpeed: 0.019,
            mainLogo: pythonLogo,
            secondaryLogo: pythonLogo,
          },
          {
            radius: 10, 
            speed: 0.008, 
            size: 1.2, 
            color: 0x78C57D, // Daha parlak Node.js yeşili
            rotationSpeed: 0.018,
            mainLogo: nodeLogo,
            secondaryLogo: nodeLogo,
          },
          { 
            radius: 12, 
            speed: 0.007, 
            size: 1.5, 
            color: 0xFF7A33, // Daha parlak CSS turuncusu
            rotationSpeed: 0.017,
            mainLogo: cssLogo,
            secondaryLogo: cssLogo,
          },
          { 
            radius: 14, 
            speed: 0.006, 
            size: 1.7, 
            color: 0xFF5733, // Daha parlak HTML kırmızısı
            rotationSpeed: 0.016,
            mainLogo: htmlLogo,
            secondaryLogo: htmlLogo,
          },
          { 
            radius: 16, 
            speed: 0.005, 
            size: 1.9, 
            color: 0xFFEE00, // Daha parlak JavaScript sarısı
            rotationSpeed: 0.015,
            mainLogo: jsLogo,
            secondaryLogo: jsLogo,
          },
          { 
            radius: 18, 
            speed: 0.004, 
            size: 2.1, 
            color: 0xFF7043, // Daha parlak FastAPI turuncusu
            rotationSpeed: 0.014,
            mainLogo: fastapiLogo,
          },
          { 
            radius: 20, 
            speed: 0.003, 
            size: 2.3, 
            color: 0x17F12E, // Daha parlak Django yeşili
            rotationSpeed: 0.013,
            mainLogo: djangoLogo,
          },
          { 
            radius: 22, 
            speed: 0.002, 
            size: 2.5, 
            color: 0xFFFFFF, // Beyaz zaten parlak
            rotationSpeed: 0.012,
          },
          {
            radius: 24, 
            speed: 0.001, 
            size: 2.7, 
            color: 0xFF3300, // Daha parlak Flask kırmızısı
            rotationSpeed: 0.011,
            mainLogo: flaskLogo,
          },
          { 
            radius: 26, 
            speed: 0.001, 
            size: 2.9, 
            color: 0xFF9B33, // Daha parlak Looker turuncusu
            rotationSpeed: 0.010,
            mainLogo: lookerLogo,
          },
          { 
            radius: 28, 
            speed: 0.001, 
            size: 3.1, 
            color: 0x484C80, // Daha parlak MSSQL mavisi
            rotationSpeed: 0.009,
            mainLogo: mssqlLogo,
          },
          { 
            radius: 30, 
            speed: 0.001, 
            size: 3.3, 
            color: 0x5DA9FF, // Daha parlak PostgreSQL mavisi
            rotationSpeed: 0.008,
            mainLogo: postgreLogo,
          },
          { 
            radius: 32, 
            speed: 0.001, 
            size: 3.5, 
            color: 0xFF1E56, // Daha parlak PowerBI kırmızısı
            rotationSpeed: 0.007,
            mainLogo: powerbiLogo,
          }          
     
    ];

    // Gezegenler ve yörüngeleri oluştur
    planetData.forEach((data, index) => {
      // Yörünge çizgisi oluştur
      const orbit = createOrbit(data.radius);
      orbits.push(orbit);

      // Gezegen oluştur
      const geometry = new THREE.SphereGeometry(data.size, 32, 32);
      const material = new THREE.MeshStandardMaterial({
        color: data.color,
        roughness: 0.7,
        metalness: 0.2,
      });

      const planet = new THREE.Mesh(geometry, material);
      planet.castShadow = true;
      planet.receiveShadow = true;

      // Gezegeni başlangıç konumuna yerleştir
      const angle = Math.random() * Math.PI * 2;
      planet.position.x = Math.cos(angle) * data.radius;
      planet.position.z = Math.sin(angle) * data.radius;

      // Gezegen özelliklerini sakla
      planet.userData = {
        orbitRadius: data.radius,
        orbitSpeed: data.speed,
        rotationSpeed: data.rotationSpeed,
        angle: angle
      };

      // Logo ekle - farklı konumlarda iki logo
      if (data.mainLogo) {
        addLogoToSphere(planet, data.mainLogo, LogoPosition.FRONT, 0.6);
      }
      
      if (data.secondaryLogo) {
        addLogoToSphere(planet, data.secondaryLogo, LogoPosition.BACK, 0.6);
      }

      scene.add(planet);
      planets.push(planet);
    });

    // Animasyon
    let lastTime = 0;
    const animate = (time) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      requestAnimationFrame(animate);

      // Güneşin kendi etrafında dönmesi
      sun.rotation.y += 0.005;

      // Gezegenlerin hem kendi etrafında hem de güneş etrafında dönmesi
      planets.forEach((planet) => {
        // Kendi etrafında dönme
        planet.rotation.y += planet.userData.rotationSpeed;
        
        // Güneş etrafında dönme
        planet.userData.angle += planet.userData.orbitSpeed;
        planet.position.x = Math.cos(planet.userData.angle) * planet.userData.orbitRadius;
        planet.position.z = Math.sin(planet.userData.angle) * planet.userData.orbitRadius;
      });

      controls.update();
      renderer.render(scene, camera);
    };

    animate(0);

    // Ekran boyutu değişikliklerini yönet
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return(
    <div style={{ backgroundColor: 'black', textAlign: 'center' }}>
      <h4 >
      Technologies I Used</h4>
      <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />
      </div>
  );
};

export default SolarSystem;