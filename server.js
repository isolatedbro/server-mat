import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./src/routes/userRoutes.js";
import connectDB from "./src/config/database.js";
import authRoutes from "./src/routes/authRoutes.js";
import uploadRoutes from "./src/routes/uploadRoutes.js";
dotenv.config();
connectDB();
const app = express();

const allowedOrigins = [
  "https://isolatedbro.github.io",
  "https://matrimony-project-pq2p.onrender.com",
  "http://localhost:5173",
];
app.use(
  cors({
    origin(origin, callback) {
      // console.log("Origin", origin);
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      callback(new Error("Not allowed by CORS"));
    },
  }),
);
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// app.post("/api/update", upload.single("profilePic"));

// app.use((req, res, next) => {
//   console.log(req.method, req.url);
//   next();
// });
app.use("/uploads", express.static(path.join(__dirname, "src", "uploads")));

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/upload", uploadRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
