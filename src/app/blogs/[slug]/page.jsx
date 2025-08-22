import Blog from "@/src/models/Blog";
import connectDB from "@/src/lib/db";
import { notFound } from "next/navigation";
import BlogClient from "@/src/components/BlogClient";

export async function generateStaticParams() {
  await connectDB();
  const blogs = await Blog.find({}, "slug");
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogPage({ params }) {
  await connectDB();
  const blog = await Blog.findOne({ slug: params.slug });

  if (!blog) return notFound();

  return <BlogClient blog={JSON.parse(JSON.stringify(blog))} />;
}
