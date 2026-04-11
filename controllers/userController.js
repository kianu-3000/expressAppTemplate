
import { genSalt, hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Constants } from '../utils/constants.js';
import { db } from '../db.js';
import { createUserValidation } from '../validations/user.js'

// get the user
const getUsers = async (req, res, next) => {
    try {
        const users = await db("users").select("*");
        res.status(Constants.STATUS_CODE.OK).json({
            loggedInUser: req.user.username,
            users: users
        });
    } catch (err) {
        next(err);
    }
}

const createUser = async (req, res, next) => {

    try {
        const validateData = createUserValidation.parse(req.body);
        const hashedPassword = await hash(validateData.password, 7);
        validateData.password = hashedPassword;

        const [id] = await db("users").insert(validateData);
        res.status(Constants.STATUS_CODE.CREATED).json({
            message: "successfully created user!",
            userId: id
        });
    } catch (err) {
        next(err);
    }

}

export { getUsers, createUser };