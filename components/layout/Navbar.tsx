"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/theme-toggle";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
    
  { name: "About", href: "#about", id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );

      const current = sections.find((section) => {
        if (!section) return false;

        const rect = section.getBoundingClientRect();

        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-4 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
     <div
  className={`mx-auto flex max-w-5xl items-center justify-between px-6 lg:px-8 transition-all duration-500 ease-out ${
    scrolled
      ? "h-14 rounded-2xl border border-border/50 bg-background/70 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl"
      : "h-16"
  }`}
>
     <div className="flex items-center gap-3">
  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
    APY
  </div>

  <div className="hidden sm:block">
    <p className="text-sm font-semibold">
      Ari Puja Yuwana
    </p>

    <p className="text-xs text-muted-foreground">
      IT System Specialist
    </p>
  </div>
</div>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <a
  key={item.id}
  href={item.href}
  className={`relative transition-colors duration-300 ${
    activeSection === item.id
      ? "text-primary font-medium"
      : "text-muted-foreground hover:text-foreground"
  }`}
>
  {item.name}

  {activeSection === item.id && (
    <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-primary" />
  )}
</a>
          ))}

          <ThemeToggle />
        </nav>
      </div>
      <div className="flex items-center gap-3 md:hidden">
  <ThemeToggle />

  <Sheet>
    <SheetTrigger asChild>
      <button
        className="rounded-lg border p-2 transition-colors hover:bg-muted"
        aria-label="Open Menu"
      >
        <Menu size={20} />
      </button>
    </SheetTrigger>

    <SheetContent side="right">
      <div className="mt-10 flex flex-col gap-6">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`text-lg transition-colors ${
              activeSection === item.id
                ? "font-medium text-primary"
                : "text-muted-foreground"
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </SheetContent>
  </Sheet>
</div>
    </header>
  );
}