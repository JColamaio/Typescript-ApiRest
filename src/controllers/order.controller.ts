import { Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken"
interface RequestExt extends Request{
    user?: string | JwtPayload;
}
const getItems =  (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "THIS CAN ONLY BE SEEN BY USERS WITH SESSIONS / JWT",
            user: req.user
        })
    } catch (error) {
        
    } 
}


export { getItems }