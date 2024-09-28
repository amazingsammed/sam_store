'use server';
import {getServerSession} from "next-auth";

const secret = process.env.NEXTAUTH_SECRET;
export async function PrimeChecker(storeid){
    if(storeid === undefined){
        console.log('checker', "storeid not defined");
        throw new Error('store id not defined');
    }
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
