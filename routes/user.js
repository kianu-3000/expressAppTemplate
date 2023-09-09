const express = require('express');
const {profile} = require('../controllers/userController');
const userRouter = express.Router();

//Home Page
userRouter.get('/home', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // Sample Data
    res.json([
        {
            "Name": "Kianu Yepes",
            "Birth Date": "August 20, 2000",
            "Age": 23
        },
        {
            "Name": "Sale Kuku",
            "Birth Date": "March 3, 2000",
            "Age": 23
        }
    ]);
    
});

// example
userRouter.get('/profile', profile);

module.exports = userRouter;