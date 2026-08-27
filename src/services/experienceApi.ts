import type { Experience, ToolkitItem } from "../types";

export const toolkit: ToolkitItem[] = [
  { name: "C#", icon: "code" },
  { name: ".NET 8/9/10", icon: "table_chart" },
  { name: "Python", icon: "terminal" },
  { name: "FastAPI", icon: "hub" },
  { name: "RabbitMQ", icon: "vaccines" },
  { name: "Redis", icon: "memory" },
  { name: "PostgreSQL", icon: "database" },
  { name: "RAG", icon: "psychology" },
  { name: "LLM Integrations", icon: "smart_toy" },
  { name: "Kubernetes Basics", icon: "dns" },
];

export const experiences: Experience[] = [
  {
    id: 1,
    position: "Software Developer",
    company: "Hangikredi",
    description:
      "Worked on backend systems and fintech-related software, focusing on APIs, integrations, data processing, and production systems.",
  },
  {
    id: 2,
    position: "Software Developer",
    company: "Horse Technologies",
    description:
      "Worked on software development projects and R&D solutions, including automotive-related systems.",
  },
  {
    id: 3,
    position: "Backend Developer",
    company: "MagicPay",
    description:
      "Developed backend services and payment-related integrations using Python and backend technologies.",
  },
  {
    id: 4,
    position: "Computer Vision Intern",
    company: "Ford Otosan",
    description:
      "Worked on computer vision and machine learning related projects.",
  },
];

export const experienceApi = {
  async getExperiences(): Promise<Experience[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return experiences;
  },

  async getToolkit(): Promise<ToolkitItem[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return toolkit;
  },
};