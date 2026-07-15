
import express from 'express';
import {newUserRegistration} from '../controllers/userRegistrationController.js';
import { getProfile, getUsers } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const userRouter = express.Router();

userRouter.get('/profile', authMiddleware, getProfile);
userRouter.get('/get', authMiddleware, getUsers);


export default userRouter;
