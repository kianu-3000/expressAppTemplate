import { Router } from 'express';
import { profile } from '../controllers/userController.js';
import { verifyToken } from '../middlewares/tokenVerification.js';
const userRouter = Router();


//Home Page
userRouter.get('/home', verifyToken, profile);

export { userRouter };