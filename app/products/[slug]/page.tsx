import { allProducts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Mdx } from '@/components/mdx'

export function generateStaticParams() {
  return allProducts.map(p => ({ slug: p.slug }))
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = allProducts.find(p => p.slug === params.slug)
  if (!product) notFound()

  return (
    <article className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold">{product.name}</h1>
      {product.hero && (
        <div className="relative h-64 my-6">
          <Image src={product.hero} alt={`${product.name} hero`} fill className="object-contain" />
        </div>
      )}
      <p className="text-xl text-gray-700">{product.shortDescription}</p>
      <hr className="my-8" />
      <Mdx code={product.body.code} />
    </article>
  )
}
