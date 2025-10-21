export const metadata = { title: 'Contact — Odax Technologies Inc.' }

export default function ContactPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="text-lg mb-4">For inquiries, email us at:</p>
      <ul className="space-y-2 text-xl">
        <li><a className="underline" href="mailto:alexm@odaxtech.com">alexm@odaxtech.com</a></li>
        <li><a className="underline" href="mailto:admin@odaxtech.com">admin@odaxtech.com</a></li>
      </ul>
    </main>
  )
}
