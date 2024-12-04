'use server';

import {checkPermission, PrimeChecker} from "@/app/_actions/_checker";
import {systemRight} from "@/components/app/constant";
import prisma from "@/lib/prisma";

export async function dbSales(storeid){
    const [userid,results] = await PrimeChecker(storeid);
    const[sales,purchase,item] = await  prisma.$transaction([
        prisma.trn_accounting.findMany({
            where:{
                storeid:storeid,
                account_uuid: 'Sales',
                status: 1,
            }
        }),
        prisma.trn_accounting.findMany({
            where:{
                storeid:storeid,
                account_uuid: 'Purchase',
                status: 1,
            }
        }),
        prisma.stock_item.count({
            where:{
                storeid:storeid,
                status: 1,
            }
        })
    ]);
    return [sales,purchase,item];
}