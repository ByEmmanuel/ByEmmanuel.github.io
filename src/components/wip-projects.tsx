import { Chip } from "@/components/projects"
import type { WipProject } from "@/lib/wip"

export function WipProjects({ items }: { items: WipProject[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {items.map((p) => (
        <article
          key={p.title}
          className="cv-card flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[var(--glow)]/50 hover:bg-white/[0.05]"
        >
          <h3 className="text-lg font-semibold text-white">{p.title}</h3>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/70">
            {p.paragraphs.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          {p.tags.length > 0 && (
            <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
              {p.tags.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  )
}
