
import * as zod from 'zod';
import { genSalt, hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Constants } from '../utils/constants.js';
const loginAuth = (req, res, next) => {

    const inputValidation = zod.object({ // this is to validate user input
        status: zod.int(),
        username: zod.string(),
        password: zod.string()
    });

    const { username, password } = req.body;

    try {
        const user = {
            status: Constants.STATUS_CODE.OK,
            username: username,
            password: password
        }

        const data = inputValidation.parse(user);
        let token = jwt.sign({ username: data.username }, process.env.SECRET_KEY, { expiresIn: 60 * 60 });
        data["token"] = token;
        // const decoded = jwt.decode(token, { complete: true });
        // const test = atob(token.split('.')[1]);
        // Sample Data
        const dataResponse = {
            status: data.status,
            username: data.username,
            token: data.token
        }
        res.status(Constants.STATUS_CODE.OK).json(dataResponse);
    } catch (err) {
        next(err);
    }

}

export { loginAuth };