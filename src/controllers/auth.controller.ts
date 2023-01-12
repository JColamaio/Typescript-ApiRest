import { Request, Response } from "express"
import { registerNewUser, loginUser } from "../services/auth.service"

const registerController = async (req: Request, res: Response) => {
    const data = req.body
    const responseUser = await registerNewUser(data)
    res.send(responseUser)
}

const loginController = async (req: Request, res: Response) => {

}

export { loginController, registerController}