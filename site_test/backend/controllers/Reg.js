import { connection } from "./db.js";

export async function Reg(req, res){

    const user = [req.body.name, req.body.login, req.body.email, req.body.number, req.body.password]
    const sql = "INSERT INTO client (fio, login, email, telefon, password_user) VALUES (?, ?, ?, ?, ?)"

    connection.query(sql, user, function(err, results){
        if (err) {
            console.log("Ошибка добавления", err.message)
            return (res.status(400).send(JSON.stringify(err)))
        }
        else {
            console.log("Данные добавлены")
            return (res.status(200).send(JSON.stringify("Данные добавлены")))
        }
    })
}