// // lib/mongodb.ts
// import { MongoClient, Db } from "mongodb";

// const uri = process.env.MONGODB_URI as string;
// const options = {};

// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

// declare global {
//   // allow global var for hot reload in dev
//   var _mongoClientPromise: Promise<MongoClient> | undefined;
// }

// if (!uri) {
//   throw new Error("Please add your Mongo URI to .env.local");
// }

// // if (process.env.NODE_ENV === "development") {
// if (true) {
//   // In dev mode, use a global variable so the client is cached across reloads
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } 

// export default clientPromise;

// // Optional helper to get DB
// export const getDb = async (dbName: string): Promise<Db> => {
//   const client = await clientPromise;
//   return client.db(dbName);
// };


import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

export const db = client.db("portfolio"); // change your db name


// lib/mongodb.ts
// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI ?? "";

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
// }

// let cached = (global as any)._mongoose;

// if (!cached) {
//   cached = (global as any)._mongoose = { conn: null, promise: null };
// }

// export async function connectToDatabase() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI, {
//       // useNewUrlParser, useUnifiedTopology are defaults in latest mongoose
//     }).then((mongoose) => mongoose);
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }
