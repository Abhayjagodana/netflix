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

// import mongoose from "mongoose";

// let isConnected = false;

// export const connect = async () => {
//   if (isConnected) return;

//   if (!process.env.MONGO_URI) {
//     throw new Error("Please define the MONGO_URI environment variable inside .env");
//   }

//   await mongoose.connect(process.env.MONGO_URI);
//   isConnected = true;
//   console.log("MongoDB connected");
// };

// import mongoose from "mongoose";

// let isConnected = false;

// export const connect = async () => {
//   if (isConnected) {
//     console.log("Already connected to MongoDB");
//     return;
//   }
//    if (!process.env.MONGO_URI) {
//         throw new Error("Please define the MONGO_URI environment variable inside .env.local");
//     }

//   try {
// await mongoose.connect(process.env.MONGO_URI!);
//     isConnected = true;
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     throw error;
//   }
// };

import mongoose from "mongoose";

export const connect = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in environment variables");
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
};
