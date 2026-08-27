import { useEffect, useState } from 'react';
import { portfolioApi } from '../services/portfolioApi';
import { experienceApi } from '../services/experienceApi';
import ShaderAnimation from '../components/ShaderAnimation';
import AboutSection from '../components/AboutSection';
import ToolkitSection from '../components/ToolkitSection';
import ExperienceSection from '../components/ExperienceSection';
import WorksSection from '../components/WorksSection';
import type { Profile, Project, Experience, ToolkitItem } from '../types';

export default function Home() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [experience, setExperiences] = useState<Experience[]>([]);
  const [toolkit, setToolkit] = useState<ToolkitItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      portfolioApi.getProfile(),
      portfolioApi.getProjects(),
      experienceApi.getExperiences(),
      experienceApi.getToolkit(),
    ])
      .then(([p, proj, experiences, toolkitItems]) => {
        console.log('projects loaded:', proj);
        console.log('experience loaded:', experiences);
        console.log('toolkit loaded:', toolkitItems);

        setProfile(p);
        setProjects(proj.slice(0, 4));
        setExperiences(experiences);
        setToolkit(toolkitItems);
      })
      .catch((err) => {
        console.error('Home data fetch error:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
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

      {/* About Section */}
      <AboutSection />

      {/* Technical Toolkit */}
      <ToolkitSection toolkit={toolkit} />

      {/* Experience Section */}
      <ExperienceSection experience={experience} />

      {/* Selected Works */}
      <WorksSection projects={projects} loading={loading} />

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