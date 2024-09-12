'use server'

import {authConfig} from "@/config/server-config";
import {cookies} from "next/headers";
import {PrimeChecker} from "@/app/_actions/_checker";
import prisma from "@/lib/prisma";

export async function getStores() {
    const results =[];
    try{

        const userid = await PrimeChecker('storeid');

        const  data= await prisma.store.findMany({
            where: {
                userid: userid,
            }
        });

        return data;
    }catch (e) {
        return [];
    }

    //return currentUserCounter.count;
}

export async function createStore(data) {
try {
    // const tokens = await getTokens(cookies(), authConfig);
    //
    // if (!tokens) {
    //     throw new Error('Cannot update counter of unauthenticated user');
    // }
    // const userid = tokens.decodedToken.uid;
    //
    // const docData = {
    //     ...data,
    //     date:  Date.now(),
    //     users: [userid],
    //     isActive: true,admin: [userid],
    //
    // };
    // await db.collection('stores').add(docData);
}catch (e) {
    console.log(e);
}

}

export async function confirmStore(storeid) {
    try {
        // const tokens = await getTokens(cookies(), authConfig);
        //
        // if (!tokens) {
        //     throw new Error('Cannot update counter of unauthenticated user');
        // }
        // const userid = tokens.decodedToken.uid;
        //
        // const snapshot = await db
        //     .collection('stores').doc(storeid)
        //     .get();
        // if (!snapshot){
        //     return false;
        // }
        // const list = snapshot.data()['users'];
        // return list.includes(userid);
    }catch (e) {
        console.log(e);
        return false;
    }

}