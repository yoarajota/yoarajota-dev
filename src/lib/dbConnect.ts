import { keyable } from "asset/types";
import mongoose from "mongoose";

declare global {
  module globalThis {
    var mongoose: keyable;
  }
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGODB_URI) {
    throw new Error("No MONGODB_URI provided!")
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongoose) => {
        return mongoose;
      })
      .catch((a) => console.log(a));
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
