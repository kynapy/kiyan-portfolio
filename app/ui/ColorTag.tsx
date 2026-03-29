export default function ColorTag({
  label,
  color = "",
}: {
  label: string;
  color?: string;
}) {
  const colorMap: Record<string, string> = {
    blue: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    teal: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    amber: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    coral: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    violet: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-mono border
        ${colorMap[color] ?? "bg-white/[0.04] text-zinc-400 border-white/[0.06]"}`}
    >
      {label}
    </span>
  );
}
