'use server';
import {PrimeChecker} from "@/app/_actions/_checker";
import prisma from "@/lib/prisma";
import {toJson} from "@/app/shared/sharedfunctions";
import {v4 as uuidv4} from "uuid";

export async function getCustomers(storeid) {
    const results = [];
    try {
        const userid = await PrimeChecker(storeid);

        const  data = await prisma.customer.findMany({
            where: {
                storeid: storeid,
            }
        });
console.log(data);
        return data;
    } catch (e) {
        return [];
    }

    //return currentUserCounter.count;
}


export async function addCustomer(data, storeid) {

    try {
        const userid = await PrimeChecker(storeid);
        console.log(data);
        console.log(storeid);
        const element = toJson(data);
        console.log(element);
        const guid = uuidv4();
        const savedElement = await prisma.chart_of_account.create({
            data: {
                uuid: guid,
                account_code: Math.floor(4565),
                account_name: element.name,
                account_parent: 32,
                account_type: 1,
                opening_balance: parseFloat(element.openingbalance),
                createdby: userid,
                storeid: storeid,
                // createddate: new Date(),
            }
        });
        const savedElement2 = await prisma.customer.create({
            data: {
                name: element.name,
                coa_uuid: guid,
                type: parseInt(element.type),
                address: element.location,
                phone: element.phone,
                createdby: userid,
                storeid: storeid,
                date: new Date(),
            }
        });

    } catch (e) {
        console.log(e);
    }
}
