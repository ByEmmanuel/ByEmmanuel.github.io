"use client"

import { useSyncExternalStore } from "react"

// Preferencias de vista guardadas como data-* en <html> (y en localStorage).
// El CSS de globals.css oculta galerías y detalles según estos atributos, así
// que el script inline de <head> los aplica antes del primer pintado.

export type Prefs = { images: "on" | "off"; detail: "full" | "brief" }

export const DEFAULT_PREFS: Prefs = { images: "on", detail: "full" }

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-images", "data-detail"] })
  return () => observer.disconnect()
}

export function usePref<K extends keyof Prefs>(key: K): Prefs[K] {
  return useSyncExternalStore(
    subscribe,
    () => (document.documentElement.dataset[key] as Prefs[K]) ?? DEFAULT_PREFS[key],
    () => DEFAULT_PREFS[key],
  )
}

export function setPref<K extends keyof Prefs>(key: K, value: Prefs[K]) {
  document.documentElement.dataset[key] = value
  try {
    localStorage.setItem(`cv-${key}`, value)
  } catch {
    // Sin almacenamiento (modo privado): la preferencia dura hasta recargar.
  }
}
