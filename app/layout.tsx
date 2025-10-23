import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"

import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ODAX Technologies Inc.",
  description: "Technology for a New Future of Insights",
}

interface RootLayoutProps {
  children: React.ReactNode
}



export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* Header */}
          <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-slate-950/80">
            <nav className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2" aria-label="ODAX home">
                <Image
                  src="/brand/logoDense.png"
                  alt="ODAX Technologies Inc."
                  width={160}
                  height={40}
                  priority
                />
              </Link>

              
              {/* BIGGER, PROMINENT NAV */}
              <div className="hidden md:flex items-center gap-8">
                <Link href="/products" className="nav-pill btn-outline">Products</Link>
                <Link href="/services" className="nav-pill btn-outline">Services</Link>
                <Link href="/blog" className="nav-pill btn-outline">Blog</Link>
                <Link href="/contact" className="nav-pill btn-outline">Contact</Link>
              </div>


              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-slate-900 px-4 py-2.5 text-base font-semibold text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  Start a project
                </Link>
                <ModeToggle />
              </div>
            </nav>
          </header>

          {/* Main */}
          <main className="container mx-auto px-4 md:px-6">{children}</main>

          {/* Footer */}
          <footer className="mt-24 border-t">
            <div className="container mx-auto px-4 md:px-6 py-10 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
                <p>© {new Date().getFullYear()} ODAX Technologies Inc.</p>
                <nav className="flex gap-4">
                  <Link href="/privacy">Privacy</Link>
                  <Link href="/terms">Terms</Link>
                  <Link href="/contact">Contact</Link>
                </nav>
              </div>
            </div>
          </footer>

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}