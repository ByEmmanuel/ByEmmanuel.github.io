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

const hasImages = (p: Project) => (p.images?.length ?? 0) > 0

function imageSrc(project: Project, file: string) {
  return `/proyectos/${project.slug}/${file}`
}

function Gallery({ project, ui, onOpen }: { project: Project; ui: UI; onOpen: (index: number) => void }) {
  const images = project.images ?? []
  if (images.length === 0) return null
  return (
    <div className="cv-gallery mt-5" aria-label={`${ui.projects.gallery}: ${project.name}`}>
      <div
        className={`-mx-6 flex snap-x snap-mandatory gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] sm:mx-0 sm:grid sm:overflow-visible sm:px-0 sm:pb-0 ${
          images.length === 1 ? "sm:max-w-sm sm:grid-cols-1" : images.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
        }`}
      >
        {images.map((img, i) => {
          const cols = images.length === 3 ? 3 : images.length === 1 ? 1 : 2
          const col = i % cols
          const row = Math.floor(i / cols)
          const x = col === 0 ? "left" : col === cols - 1 ? "right" : "center"
          const y = row === 0 ? "top" : "bottom"
          return (
            <button
              key={img.file}
              onClick={() => onOpen(i)}
              aria-label={`${ui.projects.gallery}: ${img.alt}`}
              style={{ transformOrigin: `${x} ${y}` }}
              className={`relative w-[85%] shrink-0 cursor-zoom-in snap-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] transition duration-200 sm:w-auto sm:hover:z-20 sm:hover:scale-[1.6] sm:hover:border-white/30 sm:hover:shadow-2xl sm:hover:shadow-black ${
                images.length === 1 ? "w-full" : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- export estático, sin optimizador */}
              <img
                src={imageSrc(project, img.file)}
                alt={img.alt}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-top sm:aspect-video"
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm text-white/65">
      {items.map((h) => (
        <li key={h} className="flex gap-2">
          <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--glow)]" />
          <span>{h}</span>
        </li>
      ))}
    </ul>
  )
}

function Links({ project }: { project: Project }) {
  if (!project.links?.length && !project.note) return null
  return (
    <div className="mt-auto flex flex-wrap gap-4 pt-5 text-sm">
      {project.links?.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="font-medium text-[var(--glow)] hover:underline">
          {l.label} →
        </a>
      ))}
      {project.note && <span className="text-white/40">{project.note}</span>}
    </div>
  )
}

// Proyecto con capturas: tarjeta grande con galería.
function ProjectCard({ project, ui, onOpen }: { project: Project; ui: UI; onOpen: (index: number) => void }) {
  return (
    <article className="cv-card flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[var(--glow)]/50 hover:bg-white/[0.05]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        <span className="font-mono text-xs text-white/50">{project.period}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{project.summary}</p>
      <div className="cv-detail">
        <Highlights items={project.highlights} />
      </div>
      <Gallery project={project} ui={ui} onOpen={onOpen} />
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <Chip key={s}>{s}</Chip>
        ))}
      </div>
      <Links project={project} />
    </article>
  )
}

// Proyecto sin capturas: tarjeta compacta con los detalles plegados.
function CompactCard({ project, ui, open = false }: { project: Project; ui: UI; open?: boolean }) {
  return (
    <article className="cv-card flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-[var(--glow)]/40">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <h3 className="font-semibold text-white">{project.name}</h3>
        <span className="font-mono text-[11px] text-white/45">{project.period}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{project.summary}</p>
      <details open={open} className="cv-detail group/d mt-3 text-sm">
        <summary className="cursor-pointer list-none text-xs font-medium text-white/50 hover:text-white [&::-webkit-details-marker]:hidden">
          <span className="inline-block transition group-open/d:rotate-90">▸</span> {ui.projects.showDetails}
        </summary>
        <Highlights items={project.highlights} />
      </details>
      <p className="mt-4 font-mono text-xs leading-relaxed text-white/45">{project.stack.join(" · ")}</p>
      <Links project={project} />
    </article>
  )
}

function LightboxDialog({ state, ui, onClose, onMove }: { state: Lightbox; ui: UI; onClose: () => void; onMove: (d: number) => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  const touchX = useRef(0)
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
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 50) onMove(dx < 0 ? 1 : -1)
      }}
      className="m-auto h-dvh max-h-dvh w-screen max-w-none border-0 bg-neutral-950 p-0 text-white backdrop:bg-black/80 backdrop:backdrop-blur-sm sm:h-auto sm:max-h-[92vh] sm:w-[min(1200px,94vw)] sm:rounded-2xl sm:border sm:border-white/15"
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <p className="min-w-0 truncate text-sm text-white/80">
          {state.project.name}
          <span className="hidden text-white/50 sm:inline"> · {img.alt}</span>
        </p>
        <div className="flex shrink-0 items-center gap-2 text-sm">
          <span className="font-mono text-xs text-white/45">
            {state.index + 1} / {images.length}
          </span>
          <button onClick={onClose} className="rounded-full px-3 py-1 hover:bg-white/10">
            {ui.projects.close} ✕
          </button>
        </div>
      </div>
      <div className="relative flex h-[calc(100dvh-170px)] items-center justify-center bg-black sm:h-[72vh]">
        {/* eslint-disable-next-line @next/next/no-img-element -- export estático, sin optimizador */}
        <img
          key={img.file}
          src={imageSrc(state.project, img.file)}
          alt={img.alt}
          className="max-h-full max-w-full object-contain"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={() => onMove(-1)}
              aria-label={ui.projects.prev}
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xl backdrop-blur transition hover:bg-white/20 sm:left-4"
            >
              ←
            </button>
            <button
              onClick={() => onMove(1)}
              aria-label={ui.projects.next}
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xl backdrop-blur transition hover:bg-white/20 sm:right-4"
            >
              →
            </button>
          </>
        )}
      </div>
      <div className="flex flex-col items-center gap-2 px-4 py-3">
        {images.length > 1 && (
          <div className="flex gap-2">
            {images.map((im, i) => (
              <button
                key={im.file}
                onClick={() => onMove(i - state.index)}
                aria-label={im.alt}
                aria-current={i === state.index}
                className={`h-12 w-20 overflow-hidden rounded-md border transition ${
                  i === state.index ? "border-[var(--glow)] opacity-100" : "border-white/15 opacity-50 hover:opacity-90"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- export estático, sin optimizador */}
                <img src={imageSrc(state.project, im.file)} alt="" className="h-full w-full object-cover object-top" />
              </button>
            ))}
          </div>
        )}
        <p className="text-center text-xs text-white/55 sm:hidden">{img.alt}</p>
      </div>
    </dialog>
  )
}

