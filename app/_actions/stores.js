'use server'

import {authConfig} from "@/config/server-config";
import {cookies} from "next/headers";
import {PrimeChecker} from "@/app/_actions/_checker";
import prisma from "@/lib/prisma";
import {toJson} from "@/app/shared/sharedfunctions";
import {v4 as uuidv4} from "uuid";

export async function getStores() {
    const results =[];
    try{

        const userid = await PrimeChecker('storeid');

        const  data= await prisma.store.findMany({
            where: {
                createdby: userid,
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
    const userid = await PrimeChecker('storeidx');
    const element = toJson(data)
    // console.log(element);
    const guid = uuidv4();
    const savedElement = await prisma.store.create({
        data: {
            storename: element.storename,
            uuid: guid,
            storeemail: element.storelocation,
            storeaddress: element.storeaddress,
            storephone: element.storephone,
            createdby: userid,
            createddate: new Date(),

        }
    });
   console.log(savedElement,'saved');
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