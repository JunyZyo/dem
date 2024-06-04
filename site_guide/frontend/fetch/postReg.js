export async function postReg(newuser) {
    return await fetch('http://localhost:3000/newuser', {
        method: "POST",
        body: JSON.stringify(newuser),
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    })
}