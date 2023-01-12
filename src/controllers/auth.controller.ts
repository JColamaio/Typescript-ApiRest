import { Request, Response } from "express"
import { registerNewUser, loginUser } from "../services/auth.service"

const registerController = async (req: Request, res: Response) => {
    const data = req.body
    const responseUser = await registerNewUser(data)
    res.send(responseUser)
}

const loginController = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    const responseUser = await loginUser({ email, password });

    if(responseUser === "INCORRECT PASSWORD") {
        res.status(403);
        res.send(responseUser);
    }else {
        res.send(responseUser)
    }
}

export { loginController, registerController}