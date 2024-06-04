import mysql from "mysql2"

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo'
  })
  
  connection.connect(function(err){
    if (err) {
        console.log("Ошибка подключения", err.message)
    }
    else {
        console.log("Успешное подключение к MySql")
    }
  })