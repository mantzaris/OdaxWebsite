// components/mdx-components.tsx
import Image from "next/image"
import Link from "next/link"
import { useMDXComponent } from "next-contentlayer/hooks"
import type { AnchorHTMLAttributes } from "react"

const components = {
  Image,
  a: ({
    href = "",
    children,
    ...props
  }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href.startsWith("/") || href.startsWith("#")
    if (isInternal) {
      // Internal links: use Next.js routing
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      )
    }
    // External links: open in new tab safely
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  },
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}
