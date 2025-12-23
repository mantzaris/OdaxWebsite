import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-16">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        The page you requested does not exist.
      </p>
      <div className="mt-6">
        <Link className="btn-primary" href="/">
          Go home
        </Link>
      </div>
    </div>
  );
}
