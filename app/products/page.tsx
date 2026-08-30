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
          <li key={p.slug} className="flex flex-col rounded-lg border shadow-sm hover:shadow-md transition">
            <Link href={p.url} className="block flex-1 p-5">
              {p.hero && (
                <div className="relative h-40 mb-4">
                  <Image
                    src={p.hero}
                    alt={`${p.name} image`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                    style={p.heroRotate ? { transform: `rotate(${p.heroRotate}deg)` } : undefined}
                  />
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
            {(p.amazonUrl || p.ebayUrl) && (
              <div className="grid gap-2 px-5 pb-5">
                {p.amazonUrl && (
                  <a
                    href={p.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buy ${p.name} on Amazon (opens in a new tab)`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff9900] px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-[#e88b00] focus:outline-none focus:ring-2 focus:ring-[#ff9900] focus:ring-offset-2 dark:focus:ring-offset-slate-950"
                  >
                    Buy on Amazon
                    <span aria-hidden="true">&#8599;</span>
                  </a>
                )}
                {p.ebayUrl && (
                  <a
                    href={p.ebayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buy ${p.name} internationally on eBay (opens in a new tab)`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#3665f3] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2f55cc] focus:outline-none focus:ring-2 focus:ring-[#3665f3] focus:ring-offset-2 dark:focus:ring-offset-slate-950"
                  >
                    Buy internationally on eBay
                    <span aria-hidden="true">&#8599;</span>
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
      )}
    </main>
  )
}
