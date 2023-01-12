import "dotenv/config"
import  express  from "express";
import  cors  from 'cors'
import { router } from './routes'
import db from "../config/mongo"
const PORT = process.env.PORT || 3001
const app = express()
app.use(cors({
    origin:['http://localhost:3000']
}))
app.use(router)
db().then(() => console.log("Connected to db"))
app.listen(PORT, () => console.log("Server Online on port " + `${PORT}`))
