import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./src/routes/userRoutes.js";
import connectDB from "./src/config/database.js";
dotenv.config();
connectDB();
const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://isolatedbro.github.io",
];
app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      callback(new Error("Not allowed by CORS"));
    },
  }),
);
app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({message:"Hello, World!"});
// });
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
