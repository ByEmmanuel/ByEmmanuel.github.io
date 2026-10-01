import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jesús Emmanuel García · CV",
  description:
    "Ingeniero en Computación e Ingeniero de Software en Guadalajara. Backend, full-stack, Machine Learning y desarrollo con agentes de IA.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full scroll-smooth bg-black antialiased`}
    >
      <body className="min-h-full bg-black">{children}</body>
    </html>
  );
}
