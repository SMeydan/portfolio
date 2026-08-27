import type { Profile, Project } from "../types";

const projects: Project[] = [
  {
    id: 1,
    title: "NiCo",
    description:
      "An AI agent orchestration system for intelligent task planning, tool execution, context management, and permission-aware workflows.",
    technologies: ["Python", "AI", "LLMs", "MCP", "FastAPI"],
    gitHubUrl: "https://github.com/SMeydan/NiCo",
    liveUrl: null,
    imageUrl: "../public/nico.jpg",
  },

  {
    id: 2,
    title: "MedNexus AI",
    description:
      "An AI-powered healthcare platform for intelligent medical information retrieval and patient-focused insights.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "AI"],
    gitHubUrl: "https://github.com/SMeydan/mednexus-ai",
    liveUrl: null,
    imageUrl: "../public/mednexus.jpg",
  },

  {
    id: 3,
    title: "MangaPlus",
    description:
      "A backend platform for manga content management, user interactions, and scalable data services.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Azure"],
    gitHubUrl: "https://github.com/SMeydan/MangaPlus",
    liveUrl: null,
    imageUrl: "../public/mangaplus.jpg",
  },

  {
    id: 4,
    title: "FenomenSuggestionSystem",
    description:
      "A recommendation system for discovering relevant social media influencers based on user preferences and data-driven matching.",
    technologies: ["Python", "Machine Learning", "Recommendation Systems"],
    gitHubUrl: "https://github.com/SMeydan/FenomenSuggestionSystem",
    liveUrl: null,
    imageUrl: "../public/fenomen.jpg",
  },
];

export const portfolioApi = {
  async getProfile(): Promise<Profile> {
    return {} as Profile;
  },

  async getProjects(): Promise<Project[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return projects;
  },
};