import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import { errorHandler, limiter } from './utils/errorHandler.js';
const app = express();
import { db } from './db.js'

// middlewares
app.use(helmet());

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
app.use('/auth', authRouter);
app.use('/', userRouter);

// always put this after all the routes so it can apply
app.use(errorHandler);


async function server() {
    const exists = await db.schema.hasTable('users');
    if (exists) {
        console.log('connected to db...');
        app.listen(process.env.PORT, () => {
            console.log(`Server Running on port ${process.env.PORT}`);
        });
    } else {
        throw {
            error: "db connection error!"
        }
    }
}

server();