import { Link } from 'react-router-dom';
import type { Project } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface WorksSectionProps {
  projects: Project[];
  loading: boolean;
}

export default function WorksSection({ projects, loading }: WorksSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as any}
      className={`py-32 px-6 md:px-16 max-w-[1440px] mx-auto relative z-10 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      id="work"
    >
      <div className="flex items-end justify-between mb-16">
        <div>
          <h2 className="font-headline-md text-headline-md text-primary">
            Selected Works
          </h2>

          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
            Projects I&apos;ve built and worked on.
          </p>
        </div>

        <Link
          to="/projects"
          className="font-label-mono text-label-mono text-primary flex items-center gap-2 cursor-hover hover:text-primary-container transition-colors group"
        >
          View All

          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </Link>
      </div>

      {projects.length === 0 && !loading && (
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          No projects to show yet.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[280px]">
        {projects.map((project, i) => {
          const isLarge = i === 0 || i === 3;;

          return (
            <div
              key={project.id}
              className={`glass-card rounded-xl overflow-hidden group relative cursor-hover ${
                isLarge ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-90 transition-opacity"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl border border-secondary/40 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[28px]">
                      code
                    </span>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 w-full flex items-end justify-between">
                <div>
                  <div className="font-label-mono text-label-mono text-secondary-fixed-dim mb-2 uppercase tracking-widest">
                    {project.technologies.slice(0, 3).join(' · ')}
                  </div>

                  <h3 className="font-display-lg-mobile text-display-lg-mobile text-primary">
                    {project.title}
                  </h3>
                </div>

                {i === 0 && (
                  <div className="w-10 h-10 rounded-full border border-surface-variant flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-background transition-colors">
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_outward
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
