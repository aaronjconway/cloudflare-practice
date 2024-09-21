export async function onRequset(context) {

    return new Response(JSON.stringify({ message: "Hello from the hello.js api!" }), {
        headers: {
            "Content-Type": "application/json"
        }
    })
}
