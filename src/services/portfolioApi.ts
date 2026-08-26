import type { Profile, Project } from "../types";

const projects: Project[] = [
  {
    id: 1,
    title: "MedNexus AI",
    description:
      "An AI-powered medical information platform built with FastAPI and PostgreSQL.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "AI"],
    gitHubUrl: null,
    liveUrl: null,
    imageUrl: "/images/projects/mednexus.jpg",
  },
  {
    id: 2,
    title: "Warehouse Automation",
    description:
      "A backend system for warehouse automation, inventory management, and operational workflows.",
    technologies: [".NET", "C#", "PostgreSQL", "Docker"],
    gitHubUrl: null,
    liveUrl: null,
    imageUrl: "/images/projects/warehouse.jpg",
  },
  {
    id: 3,
    title: "Payment Gateway",
    description:
      "Backend services and payment integrations designed for secure and reliable financial transactions.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    gitHubUrl: null,
    liveUrl: null,
    imageUrl: "/images/projects/payment.jpg",
  },
  {
    id: 4,
    title: "System Architecture",
    description:
      "Exploring scalable backend architectures, distributed systems, caching, messaging, and system design.",
    technologies: [".NET", "RabbitMQ", "Redis", "Docker"],
    gitHubUrl: null,
    liveUrl: null,
    imageUrl: "",
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