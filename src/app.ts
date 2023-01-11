import "dotenv/config"
import  express  from "express";
import  cors  from 'cors'

const PORT = process.env.PORT || 3001
const app = express()
app.use(cors({
    origin:['http://localhost:3000']
}))

app.listen(PORT, () => console.log("Server Online on port " + `${PORT}`))