// // src/utils/dbconfig.ts

// import mongoose from "mongoose";

// const MONGO_URI = process.env.MONGO_URI;

// if (!MONGO_URI) {
//   throw new Error("Please define the MONGO_URI environment variable inside .env");
// }

// export const connect = async () => {
//   if (mongoose.connection.readyState >= 1) {
//     return;
//   }
//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log("MongoDB connected successfully");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     throw error;
//   }
// };

import mongoose from "mongoose";

let isConnected = false;

export const connect = async () => {
  if (isConnected) return;

  if (!process.env.MONGO_URI) {
    throw new Error("Please define the MONGO_URI environment variable inside .env");
  }

  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
  console.log("MongoDB connected");
};
