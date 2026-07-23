
import express from 'express';
import multer from 'multer';
import {newUserRegistration} from '../controllers/userRegistrationController.js';
import { deleteGalleryImage, getMatch, getProfile, getRequest, getSingleUser, getUsers, sendRequest, updateProfile, updateRequest } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { upload } from '../middleware/uploadMiddleware.js';
const userRouter = express.Router();

userRouter.get('/profile', authMiddleware, getProfile);
userRouter.get('/get', authMiddleware, getUsers);
userRouter.get('/user/:userId', authMiddleware, getSingleUser);
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
userRouter.post('/send-request', authMiddleware, sendRequest);
userRouter.get('/get-requests', authMiddleware, getRequest);
userRouter.post('/update-status', authMiddleware, updateRequest);
userRouter.get('/get-match', authMiddleware, getMatch);


export default userRouter;