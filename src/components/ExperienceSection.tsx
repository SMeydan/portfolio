import type { Experience } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AboutThreeJS from './AboutThreeJS';

interface ExperienceSectionProps {
  experience: Experience[];
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as any}
      className={`py-32 px-6 md:px-16 max-w-[1440px] mx-auto relative z-10 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      id="experience"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-5 md:col-start-2 relative h-[400px] md:h-[500px] order-2 md:order-1">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <AboutThreeJS />
          </div>
          <img 
            src="/robot.gif" 
            alt="Robot" 
            className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
          />
        </div>

        <div className="md:col-span-5 flex flex-col order-1 md:order-2">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">
            Experience
          </h2>

          <p className="font-body-sm text-body-sm text-on-surface-variant mb-12">
            A collection of my professional experience and technical
            journey.
          </p>

          <div className="relative pl-8 md:pl-12">
            <div className="timeline-line" />

            <div className="space-y-16">
              {experience.map((item) => (
                <div key={item.id} className="timeline-node group">
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                    <h3 className="font-headline-md text-[24px] text-primary">
                      {item.position}
                    </h3>

                    <span className="font-label-mono text-label-mono text-secondary-container">
                      {item.company}
                    </span>
                  </div>

                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
