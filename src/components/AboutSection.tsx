import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as any}
      className={`py-20 px-6 md:px-16 max-w-[1440px] mx-auto relative z-10 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      id="about"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-7 md:col-start-2 flex flex-col justify-center">
          <div className="font-label-mono text-label-mono text-secondary-container mb-4 uppercase tracking-widest">
            About Me
          </div>

          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8">
            Building Systems,
            <br />
            Learning AI.
          </h2>

          <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg max-w-2xl mb-8">
            <p>
              Backend Software Engineer focused on fintech/payment systems and production-ready API development.
              Experienced in designing payment gateway integrations, building FastAPI and .NET services, implementing
              asynchronous workflows with Celery, RabbitMQ and Redis, and working with PostgreSQL-backed data models.
            </p>

            <p>
              Focused on writing clean, readable and maintainable backend code, improving code quality through SonarQube
              findings, dependency cleanup and nullable-safety fixes.
            </p>

            <p>
              Comfortable using AI tools to speed up development, improve technical analysis and adapt AI-assisted
              solutions into backend projects when they create practical value.
            </p>
          </div>
        </div>

        <div className="md:col-span-4 relative h-[400px] md:h-[500px]">
          <video 
            src="/about.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
