import { connection } from "./db.js";

export async function Zayavka(req, res){

    const zayav = [req.body.userid, req.body.number, req.body.description]
    const sql = "INSERT INTO statement (id_user, number_auto, description) VALUES (?, ?, ?)"

    connection.query(sql, zayav, function(err, results){
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