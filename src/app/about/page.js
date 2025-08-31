"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SunMedium, MoonStar } from "lucide-react";
import About from "@/src/components/About";

export default function AboutPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section className="min-h-screen max-w-4xl mx-auto px-4 py-16 transition-colors duration-300">
      <div className="mb-10 flex items-center justify-between">
        <Link
          href="/"
          className="rounded-md bg-gray-800 px-4 py-2 text-sm text-white transition hover:bg-gray-700"
          style={{ fontFamily: "var(--font-inria-sans)" }}
        >
          ⾕ Home
        </Link>

        {mounted && (
          <button
            onClick={handleThemeToggle}
            className="rounded-full bg-white px-4 py-2 shadow-md transition-all duration-300 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800"
            title="Toggle Theme"
          >
            {theme === "dark" ? (
              <SunMedium className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonStar className="h-5 w-5 text-gray-800" />
            )}
          </button>
        )}
      </div>

      <About />
    </section>
  );
}
