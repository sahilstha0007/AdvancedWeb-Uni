import express from "express";
import laptopRoutes from "./routes/laptop.routes.js";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const mongo = process.env.MONGODB;

mongoose
  .connect(mongo)
  .then(() => {
    console.log("Connected to Database!");
    app.listen(process.env.PORT || 3000, () =>
      console.log("Server running....."),
    );
  })
  .catch((err) => console.error("Database connection failed:", err));

app.use("/api/laptops", laptopRoutes);
