'use server';
import {getServerSession} from "next-auth";
import prisma from "@/lib/prisma";
import {permission} from "@/components/app/constant";


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
        const results = await prisma.user_store.findMany({
            where:{
                user_uuid: tokens.user.uuid,
                store_uuid: storeid
            },
            include:{
                system_roles: true,
            }
        });
        // console.log(results);
        if(results.length === 0) {
            throw new  Error('Unauthenticated User')
        }
const userid = tokens.user.uuid;
        return [userid,results];


    }
    catch(err){
        console.error(err);
        throw  Error('unauthenticated user');
    }
}
export async function checkPermission(userid,results,right){
    try{
        const data=  permission.findLast((result) => {return result.role === results[0].system_roles.role.toString().toLowerCase()})
        if(!data){
            throw new  Error('Unauthenticated User')
        }
        const canDo= data.right.includes(right);
        if(canDo){
return null;
        }else {
            throw  Error('Unauthorised User')
        }
    }catch(err){
        throw  Error('Unauthorised User')
    }
}
export async function SimpleChecker(){

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
        const userid = tokens.user.uuid;
        return [userid];
    }
    catch(err){
        console.error(err);
        throw new Error('unauthenticated user');
    }
}
