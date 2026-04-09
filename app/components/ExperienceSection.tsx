import ExperienceCard, { Experience } from "../ui/ExperienceCard";
import SectionLabel from "../ui/SectionLabel";

const experiences: Experience[] = [
  {
    title: "Software Engineer, Data & Regulatory Reporting",
    subtitle: "Crédit Agricole Corporate & Investment Banking",
    year: "Mar 2025 - Current",
    duration: "1 yr +",
    summary:
      "Enhanced the existing data pipeline for regulatory reporting, ensuring compliance with evolving financial regulations and increasing trading volumes.",
    description: [
      `
      My main application is responsible for the routing of trade data from front office applications to the 
      regulatory reporting pipeline, within the regulatory pipeline, and then finally to the regulatory bodies. 
      The application is built using Java 8 & J2EE, while the UI is a desktop application built using Java Swing. 
      `,
      `
      I develop features to changes in regulatory requirements, improve performance and reliability of the 
      application, and improve reporting quality and quantity. I also work on the application within the pipeline, which is responsible for 
      data normalization, enrichment and transformation. 
      `,
    ],
    highlights: [
      "Decreased database latency by building a database extraction and archival pipeline of old trades to S3",
      "Worked on business changes in regulatory reporting for the EMIR, SFTR and CFTC reporting pipelines",
      "Enhanced application performance and reduced memory use drastically",
      "Improved reliability of FINRA TRACE FIX protocol reporting for US securities",
      "Inreased EMIR reporting acknowledgements to 99%, above the industry standards",
    ],
    tags: [
      { label: "Java", color: "bg-green-800" },
      { label: "Java Spring", color: "bg-yellow-700" },
      { label: "J2EE", color: "bg-orange-800" },
      { label: "WildFly", color: "bg-violet-500" },
      { label: "IBM MQ", color: "bg-orange-700" },
      { label: "MS SQL", color: "bg-rose-950" },
      { label: "Python", color: "bg-slate-700" },
      { label: "Linux", color: "bg-mauve-800" },
    ],
  },
  {
    title: "Software Engineer, Identity & Access Management",
    subtitle: "Crédit Agricole Corporate & Investment Banking",
    year: "Feb 2024 - Mar 2025",
    duration: "1 yr 1 mos",
    summary:
      "Developed a greenfield project to replace the existing legacy application for fileshare and active directory authorization request and management.",
    description: [
      `
      The application served as a replacement to the existing legacy application for fileshare and active directory autorization request 
      and management. The application is used by all global staff within the organization for access management and provisioning. 
      `,
      `
      The frontend is built with TypeScript and React.js, while the backend uses Java 18, Spring Boot & PostgreSQL. The application also uses 
      RabbitMQ for messaging to the provisioning team for actions to be taken.  
      `,
    ],
    highlights: [
      "Created a flexible framework for rendering stateful components from a JavaScript object",
      "Served as the key frontend developer, developing 90% of all the pages",
      "Designed and implemented 100% of reusable custom components",
      "Collaborated on Spring Boot back-end services, contributing REST API endpoints and integration with the frontend",
      "Successfully developed and delivered a full-stack application from start to production",
    ],
    tags: [
      { label: "Java", color: "bg-green-800" },
      { label: "Java Spring Boot", color: "bg-rose-950" },
      { label: "React.js", color: "bg-blue-900" },
      { label: "TypeScript", color: "bg-pink-800" },
      { label: "PostgreSQL", color: "bg-cyan-800" },
    ],
  },
  {
    title: "Data Research Intern",
    subtitle: "National University Polyclinics",
    year: "Jul 2023 - Dec 2023",
    duration: "6 mos",
    summary:
      "Final year intern, performing data analysis in the Family Medicine Department for healthcare research aiming to improve healthcare outcomes in Singapore. ",
    description: [
      `
      As a data research intern, I conducted data collection, cleaning, engineering, visualization and 
      analysis of data for the research in the Family Medicine Department. Our key research was on the 
      study of antimicrobial resistance in primary care. 
      `,
      `
      Additionally, I embarked as a second author on a research paper with my principal investigator. 
      Our paper involved looking into the five-year outcomes of HALT-CKD, a nationwide programme
      aiming to identify factors influencing disease progression in early chronic kidney disease (CKD) 
      patients.
      `,
      `
      To enhance the efficiency in my department, I promoted the use of Azure Speech for Text-to-Speech (TTS) 
      conversion to speed up the transcription of interview recordings for qualitative studies. I also 
      assisted in other research work, such as a study on using AI for patient complaint classification.
      `,
    ],
    highlights: [
      "Published a paper as second author, performed data analysis and engineering on HALT-CKD data",
      "Published a paper on the study of using AI for patient complaint classification",
      "Initiated a workflow to automate transcription of focus group discussions with persons with disabilities using Azure Speech",
    ],
    tags: [
      { label: "Python", color: "bg-slate-700" },
      { label: "Pandas", color: "bg-olive-700" },
      { label: "Matplotlib", color: "bg-taupe-950" },
      { label: "Azure Speech", color: "bg-purple-900" },
    ],
  },
  {
    title: "Software Engineer Intern",
    subtitle: "HICS Technologies",
    year: "Jan 2023 - May 2023",
    duration: "3 mos",
    summary:
      "Developed a POC to automate the functions of a call-center for hospital appointment management.",
    description: [
      `
      During this internship, I built a proof of concept (POC) product with a fellow intern, which
      aimed to automate the processes of hosital call center. The POC was designed to enable seamless 
      voice chat with the user, and allow for appointment creation and modification. The POC supported 
      appointment management for multiple hospitals, specializations, and doctors. 
      `,
      `
      The POC's user interface was built a web front-end with React and TypeScript, which was the 
      interface for them to initiate a call. The front-end had a WebSocket connection to Azure's Speech 
      Services, which handled the Speech-to-Text (STT). The text was then sent to the backend, built 
      with Azure's Bot Framework and .NET for processing. The backend handled the requests and actions 
      to be performed and returned a text response. This text response was then converted back to speech using Azure's Text-to-Speech (TTS) 
      and spoken back to the user.
      `,
      `
      A PostgreSQL database stored patient details, doctor appointment and availabilities, as well as 
      existing appointments as part of the simulation for the backend to modify 
      based on the actions required.
      `,
    ],
    highlights: [
      "Deployed my first full-stack POC",
      "Use of WebSocket connection for bidirectional communication for live chat",
      "RESTful communication between UI and Bot Framework backend",
      "Use of Azure PaaS such as Azure Service & Azure Bot Framework",
    ],
    tags: [
      { label: "React.js", color: "bg-blue-900" },
      { label: "TypeScript", color: "bg-pink-800" },
      { label: "Azure Speech", color: "bg-purple-900" },
      { label: "Azure Bot Framework", color: "bg-taupe-800" },
      { label: "PostgreSQL", color: "bg-cyan-800" },
      { label: "C#", color: "bg-emerald-900" },
      { label: ".NET" },
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
