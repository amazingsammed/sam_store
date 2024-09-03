import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, {NextAuthOptions} from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";
import {compare} from "bcrypt";
import {user} from ".prisma/client";


// @ts-ignore
export const authOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt"
    },
    // Configure one or more authentication providers
    pages: {
        signIn: '/auth/login',
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            name: "Credentials",
            credentials: {
                // email: { label: "email", type: "text"},
                // password: {label: "password", type: "password"}
            },
            async authorize(credentials) {
                const res = await fetch("http://localhost:3000/api/login", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()
console.log(user.user);
                if (res.ok && user.user) {
                    return user.user;
                }
            }
        })
    ],
}
export default NextAuth(authOptions)