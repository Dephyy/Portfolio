export const projects = [
  {
    id: "ithesis",
    artifact: "ARTIFACT 001",
    name: "iThesis",
    subtitle: "Digital Thesis Repository",
    type: "Academic Digital Repository",
    status: "Completed / Academic Project",
    description:
      "Library-based digital thesis repository with secure in-house access and usage monitoring for Batangas State University TNEU – Lipa Campus. Built an AI-assisted document repository with automated metadata extraction and tagging, analytics dashboards, and role-based access control.",
    contribution: [
      "Backend developer: secure workflows, usage logging, and data handling.",
      "Security: RBAC + intranet-only access (IP filtering) + content protection approach.",
      "Search & insights: full-text search + analytics reporting.",
      "Built an AI-assisted document repository with automated metadata extraction and tagging.",
      "Optimized database queries and indexing to speed up document retrieval.",
    ],
    tech: ["React", "Django", "PostgreSQL", "Hugging Face Transformers", "Elasticsearch"],
    demo: null,
    repo: "https://github.com/Dephyy/ThinkTank_Proj",
  },
  {
    id: "thinktank",
    artifact: "ARTIFACT 002",
    name: "ThinkTank",
    subtitle: "Web-Based Collaboration Platform",
    type: "Collaboration Platform",
    status: "Completed / Open-Source",
    description:
      "Web-based collaboration platform focused on clear workflows, documentation, and practical team coordination.",
    contribution: [
      "Contributed to features and UI using HTML, CSS, and JavaScript.",
      "Created diagrams and workflow docs using Lucidchart and Draw.io.",
      "Used Microsoft Office (Word and Excel) to create project documentation and data structures.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Lucidchart", "Draw.io"],
    demo: null,
    repo: "https://github.com/Dephyy/ThinkTank_Proj",
  },
] as const;
