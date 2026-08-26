import type { Project } from '../types';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="glass-card rounded-xl overflow-hidden group relative cursor-hover">
      <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 grayscale group-hover:grayscale-0" style={{ backgroundImage: `url(${project.imageUrl})` }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
        <div>
          <div className="font-label-mono text-label-mono text-secondary-fixed-dim mb-2 uppercase tracking-widest">Web Application</div>
          <h3 className="font-display-lg-mobile text-display-lg-mobile text-primary">{project.title}</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2">{project.description}</p>
          <div className="tech-tags mt-4">
            {project.technologies.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          {project.gitHubUrl && (
            <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary-container group-hover:bg-primary-container/10 transition-colors">
              <span className="material-symbols-outlined text-primary group-hover:text-primary-container">code</span>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary-container group-hover:bg-primary-container/10 transition-colors">
              <span className="material-symbols-outlined text-primary group-hover:text-primary-container">north_east</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
