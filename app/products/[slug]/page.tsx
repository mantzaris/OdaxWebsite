import { allProducts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Mdx } from '@/components/mdx-components'

export function generateStaticParams() {
  return allProducts.map(p => ({ slug: p.slug }))
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = allProducts.find(p => p.slug === params.slug)
  if (!product) notFound()

  return (
    <article className="container mx-auto px-6 py-12 prose max-w-none dark:prose-invert">
      <h1 className="mb-2">{product.name}</h1>
      {product.hero && (
        <div className="not-prose relative h-64 my-6">
          <Image src={product.hero} alt={`${product.name} hero`} fill className="object-contain" />
        </div>
      )}
      <p className="text-xl mt-0 text-slate-700 dark:text-slate-300">{product.shortDescription}</p>
      <hr className="my-4" />
      <Mdx code={product.body.code} />
    </article>
  )
}
