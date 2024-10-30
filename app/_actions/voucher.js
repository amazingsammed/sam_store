'use server'

import {PrimeChecker} from "@/app/_actions/_checker";
import prisma from "@/lib/prisma";
import {mapToJson} from "@/app/shared/sharedfunctions";
import {v4 as uuidv4} from "uuid";

export async function getVoucherList(storeid) {
    try {
        const [userid] = await PrimeChecker(storeid);
        const results = await prisma.voucher.findMany({
            where: {
                storeid: storeid,
            },
            include: {
                voucher_type_voucher_voucher_typeTovoucher_type:true,
                trn_accounting:true,
                user:true,
            }
        })
        return mapToJson(results);
    } catch (e) {
        console.log(e);
    }
}
export async function createVoucher() {

    return [];
}
export async function deactivateVoucher(data) {
    try{
        const element = data;
        console.log(element);
        const savedElement = await prisma.voucher.update({
            where: {
                uuid: element.uuid,
            },
            data: {
                status: element.status ===1?0:1,
            }
        });
        console.log(savedElement , 'results');
    }catch (e) {
        console.log(e);
    }
    return [];
}

export async function getSingleVoucherList(uuid ,storeid) {
    console.log(uuid ,"Voucher uuid")
    try {
        const [userid] = await PrimeChecker(storeid);
        const results = await prisma.trn_inventory.findMany({
            where: {
                storeid: storeid,
                status: 1,
                voucher_uuid:uuid,
            },
            include: {
                stock_item: true,
                voucher:{
                    include:{
                        voucher_type_voucher_voucher_typeTovoucher_type:true,
                        trn_accounting:true,
                    }
                }
            }
        });
        console.log(results, 'getSingleVoucherList');
        if(results.length === 0){
            return null;
        }
        return mapToJson(results);
    } catch (e) {
        console.log(e);
    }
}

function listToInventory(data, guid, storeid, userid) {
    const results = [];
    let total = 0.0
    data.forEach(item => {
        total = (parseFloat(item.quantity) * parseFloat(item.rate)) + total;
        results.push({
            voucher_uuid: guid,
            item_uuid: item.uuid,
            quantity: parseInt(item.quantity) * -1,
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

export async function editSalesVoucher(account ,data, storeid) {
    try {

        const [userid] = await PrimeChecker(storeid);
        const [results, total ] = listToInventory(data, account.uuid, storeid, userid);
        const [a,b,c,d,e]= await prisma.$transaction([
            await prisma.trn_inventory.updateMany({
                where:{
                    voucher_uuid: account.uuid,
                },
                data: {
                    status: 0,
                }
            }
        ),
         await prisma.trn_inventory.createMany({
                data: results
            }
        ),
            await prisma.trn_accounting.updateMany({
                    where:{
                        voucher_uuid: account.uuid,
                    },
                    data: {
                        status: 0,
                    }
                }
            ),
       await prisma.trn_accounting.createMany({
            data: [
                {   voucher_uuid: account.uuid,
                    vouchername: 'Sales Account',
                    account_uuid: 'Sales',
                    amount: parseFloat(total) * -1,
                    is_system: 1,
                    date: new Date(),
                    createdby: userid,
                    storeid: storeid,
                },
                {   voucher_uuid: account.uuid,
                    vouchername: 'Cash Account',
                    account_uuid: 'Cash',
                    amount: parseFloat(total),
                    is_system: 1,
                    date: new Date(),
                    createdby: userid,
                    storeid: storeid,
                },
            ],
        }),
        await prisma.voucher.update({
            where:{
                uuid: account.uuid
            },
            data: {
               editedby: userid,
                editeddate: new Date()
            }
        })
        ]);
        console.log('Successful stuff')
    } catch (e) {

        console.log(e);
    }
}
