import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="text-8xl font-bold">404</h1>

      <p className="mt-4 text-muted-foreground">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl border px-5 py-3 transition hover:bg-muted"
      >
        Back to Home
      </Link>
    </main>
  );
}