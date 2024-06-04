import { postReg } from "../../fetch/postReg.js"



const regName = document.getElementById("reg_name")
const regEmail = document.getElementById("reg_email")
const regPhone = document.getElementById("reg_number")
const regLogin = document.getElementById("reg_login")
const regPassword = document.getElementById("reg_password")


// const regButton = document.getElementById("reg_button")
const form = document.getElementById("form_reg")

form.addEventListener("submit", async (e)=>{
    e.preventDefault()

    const newuser = {
        name: regName.value,
        email: regEmail.value,
        phone: regPhone.value,
        login: regLogin.value,
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