export async function postGetUser(){
    return fetch('http://localhost:3000/getuser', {
        method: "POST",
        body: JSON.stringify(),
        headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
    }).then(res=>res.json())
}