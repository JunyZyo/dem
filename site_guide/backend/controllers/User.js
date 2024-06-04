import { connection } from "./db.js";


export async function User(req, res) {

    const user = [req.body.login, req.body.password];
    const sql = "SELECT id_user, fio FROM client where fio=? and password_user=?"


    connection.query(sql, user, function(err, results){
        if (err) {
            console.log("Пользователь не найден", err.message)
        }
        else {
            console.log("Пользователь: ", results)
        }
        return (res.json(results))
    })
}