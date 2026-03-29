import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0d] text-zinc-100 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="mx-auto max-w-[880px] px-6 py-20 pb-32 font-sans">
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
      </main>
      <footer className="border-t border-zinc-900 py-10 text-center font-mono text-[12px] text-zinc-700">
        Designed & built by Kiyan Ang · 2026
      </footer>
    </div>
  );
}
