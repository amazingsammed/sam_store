'use server';

import {PrimeChecker} from "@/app/_actions/_checker";
import {v4 as uuidv4} from "uuid";
import prisma from "@/lib/prisma";
import {mapToJson, queryClean} from "@/app/shared/sharedfunctions";

function listToPurchasesInventory(data, guid,userid,storeid) {
    const results = [];
    let total = 0.0
    data.forEach(item => {
        total = (parseFloat(item.quantity) * parseFloat(item.rate)) + total;
        results.push({
            voucher_uuid: guid,
            item_uuid: item.uuid,
            quantity: parseInt(item.quantity),
            rate: parseFloat(item.rate),
            amount: parseFloat(item.quantity) * parseFloat(item.rate),
            date: new Date(),
            createdby: userid,
            storeid: storeid,
        });
    })
    console.log(results);
    return [results , total];
}

export async function createCashPurchases(data, storeid) {
    try {
        console.log(data);

        const [userid] = await PrimeChecker(storeid);
        console.log(userid);
        // const element = toJson(data)
        const guid = uuidv4();
        const [results, total ] = listToPurchasesInventory(data, guid, userid, storeid);
        console.log(results,'results')
       const voucher = await prisma.voucher.create({
            data: {
                uuid: guid,
                date: new Date(),
                voucher_type: 15,
                narration: "Cash Purchases",
                party_name: 'Cash',
                is_invoice: 0,
                is_inventory_voucher: 1,
                is_accounting_voucher: 1,
                createdby: userid,
                storeid: storeid,
            }
        });
        const inventory =  await prisma.trn_inventory.createMany({
                data: results
            }
        );
        const accounting = await prisma.trn_accounting.createMany({
            data: [
                {   voucher_uuid: guid,
                    vouchername: 'Cash',
                    account_uuid: 'cash',
                    amount: parseFloat(total) * -1,
                    is_system: 1,
                    date: new Date(),
                    createdby: userid,
                    storeid: storeid,
                },
                {   voucher_uuid: guid,
                    vouchername: 'Purchases',
                    account_uuid: 'purchases',
                    amount: parseFloat(total),
                    is_system: 1,
                    date: new Date(),
                    createdby: userid,
                    storeid: storeid,
                },
            ],
        });
return [voucher ,accounting ,inventory];
    } catch (e) {

        console.log(e);
    }
}

export async function getPurchasesList(storeid) {
    try {
        const [userid] = await PrimeChecker(storeid);

        const results = await prisma.voucher.findMany({
            where: {
                storeid: storeid,
                status: 1,
                voucher_type: 15
            },
            include: {
                trn_inventory:{

                    include:{
                stock_item: true,

                    }
                }
            }
        })
        console.log(results , 'purchases');
        return mapToJson(results);
    } catch (e) {
        console.log(e);
        return [];
    }
}

export async function getAllPurchases(storeid){
    try {
        const [userid] = await PrimeChecker(storeid);
        const results = await prisma.voucher.findMany({
            where: {
                voucher_type: 15,
                storeid: storeid,
                status: 1,
            },
            include: {
                voucher_type_voucher_voucher_typeTovoucher_type:true,
                trn_accounting:true,
                user:true,
            }
        })

        return mapToJson(results);
    } catch (e) {
        return [];
    }
}