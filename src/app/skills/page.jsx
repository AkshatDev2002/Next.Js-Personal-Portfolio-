"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { SunMedium, MoonStar } from "lucide-react";
import { useEffect, useState } from "react";
import Skills from "@/src/components/Skills";
import Lottie from "lottie-react";
import skillsAnimationData from "@/public/lottie/skills.json";
 


export default function SkillsPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };


  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Top Controls: Home + Theme Toggle */}
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

      {/* Skills Section */}
      <div>
        <h2
          className="text-3xl font-semibold mb-6"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Skills
        </h2>
        <Skills />
      </div>
      {/* Lottie Animation under Skills */}
        <div className="mt-6 sm:mt-12 flex justify-center">
          <Lottie
            animationData={skillsAnimationData}
            loop={true}
            className="w-42 h-42"
          />
          </div>
    </div>
  );
}
