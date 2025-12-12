import mongoose from "mongoose";

const MONGO_URL = process.env.DATABASE_URL!;

if (!MONGO_URL) {
  throw new Error("❌ DATABASE_URL is not defined in environment variables");
}

let isConnected = false;

export default async function ConnectDB() {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(MONGO_URL, {
      dbName: "my-app", // اگر در URI مشخص نشده
    });

    isConnected = true;
    console.log("✅ MongoDB connected:", db.connection.host);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}