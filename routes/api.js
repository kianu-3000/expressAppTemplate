import {Router} from "express";
const apiRouter = Router();

//Home Page
apiRouter.get('/animals', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json([
        {
            "Title": "Salamander",
            "Content": "Is a type of lizard"
        },
        {
            "Title": "Shark",
            "Content": "Is a type of fish"
        }

    ]);

});

export { apiRouter }