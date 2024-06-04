import { postReg } from "../../fetch/postReg.js"


const regName = document.getElementById("reg_name")
const regLogin = document.getElementById("reg_login")
const regEmail = document.getElementById("reg_email")
const regNumber = document.getElementById("reg_number")
const regPassword = document.getElementById("reg_password")

const form = document.getElementById("form_reg")

form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const newuser = {
        name: regName.value,
        login: regLogin.value,
        email: regEmail.value,
        number: regNumber.value,
        password: regPassword.value
    }

    console.log(newuser)

    const responce = await postReg(newuser)

    if (responce.status === 400) {
        alert("Такие данные уже существуют")
    }
    else {
        alert("Успешная регистрация")
    }
})