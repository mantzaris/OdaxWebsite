import { allServices } from 'contentlayer/generated'
import Link from 'next/link'

export const metadata = { title: 'Services - Odax Technologies Inc.' }

export default function ServicesPage() {
  const services = allServices
    .filter(s => s.published !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Services</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {services.map(s => (
          <Link key={s.slug} href={s.url} className="rounded-lg border p-6 hover:shadow">
            <h2 className="text-2xl font-semibold">{s.name}</h2>
            <p className="mt-2 text-gray-600">{s.shortDescription}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
