import "../globals.css"
import { cvMetadata, RootShell } from "@/components/root-shell"

export const metadata = cvMetadata("es")

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="es">{children}</RootShell>
}
