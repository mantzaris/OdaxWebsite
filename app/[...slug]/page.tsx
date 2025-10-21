// app/[...slug]/page.tsx
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { allPages } from "contentlayer/generated"
import { Mdx } from "@/components/mdx"

type PageParams = { slug: string[] }

function getPageFromParams(params: PageParams): (typeof allPages)[number] | null {
  const slugPath = (params?.slug ?? []).join("/")
  const page =
    allPages.find(p => (p.slugAsParams ?? p.slug) === slugPath) ?? null
  return page
}

export function generateStaticParams(): PageParams[] {
  return allPages.map(p => ({
    slug: (p.slugAsParams ?? p.slug).split("/"),
  }))
}

export async function generateMetadata(
  { params }: { params: PageParams }
): Promise<Metadata> {
  const page = getPageFromParams(params)
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
  }
}

// Optional: make this segment fully static and fail fast if content is missing
export const dynamic = "error"
export const revalidate = false

export default function PagePage({ params }: { params: PageParams }) {
  const page = getPageFromParams(params)
  if (!page) notFound() // shows app/not-found.tsx per Next docs

  return (
    <article className="container mx-auto px-6 py-12 prose dark:prose-invert">
      <h1>{page.title}</h1>
      {page.description && <p className="text-xl">{page.description}</p>}
      <hr />
      <Mdx code={page.body.code} />
    </article>
  )
}
