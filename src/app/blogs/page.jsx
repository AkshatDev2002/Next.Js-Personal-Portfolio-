"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Blogs from "@/src/components/Blogs";
import { useTheme, ThemeProvider } from "next-themes"; // import ThemeProvider
import { SunMedium, MoonStar } from "lucide-react";

function BlogContent() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration issues by rendering theme-dependent UI only after mount
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  if (!mounted) return null;

  return (
    <section className="min-h-screen py-16 px-4 max-w-4xl mx-auto transition-colors duration-300">
      {/* Header with Home + Theme toggle */}
      <div className="flex justify-between items-center mb-10">
        <Link
          href="/"
          className="inline-block bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition"
          style={{ fontFamily: "var(--font-inria-sans)" }}
        >
          ⾕ Home
        </Link>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-full shadow-md bg-white hover:bg-gray-200 transition-all duration-300 dark:bg-gray-900 dark:hover:bg-gray-800"
          title="Toggle Theme"
        >
          {theme === "dark" ? (
            <SunMedium className="h-5 w-5 text-yellow-400" />
          ) : (
            <MoonStar className="h-5 w-5 text-gray-800 dark:text-gray-200" />
          )}
        </button>
      </div>

      <h1 className="text-4xl mb-10" style={{ fontFamily: "var(--font-oswald)" }}>
        Blogs
      </h1>

      <div>
        <Blogs />
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <BlogContent />
    </ThemeProvider>
  );
}
