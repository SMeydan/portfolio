import type { ToolkitItem } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ToolkitSectionProps {
  toolkit: ToolkitItem[];
}

export default function ToolkitSection({ toolkit }: ToolkitSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as any}
      className={`py-32 px-6 md:px-16 max-w-[1440px] mx-auto relative z-10 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      id="toolkit"
    >
      <div className="mb-16">
        <h2 className="font-headline-md text-headline-md text-primary">
          Technical Toolkit
        </h2>

        <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
          Core competencies and system architecture stack.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {toolkit.map((tool, index) => (
          <div
            key={index}
            className="glass-card rounded-xl flex flex-col items-center justify-center gap-4 py-10 px-4 cursor-hover hover:border-primary/40 transition-colors"
          >
            <span className="material-symbols-outlined text-[32px] text-on-surface-variant">
              {tool.icon}
            </span>

            <span className="font-label-mono text-label-mono text-on-surface-variant text-center">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
