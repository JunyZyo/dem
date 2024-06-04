import { connection } from "./db.js";

export async function User(req, res){

    const user = [req.body.login, req.body.password];
    const sql = "SELECT id_user, fio FROM client where login=? and password_user=?"

    connection.query(sql, user, function(err, results){
        if (err) {
            console.log("Ошибка", err.message)
        }
        else {
            console.log("Пользователь: ", results)
        }
        return (res.json(results))
    })
}