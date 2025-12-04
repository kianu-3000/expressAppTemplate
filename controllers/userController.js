
import * as zod from 'zod';
import { genSalt, hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
const profile = (req, res, next) => {

    const user = zod.object({
        name: zod.string(),
        age: zod.int()
    });

    try {
        const user1 = {
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