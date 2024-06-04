export async function postZayav(zayav) {
    return await fetch('http://localhost:3000/zayav', {
        method: "POST",
        body: JSON.stringify(zayav),
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    })
}