import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as any}
      className={`py-32 px-6 md:px-16 max-w-[1440px] mx-auto relative z-10 transition-all duration-1000 ease-out ${
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

          <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg max-w-2xl">
            <p>
              I&apos;m a Computer Engineering student and software engineer
              focused on backend development and AI.
            </p>

            <p>
              I enjoy understanding how systems work under the hood,
              building things from scratch, and turning what I learn into
              practical projects.
            </p>

            <p>
              My main experience is with backend technologies such as .NET,
              Python, PostgreSQL, and Docker. Recently, I&apos;ve been
              exploring machine learning, neural networks, and system design
              more deeply.
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
