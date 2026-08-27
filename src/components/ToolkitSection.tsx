import type { ToolkitItem } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useEffect, useState } from 'react';

interface ToolkitSectionProps {
  toolkit: ToolkitItem[];
}

export default function ToolkitSection({ toolkit }: ToolkitSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [forceVisible, setForceVisible] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Force visible after a delay to debug
  useEffect(() => {
    setTimeout(() => setForceVisible(true), 1000);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % toolkit.length);
  };

  const previous = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + toolkit.length) % toolkit.length
    );
  };

  // Auto rotate
  useEffect(() => {
    if (isPaused || toolkit.length === 0) return;

    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, toolkit.length]);

  if (!toolkit.length) return null;

  console.log('ToolkitSection rendering, toolkit length:', toolkit.length, 'current index:', currentIndex, 'isVisible:', isVisible);

  return (
    <section
      ref={ref as any}
      id="toolkit"
      className={`py-20 px-6 md:px-16 max-w-[1440px] mx-auto relative z-10
        transition-all duration-1000 ease-out
        ${isVisible || forceVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-20'
        }`}
      style={{ minHeight: '500px' }}
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="font-headline-md text-headline-md text-primary">
          Technical Toolkit
        </h2>

        <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
          Core competencies and system architecture stack.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative h-[420px] flex items-center justify-center"
        style={{ perspective: '1200px' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left button */}
        <button
          onClick={previous}
          className="
            absolute left-0 md:left-4 z-30
            w-12 h-12 rounded-full
            border border-surface-variant
            flex items-center justify-center
            text-primary
            hover:bg-primary hover:text-background
            transition-all duration-300
          "
          aria-label="Previous technology"
        >
          <span className="material-symbols-outlined">
            arrow_back
          </span>
        </button>

        {/* 3D stage */}
        <div
          className="relative w-full max-w-6xl h-full"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {toolkit.map((tool, index) => {
            const total = toolkit.length;

            let offset = index - currentIndex;

            // Shortest direction around the carousel
            if (offset > total / 2) {
              offset -= total;
            }

            if (offset < -total / 2) {
              offset += total;
            }

            const isCenter = offset === 0;

            const absOffset = Math.abs(offset);

            // Only render nearby cards
            if (absOffset > 2) return null;

            const translateX = offset * 260;
            const translateZ = isCenter
              ? 100
              : -absOffset * 120;

            const rotateY = offset * -25;

            const scale = isCenter
              ? 1
              : absOffset === 1
                ? 0.82
                : 0.65;

            const opacity = isCenter
              ? 1
              : absOffset === 1
                ? 0.65
                : 0.3;

            return (
              <div
                key={`${tool.name}-${index}`}
                className="
                  absolute left-1/2 top-1/2
                  w-[220px] h-[260px]
                  rounded-2xl
                  glass-card
                  flex flex-col
                  items-center
                  justify-center
                  gap-5
                  cursor-hover
                  transition-all
                  duration-700
                  ease-out
                "
                style={{
                  transform: `
                    translate(-50%, -50%)
                    translateX(${translateX}px)
                    translateZ(${translateZ}px)
                    rotateY(${rotateY}deg)
                    scale(${scale})
                  `,
                  opacity,
                  zIndex: 20 - absOffset,
                  transformStyle: 'preserve-3d',
                }}
                onClick={() => setCurrentIndex(index)}
              >
                {/* Icon */}
                <div
                  className={`
                    w-20 h-20 rounded-2xl
                    border
                    flex items-center justify-center
                    transition-all duration-500
                    ${
                      isCenter
                        ? 'border-primary/60 shadow-[0_0_40px_rgba(255,255,255,0.12)]'
                        : 'border-surface-variant'
                    }
                  `}
                >
                  <span
                    className="
                      material-symbols-outlined
                      text-[38px]
                      text-primary
                    "
                  >
                    {tool.icon}
                  </span>
                </div>

                {/* Name */}
                <span
                  className="
                    font-label-mono
                    text-label-mono
                    text-primary
                    text-center
                    text-sm
                    px-4
                  "
                >
                  {tool.name}
                </span>

                {/* Center indicator */}
                {isCenter && (
                  <span className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                    Core Stack
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Right button */}
        <button
          onClick={next}
          className="
            absolute right-0 md:right-4 z-30
            w-12 h-12 rounded-full
            border border-surface-variant
            flex items-center justify-center
            text-primary
            hover:bg-primary hover:text-background
            transition-all duration-300
          "
          aria-label="Next technology"
        >
          <span className="material-symbols-outlined">
            arrow_forward
          </span>
        </button>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {toolkit.map((tool, index) => (
          <button
            key={tool.name}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to ${tool.name}`}
            className={`
              h-2 rounded-full
              transition-all duration-500
              ${
                index === currentIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-outline-variant hover:bg-primary/50'
              }
            `}
          />
        ))}
      </div>

      {/* Hint */}
      <div className="flex justify-center mt-6">
        <span className="font-label-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
          Auto rotating · Click a card to explore
        </span>
      </div>
    </section>
  );
}