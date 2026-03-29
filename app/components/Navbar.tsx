export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-10 flex items-center justify-between px-10 py-7
        border-b border-zinc-900 bg-[rgba(12,12,13,0.88)] backdrop-blur-md"
    >
      <span className="font-mono text-[13px] text-zinc-500 tracking-wider">
        Kiyan Ang
      </span>
      <div className="flex gap-7">
        {["about", "experience", "projects"].map((s) => (
          <a
            key={s}
            href={`#${s}`}
            className="font-mono text-[13px] text-zinc-600 hover:text-zinc-300 transition-colors tracking-wide"
          >
            {s}
          </a>
        ))}
      </div>
    </nav>
  );
}
