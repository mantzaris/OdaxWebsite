"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="py-16">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        An unexpected error occurred.
      </p>

      <button className="btn-primary mt-6" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
