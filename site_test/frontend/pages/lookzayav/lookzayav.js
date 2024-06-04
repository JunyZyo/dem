import { postGetUser } from "../../fetch/postGetUser.js"


const table = document.getElementById("tbody")

const data = await postGetUser();


function render() {
    for (let i = 0; i < data.length; i++) {
        const tr = document.createElement("tr")
        table.append(tr)
        tr.setAttribute("id", "table-width")
        const itemArray = Object.values(data[i])
        for (let i=0; i<itemArray.length; i++) {
            const td = document.createElement("td");
            td.setAttribute("id", "table-width")
            td.textContent = itemArray[i];
            tr.append(td);
        }
    }
}
render();