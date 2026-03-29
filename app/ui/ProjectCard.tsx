"use client";

import { useState, useEffect, useRef } from "react";
import ColorTag from "./ColorTag";

export interface Project {
  year: string;
  title: string;
  subtitle: string;
  tags: { label: string; color?: string }[];
  summary: string;
  description: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// ─── ProfessionalWorkCard ─────────────────────────────────────────────────────────────
export default function ProjectCard({
  title,
  subtitle,
  year,
  tags,
  summary,
  description,
  highlights,
  githubUrl,
  liveUrl,
}: Project) {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false); // controls animation in
  const overlayRef = useRef<HTMLDivElement>(null);

  function handleClose() {
    setVisible(false);
    // Wait for the exit animation to finish before unmounting
    setTimeout(() => setExpanded(false), 350);
  }

  // Trigger entrance animation after mount
  useEffect(() => {
    if (expanded) {
      // tiny delay so the overlay renders before we trigger opacity/transform
      const t = setTimeout(() => setVisible(true), 10);
      return () => clearTimeout(t);
    } else {
      setVisible(false);
    }
  }, [expanded]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (expanded) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [expanded]);

  return (
    <>
      {/* ── Collapsed Card ─────────────────────────────────────────────────── */}
      <button
        onClick={() => setExpanded(true)}
        className="
          group relative w-full text-left
          bg-zinc-900 border border-zinc-800
          rounded-2xl p-6 overflow-hidden
          transition-all duration-300 ease-out
          hover:border-zinc-600 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.07)]
          hover:-translate-y-0.5
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500
        "
        aria-label={`Expand ${title} project`}
      >
        {/* Subtle grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#fff 0px,#fff 1px,transparent 1px,transparent 40px)," +
              "repeating-linear-gradient(90deg,#fff 0px,#fff 1px,transparent 1px,transparent 40px)",
          }}
        />

        {/* Glow on hover */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.04] to-transparent" />

        <div className="relative z-10 flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[11px] text-zinc-500 tracking-widest uppercase mb-1">
                {year}
              </p>
              <h3 className="text-lg font-semibold text-zinc-100 leading-tight">
                {title}
              </h3>
              <p className="text-sm text-zinc-400 mt-0.5">{subtitle}</p>
            </div>

            {/* Expand icon */}
            <span className="shrink-0 mt-1 flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-400 transition-all duration-200 group-hover:border-zinc-500 group-hover:text-zinc-200">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 11L11 1M11 1H5M11 1V7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          {/* Summary */}
          <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
            {summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <ColorTag key={t.label} {...t} />
            ))}
          </div>
        </div>
      </button>

      {/* ── Expanded Overlay ───────────────────────────────────────────────── */}
      {expanded && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          style={{ perspective: "1200px" }}
        >
          {/* Backdrop */}
          <div
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-350"
            style={{ opacity: visible ? 1 : 0 }}
          />

          {/* Expanded Card */}
          <div
            className="
              relative z-10 w-full max-w-2xl max-h-[70vh]
              bg-zinc-900 border border-zinc-700/80
              rounded-2xl shadow-[0_30px_80px_-10px_rgba(0,0,0,0.8)]
              overflow-hidden flex flex-col
            "
            style={{
              transition:
                "opacity 350ms cubic-bezier(0.16,1,0.3,1), transform 350ms cubic-bezier(0.16,1,0.3,1)",
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0) scale(1)"
                : "translateY(24px) scale(0.97)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} details`}
          >
            {/* ── Scrollable Body ── */}
            <div className="overflow-y-auto overscroll-contain flex-1 p-6 sm:p-8 scroll-smooth">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className="font-mono text-[10px] text-zinc-600 tracking-widest uppercase mb-1">
                    {year}
                  </p>
                  <h2 className="text-xl font-medium text-zinc-100">{title}</h2>
                  <p className="text-zinc-400 text-sm mt-1">{subtitle}</p>
                </div>

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="
                    shrink-0 flex h-8 w-8 items-center justify-center
                    rounded-lg border border-zinc-700 bg-zinc-800
                    text-zinc-400 transition-all duration-150
                    hover:border-zinc-500 hover:text-zinc-100 hover:bg-zinc-700
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500
                  "
                  aria-label="Close"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M1 1L11 11M11 1L1 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {tags.map((t) => (
                  <ColorTag key={t.label} {...t} />
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-zinc-800 mb-6" />

              {/* Description */}
              <h4 className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-3">
                Overview
              </h4>
              <div className="text-zinc-300 text-sm leading-relaxed mb-4">
                {description}
                {/* {description.map((d, i) => ( */}
                {/*   <p key={i} className="pb-3"> */}
                {/*     {d} */}
                {/*   </p> */}
                {/* ))} */}
              </div>

              {/* Highlights */}
              {highlights.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-3">
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-zinc-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(githubUrl || liveUrl) && (
                <>
                  <div className="h-px bg-zinc-800 my-5" />
                  <div className="flex flex-wrap gap-3">
                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700
                          text-zinc-400 text-sm font-mono transition-all hover:border-zinc-500 hover:text-zinc-100"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 15 15"
                          fill="currentColor"
                        >
                          <path d="M7.5 0C3.36 0 0 3.36 0 7.5c0 3.315 2.15 6.122 5.13 7.115.375.07.513-.163.513-.362 0-.178-.007-.652-.01-1.28-2.088.454-2.529-1.006-2.529-1.006-.341-.867-.833-1.097-.833-1.097-.681-.466.052-.457.052-.457.752.053 1.148.773 1.148.773.668 1.145 1.754.815 2.18.623.068-.484.261-.815.475-1.003-1.667-.19-3.42-.834-3.42-3.71 0-.82.292-1.49.772-2.015-.078-.19-.335-.953.073-1.987 0 0 .63-.201 2.063.77A7.19 7.19 0 017.5 3.64c.638.003 1.28.086 1.879.253 1.431-.971 2.06-.77 2.06-.77.41 1.034.153 1.797.075 1.987.482.525.771 1.195.771 2.015 0 2.884-1.756 3.518-3.428 3.704.27.232.51.69.51 1.39 0 1.004-.009 1.813-.009 2.06 0 .2.136.435.516.361C12.853 13.619 15 10.813 15 7.5 15 3.36 11.64 0 7.5 0z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                          bg-zinc-100 text-zinc-900 text-sm font-mono transition-all hover:bg-white"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
