import { connection } from "./db.js";

export async function allUser(req, res) {
    
    const sql = "SELECT id_user, number_auto, description, status FROM statement"
    
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }
        else {
            console.log(result)
        }
        return res.json(result)
    })
}