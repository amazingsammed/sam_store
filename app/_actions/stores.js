'use server'

import {authConfig} from "@/config/server-config";
import {cookies} from "next/headers";
import {PrimeChecker} from "@/app/_actions/_checker";
import prisma from "@/lib/prisma";
import {queryClean, toJson} from "@/app/shared/sharedfunctions";
import {v4 as uuidv4} from "uuid";
import myDB from "@/lib/mysqldb";

export async function getStores() {
    try {

        const userid = await PrimeChecker('storeid');

        // const  data= await prisma.store.findMany({
        //     where: {
        //         createdby: userid,
        //     }
        // });
        console.log(queryClean(userid),'chexker');
        const results = await prisma.$queryRaw`SELECT 
\tstore.storename, 
\tstore.storeaddress, 
\tstore.storephone, 
\tstore.storeemail, 
\tsystem_roles.role, 
\tstore.uuid
FROM
\tuser_store,
\tsystem_roles,
\tstore
WHERE
\tuser_store.store_uuid = store.uuid AND
\tuser_store.role_uuid = user_store.role_uuid AND
\tuser_store.user_uuid = ${queryClean(userid)}
GROUP BY
\tuser_store.id`;
        console.log(results,'md');

        return results;
    } catch (e) {
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
        const storeElement = await prisma.store.create({
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
        const userElement = await prisma.user_store.create({
            data: {
                user_uuid: userid,
                store_uuid: guid,
                role_uuid: 'admin_xd',
                createdby: userid,
                createddate: new Date(),
                status: 1
            }
        });

        const caoElement = await prisma.default_coa.findMany();
        for (const item of caoElement) {
            const newcode = uuidv4();
            const savedElement = await prisma.chart_of_account.create({
                data: {
                    uuid: newcode,
                    account_code: parseInt(item.account_code),
                    account_name: item.account_name,
                    account_parent: parseInt(item.account_parent),
                    account_type: parseInt(item.account_type),
                    opening_balance: parseFloat(item.opening_balance),
                    createdby: userid,
                    storeid: guid,
                    // createddate: new Date(),
                }
            });
        }

        console.log('saved SE');
        console.log('saved UE');
    } catch (e) {
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
    } catch (e) {
        console.log(e);
        return false;
    }

}