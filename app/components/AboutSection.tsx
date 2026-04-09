import SectionLabel from "../ui/SectionLabel";

// TODO: Find and add a suitable photo
// TODO: Add or remove CV section

const AboutSection = () => {
  return (
    <section id="about" className="mb-24">
      <SectionLabel index="01" label="about" />
      <h1
        className="font-[family-name:var(--font-instrument-serif)] text-[clamp(38px,6vw,56px)]
            leading-[1.08] text-zinc-100 mb-2 font-normal"
      >
        Building solutions
        <br />
        for <em className="italic text-zinc-500">real-world problems.</em>
      </h1>
      <p className="font-mono text-[11px] text-zinc-600 tracking-[0.12em] uppercase mb-8">
        Software Engineer · Singapore
      </p>
      <div className="text-[15px] text-[#aeada6] leading-[1.8] max-w-[560px] space-y-4">
        <p>
          I'm a full-stack engineer with 2+ years of experience turning hard
          problems into clean, scalable systems. I enjoy tackling real-world
          problems by designing and building solutions to solve them. With a
          major in Life Sciences and a minor in Computer Sciences, I use my
          analytical skills and my technical skillset to creatively solve
          problems.
        </p>
        <p>
          Currently working on improving the trade regulatory reporting pipeline
          at Credit Agricole Corporate & Investment Bank. In my free time, I
          enjoy photography and tinkering with IoT devices.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 mt-7">
        <a
          href="https://drive.google.com/file/d/10AA-4tk_ks6Srtv5QXiTJMjYcwSAXsDa/view?usp=sharing"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900
                text-[13px] font-mono transition-all hover:bg-white"
        >
          My Résumé
        </a>
        {[
          { label: "GitHub ↗", href: "https://github.com/kynapy" },
          { label: "LinkedIn ↗", href: "https://linkedin.com/in/kiyan-ang" },
          { label: "Contact Me ↗", href: "mailto:apyoung11@gmail.com" },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="inline-flex items-center px-4 py-2 rounded-lg border border-zinc-800
                  text-zinc-400 text-[13px] font-mono transition-all hover:border-zinc-600 hover:text-zinc-200"
          >
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
