import * as zod from 'zod';

const createUserValidation = zod.object({
    username: zod.string().min(3, "First name must be at least 3 characters long!"),
    fname: zod.string().min(3, "First name must be at least 3 characters long!"),
    mname: zod.string().length(1, "Middle Initial only").nullable(),
    lname: zod.string().min(3, "Last name must be at least 3 characters long!"),
    birthDate: zod.string(),
    age: zod.number(),
    number: zod.string(),
    password: zod.string().min(3, "password must be at least 3 characters long!")
});

const loginUserValidation = zod.object({
    username: zod.string().min(3, "First name must be at least 3 characters long!"),
    password: zod.string().min(3, "password must be at least 3 characters long!")
});

export { createUserValidation, loginUserValidation };