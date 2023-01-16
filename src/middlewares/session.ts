import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handler";

interface RequestExt extends Request {
    user?:{id:string | JwtPayload}
}
const checkSession = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = verifyToken(`${jwt}`)
        console.log(isUser,"ete")
        if(!isUser){
            res.status(401)
            res.send("NO VALID SESSION")
        } else {
            req.user = isUser
            console.log({jwtByUser})
            next()
        }
        
    } catch (e) {
        res.status(400);
        res.send("INVALID SESSION")
    }
}

export { checkSession }
