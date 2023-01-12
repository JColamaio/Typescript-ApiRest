import { Request, Response } from "express"
import { handlerHttp } from "../utils/error.hander";

const getItem = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handlerHttp(res, 'ERROR GET BLOG')
    };
}
const getAllItems = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handlerHttp(res, 'ERROR GET BLOGS')
    };
}
const updateItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handlerHttp(res, 'ERROR UPDATE BLOG')
    };
}
const postItem = (req: Request, res: Response) => {
    try {
        res.send(req.body)
    } catch (e) {
        handlerHttp(res, 'ERROR POST BLOG')
    };
}
const deleteItem = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handlerHttp(res, 'ERROR DELETE BLOG')
    };
}

export { getItem, getAllItems, updateItem, postItem, deleteItem }