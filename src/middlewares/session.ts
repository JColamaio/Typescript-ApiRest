import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handler";

const checkSession = (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isOk = verifyToken(`${jwt}`)
        if(!isOk){
            res.status(401)
            res.send("NO VALID SESSION")
        } else {
            console.log({jwtByUser})
            next()
        }
        
    } catch (e) {
        res.status(400);
        res.send("INVALID SESSION")
    }
}

export { checkSession }
