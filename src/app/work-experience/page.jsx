"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SunMedium, MoonStar } from "lucide-react";

export default function WorkExperience() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-10">
        <Link
          href="/"
          className="inline-block rounded-md bg-gray-800 px-4 py-2 text-sm text-white transition hover:bg-gray-700"
          style={{ fontFamily: "var(--font-inria-sans)" }}
        >
          ⾕ Home
        </Link>

        {mounted && (
          <button
            onClick={toggleTheme}
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
        className="mb-6 text-3xl font-semibold"
        style={{ fontFamily: "var(--font-oswald)" }}
      >
        Work Experience
      </h2>

      <div className="relative overflow-hidden rounded-xl p-6">
        <div
          className="absolute inset-0 -z-10 
            bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),
                 linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)]
            dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),
                 linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
            bg-[size:24px_24px]"
        />

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {/* BxData */}
          <li className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm text-gray-400 dark:text-gray-500">
              August 2025 – Current <br /> Noida, UP
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400"
              >
                BxData Tech Solution
              </a>
              <br />
              Frontend Developer — Fulltime (On Site)
            </h3>
            <ul className="mb-4 list-inside list-disc space-y-2 text-base text-gray-500 dark:text-gray-400">
              <li>Developing and maintaining responsive web apps with React.js.</li>
              <li>Managing scalable state with Redux.</li>
              <li>Writing clean, optimized, and reusable code.</li>
              <li>Ensuring cross-browser and multi-device compatibility.</li>
            </ul>
          </li>

          {/* Pass 11 Plus */}
          <li className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm text-gray-400 dark:text-gray-500">
              February 2023 – May 2025 <br /> Birmingham, United Kingdom
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              <a
                href="https://pass11plusgrammar.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400"
              >
                Pass 11 Plus under JMS Provider Limited
              </a>
              <br />
              Full Stack Web Developer & Website Administrator — Freelance
              (Remote)
            </h3>
            <ul className="mb-4 list-inside list-disc space-y-2 text-base text-gray-500 dark:text-gray-400">
              <li>Improved site reload speed by 19% with optimized builds.</li>
              <li>Maintained website security and updates.</li>
              <li>Increased organic traffic by 30% through SEO improvements.</li>
              <li>Managed pages and blogs aligned with campaigns.</li>
              <li>Delivered ongoing tech support for smooth performance.</li>
            </ul>
          </li>

          {/* NAI Production */}
          <li className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm text-gray-400 dark:text-gray-500">
              July 2024 – December 2024 <br /> Guwahati, India
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              <a
                href="https://www.naiproductions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400"
              >
                NAI Production
              </a>
              <br />
              MERN + Next.js Developer — Freelance (Hybrid)
            </h3>
            <ul className="mb-4 list-inside list-disc space-y-2 text-base text-gray-500 dark:text-gray-400">
              <li>Developed portfolio site with Next.js and responsive UI.</li>
              <li>Created reusable project/video/service components.</li>
              <li>Implemented Google ReCaptcha v3.</li>
              <li>Integrated YouTube and Instagram embeds.</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
