import { sign, verify } from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET

const generateToken =  (id:string) => {
    // @ts-ignore
    const jwt =  sign({ id }, JWT_SECRET,{
        expiresIn: "1h",
    });
    return jwt; 
}

const verifyToken = () => {

}
export { generateToken, verifyToken }