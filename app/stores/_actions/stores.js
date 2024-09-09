'use server'

import {getFirebaseAdminApp} from "@/app/firebase";
import {doc, getDoc, updateDoc, addDoc ,collection} from 'firebase/firestore';
import {getFirestore} from 'firebase-admin/firestore';
import {authConfig} from "@/config/server-config";
import {cookies} from "next/headers";
import {getTokens} from "next-firebase-auth-edge";
const db = getFirestore(getFirebaseAdminApp());
export async function getStores() {
    const results =[];
    try{

    const tokens = await getTokens(cookies(), authConfig);

    if (!tokens) {
        throw new Error('Cannot get counter of unauthenticated user');
    }
    const userid = tokens.decodedToken.uid;
    const snapshot = await db
        .collection('stores').where("users", "array-contains", userid)
        .get();

    const currentUserCounter = snapshot.docs;
    currentUserCounter.forEach((doc) => {
        results.push({
            ...doc.data(),'store_id':doc.id
        });
    })
    if (!currentUserCounter) {
        return 0;
    }
    return results;
    }catch (e) {
        return [];
    }

    //return currentUserCounter.count;
}

export async function createStore(data) {
try {
    const tokens = await getTokens(cookies(), authConfig);

    if (!tokens) {
        throw new Error('Cannot update counter of unauthenticated user');
    }
    const userid = tokens.decodedToken.uid;

    const docData = {
        ...data,
        date:  Date.now(),
        users: [userid],
        isActive: true,admin: [userid],

    };
    await db.collection('stores').add(docData);
}catch (e) {
    console.log(e);
}

}

export async function confirmStore(storeid) {
    try {
        const tokens = await getTokens(cookies(), authConfig);

        if (!tokens) {
            throw new Error('Cannot update counter of unauthenticated user');
        }
        const userid = tokens.decodedToken.uid;

        const snapshot = await db
            .collection('stores').doc(storeid)
            .get();
        if (!snapshot){
            return false;
        }
        const list = snapshot.data()['users'];
        return list.includes(userid);
    }catch (e) {
        console.log(e);
        return false;
    }

}