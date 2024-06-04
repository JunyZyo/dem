import { postZayav } from "../../fetch/postZayav.js"


const AutoNum = document.getElementById("number_auto")
const AutoDesc = document.getElementById("description_auto")


const form = document.getElementById("form_zayav")

form.addEventListener("submit", async (e)=>{
    e.preventDefault()

    const zayav = {
        number: AutoNum.value,
        description: AutoDesc.value
    }

    console.log(zayav)

    const responce = await postZayav(zayav)

    if (responce.status === 400) {
        alert("Такие данные уже существуют")
    }
    else {
        alert("Заявка успешно создана")
    }

})