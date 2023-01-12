// import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface";
import  UserModel  from "../models/user.model"

const registerNewUser = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email });
    if ( checkIs ) return "ALREADY_USER"
    const createNewUser = await UserModel.create({email, password, name})
    return createNewUser;
}

const loginUser = async () => {

}

export { registerNewUser, loginUser }