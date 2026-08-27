import type { Experience, ToolkitItem } from "../types";

export const toolkit: ToolkitItem[] = [
  { name: "C#", icon: "code" },
  { name: ".NET 8/9/10", icon: "table_chart" },
  { name: "ASP.NET Core", icon: "web" },
  { name: "Python", icon: "terminal" },
  { name: "FastAPI", icon: "hub" },
  { name: "Django", icon: "widgets" },
  { name: "REST APIs", icon: "api" },
  { name: "Node.js", icon: "data_object" },
  { name: "Payment Gateways", icon: "payments" },
  { name: "RabbitMQ", icon: "vaccines" },
  { name: "MassTransit", icon: "sync_alt" },
  { name: "Celery", icon: "task_alt" },
  { name: "Redis", icon: "memory" },
  { name: "PostgreSQL", icon: "database" },
  { name: "MSSQL", icon: "storage" },
  { name: "MongoDB", icon: "dataset" },
  { name: "Entity Framework", icon: "layers" },
  { name: "Git", icon: "git" },
  { name: "CI/CD", icon: "rocket_launch" },
  { name: "Kubernetes", icon: "dns" },
  { name: "SonarQube", icon: "rule" },
  { name: "OCR", icon: "document_scanner" },
  { name: "RAG", icon: "psychology" },
  { name: "LLM Integrations", icon: "smart_toy" },
  { name: "Gemini", icon: "auto_awesome" },
  { name: "MCP", icon: "extension" },
];

export const experiences: Experience[] = [
  {
    id: 1,
    position: "Software Engineer",
    company: "Hangikredi / Hangipara",
    description:
      "Sep 2025 - Jul 2026. Developed .NET backend services for Card, Merchant, Payment and VPOS domains using ASP.NET Core, PostgreSQL, Redis, RabbitMQ and MassTransit. Worked on payment, 3D Secure and event-driven workflows.",
  },
  {
    id: 2,
    position: "Software Engineer",
    company: "Renault / Horse Technology",
    description:
      "Jul 2024 - Sep 2025. Built Python/FastAPI backend services, AI-powered internal tools and RAG-based enterprise search systems. Worked with OCR, LLMs, MCP, agent workflows and Google Cloud.",
  },
  {
    id: 3,
    position: "Software Engineer",
    company: "MagicPay",
    description:
      "Sep 2022 - Jul 2024. Developed FastAPI backend services and payment gateway integrations with PayTR, Sipay, QNB and Asseco. Built asynchronous workflows using Celery, RabbitMQ and Redis.",
  },
  {
    id: 4,
    position: "Intellicamp Intern",
    company: "Intellica",
    description:
      "Jun 2024 - Jul 2024. Worked on telecommunications data warehouse projects, SQL-based analysis and Power BI dashboards.",
  },
  {
    id: 5,
    position: "Computer Vision Intern",
    company: "Ford Otosan",
    description:
      "Nov 2023 - Feb 2024. Developed YOLOv7-based computer vision workflows for worker and PPE detection in industrial environments.",
  },
  {
    id: 6,
    position: "Intern",
    company: "Vervo Makine",
    description:
      "Jul 2020 - Aug 2020. Developed a Python/PyQt application for monitoring and controlling packaging machines with PLC-based data integration.",
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