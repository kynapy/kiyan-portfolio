export default function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-[10px] text-zinc-700 tracking-[0.18em] uppercase">
        {index} — {label}
      </span>
      <div className="flex-1 h-px bg-zinc-900" />
    </div>
  );
}
