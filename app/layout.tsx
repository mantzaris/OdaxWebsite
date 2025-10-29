import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"

import Image from "next/image"

// import HeaderNav from "@/components/header-nav"
// import MobileNav from "@/components/mobile-nav"


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
<header className="relative sticky top-0 z-40 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-slate-950/80">
  <nav
    // grid on narrow screens, 3 logical columns at lg and up
    className="relative container mx-auto px-3 md:px-6 py-2
               grid grid-cols-2 items-center gap-x-3 gap-y-2
               lg:grid-cols-[auto_1fr_auto]"
    aria-label="Primary"
  >
    {/* Logo */}
    <Link href="/" className="flex items-center gap-2" aria-label="ODAX home">
      <Image
        src="/brand/ODAX_LOGO_SYMBOL.png"
        alt="ODAX Technologies Inc."
        width={160}
        height={40}
        className="h-8 w-auto sm:h-9 md:h-10"
        sizes="(max-width: 640px) 120px, (max-width: 768px) 136px, 160px"
        priority
      />
    </Link>

    {/* Right controls on narrow screens */}
    <div className="justify-self-end flex items-center gap-2 lg:hidden">
      <ModeToggle />
      {/* <MobileNav /> */}
    </div>

    {/* Primary pills: 2x2 grid below lg, single-row flex at lg+ */}
    <ul
      className="col-span-2 order-last
                 grid grid-cols-2 gap-2
                 lg:order-none lg:col-auto lg:flex lg:items-center lg:gap-6
                 lg:w-full lg:justify-around lg:justify-self-stretch"
    >
      <li><Link href="/products" className="nav-pill btn-outline w-full justify-center">Products</Link></li>
      <li><Link href="/services" className="nav-pill btn-outline w-full justify-center">Services</Link></li>
      <li><Link href="/posts"     className="nav-pill btn-outline w-full justify-center">Blog</Link></li>
      <li><Link href="/contact"  className="nav-pill btn-outline w-full justify-center">Contact</Link></li>
  
      <li className="col-span-2 lg:hidden">
        <Link href="/contact" className="btn-primary w-full justify-center">
          Start a project
        </Link>
      </li>
    </ul>

    {/* Desktop cluster (lg+) */}
    <div className="hidden lg:flex items-center gap-3">
      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-slate-900
                   px-4 py-2.5 text-base font-semibold text-white hover:bg-slate-800
                   dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-100"
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
            <div className="grid gap-6 md:grid-cols-3 md:items-center">
              {/* Brand mark */}
              <Link href="/" className="flex items-center gap-3" aria-label="ODAX home">
                {/* Prefer an SVG with transparent background */}
                <Image
                  src="/brand/ODAX_LOGO_SYMBOL.png"          // use the tight-cropped asset
                  alt="ODAX symbol"
                  width={48}
                  height={48}
                  className="h-10 sm:h-12 md:h-14 w-auto opacity-80 dark:opacity-90"
                  sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
                  priority={false}
                />
                <span className="sr-only">ODAX Technologies Inc.</span>
              </Link>

              {/* Copyright */}
              <p className="md:text-center">
                © {new Date().getFullYear()} ODAX Technologies Inc.
              </p>

              {/* Footer nav */}
              <nav className="flex gap-4 md:justify-end">
                {/* <Link href="/privacy">Privacy</Link> */}
                {/* <Link href="/terms">Terms</Link> */}
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