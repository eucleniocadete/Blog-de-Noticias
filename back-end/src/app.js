import express from "express"
import cors from "cors"
import router from "./routes.js"

const app = express()

app.use(cors({
    origin: "http://127.0.0.1:5500"
}))

app.use(express.json())
app.use(router)

export default app
