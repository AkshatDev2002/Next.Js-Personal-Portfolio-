import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export default async function connectDB() {
  if (isConnected) {
    // Use existing DB connection if already established
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "blogs", // Explicitly use "blogs" database
    });

    isConnected = conn.connections[0].readyState === 1;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
}
