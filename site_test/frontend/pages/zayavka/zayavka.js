import { postZayav } from "../../fetch/postZayav.js"


const Auto_number = document.getElementById("number_auto")
const Auto_description = document.getElementById("description_auto")

const id = JSON.parse(localStorage.getItem("name"))
const ID_User = JSON.stringify(id[0].id_user)

const form = document.getElementById("form_zayav")

form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const zayav = {
        userid: ID_User,
        number: Auto_number.value,
        description: Auto_description.value
    }

    console.log(zayav)

    const responce = await postZayav(zayav)

    if (responce.status === 400) {
        alert("Такие данные уже существуют")
    }
    else {
        alert("Успешное создание заявки")
    }
})