// app/posts/page.tsx
import Link from "next/link"
import { allPosts } from "contentlayer/generated"

export const metadata = {
  title: "Blog",
  description: "Latest posts",
}

export default function PostsIndex() {
  const posts = allPosts
    .filter(p => p.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <article key={post._id} className="rounded-2xl border p-6 shadow-sm dark:border-slate-800">
            <Link href={post.url}>
              <h2 className="text-lg font-semibold hover:underline">{post.title}</h2>
              {post.description && (
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{post.description}</p>
              )}
              <p className="mt-3 text-xs text-slate-500">
                {post.date ? new Date(post.date).toLocaleDateString() : ""}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
