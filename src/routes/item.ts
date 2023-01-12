import { Router, Request, Response } from "express";
import { deleteItem, getAllItems, getItem, postItem, updateItem } from "../controllers/item.controller";

const router = Router()

router.get('/', getAllItems)
router.get('/:id', getItem) 
router.post('/', postItem) 
router.put('/:id', updateItem) 
router.delete('/:id', deleteItem) 



export { router }