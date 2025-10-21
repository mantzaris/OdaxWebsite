import { allProducts } from 'contentlayer/generated'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = { title: 'Products — Odax Technologies Inc.' }

export default function ProductsPage() {
  const products = allProducts
    .filter(p => p.published !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map(p => (
          <li key={p.slug} className="rounded-lg border shadow-sm hover:shadow-md transition">
            <Link href={p.url} className="block p-5">
              {p.hero && (
                <div className="relative h-40 mb-4">
                  <Image src={p.hero} alt={`${p.name} image`} fill className="object-contain" />
                </div>
              )}
              <h2 className="text-2xl font-semibold">{p.name}</h2>
              <p className="mt-2 text-gray-600">{p.shortDescription}</p>
              {p.features?.length ? (
                <ul className="mt-3 list-disc list-inside text-sm text-gray-700">
                  {p.features.slice(0, 3).map(f => <li key={f}>{f}</li>)}
                </ul>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
