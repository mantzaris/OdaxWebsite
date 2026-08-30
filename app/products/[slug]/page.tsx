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
          <Image
            src={product.hero}
            alt={`${product.name} hero`}
            fill
            sizes="(min-width: 1280px) 1152px, calc(100vw - 3rem)"
            priority
            className="object-contain"
            style={product.heroRotate ? { transform: `rotate(${product.heroRotate}deg)` } : undefined}
          />
        </div>
      )}
      <p className="text-xl mt-0 text-slate-700 dark:text-slate-300">{product.shortDescription}</p>
      {(product.amazonUrl || product.ebayUrl) && (
        <div className="not-prose mt-5 flex flex-wrap gap-3">
          {product.amazonUrl && (
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Buy ${product.name} on Amazon (opens in a new tab)`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff9900] px-5 py-3 text-base font-semibold text-slate-950 shadow-sm transition hover:bg-[#e88b00] focus:outline-none focus:ring-2 focus:ring-[#ff9900] focus:ring-offset-2 dark:focus:ring-offset-slate-950"
            >
              Buy on Amazon
              <span aria-hidden="true">&#8599;</span>
            </a>
          )}
          {product.ebayUrl && (
            <a
              href={product.ebayUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Buy ${product.name} internationally on eBay (opens in a new tab)`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3665f3] px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#2f55cc] focus:outline-none focus:ring-2 focus:ring-[#3665f3] focus:ring-offset-2 dark:focus:ring-offset-slate-950"
            >
              Buy internationally on eBay
              <span aria-hidden="true">&#8599;</span>
            </a>
          )}
        </div>
      )}
      <hr className="my-4" />
      <Mdx code={product.body.code} />
    </article>
  )
}
