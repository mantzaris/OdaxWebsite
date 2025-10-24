
'use client'

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement | null>(null)

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  // Optional: click outside to close
  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false)
    }
    window.addEventListener("click", onClick)
    return () => window.removeEventListener("click", onClick)
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex items-center rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold
                   bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen(v => !v)}
      >
        Menu
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          ref={panelRef}
          className="absolute inset-x-0 top-full z-50 border-t bg-white/95 backdrop-blur shadow
                     dark:bg-slate-950/95"
          role="dialog" aria-modal="true"
        >
          <div className="container mx-auto px-4 py-3 flex flex-col gap-2">
            <Link href="/products" className="nav-pill btn-outline" onClick={() => setOpen(false)}>Products</Link>
            <Link href="/services" className="nav-pill btn-outline" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/blog"     className="nav-pill btn-outline" onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/contact"  className="nav-pill btn-outline" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </div>
  )
}
