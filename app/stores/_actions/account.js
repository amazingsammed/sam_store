
'use server'
import  {PrismaClient} from "@prisma/client";

import {getFirebaseAdminApp} from "@/app/firebase";
import {doc, getDoc, updateDoc, addDoc ,collection} from 'firebase/firestore';
import {getFirestore} from 'firebase-admin/firestore';
import {authConfig} from "@/config/server-config";
import {cookies} from "next/headers";
import {getTokens} from "next-firebase-auth-edge";
import {toJson} from "@/app/shared/sharedfunctions";
const db = getFirestore(getFirebaseAdminApp());

export async function getGroupList(storeid) {
    const results = [];
    try{
        const tokens = await getTokens(cookies(), authConfig);

        if (!tokens) {
            throw new Error('Cannot get counter of unauthenticated user');
        }
        const userid = tokens.decodedToken.uid;
        const snapshot = await db
            .collection('stores').doc(storeid).collection('group').get();

        const documents = snapshot.docs;
        if (!documents) {
            return [];
        }
        documents.forEach((doc) => {
            results.push({
                ...doc.data(),'group_id':doc.id,'user_id':userid,
            });
        })

        return results;
    }catch (e) {
        return [];
    }

    //return currentUserCounter.count;
}
export async function getLedgerList() {
    // const prisma = new PrismaClient();
    // const a = await prisma.mst_ledger.findMany();
    // return  JSON.parse(JSON.stringify(a));
    return [];
}

export async function getGroupNames() {
    // const prisma = new PrismaClient();
    // const a = await prisma.mst_group.findMany(
    //     {select: {
    //         guid: true,
    //             name: true,
    //         }}
    // );
    // const transform = a.map((element)=>(
    //     {
    //         value: element.guid,
    //         name: element.name,
    //     }
    // ))
    // return  JSON.parse(JSON.stringify(transform));
    return [];
}

export async function createLedger(e) {
console.log(e);
}

export async function createGroup(data , storeid) {
    try {
        const tokens = await getTokens(cookies(), authConfig);

        if (!tokens) {
            throw new Error('Cannot update counter of unauthenticated user');
        }
        const userid = tokens.decodedToken.uid;

        const docData = {
            ...toJson(data),
            createddate:  Date.now(),
            createdby: userid,
            isActive: true,
        };
        await db.collection('stores').doc(storeid).collection('group').add(docData);
    }catch (e) {
        console.log(e);
    }
}

