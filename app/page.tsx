// app/page.tsx
import Link from "next/link"
import { allPosts, allProducts, allServices } from "@/.contentlayer/generated"
import HeroTabs from "@/components/hero-tabs"
import ProductSlideshow from "@/components/product-slideshow"

const POST_LIMIT = 6; 

export default function Home() {
  const services = allServices
    .filter(service => service.published !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  const latestPosts = allPosts
    .filter(p => p.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, POST_LIMIT)

  const productSlides = allProducts
    .filter(product => product.published !== false && product.hero)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map(product => ({
      name: product.name,
      href: product.url,
      image: product.hero!,
      imageRotation: product.heroRotate,
    }))

  return (
    <>
      {/* The only hero on the page */}
      <HeroTabs />

      {/* Services */}
      <section aria-labelledby="services-heading" className="py-12 border-t">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="services-heading" className="text-2xl md:text-3xl font-semibold">Our services</h2>
          <Link href="/services" className="text-sm font-medium text-red-600 hover:underline">
            View all services
          </Link>
        </div>
        <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">
          From AI integrations and cybersecurity to applications, analytics, and databases,
          we help design, build, and improve the systems your business depends on.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <Link
              key={service.slug}
              href={service.url}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold group-hover:underline">{service.name}</h3>
              <p className="mt-2 text-slate-700 dark:text-slate-300">{service.shortDescription}</p>
              <span className="mt-auto pt-4 text-sm font-medium text-red-600">
                Learn more <span aria-hidden="true">&#8594;</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Electronics and products */}
      <section aria-labelledby="electronics-heading" className="py-12 border-t">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="electronics-heading" className="text-2xl md:text-3xl font-semibold">
            Electronics and embedded systems
          </h2>
          <Link href="/products" className="text-sm font-medium text-red-600 hover:underline">
            View products
          </Link>
        </div>
        <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">
          Sensor boards, kits, and engineering for sensing, data acquisition, and connected hardware.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Sensor Electronics",
              desc: "Analog front ends, signal conditioning, embedded interfaces, and measurement hardware for biosignals, sensors, and custom acquisition systems.",
            },
            {
              title: "Embedded and Edge Systems",
              desc: "Firmware, microcontroller integration, single-board computer deployments, and device-to-cloud workflows for hardware that needs to collect reliable data in the field.",
            },
            {
              title: "Signal Processing and Data Platforms",
              desc: "Filtering, event detection, analytics, databases, and machine learning pipelines for continuous sensor streams and discrete measurement events.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-700 dark:text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="max-w-3xl">
          <ProductSlideshow slides={productSlides} />
        </div>
      </section>

      {/* Latest from the blog */}
      <section className="py-12 border-t">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Latest from the blog</h2>
          <Link href="/posts" className="text-sm font-medium text-red-600 hover:underline">
            View all
          </Link>
        </div>



      <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {latestPosts.map((post) => (
          <article
            key={post._id}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition dark:border-slate-800 dark:bg-slate-900"
          >
            <Link href={post.url}>
              <h3 className="text-lg font-semibold group-hover:underline">{post.title}</h3>
              {post.description && (
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  {post.description}
                </p>
              )}
              <p className="mt-3 text-xs text-slate-500">
                {post.date ? new Date(post.date).toLocaleDateString() : ""}
              </p>
            </Link>
          </article>
        ))}
      </div>



      </section>

      {/* CTA */}
      <section className="py-20 border-t">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl md:text-3xl font-semibold">Have a project in mind?</h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            We can help scope, prototype, and ship.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
