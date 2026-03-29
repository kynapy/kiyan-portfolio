import ProjectCard, { Project } from "../ui/ProjectCard";
import SectionLabel from "../ui/SectionLabel";

const projects: Project[] = [
  {
    year: "2026",
    title: "Kiyan's Portfolio",
    subtitle: "A simple portfolio webpage for software engineering",
    tags: [
      { label: "Next.js", color: "blue" },
      { label: "TypeScript", color: "coral" },
    ],
    summary: "This current website you are on!",
    description:
      "This is a current work in progress. The website aims to provide a comprehensive insight into my past and current experiences, any projects that I've worked on, and projects that I'm currently working on.",
    highlights: ["Next.js SPA"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    year: "2026",
    title: "Weather Egg (WIP)",
    subtitle: "Plant watering automation and travel aid",
    tags: [
      { label: "Java", color: "blue" },
      { label: "Java Spring", color: "amber" },
      { label: "Internet of Things", color: "coral" },
      { label: "Next.js" },
    ],
    summary: "Solution leveraging on IoT devices for home automation",
    description:
      "Weather Egg is designed and created with my personal use case in mind. I have a huge garden outside my house tended by my dad and it is a routine every night to water the plants. However, the amount of plants might be too much to handle sometimes as the garden grows, so this solution aims to use temperature and rain data to decide if plants require watering, and then executes the watering command",
    highlights: [
      "Uses the LTA API for bus details, cached to prevent overuse of public API",
      "Use of IOT for data and control of plant watering",
      "Provides analytics and visualization of water use and temperature data",
    ],
    githubUrl: "https://github.com",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects">
      <SectionLabel index="03" label="projects" />
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
