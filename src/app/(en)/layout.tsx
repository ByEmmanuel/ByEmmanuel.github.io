import "../globals.css"
import { cvMetadata, RootShell } from "@/components/root-shell"

export const metadata = cvMetadata("en")

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>
}
