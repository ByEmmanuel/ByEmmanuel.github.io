"use client"

import { useSyncExternalStore } from "react"
import { ShaderAnimation } from "@/components/ui/shader-animation"
import type { CV } from "@/data/cv"
import { CALM_SPEED, ICE } from "@/lib/presets"

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)")
  query.addEventListener("change", onChange)
  return () => query.removeEventListener("change", onChange)
}

export function Hero({ profile, ui }: { profile: CV["profile"]; ui: CV["ui"] }) {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  )

  return (
    <header className="cv-hero relative h-svh min-h-[560px] w-full overflow-hidden bg-black">
      <ShaderAnimation
        className="absolute inset-0 h-full w-full"
        speed={reducedMotion ? 0 : CALM_SPEED}
        tint={ICE.tint}
        brightness={ICE.brightness}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.15)_55%,transparent_80%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />

      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-4 text-center [text-shadow:0_2px_18px_rgba(0,0,0,0.85)]">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/70 sm:text-sm">
          {profile.location}
        </p>
        <h1 className="text-[2.75rem] leading-[1.05] font-semibold tracking-tighter text-white sm:text-7xl md:text-8xl">
          {profile.name}
        </h1>
        <p className="text-lg font-medium text-white/90 sm:text-xl">{profile.title}</p>
        <p className="max-w-2xl text-base text-white/70 sm:text-lg">{profile.tagline}</p>
        <div className="pointer-events-auto mt-2 grid w-full max-w-xs grid-cols-2 gap-3 sm:flex sm:max-w-none sm:flex-wrap sm:items-center sm:justify-center">
          <a
            href="#proyectos"
            className="col-span-2 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-white/85 sm:py-2.5"
          >
            {ui.hero.seeProjects}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/30 bg-black/30 px-4 py-3 text-center text-sm sm:px-5 sm:py-2.5 font-semibold text-white backdrop-blur transition hover:border-white/60"
          >
            GitHub
          </a>
          <a
            href={profile.pdf}
            download
            className="rounded-full border border-white/30 bg-black/30 px-4 py-3 text-center text-sm sm:px-5 sm:py-2.5 font-semibold text-white backdrop-blur transition hover:border-white/60"
          >
            {ui.hero.downloadPdf}
          </a>
        </div>
      </div>
    </header>
  )
}
