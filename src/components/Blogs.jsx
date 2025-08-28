"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Head from "next/head";

export default function Blogs() {
  const [mounted, setMounted] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const pathname = usePathname();
  const baseURL = "https://yourdomain.com";

  useEffect(() => setMounted(true), []);

  useEffect(() => {
  async function fetchBlogs() {
    try {
      const res = await fetch("/api/blogs");
      if (!res.ok) throw new Error("Failed to fetch blogs");

      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error(err);
    }
  }
  fetchBlogs();
}, []);

  if (!mounted) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Batman’s Dev Blog",
    url: `${baseURL}${pathname}`,
    author: { "@type": "Person", name: "Batman" },
    description: "Technical blogs on SEO, performance, and frontend engineering.",
    blogPost: blogs.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      url: `${baseURL}/blogs/${blog.slug}`,
      datePublished: blog.date,
      author: { "@type": "Person", name: "Batman" },
      description: blog.description,
    })),
  };

  return (
    <>
      <Head>
        <title>Ab Initio Blog by Akshat Dev | Tutorials, Projects & Interview Prep</title>
        <meta
          name="description"
          content="Explore hands-on blogs on Ab Initio ETL, GDE, Co>Operating System, and real-time interview prep by Akshat Dev. Ideal for data engineers & developers."
        />
        <link rel="canonical" href={`${baseURL}${pathname}`} />
      </Head>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />

      <section className="min-h-screen py-16 px-4 max-w-4xl mx-auto transition-colors duration-300 text-gray-900 dark:text-white mt-[-50]">

        <div className="grid gap-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog._id}
              className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blogs/${blog.slug}`}>
                <h2 className="text-xl text-gray-800 dark:text-gray-100 mb-2" style={{ fontFamily: "var(--font-imprima)" }}>
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1" style={{ fontFamily: "var(--font-inria-sans)" }}>
                  {blog.description}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1" style={{ fontFamily: "var(--font-inria-sans)" }}>
                  {new Date(blog.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })} • {blog.readingTime}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {blog.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-black/10 dark:bg-white/10 text-black dark:text-white"
                      style={{ fontFamily: "var(--font-inria-sans)" }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
