import { allServices } from "contentlayer/generated"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Mdx } from "@/components/mdx-components"

export function generateStaticParams() {
  return allServices.map(s => ({ slug: s.slug }))
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const svc = allServices.find(s => s.slug === params.slug)
  if (!svc) notFound()

  return (
    <article className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold">{svc.name}</h1>
      <p className="mt-3 text-xl text-slate-700 dark:text-slate-300">
        {svc.shortDescription}
      </p>

      <hr className="my-8" />
      {/* MDX body from the service file */}
      <Mdx code={svc.body.code} />

      <div className="mt-10">
        <Link href="/contact" className="inline-flex items-center rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700">
          Start a conversation
        </Link>
      </div>
    </article>
  )
}
