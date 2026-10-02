import { existsSync, readFileSync } from "node:fs"
import path from "node:path"
import type { Lang } from "@/data/cv"

export type WipProject = { title: string; paragraphs: string[]; tags: string[] }

// Los proyectos en curso viven en archivos .txt locales (ignorados por git) que se leen al compilar.
// proyectos.txt es la versión en español; proyectos.en.txt es opcional y, si falta, el inglés usa el español.
const FILES: Record<Lang, string[]> = {
  es: ["proyectos.txt"],
  en: ["proyectos.en.txt", "proyectos.txt"],
}

function parse(raw: string): WipProject[] {
  return raw
    .split(/^\s*---+\s*$/m)
    .map((block) => {
      let title = ""
      const paragraphs: string[] = []
      let tags: string[] = []
      for (const line of block.split("\n").map((l) => l.trim())) {
        if (!line) continue
        const heading = line.match(/^#{1,6}\s+(.*)$/)
        const tagLine = line.match(/^\*\*[^*]+:\*\*\s*(.*)$/)
        if (heading) title = heading[1]
        else if (tagLine) tags = tagLine[1].replace(/\.$/, "").split(",").map((t) => t.trim()).filter(Boolean)
        else paragraphs.push(line)
      }
      return { title, paragraphs, tags }
    })
    .filter((p) => p.title)
}

export function loadWipProjects(lang: Lang): WipProject[] {
  // Sin proyectos.txt no hay sección, aunque exista una traducción suelta.
  if (!existsSync(path.join(process.cwd(), "proyectos.txt"))) return []
  for (const name of FILES[lang]) {
    const file = path.join(process.cwd(), name)
    if (existsSync(file)) return parse(readFileSync(file, "utf8"))
  }
  return []
}
