import type { CSSProperties, ReactNode } from "react"
import { Hero } from "@/components/hero"
import { Chip, Projects } from "@/components/projects"
import { TopBar } from "@/components/top-bar"
import { localize, type Lang } from "@/data/cv"
import { ICE } from "@/lib/presets"

function Section({ id, title, kicker, children }: { id: string; title: string; kicker: string; children: ReactNode }) {
  return (
    <section id={id} className="cv-section mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--glow)]">{kicker}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  )
}

export function CVPage({ lang }: { lang: Lang }) {
  const cv = localize(lang)
  const { profile, ui } = cv
  const s = ui.sections

  return (
    <div style={{ "--glow": ICE.accent } as CSSProperties} className="bg-black text-white">
      <Hero profile={profile} ui={ui} />
      <TopBar lang={lang} ui={ui} />

      <main>
        <Section id="sobre-mi" kicker={s.about.kicker} title={s.about.title}>
          <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
            <div className="space-y-4 text-base leading-relaxed text-white/75 sm:text-lg">
              {cv.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">{s.softSkills}</h3>
              <ul className="mt-4 space-y-2 text-white/75">
                {cv.softSkills.map((sk) => (
                  <li key={sk} className="flex gap-2">
                    <span aria-hidden className="text-[var(--glow)]">▸</span>
                    {sk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="stack" kicker={s.stack.kicker} title={s.stack.title}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cv.skills.map((g) => (
              <div key={g.group} className="cv-card rounded-2xl border border-white/10 bg-white/[0.03] p-5">
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

        <Section id="proyectos" kicker={s.projects.kicker} title={s.projects.title}>
          <Projects projects={cv.projects} others={cv.otherProjects} ui={ui} />
        </Section>

        <Section id="trayectoria" kicker={s.timeline.kicker} title={s.timeline.title}>
          <ol className="relative ml-2 border-l border-white/15">
            {cv.timeline.map((t) => (
              <li key={t.title + t.date} className="relative pb-10 pl-8 last:pb-0">
                <span aria-hidden className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-black bg-[var(--glow)]" />
                <p className="font-mono text-xs text-white/50">{t.date}</p>
                <h3 className="mt-1 font-semibold text-white">{t.title}</h3>
                <p className="mt-1 text-sm text-white/65">{t.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="ia" kicker={s.ai.kicker} title={s.ai.title}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cv.aiKnowledge.map((k) => (
              <div key={k.title} className="cv-card rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-semibold text-white">{k.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{k.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="icpc" kicker={s.icpc.kicker} title={s.icpc.title}>
          <ul className="grid gap-3 md:grid-cols-2">
            {cv.icpc.map((i) => (
              <li key={i} className="cv-card rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white/75">
                {i}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="formacion" kicker={s.education.kicker} title={s.education.title}>
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-white">{cv.education.degree}</h3>
                <p className="text-sm text-white/60">{cv.education.school}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">{s.languages}</h3>
                <ul className="mt-3 space-y-1 text-white/75">
                  {cv.languages.map((l) => (
                    <li key={l.name}>
                      {l.name} <span className="text-white/45">· {l.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ul className="divide-y divide-white/10 rounded-2xl border border-white/10">
              {cv.certifications.map((c) => (
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

        <Section id="contacto" kicker={s.contact.kicker} title={s.contact.title}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: ui.contact.email, value: profile.email, href: `mailto:${profile.email}` },
              { label: ui.contact.phone, value: profile.phone, href: profile.phoneHref },
              { label: ui.contact.github, value: "github.com/ByEmmanuel", href: profile.github },
              { label: ui.contact.location, value: profile.location },
            ].map((c) => (
              <div key={c.label} className="cv-card rounded-2xl border border-white/10 bg-white/[0.03] p-5">
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