// Escalera: un proyecto con capturas junto a uno sin capturas, alternando el lado en cada fila,
// para que las imágenes no acaparen toda la atención. Lo que sobra se acomoda debajo.
function Ladder({ items, ui, onOpen }: { items: Project[]; ui: UI; onOpen: (project: Project, index: number) => void }) {
  const withImg = items.filter(hasImages)
  const plain = items.filter((pr) => !hasImages(pr))
  const rows = Math.min(withImg.length, plain.length)
  const restImg = withImg.slice(rows)
  const restPlain = plain.slice(rows)

  return (
    <div className="mt-8 space-y-5">
      {Array.from({ length: rows }, (_, i) => {
        const big = (
          <ProjectCard key={withImg[i].slug} project={withImg[i]} ui={ui} onOpen={(index) => onOpen(withImg[i], index)} />
        )
        const small = (
          <div key={plain[i].slug} className="md:self-stretch [&>article]:h-full">
            <CompactCard project={plain[i]} ui={ui} open />
          </div>
        )
        const bigFirst = i % 2 === 0
        return (
          <div
            key={withImg[i].slug}
            className={`grid gap-5 ${bigFirst ? "md:grid-cols-[1.1fr_1fr]" : "md:grid-cols-[1fr_1.1fr]"}`}
          >
            {bigFirst ? big : small}
            {bigFirst ? small : big}
          </div>
        )
      })}
      {restImg.length > 0 && (
        <div className="grid gap-5 md:grid-cols-2">
          {restImg.map((pr) => (
            <ProjectCard key={pr.slug} project={pr} ui={ui} onOpen={(index) => onOpen(pr, index)} />
          ))}
        </div>
      )}
      {restPlain.length > 0 && (
        <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {restPlain.map((pr) => (
            <CompactCard key={pr.slug} project={pr} ui={ui} />
          ))}
        </div>
      )}
    </div>
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
      <div role="radiogroup" aria-label={p.filterLabel} className="cv-no-print -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
        {(["all", ...AREAS] as const).map((a) => (
          <button
            key={a}
            role="radio"
            aria-checked={area === a}
            onClick={() => setArea(a)}
            className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition ${
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
              <Ladder items={g.items} ui={ui} onOpen={(project, index) => setLightbox({ project, index })} />
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
