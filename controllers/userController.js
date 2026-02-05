
import * as zod from 'zod';
import { genSalt, hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Constants } from '../utils/constants.js';
const profile = (req, res, next) => {

    const user = zod.object({ // this is to validate user input
        status: zod.int(),
        name: zod.string(),
        age: zod.int()
    });

    try {
        const user1 = {
            status: Constants.STATUS_CODE.OK,
            name: "Kianu",
            age: 25
        }

        const data = user.parse(user1);
        // Sample Data
        res.json(data);
    } catch (err) {
        next(err);
    }

}

export { profile };