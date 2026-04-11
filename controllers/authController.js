
import * as zod from 'zod';
import { genSalt, hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Constants } from '../utils/constants.js';
import { loginUserValidation } from '../validations/user.js';
import { db } from '../db.js';

const loginAuth = async (req, res, next) => {

    const { username, password } = req.body;
    try {

        loginUserValidation.parse(req.body);
        const checkUser = await db("users").where({ username: username });
        if (checkUser.length <= 0) {
            res.status(Constants.STATUS_CODE.NOT_FOUND).json({
                message: "No such user!"
            })
        }
        const match = await compare(password, checkUser[0].password);
        if (!match) {
            res.status(Constants.STATUS_CODE.NOT_FOUND).json({
                message: "Password does not match!"
            })
        }
        const jwtPayload = {
            id: checkUser[0].id,
            username: checkUser[0].username
        }
        const token = jwt.sign(jwtPayload, process.env.SECRET_KEY, { expiresIn: "1h" });
        res.status(200).json({
            message: `Logged in as ${checkUser[0].username}`,
            token: token
        });
    } catch (err) {
        next(err);
    }

}

export { loginAuth };