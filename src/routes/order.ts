import { Router } from 'express'
import { getItems } from '../controllers/order.controller'
// Only session active users can access this route, having a valid JWT
const router = Router()

router.get('/', getItems);
export { router }
