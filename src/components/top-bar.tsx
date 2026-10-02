"use client"

import { useEffect, useRef, useState } from "react"
import type { CV, Lang } from "@/data/cv"
import { setPref, usePref } from "@/lib/prefs"

function Toggle<T extends string>({
  label,
  value,
  options,
  onChange,
  stacked = false,
}: {
  label: string
  value: T
  options: { value: T; label: string }[]
  onChange: (v: T) => void
  stacked?: boolean
}) {
  return (
    <div role="radiogroup" aria-label={label} className={`flex items-center gap-1.5 ${stacked ? "justify-between" : ""}`}>
      <span className={stacked ? "text-[15px] text-white/80" : "text-xs text-white/45"}>{label}</span>
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

export function TopBar({ lang, ui, showWip = false }: { lang: Lang; ui: CV["ui"]; showWip?: boolean }) {
  const images = usePref("images")
  const detail = usePref("detail")
  const c = ui.controls
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLSpanElement>(null)
  const linkEls = useRef<Record<string, HTMLAnchorElement | null>>({})

  const links: [string, string][] = [
    ...(showWip ? ([["en-desarrollo", ui.nav.wip]] as [string, string][]) : []),
    ["sobre-mi", ui.nav.about],
    ["stack", ui.nav.stack],
    ["proyectos", ui.nav.projects],
    ["trayectoria", ui.nav.timeline],
    ["ia", ui.nav.ai],
    ["icpc", ui.nav.icpc],
    ["formacion", ui.nav.education],
    ["contacto", ui.nav.contact],
  ]
  const idKey = links.map(([id]) => id).join(",")
  const activeLabel = links.find(([id]) => id === active)?.[1]

  // Scroll-spy: la sección activa es la última cuya parte superior ya pasó por debajo de la barra.
  useEffect(() => {
    const ids = idKey.split(",")
    const update = () => {
      const line = (navRef.current?.offsetHeight ?? 56) + 40
      let current: string | null = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = ids[ids.length - 1]
      setActive(current)
    }
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    update()
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [idKey])

  // Desliza la barra indicadora bajo el enlace activo (escritorio) y lo mantiene a la vista.
  useEffect(() => {
    const bar = barRef.current
    const el = active ? linkEls.current[active] : null
    if (!bar) return
    if (!el) {
      bar.style.opacity = "0"
      return
    }
    bar.style.opacity = "1"
    bar.style.width = `${el.offsetWidth}px`
    bar.style.transform = `translateX(${el.offsetLeft}px)`
    const scroller = scrollerRef.current
    if (scroller) scroller.scrollTo({ left: el.offsetLeft - (scroller.clientWidth - el.offsetWidth) / 2, behavior: "smooth" })
  }, [active, idKey])

  const imagesToggle = (stacked = false) => (
    <Toggle
      stacked={stacked}
      label={c.images}
      value={images}
      options={[
        { value: "on", label: c.yes },
        { value: "off", label: c.no },
      ]}
      onChange={(v) => setPref("images", v)}
    />
  )
  const detailToggle = (stacked = false) => (
    <Toggle
      stacked={stacked}
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
    <nav ref={navRef} className="cv-no-print sticky top-0 z-30 border-b border-white/10 bg-black/85 backdrop-blur">
      {/* Escritorio: enlaces y controles en una fila */}
      <div className="mx-auto hidden max-w-6xl items-center justify-between gap-4 px-6 py-2.5 lg:flex">
        <div ref={scrollerRef} className="overflow-x-auto text-sm [scrollbar-width:none]">
          <div className="relative flex gap-4 pb-1.5">
            {links.map(([id, label]) => (
              <a
                key={id}
                ref={(el) => {
                  linkEls.current[id] = el
                }}
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                className={`shrink-0 py-1 transition-colors hover:text-white ${active === id ? "text-white" : "text-white/60"}`}
              >
                {label}
              </a>
            ))}
            <span
              ref={barRef}
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-0 h-0.5 rounded-full bg-[var(--glow)] opacity-0 transition-[transform,width,opacity] duration-300 ease-out"
            />
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          {imagesToggle()}
          {detailToggle()}
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
            {activeLabel ?? c.menu}
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
                  aria-current={active === id ? "location" : undefined}
                  className={`rounded-lg px-3 py-2.5 text-[15px] active:bg-white/10 ${
                    active === id ? "bg-white/10 text-[var(--glow)]" : "text-white/80"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="mt-3 flex flex-col gap-3 border-t border-white/10 px-3 pt-4">
              {imagesToggle(true)}
              {detailToggle(true)}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
