import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    
    if (!cursor || !trail) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      setTimeout(() => {
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
      }, 50);
    };

    const handleMouseEnter = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.5)';
      trail.style.transform = 'translate(-50%, -50%) scale(1.5)';
      trail.style.borderColor = '#00f2ff';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      trail.style.transform = 'translate(-50%, -50%) scale(1)';
      trail.style.borderColor = '#333535';
    };

    document.addEventListener('mousemove', handleMouseMove);

    const interactables = document.querySelectorAll('.cursor-hover');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
}
