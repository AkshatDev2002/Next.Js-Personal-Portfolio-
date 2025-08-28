"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Blogs from "@/src/components/Blogs";
import { useTheme, ThemeProvider } from "next-themes";
import { SunMedium, MoonStar } from "lucide-react";

function BlogContent() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // ✅ Prevent hydration mismatch by waiting for mount
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">Loading...</p>
      </section>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section className="min-h-screen py-16 px-4 max-w-4xl mx-auto transition-colors duration-300">
      {/* Header */}
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

      {/* Page Title */}
      <h1
        className="text-4xl mb-10 text-gray-900 dark:text-gray-100 transition-colors duration-300"
        style={{ fontFamily: "var(--font-oswald)" }}
      >
        Blogs
      </h1>

      {/* Blog List */}
      <Blogs />
    </section>
  );
}

export default function BlogPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <BlogContent />
    </ThemeProvider>
  );
}
