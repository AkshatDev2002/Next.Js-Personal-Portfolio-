"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { SunMedium, MoonStar } from "lucide-react";
import { useEffect, useState } from "react";
import Contact from "@/src/components/Contact";
import Lottie from "lottie-react";
import contactAnimationData from "@/public/lottie/contact.json"; // Replace with your Lottie JSON

export default function ContactPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 py-6 max-w-4xl mx-auto">
      {/* Top Controls: Home + Theme Toggle */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 gap-4 sm:gap-0">
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

      {/* Contact Section */}
      <div>
        <h2
          className="text-2xl sm:text-3xl font-semibold mb-6"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Contact
        </h2>
        <Contact />

        {/* Lottie Animation at Bottom */}
        <div className="mt-2 sm:mt-2 flex justify-center">
          <div className="w-20 h-20 sm:w-40 sm:h-40 ml-5">
            <Lottie animationData={contactAnimationData} loop />
          </div>
        </div>
      </div>
    </div>
  );
}
