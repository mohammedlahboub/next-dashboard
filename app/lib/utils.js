import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {};

  try {
    if (connection.isConnected) return;

    const db = await mongoose.connect(process.env.MONGO_DB_URL);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("Error Connecting To DB: ", error);
    throw new Error(error);
  }
};
