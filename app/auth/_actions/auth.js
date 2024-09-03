'use server'




    export async function signup(element)  {
        const response = await fetch("/api/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: element.name,
                email: element.email,
                password: element.password
            })
        });
        return response.ok;
    }