'use server';
import {getTokens} from "next-firebase-auth-edge";
import {cookies} from "next/headers";
import {authConfig} from "@/config/server-config";

export async function PrimeChecker(storeid){
    try {
        const tokens = await getTokens(cookies(), authConfig);

        if (!tokens) {
            throw new Error('unauthenticated user');
        }
        return tokens.decodedToken.uid;
    }
    catch(err){
        console.error(err);
    }
}
