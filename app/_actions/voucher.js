'use server'

import {PrimeChecker} from "@/app/_actions/_checker";
import prisma from "@/lib/prisma";
import {mapToJson, queryClean} from "@/app/shared/sharedfunctions";

export async function getVoucherList(storeid) {
    try {
        const userid = await PrimeChecker(storeid);
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
        const userid = await PrimeChecker(storeid);
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
        return mapToJson(results);
    } catch (e) {
        console.log(e);
    }
}
