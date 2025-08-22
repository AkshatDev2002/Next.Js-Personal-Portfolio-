import connectDB from "@/src/lib/db";
import Blog from "@/src/models/Blog";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
