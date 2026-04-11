import { Router } from 'express';
import { getUsers, createUser } from '../controllers/userController.js';
import { verifyToken } from '../middlewares/tokenVerification.js';
const userRouter = Router();

userRouter.get('/get-users', verifyToken, getUsers);
userRouter.post('/create-user', createUser);

export { userRouter };