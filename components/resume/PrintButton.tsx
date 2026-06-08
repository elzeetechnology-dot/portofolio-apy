"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="rounded-xl bg-primary px-5 py-3 text-primary-foreground transition hover:opacity-90"
    >
      Download PDF
    </button>
  );
}