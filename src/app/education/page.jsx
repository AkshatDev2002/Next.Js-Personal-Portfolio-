"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { SunMedium, MoonStar } from "lucide-react";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import gradAnimationData from "@/public/lottie/grad.json";

export default function EducationPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const education = [
    {
      period: "September 2020 – June 2023",
      location: "Assam, India",
      institute: "Central Institute of Technology Kokrajhar",
      link: "https://cit.ac.in/",
      degree: "Bachelor of Technology in Computer Science and Engineering",
    },
    {
      period: "August 2017 – June 2020",
      location: "Assam, India",
      institute: "Central Institute of Technology Kokrajhar",
      link: "https://cit.ac.in/",
      degree: "Diploma in Computer Science and Engineering",
    },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-8 py-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
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
            className="px-4 py-2 rounded-full shadow-md bg-white hover:bg-gray-200 transition dark:bg-gray-900 dark:hover:bg-gray-800"
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
        className="text-2xl sm:text-3xl font-semibold mb-6"
        style={{ fontFamily: "var(--font-oswald)" }}
      >
        Education
      </h2>

      <ol className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 sm:ml-6">
        {education.map((item, index) => (
          <li key={index} className="mb-10 relative pl-6 sm:pl-8">
            <span className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 top-1 border border-white dark:border-gray-900 dark:bg-gray-700"></span>
            <time className="block mb-1 text-sm text-gray-400 dark:text-gray-500">
              {item.period} <br />
              {item.location}
            </time>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition"
              >
                {item.institute}
              </a>
            </h3>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              {item.degree}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-6 sm:mt-12 flex justify-center">
        <div className="w-40 h-40 sm:w-64 sm:h-64">
          <Lottie animationData={gradAnimationData} loop />
        </div>
      </div>
    </div>
  );
}
