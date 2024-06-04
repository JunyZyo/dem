import { connection } from "./db.js";


export async function newUser(req, res) {

    const newuser = [req.body.name, req.body.email, req.body.phone, req.body.login, req.body.password];
    const sql = "INSERT INTO client (fio, email, telefon, login, password_user) VALUES (?, ?, ?, ?, ?)";


    connection.query(sql, newuser, function(err, results){
        if (err) {
            console.log("Ошибка", err)
            return res.status(400).send(JSON.stringify(err.sql))
        }
        else {
            console.log("Данные добавлены")
            return res.status(200).send(JSON.stringify("Данные добавлены"))
        }
    })
}