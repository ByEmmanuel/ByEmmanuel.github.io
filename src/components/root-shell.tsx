import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { localize, type Lang } from "@/data/cv"
import { PREFS_SCRIPT } from "@/lib/prefs-script"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

const SITE = "https://byemmanuel.github.io"

export function cvMetadata(lang: Lang): Metadata {
  const { meta } = localize(lang).ui
  const path = lang === "es" ? "/" : "/en/"
  return {
    metadataBase: new URL(SITE),
    title: meta.title,
    description: meta.description,
    alternates: { canonical: path, languages: { es: "/", en: "/en/" } },
    openGraph: {
      type: "profile",
      url: path,
      title: meta.title,
      description: meta.description,
      locale: lang === "es" ? "es_MX" : "en_US",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: meta.title }],
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: ["/og.png"] },
  }
}

// Cada idioma es un root layout propio para que <html lang> sea correcto en el export estático.
export function RootShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html
      lang={lang}
      data-images="on"
      data-detail="full"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark h-full scroll-smooth bg-black antialiased`}
    >
      {/* eslint-disable-next-line @next/next/no-head-element -- App Router: <head> en el root layout es válido */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: PREFS_SCRIPT }} />
      </head>
      <body className="min-h-full bg-black">{children}</body>
    </html>
  )
}
