import Blog from "@/src/models/Blog";
import connectDB from "@/src/lib/db";
import { notFound } from "next/navigation";
import BlogClient from "@/src/components/BlogClient";

// ✅ Pre-render static paths for blogs
export async function generateStaticParams() {
  await connectDB();
  const blogs = await Blog.find({}, "slug").lean();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

// ✅ Generate metadata for each blog (SEO)
export async function generateMetadata({ params }) {
  await connectDB();
  const blog = await Blog.findOne({ slug: params.slug }).lean();

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog does not exist.",
    };
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.description,
    keywords: blog.keywords || [],
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.description,
      url: `/blogs/${blog.slug}`,
      type: "article",
      images: blog.image1?.[0] ? [blog.image1[0]] : ["/default-og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.description,
      images: blog.image1?.[0] ? [blog.image1[0]] : ["/default-og.png"],
    },
  };
}

// ✅ Render blog content
export default async function BlogPage({ params }) {
  await connectDB();
  const blog = await Blog.findOne({ slug: params.slug }).lean();

  if (!blog) return notFound();

  return <BlogClient blog={JSON.parse(JSON.stringify(blog))} />;
}
