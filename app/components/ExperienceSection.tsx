import ExperienceCard, { Experience } from "../ui/ExperienceCard";
import SectionLabel from "../ui/SectionLabel";

// TODO: Add details to content
// TODO: Add colors to tags

const experiences: Experience[] = [
  {
    title: "Software Engineer, Data & Regulatory Reporting",
    subtitle: "Crédit Agricole Corporate & Investment Banking",
    year: "2025 - 2026",
    duration: "Present",
    summary:
      "Maintained and enhanced the existing data pipeline for regulatory reporting, ensuring compliance with evolving financial regulations and increasing trading volumes.",
    description: [
      `
      My main application is responsible for the routing of trade data from front office applications to the 
      regulatory reporting pipeline, within the regulatory pipeline, and then finally to the regulatory bodies. 
      The application is a legacy application, running on Java 8, J2EE and WildFly application server. The UI is a desktop application 
      built using Java Swing.  
    `,
      `
      On a day to day basis, I develop features to changes in regulatory requirements, improve performance and reliability of the 
      application, and improve reporting quality and quantity. 

      I also work on the application within the pipeline, which is responsible for data normalization, enrichment and transformation.
      The application is made up of distributed microservices, which are mostly built using Java 8 and Spring Boot.
    `,
    ],
    highlights: [
      "Decreased latency in application by building a database extraction and archival of old trades to S3",
      "Worked on changes in regulatory reporting for the EMIR, SFTR and CFTC reporting pipelines, leading to >99% reporting acknowledgments",
      "Enhanced application performance and reduced memory use drastically",
      "Improved reliability of FINRA TRACE FIX reporting for US equities",
    ],
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
    duration: "1 yr 1 mos",
    summary:
      "Developed a greenfield project to replace the existing legacy application for authorization request and management.",
    description: [""],
    highlights: [],
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
    duration: "6 mos",
    summary:
      "Final year intern, analyzing data from Family Medicine department for research. ",
    description: [
      `
      As a data research intern, I contributed to the main project in consent taking and data collection. 
      I also performed data cleaning, engineering, visualization, and analysis of clinical data in finding drugs efficacy for 
      chronic kidney disease (CKD).
    `,
    ],
    highlights: [
      "Published a paper as second author, analyzing the data of on CKD",
      "Published a paper in the analysis of using AI",
      "Initiated a workflow to automate transcription of focus group discussions with persons with disabilities using Azure Speech",
    ],
    tags: [{ label: "Python" }, { label: "React.js" }, { label: "TypeScript" }],
  },
  {
    title: "Software Engineer Intern",
    subtitle: "HICS Technologies",
    year: "Jan 2023 - May 2023",
    duration: "3 mos",
    summary:
      "Develop a POC for call-center automation in the healthcare context. ",
    description: [""],
    highlights: [],
    tags: [
      { label: "React.js" },
      { label: "TypeScript" },
      { label: "PostgreSQL" },
      { label: "Azure Speech" },
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-24">
      <SectionLabel index="02" label="experience" />
      <div className="flex flex-col gap-4">
        {experiences.map((e) => (
          <ExperienceCard key={e.title + e.subtitle} {...e} />
        ))}
      </div>
    </section>
  );
}
