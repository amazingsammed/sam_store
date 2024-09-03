'use server'


import {signIn} from "next-auth/react";

export async function login(e, s) {
    const signinData = await signIn('credentials', {
        email: s.get('email'),
        password: s.get('password'),
    });
    console.log(signinData);
    if (signinData?.error) {
        console.log(signinData.error);
    }else {
        // router.push('/items');
        console.log(signinData);
    }

}

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