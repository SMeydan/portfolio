export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  gitHub: string;
  linkedIn: string;
  avatarUrl: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  gitHubUrl: string | null;
  liveUrl: string | null;
  imageUrl: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface BlogPostSummary {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  published_at: string;
  read_time_minutes: number;
}

export interface BlogPost extends BlogPostSummary {
  content: string;
  author: string;
  updated_at: string | null;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Experience {
  id: number;
  imageUrl?: string;
  position: string;
  company: string;
  description: string;
}

export interface ToolkitItem {
  name: string;
  icon: string;
}