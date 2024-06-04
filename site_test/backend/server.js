import cors from "cors"
import bodyParser from "body-parser"
import express from "express"


import { User } from "./controllers/User.js"
import { Reg } from "./controllers/Reg.js"
import { Zayavka } from "./controllers/Zayavka.js"
import { GetUser } from "./controllers/GetUser.js"




const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const port = 3000
app.listen(port)

app.use("/user", User)
app.use("/newuser", Reg)
app.use("/zayav", Zayavka)
app.use("/getuser", GetUser)

