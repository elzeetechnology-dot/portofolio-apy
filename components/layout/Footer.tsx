export default function Footer() {
  return (
    <footer className="border-t py-10">
  <div className="mx-auto max-w-7xl px-6 text-center">
    <p className="font-semibold">
      Ari Puja Yuwana
    </p>

    <p className="mt-2 text-sm text-muted-foreground">
      IT System Specialist
    </p>

    <p className="mt-4 text-xs text-muted-foreground">
      © {new Date().getFullYear()} All Rights Reserved.
    </p>
  </div>
</footer>
  );
}