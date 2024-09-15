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
\ttrn_accounting.storeid = ${queryClean(storeid)}`;
        return CleanResults(results);
    } catch (e) {
        console.log(e);
    }
}
export async function getSalesList() {
    // const prisma = new PrismaClient();
    // const a = await prisma.trn_voucher.findMany({where: {
    //     voucher_type: 'Sales'
    //     }});
    // return  JSON.parse(JSON.stringify(a));
    return [];
}
export async function getPurchasesList() {
    // const prisma = new PrismaClient();
    // const a = await prisma.trn_voucher.findMany({where: {
    //         voucher_type: 'Purchases'
    //     }});
    // return  JSON.parse(JSON.stringify(a));
    return [];
}
