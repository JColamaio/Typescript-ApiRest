// import { Auth } from "../interfaces/auth.interface"
import { verify } from "jsonwebtoken";
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import  UserModel  from "../models/user.model"
import  { encrypt, verified }  from '../utils/bcrypt.handler'

const registerNewUser = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email });
    if ( checkIs ) return "ALREADY_USER"
    const passHash = await encrypt(password)    
    const createNewUser = await UserModel.create({
        email, 
        password: passHash, 
        name
    })
    return createNewUser;
}

const loginUser = async ({email, password}: Auth) => {
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) return "USER NOT FOUND"

    const passwordHash = checkIs.password
    const isCorrect = await verified(password, passwordHash)

    if(!isCorrect) return 'INCORRECT PASSWORD'
    
    return checkIs
}

export { registerNewUser, loginUser }