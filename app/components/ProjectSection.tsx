import ProjectCard, { Project } from "../ui/ProjectCard";
import SectionLabel from "../ui/SectionLabel";

const projects: Project[] = [
  {
    year: "2026",
    title: "Weather Egg (WIP)",
    subtitle: "Plant watering automation and travel aid",
    tags: [
      { label: "Java", color: "blue" },
      { label: "Java Spring", color: "amber" },
      { label: "Internet of Things", color: "coral" },
      { label: "Next.js", color: "teal" },
      { label: "TypeScript", color: "violet" },
    ],
    summary: "Solution leveraging on IoT devices for home automation. ",
    description: [
      `
      I have a huge garden outside my house and it is a routine every night to water the plants. However, the amount of plants might be too much 
      to handle sometimes as the garden grows, so Weather Egg is designed to automate the process of watering of plants. 
      `,
      `
      2 - 3 IoT devices would be used for data collection and execution of watering. A web-based dashboard will be used for monitoring and control
      of the devices. Additionally, some data analysis and processing may be performed tp use temperature and rain data to decide if plants require 
      watering and provide suggestions and changes to the amount of water used.
      `,
      `
      As the dashboard is used for home automation and control, I have also included the bus timings of nearby bus stops that I frequent to plan 
      my journey when I leave home. This is done so using the LTA API. 
      `,
    ],
    highlights: [
      "Use of IoT for data and control of plant watering",
      "Provides analytics and visualization of water use and temperature data",
      "Uses the LTA API for bus details, cached to prevent overuse of public API",
    ],
  },
  {
    year: "2026",
    title: "Kiyan's Portfolio Webpage",
    subtitle: "A simple portfolio webpage for software engineering",
    tags: [
      { label: "Next.js", color: "blue" },
      { label: "TypeScript", color: "violet" },
    ],
    summary:
      "This current website you are on! This website serves as a showcase of what I have built in the past and also what I'm currently working on.",
    description: [
      `This is a current work in progress. The website aims to provide a comprehensive insight into my past and current experiences, any projects that I've worked on, and projects that I'm currently working on.`,
      `I am also looking to add on a section for my photography, so do keep a look out!`,
    ],
    highlights: ["Built with Next.js, TypeScript, Bun & TailwindCSS"],
    githubUrl: "https://github.com/kynapy/kiyan-portfolio",
  },
  {
    year: "2022",
    title: "IoT Lie Detector",
    subtitle: "Lie detector analyzing biometric data, built with IoT devices",
    tags: [
      { label: "Python", color: "blue" },
      { label: "Internet of Things", color: "coral" },
    ],
    summary:
      "This project uses Wemos D1 devices to collect biometric data of the subject, and cloud computation for analysis and classification.",
    description: [
      `
      This project was built as part of the National University of Singapore (NUS)'s module CS3237 Introduction to Internet of Things. The 
      project had 3 members, and our goal was to use IoT devices for biometric data collection and result announcement, while the analysis was 
      done on the cloud with a custom trained classification model.
      `,
      `
      The main drawback of the project was the poor accuracy of the model, which is due to the low variance and quanity of training data provided.
      However, the project was a great insight into how we can leverage IoT devices as lightweight devices for data collection and small actions, while 
      we handle heavy, costly activities in the cloud.
      `,
    ],
    highlights: [
      "IoT devices for lightweight biometric data collection",
      "MQTT communication with ",
      "Custom trained classification model hosted on the cloud for data analysis & result generation",
    ],
    githubUrl: "https://github.com/kynapy/cs3237-lie-detector",
    liveUrl: "https://www.youtube.com/watch?v=vcrdLATUtsM",
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
