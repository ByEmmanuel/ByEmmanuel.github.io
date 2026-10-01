"use client"

import type { CV, Lang } from "@/data/cv"
import { setPref, usePref } from "@/lib/prefs"

function Toggle<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: T
  options: { value: T; label: string }[]
  onChange: (v: T) => void
}) {
  return (
    <div role="radiogroup" aria-label={label} className="flex items-center gap-1.5">
      <span className="hidden text-xs text-white/45 sm:inline">{label}</span>
      <div className="flex rounded-full border border-white/15 bg-white/[0.04] p-0.5">
        {options.map((o) => (
          <button
            key={o.value}
            role="radio"
            aria-checked={value === o.value}
            onClick={() => onChange(o.value)}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition ${
              value === o.value ? "bg-[var(--glow)] text-black" : "text-white/65 hover:text-white"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export function TopBar({ lang, ui }: { lang: Lang; ui: CV["ui"] }) {
  const images = usePref("images")
  const detail = usePref("detail")
  const c = ui.controls

  const links: [string, string][] = [
    ["sobre-mi", ui.nav.about],
    ["stack", ui.nav.stack],
    ["proyectos", ui.nav.projects],
    ["trayectoria", ui.nav.timeline],
    ["ia", ui.nav.ai],
    ["icpc", ui.nav.icpc],
    ["formacion", ui.nav.education],
    ["contacto", ui.nav.contact],
  ]

  return (
    <nav className="cv-no-print sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2.5 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="-mx-1 flex gap-4 overflow-x-auto px-1 text-sm text-white/60">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="shrink-0 py-1 hover:text-white">
              {label}
            </a>
          ))}
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <Toggle
            label={c.images}
            value={images}
            options={[
              { value: "on", label: c.yes },
              { value: "off", label: c.no },
            ]}
            onChange={(v) => setPref("images", v)}
          />
          <Toggle
            label={c.detail}
            value={detail}
            options={[
              { value: "full", label: c.full },
              { value: "brief", label: c.brief },
            ]}
            onChange={(v) => setPref("detail", v)}
          />
          <div role="group" aria-label={c.language} className="flex rounded-full border border-white/15 bg-white/[0.04] p-0.5 text-xs font-medium">
            {(["es", "en"] as const).map((l) => (
              <a
                key={l}
                href={l === "es" ? "/" : "/en/"}
                hrefLang={l}
                aria-current={lang === l ? "page" : undefined}
                className={`rounded-full px-2.5 py-1 uppercase transition ${
                  lang === l ? "bg-white text-black" : "text-white/65 hover:text-white"
                }`}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
