"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { MoonStar, SunMedium } from "lucide-react";
import Link from "next/link";

export default function BlogClient({ blog }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#000" : "#fff";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const content = typeof blog.content === "string" ? blog.content : "<p>No content found.</p>";

  const metaTitle = blog.metaTitle || blog.title;
  const metaDescription = blog.metaDescription || blog.description;
  const authorName = blog.author?.name || "Akshat Dev";

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={blog.keywords?.join(", ")} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={blog.image1?.[0] || "/default-og.png"} />
        <meta property="og:type" content="article" />
        <meta name="author" content={authorName} />
      </Head>

      <div
        className={`max-w-5xl mx-auto py-10 px-4 transition-colors duration-300 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-10">
          {/* Left Buttons */}
          <div className="flex gap-3">
            <Link
              href="/"
              className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition"
              style={{ fontFamily: "var(--font-inria-sans)" }}
            >
              ⾕ Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition"
              style={{ fontFamily: "var(--font-inria-sans)" }}
            >
              ← Go Back
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full shadow-md bg-white hover:bg-gray-200 transition-all duration-300"
            title="Toggle Theme"
          >
            {theme === "dark" ? (
              <SunMedium className="h-5 w-5 text-black" />
            ) : (
              <MoonStar className="h-5 w-5 text-black" />
            )}
          </button>
        </div>

        {/* Blog Content Section */}
        <div
          className="flex flex-col sm:flex-row gap-8"
          style={{
            color: theme === "dark" ? "#fff" : "#000",
            textAlign: "justify",
          }}
        >
          {/* Text Content */}
          <div className="flex-1">
            <h1
              className="text-3xl sm:text-4xl font-bold mb-3"
              style={{ fontFamily: "var(--font-imprima)" }}
            >
              {blog.title}
            </h1>

            {/* Meta Info */}
            <p className="text-gray-400 text-sm mb-1">
              {format(new Date(blog.date), "dd MMMM yyyy")} • {blog.readingTime}
            </p>
            <p className="text-gray-500 text-sm italic mb-4">
              Written by {authorName}
            </p>

            {/* Blog Body */}
            <div
              className="prose max-w-none mt-5"
              style={{ color: theme === "dark" ? "#fff" : "#000" }}
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 mb-6">
              {blog.tags?.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs px-2 py-1 rounded-full ${
                    theme === "dark"
                      ? "bg-white/10 text-white"
                      : "bg-black/10 text-black"
                  }`}
                  style={{ fontFamily: "var(--font-inria-sans)" }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex flex-col items-start">
            {blog.image1?.[0] && (
              <img
                src={blog.image1[0]}
                alt="Blog Image 1"
                className="w-full sm:w-[250px] rounded-md shadow-md border border-gray-300 object-cover"
              />
            )}
            {blog.image2?.[0] && (
              <img
                src={blog.image2[0]}
                alt="Blog Image 2"
                className="w-full sm:w-[250px] mt-5 rounded-md shadow-md border border-gray-300 object-cover"
              />
            )}
            {blog.image3?.[0] && (
              <img
                src={blog.image3[0]}
                alt="Blog Image 3"
                className="w-full sm:w-[250px] mt-5 rounded-md shadow-md border border-gray-300 object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
