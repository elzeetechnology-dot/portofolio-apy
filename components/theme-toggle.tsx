"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect hanya berjalan di client setelah proses sinkronisasi (hydration) selesai
  useEffect(() => {
    setMounted(true);
  }, []);

  // Tampilkan placeholder kosong dengan ukuran yang sama saat di server 
  // agar tidak merusak tata letak (layout shift) sebelum component siap
  if (!mounted) {
    return <div className="h-[38px] w-[38px]" />; // Sesuaikan ukuran dengan padding tombol Anda
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-lg border p-2"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}
