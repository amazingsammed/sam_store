'use client';


import Link from 'next/link';
import {useFormState, useFormStatus} from 'react-dom';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Icons} from "@/app/auth/_component/icons";
import * as React from "react";


import {useRouter , useSearchParams} from "next/navigation";
import {signIn} from "next-auth/react";



export function LoginForm() {
        const router = useRouter();
        const urls = useSearchParams();

        async function login( e, s) {
        const signinData = await signIn('credentials', {
            redirect: false,
            email: s.get('email'),
            password: s.get('password'),
        });

        if(signinData?.error) {
            console.log(signinData.error);
        }else {

            await router.push('/store');
        }
        // console.log(signinData);



    }

    const [state, action] = useFormState(login, undefined);

    return (
        <div className="grid-cols-1 gap-4 grid">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="text-gray-500">
                    Enter your email below to login to your account
                </p>
            </div>

            <form action={action}>
                <div className="flex flex-col gap-2">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="m@example.com"
                            type="email"
                        />
                        {state?.errors?.email && (
                            <p className="text-sm text-red-500">{state.errors.email}</p>
                        )}
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Password</Label>
                            {/*<Link className="text-sm underline" href="#">*/}
                            {/*    Forgot your password?*/}
                            {/*</Link>*/}
                        </div>
                        <Input id="password" type="password" name="password"/>
                        {state?.errors?.password && (
                            <p className="text-sm text-red-500">{state.errors.password}</p>
                        )}
                    </div>
                    {state?.message && (
                        <p className="text-sm text-red-500">{state.message}</p>
                    )}
                    <LoginButton/>
                </div>
            </form>

            <div className="text-center text-sm">
                Don&apos;t have an account?{' '}
                <Link className="underline" href="/auth/signup">
                    Sign up
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
            <Button variant="outline" type="button" onClick={()=>router.push('http://localhost:3000/store')}>
                <Icons.google className="mr-2 h-4 w-4"/>{" "}
                Google
            </Button>
        </div>
    );
}

export function LoginButton() {
    const {pending} = useFormStatus();

    return (
        <Button aria-disabled={pending} type="submit" className="mt-4 w-full">
            {pending ? 'Submitting...' : 'Login'}
        </Button>
    );
}
