

'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

// Optional helper if you don't already have one
function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

/**
 * Decides which header link is "active".
 * For sections like /products/* we usually treat any child route as active.
 */
function isActive(pathname: string, href: string, mode: "section" | "exact" = "section") {
  if (mode === "exact") return pathname === href
  return pathname === href || pathname.startsWith(href + "/")
}

export default function HeaderNav() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex items-center gap-10" role="menubar" aria-label="Primary">
      <Link
        href="/products"
        aria-current={isActive(pathname, "/products") ? "page" : undefined}
        className={cx("nav-pill btn-outline", isActive(pathname, "/products") && "btn-outline-active")}
      >
        Products
      </Link>
      <Link
        href="/services"
        aria-current={isActive(pathname, "/services") ? "page" : undefined}
        className={cx("nav-pill btn-outline", isActive(pathname, "/services") && "btn-outline-active")}
      >
        Services
      </Link>
      <Link
        href="/blog"
        aria-current={isActive(pathname, "/blog") ? "page" : undefined}
        className={cx("nav-pill btn-outline", isActive(pathname, "/blog") && "btn-outline-active")}
      >
        Blog
      </Link>
      <Link
        href="/contact"
        aria-current={isActive(pathname, "/contact", "exact") ? "page" : undefined}
        className={cx("nav-pill btn-outline", isActive(pathname, "/contact", "exact") && "btn-outline-active")}
      >
        Contact
      </Link>
    </div>
  )
}


