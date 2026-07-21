
import express from 'express';
import multer from 'multer';
import {newUserRegistration} from '../controllers/userRegistrationController.js';
import { deleteGalleryImage, getProfile, getSingleUser, getUsers, updateProfile } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { upload } from '../middleware/uploadMiddleware.js';
const userRouter = express.Router();

userRouter.get('/profile', authMiddleware, getProfile);
userRouter.get('/get', authMiddleware, getUsers);
userRouter.get('/user', authMiddleware, getSingleUser)
userRouter.post(
  "/update",
  authMiddleware,
  upload.fields([
    { name: "profilePic", maxCount: 1 },
    { name: "gallery", maxCount: 10 },
  ]),
  updateProfile,
);

userRouter.put('/delete/gallery', authMiddleware, deleteGalleryImage);


export default userRouter;
