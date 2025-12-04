import { Router } from 'express';
import { profile } from '../controllers/userController.js';
const userRouter = Router();

//Home Page
userRouter.get('/home', profile);

export { userRouter };