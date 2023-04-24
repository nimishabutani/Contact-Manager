import express, { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const userRouter: Router = Router();
userRouter.get("/", (request: Request, response: Response) => {
    response.json({ "Hello": "user get" })
})
userRouter.post("/register", [
    body('username').not().isEmpty().withMessage("Username is required"),
    body('password').isStrongPassword({ minLength: 6 }).withMessage("strong password is required"),
    body('email').isEmail().withMessage("proper email is required")
], async (request: Request, response: Response) => {


    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
    }
    try {
        const { username, email, password } = request.body;
        return response.status(200).json({
            msg: "Register a user",
            FormData: {
                username: username,
                email: email,
                password: password,
            }
        });
    } catch (e: any) {
        response.status(500).json({
            error: e.message

        });

    }

});
export default userRouter;

