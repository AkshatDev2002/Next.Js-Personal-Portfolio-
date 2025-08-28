import connectDB from "@/src/lib/db";
import Blog from "@/src/models/Blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find().sort({ createdAt: -1 });

    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching blogs:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch blogs", details: error.message },
      { status: 500 }
    );
  }
}
