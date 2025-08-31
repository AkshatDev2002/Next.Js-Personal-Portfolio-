"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SunMedium, MoonStar } from "lucide-react";
import Lottie from "lottie-react";
import Contact from "@/src/components/Contact";
import contactAnimationData from "@/public/lottie/contact.json";

export default function ContactPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 md:px-8">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-10 sm:flex-row sm:items-center sm:gap-0">
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

      <h2
        className="mb-6 text-2xl font-semibold sm:text-3xl"
        style={{ fontFamily: "var(--font-oswald)" }}
      >
        Contact
      </h2>

      <Contact />

      <div className="mt-2 flex justify-center sm:mt-2">
        <div className="ml-5 h-20 w-20 sm:h-40 sm:w-40">
          <Lottie animationData={contactAnimationData} loop />
        </div>
      </div>
    </div>
  );
}
