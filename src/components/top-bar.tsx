"use client"

import { useState } from "react"
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
      <span className="text-xs text-white/45">{label}</span>
      <div className="flex rounded-full border border-white/15 bg-white/[0.04] p-0.5">
        {options.map((o) => (
          <button
            key={o.value}
            role="radio"
            aria-checked={value === o.value}
            onClick={() => onChange(o.value)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition lg:px-2.5 lg:py-1 ${
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
  const [open, setOpen] = useState(false)

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

  const imagesToggle = (
    <Toggle
      label={c.images}
      value={images}
      options={[
        { value: "on", label: c.yes },
        { value: "off", label: c.no },
      ]}
      onChange={(v) => setPref("images", v)}
    />
  )
  const detailToggle = (
    <Toggle
      label={c.detail}
      value={detail}
      options={[
        { value: "full", label: c.full },
        { value: "brief", label: c.brief },
      ]}
      onChange={(v) => setPref("detail", v)}
    />
  )
  const langSwitch = (
    <div role="group" aria-label={c.language} className="flex rounded-full border border-white/15 bg-white/[0.04] p-0.5 text-xs font-medium">
      {(["es", "en"] as const).map((l) => (
        <a
          key={l}
          href={l === "es" ? "/" : "/en/"}
          hrefLang={l}
          aria-current={lang === l ? "page" : undefined}
          className={`rounded-full px-3 py-1.5 uppercase transition lg:px-2.5 lg:py-1 ${
            lang === l ? "bg-white text-black" : "text-white/65 hover:text-white"
          }`}
        >
          {l}
        </a>
      ))}
    </div>
  )

  return (
    <nav className="cv-no-print sticky top-0 z-30 border-b border-white/10 bg-black/85 backdrop-blur">
      {/* Escritorio: enlaces y controles en una fila */}
      <div className="mx-auto hidden max-w-6xl items-center justify-between gap-4 px-6 py-2.5 lg:flex">
        <div className="flex gap-4 overflow-x-auto text-sm text-white/60">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="shrink-0 py-1 hover:text-white">
              {label}
            </a>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-3">
          {imagesToggle}
          {detailToggle}
          {langSwitch}
        </div>
      </div>

      {/* Celular: una sola fila con menú desplegable */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4 py-2">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="cv-mobile-menu"
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-sm font-medium text-white"
          >
            <span aria-hidden className="text-base leading-none">{open ? "✕" : "☰"}</span>
            {c.menu}
          </button>
          {langSwitch}
        </div>
        {open && (
          <div id="cv-mobile-menu" className="bg-black max-h-[calc(100svh-52px)] overflow-y-auto border-t border-white/10 px-4 pb-4 pt-3">
            <div className="grid grid-cols-2 gap-1">
              {links.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[15px] text-white/80 active:bg-white/10"
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 pt-3">
              {imagesToggle}
              {detailToggle}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
