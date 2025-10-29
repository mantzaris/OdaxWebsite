import { allProducts } from 'contentlayer/generated'
import Link from 'next/link'
import Image from 'next/image'

const hasProducts = allProducts.some(p => p.published !== false)
export const metadata = {
  title: 'Products — Odax Technologies Inc.',
  // avoid thin-content indexing when there are zero products
  robots: hasProducts ? undefined : { index: false, follow: false },
}

export default function ProductsPage() {
  const products = allProducts
    .filter(p => p.published !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  return (
    <main className="container mx-auto px-6 py-12">
       <h1 className="text-4xl font-bold mb-8">Products</h1>
      {!products.length ? (
        <div className="rounded-2xl border p-10 text-center text-slate-600 dark:text-slate-300">
          <p className="text-lg">Our product catalog is coming soon.</p>
          <p className="mt-2">
            Have a question or need something specific?{" "}
            <Link href="/contact" className="underline">Contact us</Link>.
          </p>
        </div>
      ) : (
      <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map(p => (
          <li key={p.slug} className="rounded-lg border shadow-sm hover:shadow-md transition">
            <Link href={p.url} className="block p-5">
              {p.hero && (
                <div className="relative h-40 mb-4">
                  <Image src={p.hero} alt={`${p.name} image`} fill className="object-contain" />
                </div>
              )}
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold">{p.name}</h2>
                {p.status && p.status !== 'ga' && (
                  <span className="rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide">
                    {p.status}
                  </span>
                )}
              </div>
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
      )}
    </main>
  )
}
