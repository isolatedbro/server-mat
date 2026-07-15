import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./src/routes/userRoutes.js";
import connectDB from "./src/config/database.js";
import authRouter from "./src/routes/authRoutes.js";
dotenv.config();
connectDB();
const app = express();

const allowedOrigins = ["https://isolatedbro.github.io"];
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

app.use("/users", userRoutes);
app.use("/auth", authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
