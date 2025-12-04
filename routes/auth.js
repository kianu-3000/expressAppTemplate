import { Router } from 'express';
const authRouter = Router();

// Login page route
authRouter.get('/login', (req, res) => {
    res.header('Content-Type', 'text/html');
    res.send('<h1>Login Page</h1>');
});

export { authRouter };