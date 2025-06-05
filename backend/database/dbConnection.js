// import mongoose from "mongoose";

// export const dbConnection = () => {
//   mongoose
//     .connect(process.env.MONGO_URI, {
//       dbName: "MERN_JOB_SEEKING_WEBAPP",
//     })
//     .then(() => {
//       console.log("Connected to database.");
//     })
//     .catch((err) => {
//       console.log(`Some Error occured. ${err}`);
//     });
// };
import mongoose from "mongoose";

export const dbConnection = () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error("❌ MONGO_URI is not defined in environment variables");
    return;
  }

  mongoose
    .connect(uri, {
      dbName: "MERN_JOB_SEEKING_WEBAPP"  // Optional if already in URI
    })
    .then(() => {
      console.log("✅ Connected to MongoDB Atlas");
    })
    .catch((err) => {
      console.error("❌ Database connection error:", err.message);
    });
};
