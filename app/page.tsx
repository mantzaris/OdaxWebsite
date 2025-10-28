// app/page.tsx
import Link from "next/link"
import { allPosts } from "@/.contentlayer/generated"
import HeroTabs from "@/components/hero-tabs"

const POST_LIMIT = 6; 

export default function Home() {
  const latestPosts = allPosts
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
    .slice(0, POST_LIMIT)

  return (
    <>
      {/* The only hero on the page */}
      <HeroTabs />

      {/* Capabilities */}
      <section className="py-12 border-top border-t">
        <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Web and Desktop Apps",
              desc: "Developing cross-platform applications with ElectronJS for a variety of tasks. User-Interfaces using web technologies on web, desktop and single board computers (eg Raspberry Pi) with isolated or connected usecases.",
            },
            {
              title: "Data and ML Systems",
              desc: "Database systems from traditional SQL (eg. SQLite & PostSQL), NoSQL (eg MongoDB), and vector databases. Analystics that uses classical statistics and machine learning in conjunction. Research & Implementation for situations that require novel solutions.",
            },
            {
              title: "Signal Processing",
              desc: "Signal processing and machine learning for sensor readings from continuous data streams and discrete even streams.",
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
      </section>

      {/* Latest from the blog */}
      <section className="py-12 border-t">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Latest from the blog</h2>
          <Link href="/blog" className="text-sm font-medium text-red-600 hover:underline">
            View all
          </Link>
        </div>



<div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {latestPosts.map((post) => (
    <article
      key={post._id}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition dark:border-slate-800 dark:bg-slate-900"
    >
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
