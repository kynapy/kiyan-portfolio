import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ProjectCardDemo } from "./ui/ContentCard";
import { ProfessionalExperience } from "./components/ProfessionalWork";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center font-sans ">
      <Header />
      <Footer />
      <ProfessionalExperience />
      {/* <ProjectCardDemo /> */}
    </div>
  );
}
