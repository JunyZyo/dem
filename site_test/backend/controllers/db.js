import mysql from "mysql2"

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo'
  })
  
  connection.connect(function(err, result){
    if (err) {
        console.log("Ошибка подключения")
    }
    else {
        console.log("Успешное подключение к MySql")
    }
  })

