'use server'


import {PrimeChecker} from "@/app/_actions/_checker";
import prisma from "@/lib/prisma";
import {v4 as uuidv4} from "uuid";
import {toJson} from "@/app/shared/sharedfunctions";

export async function getGroupList(storeid) {
    const results = [];
    try{
        const userid = PrimeChecker(storeid);
        const results= await prisma.chart_of_account.findMany({
            where: {
                storeid: storeid,
            }
        });
        console.log(results);
        return [...JSON.parse(JSON.stringify(results))];
    }catch (e) {
        return [];
    }

    //return currentUserCounter.count;
}
export async function getLedgerList() {
    // const prisma = new PrismaClient();
    // const a = await prisma.mst_ledger.findMany();
    // return  JSON.parse(JSON.stringify(a));
    return [];
}

export async function getGroupNames() {
    // const prisma = new PrismaClient();
    // const a = await prisma.mst_group.findMany(
    //     {select: {
    //         guid: true,
    //             name: true,
    //         }}
    // );
    // const transform = a.map((element)=>(
    //     {
    //         value: element.guid,
    //         name: element.name,
    //     }
    // ))
    // return  JSON.parse(JSON.stringify(transform));
    return [];
}

export async function createLedger(e) {
console.log(e);
}

export async function createChartofAccounts(data , storeid) {
    try {
        const userid = await PrimeChecker(storeid);
        const element = toJson(data);
        const guid = uuidv4();
        console.log(element);
        const savedElement = await prisma.chart_of_account.create({
            data: {
                uuid: guid,
                account_code: parseInt(element.account_code),
                account_name: element.account_name,
                account_parent: parseInt(element.account_group),
                account_type: parseInt(element.account_type),
                opening_balance: parseFloat(element.opening_balance),
                createdby: userid,
                storeid: storeid,
                // createddate: new Date(),
            }
        });
        console.log(savedElement);
    }catch (e) {
        console.log(e);
    }
}

