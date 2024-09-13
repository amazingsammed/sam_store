'use server';
import NextAuth, {NextAuthOptions} from "next-auth";
import {getServerSession} from "next-auth";
import {getSession} from "next-auth/react";
const secret = process.env.NEXTAUTH_SECRET;
export async function PrimeChecker(storeid){
    try {
        const tokens = await getServerSession({
            callbacks: {
                async jwt({ token, user }) {
                    if (user) {
                        token.uuid = user.uuid;
                        token.name = user.name;
                        token.email = user.email;
                    }
                    return token;
                },
                session: ({ session, token, user }) => {
                    session.user = {
                        uuid: token.uuid,
                        name: token.name,
                        email: token.email
                    };
                    return session;
                },
            },
        });


        if (!tokens) {
            throw new Error('unauthenticated user');
        }
        console.log(tokens.user.uuid,"Current User uuid");
        return tokens.user.uuid;
    }
    catch(err){
        console.error(err);
    }
}
