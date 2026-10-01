"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import type { Area, CV, Project } from "@/data/cv"

type UI = CV["ui"]
type Lightbox = { project: Project; index: number }

const AREAS: Area[] = ["java", "python", "web", "cpp", "ml"]

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  )
}

function imageSrc(project: Project, file: string) {
  return `/proyectos/${project.slug}/${file}`
}

function Gallery({ project, ui, onOpen }: { project: Project; ui: UI; onOpen: (index: number) => void }) {
  const images = project.images ?? []
  if (images.length === 0) return null
  return (
    <div className="cv-gallery mt-5" aria-label={`${ui.projects.gallery}: ${project.name}`}>
      <div className={`grid gap-2 ${images.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
        {images.map((img, i) => (
          <button
            key={img.file}
            onClick={() => onOpen(i)}
            className={`group/img relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] ${
              images.length === 3 && i === 0 ? "col-span-2" : ""
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- export estático, sin optimizador */}
            <img
              src={imageSrc(project, img.file)}
              alt={img.alt}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover object-top transition duration-300 group-hover/img:scale-[1.03]"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, ui, onOpen }: { project: Project; ui: UI; onOpen: (index: number) => void }) {
  return (
    <article className="cv-card flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[var(--glow)]/50 hover:bg-white/[0.05]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        <span className="font-mono text-xs text-white/50">{project.period}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{project.summary}</p>
      <ul className="cv-detail mt-4 space-y-2 text-sm text-white/65">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--glow)]" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <Gallery project={project} ui={ui} onOpen={onOpen} />
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <Chip key={s}>{s}</Chip>
        ))}
      </div>
      {(project.links?.length || project.note) && (
        <div className="mt-auto flex flex-wrap gap-4 pt-5 text-sm">
          {project.links?.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="font-medium text-[var(--glow)] hover:underline">
              {l.label} →
            </a>
          ))}
          {project.note && <span className="text-white/40">{project.note}</span>}
        </div>
      )}
    </article>
  )
}

function LightboxDialog({ state, ui, onClose, onMove }: { state: Lightbox; ui: UI; onClose: () => void; onMove: (d: number) => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  const images = state.project.images ?? []
  const img = images[state.index]

  useEffect(() => {
    const dialog = ref.current
    if (dialog && !dialog.open) dialog.showModal()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onMove(1)
      if (e.key === "ArrowLeft") onMove(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onMove])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="m-auto max-h-[92vh] w-[min(1200px,94vw)] rounded-2xl border border-white/15 bg-neutral-950 p-0 text-white backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
        <p className="truncate text-sm text-white/80">
          {state.project.name} · <span className="text-white/50">{img.alt}</span>
        </p>
        <div className="flex shrink-0 items-center gap-2 text-sm">
          <span className="font-mono text-xs text-white/45">
            {state.index + 1} / {images.length}
          </span>
          <button onClick={() => onMove(-1)} aria-label={ui.projects.prev} className="rounded-full px-2 py-1 hover:bg-white/10">
            ←
          </button>
          <button onClick={() => onMove(1)} aria-label={ui.projects.next} className="rounded-full px-2 py-1 hover:bg-white/10">
            →
          </button>
          <button onClick={onClose} className="rounded-full px-3 py-1 hover:bg-white/10">
            {ui.projects.close} ✕
          </button>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element -- export estático, sin optimizador */}
      <img src={imageSrc(state.project, img.file)} alt={img.alt} className="max-h-[80vh] w-full object-contain" />
    </dialog>
  )
}

export function Projects({ projects, others, ui }: { projects: Project[]; others: CV["otherProjects"]; ui: UI }) {
  const [area, setArea] = useState<Area | "all">("all")
  const [lightbox, setLightbox] = useState<Lightbox | null>(null)
  const p = ui.projects

  const visible = projects.filter((pr) => area === "all" || (pr.areas as Area[]).includes(area))
  const groups = [
    { title: p.iaTitle, text: p.iaText, items: visible.filter((pr) => pr.kind === "ia") },
    { title: p.ownTitle, text: p.ownText, items: visible.filter((pr) => pr.kind === "propio") },
  ]

  const move = (d: number) =>
    setLightbox((lb) => {
      if (!lb) return lb
      const n = lb.project.images?.length ?? 1
      return { ...lb, index: (lb.index + d + n) % n }
    })

  return (
    <>
      <div role="radiogroup" aria-label={p.filterLabel} className="cv-no-print flex flex-wrap gap-2">
        {(["all", ...AREAS] as const).map((a) => (
          <button
            key={a}
            role="radio"
            aria-checked={area === a}
            onClick={() => setArea(a)}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
              area === a
                ? "border-[var(--glow)] bg-[var(--glow)] font-medium text-black"
                : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
            }`}
          >
            {a === "all" ? p.filterAll : ui.areas[a]}
          </button>
        ))}
      </div>

      {visible.length === 0 && <p className="mt-10 text-white/50">{p.empty}</p>}

      {groups.map(
        (g) =>
          g.items.length > 0 && (
            <div key={g.title} className="mt-12 first-of-type:mt-10">
              <h3 className="text-xl font-semibold text-white">{g.title}</h3>
              <p className="mt-2 max-w-3xl text-white/60">{g.text}</p>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {g.items.map((pr) => (
                  <ProjectCard key={pr.slug} project={pr} ui={ui} onOpen={(index) => setLightbox({ project: pr, index })} />
                ))}
              </div>
            </div>
          ),
      )}

      <h3 className="mt-16 text-xl font-semibold text-white">{p.otherTitle}</h3>
      <ul className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10">
        {others.map((o) => (
          <li key={o.name} className="flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:gap-6">
            <div className="sm:w-56 sm:shrink-0">
              {o.href ? (
                <a href={o.href} target="_blank" rel="noreferrer" className="font-medium text-white hover:text-[var(--glow)]">
                  {o.name} →
                </a>
              ) : (
                <span className="font-medium text-white">{o.name}</span>
              )}
            </div>
            <p className="flex-1 text-sm text-white/65">{o.description}</p>
            <span className="font-mono text-xs text-white/45 sm:text-right">{o.stack}</span>
          </li>
        ))}
      </ul>

      {lightbox && <LightboxDialog state={lightbox} ui={ui} onClose={() => setLightbox(null)} onMove={move} />}
    </>
  )
}
