import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";
import {getServerSession} from "next-auth";


export async function POST(request) {
    try {
        const {storeid} = await request.json();

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
        };

        const results = await prisma.$queryRaw`
        SELECT
\tsystem_roles.role, 
\tuser_store.createddate, 
\tuser_store.createdby, 
\tuser_store.user_uuid, 
\tstore.storename, 
\tstore.storeaddress, 
\tstore.storephone, 
\tstore.storeemail, 
\t\`user\`.\`name\`, 
\t\`user\`.email
FROM
\tsystem_roles,
\tuser_store,
\tstore,
\t\`user\`
WHERE
\tsystem_roles.uuid = user_store.role_uuid AND
\tuser_store.store_uuid = store.uuid AND
\tuser_store.user_uuid = \`user\`.uuid AND
\tuser_store.store_uuid = ${storeid} AND
\tuser_store.user_uuid = ${tokens.user.uuid} AND
\tuser_store.\`status\` = 1
        `;
        if(results.length === 0) {
            return NextResponse.json({message: "Fake user"}, {status: 400});
        }
        return NextResponse.json({ results: results[0] ,message: "Success"}, {status: 200});
    } catch (e) {
        console.log(e.message);
        return NextResponse.json({'message': "Something went wrong"}, {status: 500});
    }
}