const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

// serve static files
app.use(express.static('public'));

// Routes
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const apiRouter = require('./routes/api');
app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.use('/', userRouter);



app.listen(process.env.PORT, () => {
    console.log(`Server Running on port ${process.env.PORT}`);
});