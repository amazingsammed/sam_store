'use server';

import {authConfig} from "@/config/server-config";
import {getServerSession} from "next-auth";
import {getCsrfToken} from "next-auth/react";
import {getToken} from "next-auth/jwt";
const secret = process.env.NEXTAUTH_SECRET;
export const dynamic = "force-dynamic";
export async function PrimeChecker(storeid){
    try {
        const tokens = await getServerSession(authConfig);

        if (!tokens) {
            throw new Error('unauthenticated user');
        }
        console.log(tokens,"the tokens");
        return tokens;
    }
    catch(err){
        console.error(err);
    }
}
