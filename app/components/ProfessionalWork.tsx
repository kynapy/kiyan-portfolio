import ProjectCard, { ProjectCardProps } from "../ui/ContentCard";

const professionalWork: ProjectCardProps[] = [
  {
    title: "Software Engineer, Data & Regulatory Reporting",
    subtitle: "Crédit Agricole Corporate & Investment Banking",
    year: "2025 - 2026",
    summary: "",
    description: "",
    highlights: [],
    githubUrl: "",
    liveUrl: "",
    tags: [
      { label: "Java" },
      { label: "Java Spring" },
      { label: "J2EE" },
      { label: "WildFly" },
      { label: "IBM MQ" },
      { label: "MS SQL" },
      { label: "Python" },
    ],
  },
  {
    title: "Software Engineer, Identity & Access Management",
    subtitle: "Crédit Agricole Corporate & Investment Banking",
    year: "2024 - 2025",
    summary:
      "Developed a greenfield project to replace the existing legacy application for authorization request and management.",
    description: "",
    highlights: [],
    githubUrl: "",
    liveUrl: "",
    tags: [
      { label: "Java" },
      { label: "Java Spring Boot" },
      { label: "React.js" },
      { label: "TypeScript" },
      { label: "PostgreSQL" },
    ],
  },
  {
    title: "Data Research Intern",
    subtitle: "National University Polyclinics",
    year: "Jul 2023 - Dec 2023",
    summary: "",
    description: "",
    highlights: [],
    githubUrl: "",
    liveUrl: "",
    tags: [{ label: "Python" }, { label: "React.js" }, { label: "TypeScript" }],
  },
  {
    title: "Software Engineer Intern",
    subtitle: "HICS Technologies",
    year: "Jan 2023 - May 2023",
    summary: "",
    description: "",
    highlights: [],
    githubUrl: "",
    liveUrl: "",
    tags: [
      { label: "React.js" },
      { label: "TypeScript" },
      { label: "PostgreSQL" },
    ],
  },
];

export const ProfessionalExperience = () => {
  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-16">
      <div>
        <h1 className="" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Professional Work
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        {professionalWork.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
};
