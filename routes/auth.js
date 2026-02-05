import { Router } from 'express';
const authRouter = Router();
import { loginAuth } from '../controllers/authController.js';

// Login page route
authRouter.post('/login', loginAuth);

export { authRouter };