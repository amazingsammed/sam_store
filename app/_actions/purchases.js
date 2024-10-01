'use server';

import {PrimeChecker} from "@/app/_actions/_checker";
import {v4 as uuidv4} from "uuid";
import prisma from "@/lib/prisma";
import {CleanResults, queryClean} from "@/app/shared/sharedfunctions";

function listToPurchasesInventory(data, guid) {
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
        });
    })
    console.log(results);
    return [results , total];
}

export async function createCashPurchases(data, storeid) {
    try {
        console.log(data);

        const userid = await PrimeChecker(storeid);
        console.log(userid);
        // const element = toJson(data)
        const guid = uuidv4();
        const [results, total ] = listToPurchasesInventory(data, guid);
        console.log(results,'results')
        await prisma.voucher.create({
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
        await prisma.trn_inventory.createMany({
                data: results
            }
        );
        await prisma.trn_accounting.createMany({
            data: [
                {   voucher_uuid: guid,
                    vouchername: 'Cash',
                    account_uuid: 'cash',
                    amount: parseFloat(total) * -1,
                    is_system: 1,
                },
                {   voucher_uuid: guid,
                    vouchername: 'Purchases',
                    account_uuid: 'purchases',
                    amount: parseFloat(total),
                    is_system: 1,
                },
            ],
        });

    } catch (e) {

        console.log(e);
    }
}

export async function getPurchasesList(storeid) {
    try {
        const userid = await PrimeChecker(storeid);


        const results = await prisma.$queryRaw `
  SELECT
\tvoucher.date, 
\tstock_item.\`name\` AS itemname, 
\ttrn_inventory.quantity, 
\ttrn_inventory.rate, 
\ttrn_inventory.amount, 
\tvoucher.party_name, 
\tstock_item.shortname, 
\t\`user\`.\`name\` AS salesperson
FROM
\tvoucher,
\ttrn_inventory,
\tstock_item,
\t\`user\`
WHERE
\tvoucher.uuid = trn_inventory.voucher_uuid AND
\ttrn_inventory.item_uuid = stock_item.uuid AND
\tvoucher.voucher_type = 15 AND
\tvoucher.storeid = ${queryClean(storeid)} AND
\tvoucher.\`status\` = 1 AND
\tvoucher.createdby = \`user\`.uuid
ORDER BY
\ttrn_inventory.id ASC
`;
        return CleanResults(results);
    } catch (e) {

        console.log(e);
    }
}