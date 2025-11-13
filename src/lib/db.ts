


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

// if (process.env.NODE_ENV === "development") {
// // if (true) {
//   // In dev mode, use a global variable so the client is cached across reloads
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   // In prod, create a new client each time
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;

// // Optional helper to get DB
// export const getDb = async (dbName: string): Promise<Db> => {
//   const client = await clientPromise;
//   return client.db(dbName);
// };
