import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  metaTitle: { type: String },
  description: { type: String, required: true },
  metaDescription: { type: String },
  content: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  image1: { type: [String], default: [] },
  image2: { type: [String], default: [] },
  image3: { type: [String], default: [] },
  date: { type: Date, default: Date.now },
  tags: { type: [String], default: [] },
  keywords: { type: [String], default: [] },
  readingTime: { type: String },
  author: {
    name: { type: String, default: "Akshat Dev" },
    profileUrl: { type: String, default: "" },
  },
  published: { type: Boolean, default: true },
  featured: { type: Boolean, default: false }
});


// force it to use 'blogs' collection explicitly
export default mongoose.models.Blog || mongoose.model("Blog", blogSchema, "blogs");
