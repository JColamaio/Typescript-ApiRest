import { NextFunction, Response, Request } from "express"
// middleware to know from where the request is being send
const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers;
    const userAgent = header['user-agent']
    console.log("user_agent", userAgent)
    next();
}

export { logMiddleware}