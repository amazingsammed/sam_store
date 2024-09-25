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
                account_group: element.account_group,
                account_type: parseInt(element.account_type),
                opening_balance: parseFloat(element.opening_balance),
                createdby: userid,
                storeid: storeid,
                createddate: new Date(),
            }
        });
    }catch (e) {
        console.log(e);
    }
}

export async function getChartOfAccountGroup(storeid) {
    const allresults = [];
    try{

        const userid = PrimeChecker(storeid);
        const results = await prisma.chart_of_account_group.findMany({
            where: {
                storeid: storeid,
            }
        });
        results.forEach(result => {
            allresults.push({...result,'system':0} ) ;
        })
        const system = await prisma.system_account_group.findMany(
            {
                where: {
                    status: 1,
                }
            }
        )
        system.forEach((item) => {
            allresults.push({...item,'system':1});
        })
        return [...JSON.parse(JSON.stringify(allresults))];
    }catch (e) {
        return [];
    }

    //return currentUserCounter.count;
}

export async function createChartofAccountsGroup(data , storeid) {
    try {
        const userid = await PrimeChecker(storeid);
        const element = formdataToJson(data);
        const guid = uuidv4();
        console.log(element);
        const savedElement = await prisma.chart_of_account_group.create({
            data: {
                uuid: guid,
                name: element.name,
                accountid: parseInt(element.accountid),
                createdby: userid,
                storeid: storeid,
                createddate: new Date(),
            }
        });
        console.log(savedElement);
    }catch (e) {
        console.log(e);
    }
}

export async function deactivateCOAG(data) {
    try{
        const element = data;
        console.log(element);
        const savedElement = await prisma.chart_of_account_group.update({
            where: {
                uuid: element.uuid,
            },
            data: {
                status: element.status===1?0:1,
            }
        });
    }catch (e) {
        console.log(e);
    }
}
export async function deactivateCOA(data) {
    try{
        const element = data;
        console.log(element);
        const savedElement = await prisma.chart_of_account.update({
            where: {
                uuid: element.uuid,
            },
            data: {
                status: element.status===1?0:1,
            }
        });
    }catch (e) {
        console.log(e);
    }
}

export async function editCOAG(data, storeid) {

    try{
        const userid = await PrimeChecker(storeid);
        const element = formdataToJson(data);
        console.log(element);
        const savedElement = await prisma.chart_of_account_group.update({
            where: {
                uuid: element.uuid,
            },
            data: {
                name: element.name,
                accountid: parseInt(element.accountid),
            }
        });
    }catch (e) {
        console.log(e);
    }
}
export async function editCOA(data, storeid) {

    try{
        const userid = await PrimeChecker(storeid);
        const element = formdataToJson(data);
        console.log(element);
        const savedElement = await prisma.chart_of_account.update({
            where: {
                uuid: element.uuid,
                storeid: storeid
            },
            data: {
                account_name: element.name,
                opening_balance: parseInt(element.opening_balance),
                description: element.description,
            }
        });
    }catch (e) {
        console.log(e);
    }
}

export async function getChartOfAccountGroupbyAccountid(accountid, storeid) {
    const allresults = [];
    try{

        const userid = PrimeChecker(storeid);
        const results = await prisma.chart_of_account_group.findMany({
            where: {
                accountid: parseInt(accountid),
                storeid: storeid,
                status: 1,
            }
        });
        results.forEach(result => {
            allresults.push({...result,'system':0} ) ;
        })
        const system = await prisma.system_account_group.findMany(
            {
                where: {
                    accountid: parseInt(accountid),
                    status: 1,
                }
            }
        )
        system.forEach((item) => {
            allresults.push({...item,'system':1});
        })
        console.log(allresults,'all results');
        return [...JSON.parse(JSON.stringify(allresults))];
    }catch (e) {
        console.log(e)
        return [];
    }

    //return currentUserCounter.count;
}
export async function getChartOfAccountGroupbyuuid(uuid,storeid) {

    const allresults = [];
    try{

        const userid = PrimeChecker(storeid);
        const results = await prisma.chart_of_account_group.findMany({
            where: {
                uuid: uuid,
                storeid: storeid,
            }
        });
        results.forEach(result => {
            allresults.push({...result,'system':0} ) ;
        })
        const system = await prisma.system_account_group.findMany(
            {
                where: {
                    uuid: uuid,
                }
            }
        )
        system.forEach((item) => {
            allresults.push({...item,'system':1});
        })
        return [...JSON.parse(JSON.stringify(allresults))];
    }catch (e) {
        console.log(e)
        return [];
    }

    //return currentUserCounter.count;
}

