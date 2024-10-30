'use server';
import {PrimeChecker} from "@/app/_actions/_checker";
import {mapToJson} from "@/app/shared/sharedfunctions";
import prisma from "@/lib/prisma";
import {v4 as uuidv4} from "uuid";


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

export async function createCashSales(data, storeid) {
    try {
        console.log(data);
        const [userid] = await PrimeChecker(storeid);
        console.log(userid);
        const guid = uuidv4();
        const [results, total ] = listToInventory(data, guid, storeid, userid);
        const [voucher,inventory,accounting]= await prisma.$transaction([
         prisma.voucher.create({
            data: {
                uuid: guid,
                date: new Date(),
                voucher_type: 22,
                narration: "Cash Sales",
                party_name: 'Sales',
                is_invoice: 0,
                is_inventory_voucher: 1,
                is_accounting_voucher: 1,
                createdby: userid,
                storeid: storeid,
            }
        }),
         prisma.trn_inventory.createMany({
                data: results
            }
        ),
        prisma.trn_accounting.createMany({
           data: [
               {   voucher_uuid: guid,
                   vouchername: 'Sales Account',
                   account_uuid: 'Sales',
                   amount: parseFloat(total) * -1,
                   is_system: 1,
                   date: new Date(),
                   createdby: userid,
                   storeid: storeid,
               },
               {   voucher_uuid: guid,
                   vouchername: 'Purchases Account',
                   account_uuid: 'Cash',
                   amount: parseFloat(total),
                   is_system: 1,
                   date: new Date(),
                   createdby: userid,
                   storeid: storeid,
               },
           ],
        })
        ])
       return [voucher, accounting,inventory];
    } catch (e) {

        console.log(e);
    }
}

export async function createCreditSales(data,customer, storeid) {
    try {
        const [userid] = await PrimeChecker(storeid);
        const guid = uuidv4();
        const [results, total ] = listToInventory(data, guid, storeid, userid);
        const [voucher,inventory,accounting]= await prisma.$transaction([
            prisma.voucher.create({
                data: {
                    uuid: guid,
                    date: new Date(),
                    voucher_type: 22,
                    narration: "Credit Sales",
                    party_name: 'Sales',
                    is_invoice: 0,
                    is_inventory_voucher: 1,
                    is_accounting_voucher: 1,
                    createdby: userid,
                    storeid: storeid,
                }
            }),
            prisma.trn_inventory.createMany({
                    data: results
                }
            ),
            prisma.trn_accounting.createMany({
                data: [
                    {
                        voucher_uuid: guid,
                        vouchername: 'Sales Account',
                        account_uuid: 'Sales',
                        amount: parseFloat(total) * -1,
                        is_system: 1,
                        date: new Date(),
                        createdby: userid,
                        storeid: storeid,
                    },
                    {
                        voucher_uuid: guid,
                        vouchername: customer.name,
                        account_uuid: customer.coa_uuid,
                        amount: parseFloat(total),
                        is_system: 1,
                        date: new Date(),
                        createdby: userid,
                        storeid: storeid,
                    },
                ],
            })
        ])
        return [voucher, accounting,inventory];
    } catch (e) {

        console.log(e);
    }
}

export async function getAllSales(storeid){
    try {
        const [userid] = await PrimeChecker(storeid);
        const results = await prisma.voucher.findMany({
            where: {
                voucher_type: 22,
                storeid: storeid,
                status: 1,
            },
            include: {
                voucher_type_voucher_voucher_typeTovoucher_type:true,
                trn_accounting:true,
                user:true,
            }
        })
console.log(results);
        return mapToJson(results);
    } catch (e) {
        return [];
    }
}

