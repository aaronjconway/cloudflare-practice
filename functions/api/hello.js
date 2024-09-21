export async function onRequest(context) {

    return new Response(JSON.stringify({ message: "Hello from the hello.js api!" }), {
        headers: {
            "Content-Type": "application/json"
        }
    })
}
