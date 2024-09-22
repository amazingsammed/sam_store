'use server'


import {PrimeChecker} from "@/app/_actions/_checker";
import prisma from "@/lib/prisma";
import {v4 as uuidv4} from "uuid";
import {formdataToJson} from "@/app/shared/sharedfunctions";

export async function getChartOfAccount(storeid) {
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

export async function createChartofAccounts(data , storeid) {
    try {
        const userid = await PrimeChecker(storeid);
        const element = formdataToJson(data);
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

