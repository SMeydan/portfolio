import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;

    if (!cursor || !trail) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;
    let cursorY = mouseY;

    let trailX = mouseX;
    let trailY = mouseY;

    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Main cursor - almost directly follows the mouse
      cursorX += (mouseX - cursorX) * 0.45;
      cursorY += (mouseY - cursorY) * 0.45;

      // Outer ring - smooth and slightly behind
      trailX += (mouseX - trailX) * 0.10;
      trailY += (mouseY - trailY) * 0.10;

      cursor.style.transform = `
        translate3d(${cursorX}px, ${cursorY}px, 0)
        translate(-50%, -50%)
      `;

      trail.style.transform = `
        translate3d(${trailX}px, ${trailY}px, 0)
        translate(-50%, -50%)
      `;

      animationFrame = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      cursor.style.width = '4px';
      cursor.style.height = '4px';

      trail.style.width = '48px';
      trail.style.height = '48px';
      trail.style.borderColor = '#00f2ff';
    };

    const handleMouseLeave = () => {
      cursor.style.width = '8px';
      cursor.style.height = '8px';

      trail.style.width = '32px';
      trail.style.height = '32px';
      trail.style.borderColor = '#333535';
    };

    document.addEventListener('mousemove', handleMouseMove);

    const interactables = document.querySelectorAll('.cursor-hover');

    interactables.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    animationFrame = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);

      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor"
      />

      <div
        ref={trailRef}
        className="cursor-trail"
      />
    </>
  );
}

