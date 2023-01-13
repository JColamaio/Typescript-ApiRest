import { Request, Response } from "express"

const getItems = async (req: Request, res: Response) => {
    try {
        res.send({
            data: "THIS CAN ONLY BE SEEN BY USERS WITH SESSIONS / JWT"
        })
    } catch (error) {
        
    } 
}


export { getItems }