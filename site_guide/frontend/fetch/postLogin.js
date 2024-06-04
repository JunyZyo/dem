export async function postLogin(user) {
    return await fetch('http://localhost:3000/user', {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then(res=>res.json())
}