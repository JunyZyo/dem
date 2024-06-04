import { postLogin } from "../../fetch/postLogin.js";



const logLogin = document.getElementById("log_login")
const logPassword = document.getElementById("log_password")


const logButton = document.getElementById("log_button")

logButton.addEventListener('click', async (e)=>{
    e.preventDefault();

    const user = {
        login: logLogin.value,
        password: logPassword.value
    }

    console.log(user)

    const data = await postLogin(user)
    
    if (data.length == 0) {
        alert("Неправильный логин или пароль")
    }
    else {
        localStorage.setItem("name", JSON.stringify(data))
        if (logLogin.value == "admin" || logPassword.value == "admin") {
            alert("Добро пожаловать, администратор")
            document.location.href = "../admin/admin.html"
        }
        else {
            alert("Успешная авторизация")
            document.location.href = "../lk/lk.html"
            }
        }
    }
)