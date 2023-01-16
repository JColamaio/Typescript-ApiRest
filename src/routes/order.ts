import { Router } from 'express'
import { getItems } from '../controllers/order.controller'
import { checkSession } from '../middlewares/session';
// Only session active users can access this route, having a valid JWT
const router = Router()

router.get('/',checkSession, getItems);
export { router }
