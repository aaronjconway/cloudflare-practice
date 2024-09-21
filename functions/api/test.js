const data = [
    { name: 'Aaron', power: 1000 },
    { name: 'Bob', power: 9 }
]

export async function onRequest(context) {
    return new Response.json(data)
}
