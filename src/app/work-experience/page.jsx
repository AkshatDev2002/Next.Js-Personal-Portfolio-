"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { SunMedium, MoonStar } from "lucide-react";
import { useEffect, useState } from "react";

export default function WorkExperience() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative p-6 max-w-4xl mx-auto">
      {/* Header with Home + Theme toggle */}
      <div className="flex justify-between items-center mb-10">
        <Link
          href="/"
          className="inline-block bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition"
          style={{ fontFamily: "var(--font-inria-sans)" }}
        >
          ⾕ Home
        </Link>

        {mounted && (
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-full shadow-md bg-white hover:bg-gray-200 transition-all duration-300 dark:bg-gray-900 dark:hover:bg-gray-800"
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

      {/* Work Experience Title */}
      <h2
        className="text-3xl font-semibold mb-6"
        style={{ fontFamily: "var(--font-oswald)" }}
      >
        Work Experience
      </h2>

      {/* Lined Grid Background applied only to Experience Section */}
      <div
        className="relative rounded-xl p-6 overflow-hidden"
      >
        <div
          className="absolute inset-0 -z-10 
          bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),
               linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] 
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),
               linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] 
          bg-[size:24px_24px]"
        />

        {/* Timeline */}
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm text-gray-400 dark:text-gray-500">
              February 2023 – May 2025 <br /> Birmingham, United Kingdom
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              <a
                className="hover:text-red-400"
                href="https://pass11plusgrammar.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pass 11 Plus under JMS Provider Limited
              </a>{" "}
              <br />
              Full Stack Web Developer & Website Administrator - Contract Worker
              (Remote)
            </h3>
            <ul className="mb-4 list-disc list-inside text-base text-gray-500 dark:text-gray-400 space-y-2">
              <li>Improved site reload speed by 19% and ensured full mobile/browser compatibility.</li>
              <li>Maintained website security and performed regular updates.</li>
              <li>Boosted SEO efforts, increasing organic traffic by 30%.</li>
              <li>Managed pages and blogs aligned with brand and campaigns.</li>
              <li>Provided tech support and ensured smooth, up-to-date site performance.</li>
            </ul>
          </li>

          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm text-gray-400 dark:text-gray-500">
              July 2024 – December 2024 <br /> Guwahati, India
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              <a
                className="hover:text-red-400"
                href="https://www.naiproductions.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NAI Production
              </a>{" "}
              <br />
              Mern Stack with Next.js Developer - Freelance (Hybrid)
            </h3>
            <ul className="mb-4 list-disc list-inside text-base text-gray-500 dark:text-gray-400 space-y-2">
              <li>Built and maintained NAI’s portfolio site with Next.js and responsive design.</li>
              <li>Created reusable components for projects, videos, and services.</li>
              <li>Implemented Google ReCaptcha V3.</li>
              <li>Integrated YouTube and Instagram embeds.</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
