import { connection } from "./db.js";

export async function GetUser(req, res){

    const sql = "SELECT id_user, number_auto, description, status FROM statement"

    connection.query(sql, function(err, results){
        if (err) {
            console.log(err.message)
        }
        else {
            console.log(results)
        }
        return res.json(results)
    })
}