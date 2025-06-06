import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI not found in environment variables.");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("✅ MongoDB bağlantısı kuruldu");
  } catch (error) {
    console.error("❌ MongoDB bağlantı hatası:", error);
    throw error;
  }
};
