
const name_user = JSON.parse(localStorage.getItem("name"))

const UserName = document.getElementById("Name_user")
UserName.textContent = name_user[0].fio

const ExitButton = document.getElementById("button_leave")
ExitButton.addEventListener('click', (e)=>{
    e.preventDefault();

    localStorage.removeItem("name")
    document.location.href = "../index/index.html"
})