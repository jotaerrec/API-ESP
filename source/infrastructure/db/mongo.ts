import mongoose from "mongoose";
const DB_URI = `${process.env.DB_URI}`;

const dbInit = async () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(DB_URI, () => {
    console.log("Connected to MongoDB");
  });
};

export default dbInit;
