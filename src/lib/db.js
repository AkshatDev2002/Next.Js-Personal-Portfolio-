import mongoose from "mongoose";

let isConnected = false; // Track connection state

const connectDB = async () => {
  if (isConnected) return; // Prevent multiple connections in dev/hot reload

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState === 1;

    if (isConnected) {
      console.log("✅ MongoDB Connected");
    } else {
      console.log("❌ MongoDB Connection Failed");
    }
  } catch (error) {
    console.error("❌ DB Connection Error:", error);
    throw error;
  }
};

export default connectDB;