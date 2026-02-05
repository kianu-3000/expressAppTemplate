import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import { errorHandler, limiter } from './utils/errorHandler.js';
const app = express();

// middlewares
app.use(helmet());
app.use(errorHandler);
app.use(cors());
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

// serve static files
app.use(express.static('public'));

// Routes
import { userRouter } from './routes/user.js';
import { authRouter } from './routes/auth.js';
import { apiRouter } from './routes/api.js';
app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.use('/', userRouter);



app.listen(process.env.PORT, () => {
    console.log(`Server Running on port ${process.env.PORT}`);
});