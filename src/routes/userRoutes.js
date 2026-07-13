
import express from 'express';
import {newUserRegistration} from '../controllers/userRegistrationController.js';
import { getUsers } from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.get('/get', getUsers);
userRouter.post('/new-registration', newUserRegistration);


export default userRouter;
