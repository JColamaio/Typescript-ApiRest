import { Router, Request, Response } from "express";
import { deleteItem, getAllItems, getItem, postItem, updateItem } from "../controllers/item.controller";
import { logMiddleware } from "../middlewares/log";

const router = Router()

router.get('/',logMiddleware, getAllItems)
router.get('/:id', getItem) 
router.post('/', postItem) 
router.put('/:id', updateItem) 
router.delete('/:id', deleteItem) 



export { router }