
const UserName = JSON.parse(localStorage.getItem("name"))

const name_user = document.getElementById("Name_user")
name_user.textContent = UserName[0].fio

const ExitButton = document.getElementById("button_leave")

ExitButton.addEventListener("click", (e)=>{
    e.preventDefault()
    localStorage.removeItem("name")
    document.location.href = "../index/index.html"
})