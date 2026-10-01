import type { CSSProperties, ReactNode } from "react"
import { Hero } from "@/components/hero"
import {
  about,
  aiKnowledge,
  certifications,
  featuredProjects,
  icpc,
  languages,
  otherProjects,
  profile,
  skills,
  softSkills,
  type Project,
} from "@/data/cv"
import { ICE } from "@/lib/presets"

function Section({ id, title, kicker, children }: { id: string; title: string; kicker: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl scroll-mt-8 px-4 py-16 sm:px-6 md:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--glow)]">{kicker}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  )
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[var(--glow)]/50 hover:bg-white/[0.05]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        <span className="font-mono text-xs text-white/50">{project.period}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{project.summary}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/65">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--glow)]" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <Chip key={s}>{s}</Chip>
        ))}
      </div>
      {(project.links?.length || project.note) && (
        <div className="mt-auto flex flex-wrap gap-4 pt-5 text-sm">
          {project.links?.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[var(--glow)] hover:underline"
            >
              {l.label} →
            </a>
          ))}
          {project.note && <span className="text-white/40">{project.note}</span>}
        </div>
      )}
    </article>
  )
}

export default function Page() {
  const iaProjects = featuredProjects.filter((p) => p.kind === "ia")
  const ownProjects = featuredProjects.filter((p) => p.kind === "propio")

  return (
    <div id="cv-root" style={{ "--glow": ICE.accent } as CSSProperties} className="bg-black text-white">
      <Hero />

      <nav className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-5 overflow-x-auto px-4 py-3 text-sm text-white/60 sm:px-6">
          {[
            ["sobre-mi", "Sobre mí"],
            ["stack", "Stack"],
            ["proyectos", "Proyectos"],
            ["ia", "IA"],
            ["icpc", "ICPC"],
            ["formacion", "Formación"],
            ["contacto", "Contacto"],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`} className="shrink-0 hover:text-white">
              {label}
            </a>
          ))}
        </div>
      </nav>

      <main>
        <Section id="sobre-mi" kicker="01 · Perfil" title="Sobre mí">
          <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
            <div className="space-y-4 text-base leading-relaxed text-white/75 sm:text-lg">
              {about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Habilidades</h3>
              <ul className="mt-4 space-y-2 text-white/75">
                {softSkills.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span aria-hidden className="text-[var(--glow)]">▸</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="stack" kicker="02 · Skills técnicas" title="Stack">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((g) => (
              <div key={g.group} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-sm font-semibold text-white">{g.group}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {g.items.map((i) => (
                    <Chip key={i}>{i}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="proyectos" kicker="03 · Proyectos" title="Proyectos y experiencia">
          <h3 className="text-xl font-semibold text-white">Construidos con agentes de IA</h3>
          <p className="mt-2 max-w-3xl text-white/60">
            Proyectos donde uso agentes de IA (Claude Code) durante todo el desarrollo: diseño de arquitectura,
            esquemas de base de datos e integración de APIs externas, para resolver problemas reales.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {iaProjects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>

          <h3 className="mt-16 text-xl font-semibold text-white">Proyectos propios</h3>
          <p className="mt-2 max-w-3xl text-white/60">Desarrollados de forma tradicional, de principio a fin.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {ownProjects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>

          <h3 className="mt-16 text-xl font-semibold text-white">Otros proyectos</h3>
          <ul className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10">
            {otherProjects.map((p) => (
              <li key={p.name} className="flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:gap-6">
                <div className="sm:w-56 sm:shrink-0">
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noreferrer" className="font-medium text-white hover:text-[var(--glow)]">
                      {p.name} →
                    </a>
                  ) : (
                    <span className="font-medium text-white">{p.name}</span>
                  )}
                </div>
                <p className="flex-1 text-sm text-white/65">{p.description}</p>
                <span className="font-mono text-xs text-white/45 sm:text-right">{p.stack}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="ia" kicker="04 · Especialización" title="IA y automatización">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiKnowledge.map((k) => (
              <div key={k.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-semibold text-white">{k.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{k.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="icpc" kicker="05 · Programación competitiva" title="ICPC">
          <ul className="grid gap-3 md:grid-cols-2">
            {icpc.map((i) => (
              <li key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white/75">
                {i}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="formacion" kicker="06 · Educación" title="Formación y certificaciones">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-white">Ingeniería en Computación</h3>
                <p className="text-sm text-white/60">Universidad de Guadalajara (CUCEI) · 2023 – presente · 7.º semestre</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Idiomas</h3>
                <ul className="mt-3 space-y-1 text-white/75">
                  {languages.map((l) => (
                    <li key={l.name}>
                      {l.name} <span className="text-white/45">· {l.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ul className="divide-y divide-white/10 rounded-2xl border border-white/10">
              {certifications.map((c) => (
                <li key={c.title} className="flex flex-wrap items-baseline justify-between gap-2 p-4">
                  <span className="text-white/85">{c.title}</span>
                  <span className="text-sm text-white/45">
                    {c.issuer}
                    {c.detail && ` · ${c.detail}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="contacto" kicker="07 · Contacto" title="Hablemos">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Correo", value: profile.email, href: `mailto:${profile.email}` },
              { label: "Teléfono", value: profile.phone, href: `tel:+523330609463` },
              { label: "GitHub", value: "github.com/ByEmmanuel", href: profile.github },
              { label: "Ubicación", value: profile.location },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-wider text-white/45">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="mt-2 block break-words font-medium text-white hover:text-[var(--glow)]">
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-2 font-medium text-white">{c.value}</p>
                )}
              </div>
            ))}
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-white/40">
        {profile.name} · {new Date().getFullYear()}
      </footer>
    </div>
  )
}
