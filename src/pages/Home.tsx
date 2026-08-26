import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioApi } from '../services/portfolioApi';
import { blogApi } from '../services/blogApi';
import ShaderAnimation from '../components/ShaderAnimation';
import type { Profile, Project, BlogPostSummary } from '../types';

export default function Home() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      portfolioApi.getProfile(),
      portfolioApi.getProjects(),
      //blogApi.getPosts(),
    ])
      .then(([p, proj]) => {
        console.log('projects loaded:', proj);
        setProfile(p);
        setProjects(proj.slice(0, 4));
      })
      .catch((err) => {
        console.error('Home data fetch error:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <ShaderAnimation />

        <div className="relative z-10 text-center flex flex-col items-center pointer-events-none">
          <h1
            className="font-display-2xl text-display-2xl text-primary tracking-tighter text-glow md:text-display-2xl text-[80px] leading-[80px] mix-blend-plus-lighter"
            id="hero-title"
          >
            Sudenur Meydan
          </h1>

          <p className="font-label-mono text-label-mono text-on-surface-variant mt-8 tracking-widest uppercase reveal-on-scroll is-visible">
            Software Engineer | Backend & AI
          </p>

          <p className="mt-4 max-w-xl text-on-surface-variant text-sm md:text-base">
            Building backend systems, exploring AI, and turning ideas into
            working software.
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-label-mono text-label-mono text-surface-variant uppercase tracking-widest text-[10px]">
            Scroll to explore
          </span>

          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </section>

      {/* Selected Works */}
      <section
        className="py-32 px-6 md:px-16 max-w-[1440px] mx-auto relative z-10"
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

        {projects.length === 0 && (
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            No projects to show yet.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[280px]">
          {projects.map((project, i) => {
            const isLarge = i === 0 || i === 3;
            const isTextCard = i === 3;

            const p = project as any;
            const imageUrl: string | undefined = p.imageUrl ?? p.image ?? p.thumbnailUrl;
            const category: string | undefined = p.category ?? p.tag;
            const description: string | undefined = p.description ?? p.summary ?? p.excerpt;

            return (
              <div
                key={project.id}
                className={`glass-card rounded-xl overflow-hidden group relative reveal-on-scroll cursor-hover
                  ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}
                `}
              >
                {isTextCard ? (
                  <div className="flex flex-col justify-end h-full p-8">
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-surface-variant flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[18px]">
                        bolt
                      </span>
                    </div>

                    <div className="font-label-mono text-label-mono text-on-surface-variant mb-2 uppercase tracking-widest">
                      {category ?? 'System Architecture'}
                    </div>

                    <h3 className="font-display-lg-mobile text-display-lg-mobile text-primary mb-4">
                      {project.title}
                    </h3>

                    {description && (
                      <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                        {description}
                      </p>
                    )}
                  </div>
                ) : (
                  <>
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
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
                          {category ?? 'Project'}
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
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-32 px-6 md:px-16 max-w-[1440px] mx-auto relative z-10"
        id="about"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7 md:col-start-3 flex flex-col justify-center">
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
        </div>
      </section>

      {/* Technical Toolkit */}
      <section
        className="py-32 px-6 md:px-16 max-w-[1440px] mx-auto relative z-10"
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
          {[
            { name: 'C#', icon: 'code' },
            { name: '.NET 8/9/10', icon: 'table_chart' },
            { name: 'Python', icon: 'terminal' },
            { name: 'FastAPI', icon: 'hub' },
            { name: 'RabbitMQ', icon: 'vaccines' },
            { name: 'Redis', icon: 'memory' },
            { name: 'PostgreSQL', icon: 'database' },
            { name: 'RAG', icon: 'psychology' },
            { name: 'LLM Integrations', icon: 'smart_toy' },
            { name: 'Kubernetes Basics', icon: 'dns' },
          ].map((tool) => (
            <div
              key={tool.name}
              className="glass-card rounded-xl flex flex-col items-center justify-center gap-4 py-10 px-4 reveal-on-scroll cursor-hover hover:border-primary/40 transition-colors"
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

      {/* Experience Section */}
      <section
        className="py-32 px-6 md:px-16 max-w-[1440px] mx-auto relative z-10"
        id="experience"
      >
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          <div className="md:w-1/3">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">
              Experience
            </h2>

            <p className="font-body-sm text-body-sm text-on-surface-variant">
              A collection of my professional experience and technical
              journey.
            </p>
          </div>

          <div className="md:w-2/3 relative pl-8 md:pl-12">
            <div className="timeline-line" />

            <div className="space-y-16">
              <div className="timeline-node group">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                  <h3 className="font-headline-md text-[24px] text-primary">
                    Software Developer
                  </h3>

                  <span className="font-label-mono text-label-mono text-on-surface-variant">
                    Hangikredi
                  </span>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
                  Worked on backend systems and fintech-related software,
                  focusing on APIs, integrations, data processing, and
                  production systems.
                </p>
              </div>

              <div className="timeline-node group">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                  <h3 className="font-headline-md text-[24px] text-primary">
                    Software Developer
                  </h3>

                  <span className="font-label-mono text-label-mono text-on-surface-variant">
                    Horse Technologies
                  </span>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
                  Worked on software development projects and R&amp;D
                  solutions, including automotive-related systems.
                </p>
              </div>

              <div className="timeline-node group">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                  <h3 className="font-headline-md text-[24px] text-primary">
                    Backend Developer
                  </h3>

                  <span className="font-label-mono text-label-mono text-on-surface-variant">
                    MagicPay
                  </span>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
                  Developed backend services and payment-related integrations
                  using Python and backend technologies.
                </p>
              </div>

              <div className="timeline-node group">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                  <h3 className="font-headline-md text-[24px] text-primary">
                    Computer Vision Intern
                  </h3>

                  <span className="font-label-mono text-label-mono text-on-surface-variant">
                    Ford Otosan
                  </span>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
                  Worked on computer vision and machine learning related
                  projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Thoughts */}
      <section
        className="py-32 px-6 md:px-16 max-w-[1440px] mx-auto relative z-10"
        id="blog"
      >
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary">
              Latest Thoughts
            </h2>

            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              Things I&apos;m learning, building, and thinking about.
            </p>
          </div>

          <Link
            to="/blog"
            className="font-label-mono text-label-mono text-primary flex items-center gap-2 cursor-hover hover:text-primary-container transition-colors group"
          >
            View All
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="glass-card rounded-xl p-8 reveal-on-scroll cursor-hover"
            >
              <div className="font-label-mono text-label-mono text-primary-fixed mb-2 uppercase tracking-widest">
                {post.category}
              </div>

              <h3 className="font-headline-md text-headline-md text-primary mb-4">
                {post.title}
              </h3>

              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>
      </section>

      {loading && <div className="loading">Loading...</div>}

      {!profile && !loading && (
        <div className="error">
          Unable to load profile data. Please make sure the backend services
          are running.
        </div>
      )}
    </main>
  );
}