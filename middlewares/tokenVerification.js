import jwt from "jsonwebtoken";
import { Constants } from "../utils/constants.js";

const verifyToken = (req, res, next) => {
    try {

        const header = req.headers.authorization; // get auth header
        if (!header) {
            res.status(Constants.STATUS_CODE.UNAUTHORIZED).json({ message: "Missing Token!" });
        }

        const token = header; // this is the token "Bearer <token>"
        if (!token) {
            res.status(Constants.STATUS_CODE.BAD_REQUEST).json({ message: "Invalid Token!" });
        }

        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decodedToken; // set a req value of key user to the decoded token
        next();

    } catch (err) {
        next(err);
    }
}

export { verifyToken }