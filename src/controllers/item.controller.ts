import { Request, Response } from "express"
import { insertCar, getCars, getOneCar, updateCar, deleteCar} from "../services/item.service";
import { handlerHttp } from "../utils/error.hander";

const getItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await getOneCar(id);
        const data = response ? response : "NOT_FOUND"

        res.send(response);
    } catch (e) {
        handlerHttp(res, 'ERROR GET ITEM', e)
    };
}
const getAllItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.send(response)
    } catch (e) {
        handlerHttp(res, 'ERROR GET ITEMS', e)
    };
}
const updateItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await updateCar( id );
        res.send(response);

    } catch (e) {
        handlerHttp(res, 'ERROR UPDATE ITEM', e)
    };
}
const postItem = async (req: Request, res: Response) => {
    try {
        const response = await insertCar( req.body )
        res.send(response)
    } catch (e) {
        handlerHttp(res, 'ERROR POST ITEMS', e)
    };
}
const deleteItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await deleteCar( id )
        res.send(response)
    } catch (e) {
        handlerHttp(res, 'ERROR DELETE ITEMS', e)
    };
}

export { getItem, getAllItems, updateItem, postItem, deleteItem }