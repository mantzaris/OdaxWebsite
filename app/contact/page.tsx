export const metadata = { title: 'Contact — Odax Technologies Inc.' }

export default function ContactPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="text-lg text-slate-700 dark:text-slate-300">
        Tell us about your project or question. We usually reply within 1 to 2 business days.
      </p>

      {/* Contact options */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 p-6 shadow-sm dark:border-slate-800">
          <h2 className="text-xl font-semibold">Applied ML and AI</h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Model design, evaluation, and integration with existing analytics.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6 shadow-sm dark:border-slate-800">
          <h2 className="text-xl font-semibold">ElectronJS and Desktop</h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Cross platform apps, secure IPC, packaging for Windows, macOS, and Linux.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6 shadow-sm dark:border-slate-800">
          <h2 className="text-xl font-semibold">Databases and Data Pipelines</h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            SQL, NoSQL, and vector stores. Ingestion, migration, and tuning.
          </p>
        </div>
      </div>

      {/* Email CTA */}
      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-lg">Email us at</p>
        <p className="mt-2">
          <a
            className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
            href="mailto:admin@odaxtech.com?subject=Inquiry%20from%20website"
          >
            admin@odaxtech.com
          </a>
        </p>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          Include a short description of your goals, timeline, and any data or hardware constraints.
        </p>
      </div>
    </main>
  )
}
