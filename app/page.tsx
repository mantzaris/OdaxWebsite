// app/page.tsx
import Image from "next/image"
import Link from "next/link"
import { allPosts } from "@/.contentlayer/generated"

export default function Home() {
  const latestPosts = allPosts
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
    .slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="py-10 md:py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium shadow-sm dark:border-slate-800 dark:bg-slate-900">
              Sensing • Data Platforms • Machine Learning
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Reliable systems for{" "}
              <span className="text-red-600">data, devices</span> & research
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              We design and build robust software and instrumentation, from embedded sensing to ML powered applications, with academic rigor and production quality. Experience includes SBIR Phase I-II, defense simulation and sonar, bioinformatics for pharma, and open source cross platform applications.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
              >
                Start a project
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:hover:bg-slate-800"
              >
                View products
              </Link>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-6 text-sm text-slate-700 dark:text-slate-300">
              <div>
                <dt className="font-semibold">Focus Areas</dt>
                <dd>Prototyping, productization, SBIR and proposal support</dd>
              </div>
              <div>
                <dt className="font-semibold">Engagements</dt>
                <dd>Algorithm R&D, full stack builds, consulting and training</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            {/* Replace with a real hero visual or product render */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <Image
                src="/brand/logoDense.png"
                alt="ODAX Technologies logo"
                fill
                className="object-contain p-8"
                priority
              />
            </div>
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(225,29,72,0.08),transparent_60%)]" />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-12 border-t">
        <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Embedded & Electronics",
              desc: "Sensor design, signal conditioning, firmware, reliability.",
            },
            {
              title: "Data & ML Systems",
              desc: "ETL, experimentation, model evaluation, analytics.",
            },
            {
              title: "Web & Desktop Apps",
              desc: "Next.js, Electron, production-grade interfaces.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-700 dark:text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest from the blog */}
      <section className="py-12 border-t">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Latest from the blog</h2>
          <Link href="/blog" className="text-sm font-medium text-red-600 hover:underline">
            View all
          </Link>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {latestPosts.map((post) => (
            <article key={post._id} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition dark:border-slate-800 dark:bg-slate-900">
              <Link href={post.slug}>
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
          <h2 className="text-2xl md:text-3xl font-semibold">
            Have a project in mind?
          </h2>
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
