import express from 'express';
import { userLogin } from "../controllers/authController.js";
import { newUserRegistration } from '../controllers/userRegistrationController.js';
const authRouter = express.Router();

authRouter.post('/login', userLogin);
authRouter.post("/new-registration", newUserRegistration);

export default authRouter;