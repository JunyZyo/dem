import cors from "cors"
import bodyParser from "body-parser"
import express from "express"


import { User } from "./controllers/User.js"
import { newUser } from "./controllers/newUser.js"
import { Zayavka } from "./controllers/Zayavka.js"
import { allUser } from "./controllers/allUser.js"


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const port = 3000

app.listen(port)

app.use("/user", User)
app.use("/newuser", newUser)
app.use("/zayav", Zayavka)
app.use("/getuser", allUser)
