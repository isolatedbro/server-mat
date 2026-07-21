import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";
import { uploadProfilePic } from "../controllers/uploadController.js";
const uploadRouter = express.Router();

uploadRouter.post(
  "/profile-picture",
  authMiddleware,
  upload.single("profilePic"),
  uploadProfilePic,
);

// uploadRouter.post(
//   "/profile-picture",
//   (req, res, next) => {
//     console.log("1. Route reached");
//     next();
//   },
//   authMiddleware,
//   (req, res, next) => {
//     console.log("2. After auth");
//     next();
//   },
//   upload.single("profilePic"),
//   (req, res, next) => {
//     console.log("3. After multer");
//     next();
//   },
//   (req, res, next) => {
//     console.log("req.file =", req.file);
//     console.log("req.body =", req.body);
//     next();
// },
//   uploadProfilePic,
// );

export default uploadRouter;
