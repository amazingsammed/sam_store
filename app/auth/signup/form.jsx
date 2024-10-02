'use client';

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Icons} from "@/app/auth/_component/icons";
import * as React from "react";
import Link from "next/link";
import {useFormState, useFormStatus} from "react-dom";
import {z} from 'zod';
import {useRouter} from "next/navigation";






export const SignupFormSchema = z.object({
    name: z
        .string()
        .min(2, {message: 'Name must be at least 2 characters long.'})
        .trim(),
    phone: z
        .string().min(8,{ message: 'Phone number must be at least 8 characters long.' }),
    email: z.string().email({message: 'Please enter a valid email.'}).trim(),
    password: z
        .string()
        .min(8, {message: 'Be at least 8 characters long'})
        .regex(/[a-zA-Z]/, {message: 'Contain at least one letter.'})
        .regex(/[0-9]/, {message: 'Contain at least one number.'})
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.',
        })
        .trim(),
});


export function SignupForm() {
    const [hasLogged, setHasLogged] = React.useState(false);
    const router = useRouter();

    async function signupAction(a, element) {
        const validatedFields = SignupFormSchema.safeParse({
            name: element.get('name'),
            email: element.get('email'),
            password: element.get('password'),
            phone: element.get('phone'),
        });

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }
        setHasLogged(false);
        try {

            const res = await fetch("/api/signup", {
                method: 'POST',
                body: JSON.stringify(validatedFields.data),
                headers: {"Content-Type": "application/json"}
            })
            if (res.status === 201) {
                await router.push('/auth/login')
            }else {
                console.log(res.body);
            }
        } catch (e) {
            console.log(e);
        }

        setHasLogged(true);
    }

    const [state, action] = useFormState(signupAction, undefined);

    return (
        <div className="grid-cols-1 gap-4 grid">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Create an account</h1>
                <p className="text-gray-500">Enter your information to get started</p>
            </div>
            <form action={action}>
                <div className="flex flex-col gap-2">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" placeholder="Your name here.." type="text"/>
                    </div>
                    {state?.errors?.name && (
                        <p className="text-sm text-red-500">{state.errors.name}</p>
                    )}
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" placeholder="mystore@example.com" type="email"/>
                    </div>
                    {state?.errors?.email && (
                        <p className="text-sm text-red-500">{state.errors.email}</p>
                    )}
                    <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" placeholder="000-0000-0000-0" type="number"/>
                    </div>
                    {state?.errors?.phone && (
                        <p className="text-sm text-red-500">{state.errors.phone}</p>
                    )}
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" name="password" type="password"/>
                    </div>
                    {state?.errors?.password && (
                        <div className="text-sm text-red-500">
                            <p>Password must:</p>
                            <ul>
                                {state.errors.password.map((error) => (
                                    <li key={error}>- {error}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <SignupButton/>
                </div>
            </form>

            <div className="text-center text-sm">
                Already have an account?{' '}
                <Link className="underline" href="/auth/login">
                    Login
                </Link>
            </div>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t"/>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
                </div>
            </div>
            <Button variant="outline" type="button">
                <Icons.google className="mr-2 h-4 w-4"/>{" "}
                Google
            </Button>
        </div>
    );
}

export function SignupButton() {
    const {pending} = useFormStatus();

    return (
        <Button aria-disabled={pending} type="submit" className="mt-2 w-full">
            {pending ? 'Submitting...' : 'Sign up'}
        </Button>
    );
}
