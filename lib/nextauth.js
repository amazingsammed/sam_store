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
    secret: process.env.NEXTAUTH_SECRET,
    // session: {
    //     strategy: "jwt"
    // },
    // Configure one or more authentication providers
    pages: {
        signIn: '/auth/login',
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "text"},
                password: {label: "password", type: "password"}
            },
            async authorize(credentials) {
                // const res = await fetch("http://localhost:3000/api/login", {
                //     method: 'POST',
                //     body: JSON.stringify(credentials),
                //     headers: {"Content-Type": "application/json"}
                // })
                // const results = await res.json()
                // console.log(results.user);
                // if (!res.ok){
                //     return null;
                // }
                // if (res.ok && results.user) {
                //     return results.user;
                // }
                const {email, password } = credentials;



                const existingUser = await prisma.user.findUnique({
                    where: {email: email},
                });


                if (!existingUser) {
                    throw new Error("User does not exist,please signup");
                }


                const passwordMarch = await compare(password , existingUser.password);
                if (!passwordMarch) {
                    throw new Error("Incorrect Password");
                }
               return existingUser;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.uuid = user.uuid;
                token.name = user.name;
                token.email = user.email;
            }
            console.log(user,token,'jwt');
            return token;
        },
        async session({ session, token, user }) {
            // Customize the session object
            session.user = {
                uuid: user.uuid,
                name: user.name,
                email: user.email
            };
            console.log(user,token,session,'session');
            return session;
        },
    },
}
export default NextAuth(authOptions)