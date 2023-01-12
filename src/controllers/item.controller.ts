import { Request, Response } from "express"
import { handlerHttp } from "../utils/error.hander";

const getItem = (req: Request, res: Response) => {
    try {
    
    } catch (e) {
    handlerHttp(res, 'ERROR GET ITEM')
    };
}
const getAllItems = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handlerHttp(res, 'ERROR GET ITEMS')
    };
}
const updateItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handlerHttp(res, 'ERROR UPDATE ITEM')
    };
}
const postItem = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handlerHttp(res, 'ERROR POST ITEMS')
    };
}
const deleteItem = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handlerHttp(res, 'ERROR DELETE ITEMS')
    };
}

export { getItem, getAllItems, updateItem, postItem, deleteItem }