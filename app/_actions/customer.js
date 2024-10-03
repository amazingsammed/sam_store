'use server';
import {PrimeChecker} from "@/app/_actions/_checker";
import prisma from "@/lib/prisma";
import {mapToJson, formdataToJson} from "@/app/shared/sharedfunctions";
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
        return mapToJson(data);
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
        const element = formdataToJson(data);
        console.log(element);
        const guid = uuidv4();
        const savedElement = await prisma.chart_of_account.create({
            data: {
                uuid: guid,
                account_code: Math.floor(4565),
                account_name: element.name,
                account_group: "692AC7B4-98AE-4ED5-9D2D-BE8C70D4FBBE",
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

export async function deactivateCustomers(element,storeid) {
    try {
        const userid = await PrimeChecker(storeid);
        const  results = await prisma.customer.update({
            where: {
                storeid: storeid,
                coa_uuid: element.coa_uuid,
            },
            data: {
                status: element.status===1?0:1,
            }
        });
        console.log(results ,"Customers deactivated");

    } catch (e) {
        console.log(e)
    }

    //return currentUserCounter.count;
}


export async function editCustomer(data, storeid) {

    try {
        const userid = await PrimeChecker(storeid);
        const element = formdataToJson(data);
        const results = await prisma.customer.updateMany({
                where: {
                    storeid: storeid,
                    coa_uuid: element.coa_uuid,
                },
            data: {
                name: element.name,
                address: element.address,
                phone: element.phone,
                editedby: userid,
                editeddate: new Date(),
            }
        });
        console.log(results);
    } catch (e) {
        console.log(e);
    }
}