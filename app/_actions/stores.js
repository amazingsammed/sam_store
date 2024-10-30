'use server'

import {PrimeChecker, SimpleChecker} from "@/app/_actions/_checker";
import prisma from "@/lib/prisma";
import {formdataToJson} from "@/app/shared/sharedfunctions";
import {v4 as uuidv4} from "uuid";

export async function getStores() {
    try {

        const [userid] = await SimpleChecker();
        return await prisma.user_store.findMany(
            {
                where: {
                    user_uuid: userid,
                },
                include: {
                    store: true,
                    system_roles: true
                }
            }
        );
    } catch (e) {

        return [];
    }
}

export async function createStore(data) {
    try {
        const [userid] = await SimpleChecker();
        const element = formdataToJson(data)
        const guid = uuidv4();
        const [store,userstore]= await prisma.$transaction([

         prisma.store.create({
            data: {
                storename: element.storename,
                uuid: guid,
                storeemail: element.storeemail,
                storeaddress: element.storeaddress,
                storephone: element.storephone,
                createdby: userid,
                createddate: new Date(),

            }
        }),  prisma.user_store.create({
            data: {
                user_uuid: userid,
                store_uuid: guid,
                role_uuid: 'owner_xd',
                createdby: userid,
                createddate: new Date(),
                status: 1
            }
        })
        ])

        return [userstore,store];
    } catch (e) {
        console.log(e);
    }

}


export async function getStoreMembers(storeid){
    try {
        const [userid] = await PrimeChecker(storeid);
        const results = await prisma.user_store.findMany({
            where: {
                store_uuid: storeid,
            },
            include: {
                user: true,
                system_roles: true
            }
        })
        console.log(results)
        return results;
    } catch (e) {
        console.log(e);
    }
}

export async function getStoreRoles(){
    try {
       // const [userid] = await PrimeChecker('storeidx');
        return await prisma.system_roles.findMany();
    }catch (e){
        console.log(e);
    }
}