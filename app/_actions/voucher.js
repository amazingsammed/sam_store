'use server'

import {PrimeChecker} from "@/app/_actions/_checker";
import prisma from "@/lib/prisma";
import {CleanResults, queryClean} from "@/app/shared/sharedfunctions";

export async function getVoucherList(storeid) {
    try {
        const userid = await PrimeChecker(storeid);
        const results = await prisma.$queryRaw ` SELECT
\tvoucher.date AS date, 
\tvoucher_type.\`name\` AS vouchertype, 
\tvoucher.narration AS narration, 
\tvoucher.party_name AS account, 
\tvoucher.uuid, 
\ttrn_accounting.amount, 
\t\`user\`.\`name\` AS salesperson
FROM
\tvoucher,
\tvoucher_type,
\ttrn_accounting,
\t\`user\`
WHERE
\tvoucher.voucher_type = voucher_type.id AND
\tvoucher.uuid = trn_accounting.voucher_uuid AND
\tvoucher.createdby = \`user\`.uuid AND
\tvoucher.\`status\` = 1 AND
\tvoucher.storeid = ${queryClean(storeid)}
GROUP BY
\tvoucher.uuid
`;
        return CleanResults(results);
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
                status: 0,
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
        const userid = await PrimeChecker(storeid);
        const results = await prisma.$queryRaw ` 
  SELECT
\ttrn_inventory.quantity, 
\ttrn_inventory.rate, 
\ttrn_inventory.amount, 
\tvoucher_type.\`name\` AS accountname, 
\tvoucher.narration, 
\tstock_item.\`name\`, 
\tstock_item.uuid
FROM
\ttrn_inventory,
\tvoucher,
\tvoucher_type,
\tstock_item
WHERE
\ttrn_inventory.voucher_uuid = voucher.uuid AND
\tvoucher.voucher_type = voucher_type.id AND
\tvoucher.uuid = ${uuid} AND
\tvoucher.storeid = ${queryClean(storeid)}
AND
\tstock_item.uuid = trn_inventory.item_uuid
`;
        console.log(results, 'getSingleVoucherList');
        return CleanResults(results);
    } catch (e) {
        console.log(e);
    }
}
