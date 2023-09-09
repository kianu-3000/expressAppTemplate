const express = require('express');
const authRouter = express.Router();

// Login page route
authRouter.get('/login', (req, res)=>{
    res.header('Content-Type', 'text/html');
    res.send('<h1>Login Page</h1>');
});

module.exports = authRouter;