'use server'

import {prismatoJson, queryClean, formdataToJson} from "@/app/shared/sharedfunctions";
import prisma from "@/lib/prisma";
import {PrimeChecker} from "@/app/_actions/_checker";
import {v4 as uuidv4} from "uuid";



export async function getProducts(storeid) {
    const results = [];
    try {
        const userid = await PrimeChecker(storeid);

        const  data= await prisma.$queryRaw ` SELECT
\tstock_item.shortname, 
\tstock_item.\`name\`, 
\tstock_item_group.\`name\` AS \`group\`, 
\tstock_item.uuidt, 
\tstock_item_unit.\`name\` AS unit, 
\tstock_item.salesprice, 
\tstock_item.purchaseprice, 
\tstock_item.is_service, 
\tstock_item.warninglimit, 
\tstock_item.description, 
\tstock_item.createddate, 
\t\`user\`.\`name\` AS createdby
FROM
\tstock_item_group,
\tstock_item,
\tstock_item_unit,
\t\`user\`
WHERE
\tstock_item.\`group\` = stock_item_group.id AND
\tstock_item_unit.id = stock_item.unit AND
\tstock_item.createdby = \`user\`.uuid AND
\tstock_item.storeid = ${queryClean(storeid)} AND
\tstock_item.\`status\` = 1
        `;
        return JSON.parse(JSON.stringify(data));
    } catch (e) {
        return [];
    }

    //return currentUserCounter.count;
}
export async function getAllProducts(storeid) {
    const results = [];
    try {
        const userid = await PrimeChecker(storeid);

        const  data= await prisma.$queryRaw ` SELECT
\tstock_item.shortname, 
\tstock_item.\`name\`, 
\tstock_item_group.\`name\` AS \`group\`, 
\tstock_item.uuidt, 
\tstock_item_unit.\`name\` AS unit, 
\tstock_item.salesprice, 
\tstock_item.purchaseprice, 
\tstock_item.is_service, 
\tstock_item.warninglimit, 
\tstock_item.description, 
\tstock_item.\`status\`,
\tstock_item.createddate, 
\t\`user\`.\`name\` AS createdby
FROM
\tstock_item_group,
\tstock_item,
\tstock_item_unit,
\t\`user\`
WHERE
\tstock_item.\`group\` = stock_item_group.id AND
\tstock_item_unit.id = stock_item.unit AND
\tstock_item.createdby = \`user\`.uuid AND
\tstock_item.storeid = ${queryClean(storeid)} 
        `;
        return JSON.parse(JSON.stringify(data));
    } catch (e) {
        return [];
    }

    //return currentUserCounter.count;
}

export async function addProduct(data, storeid) {

    try {
        const userid = await PrimeChecker(storeid);
        const element = formdataToJson(data)
        console.log(element);
        const guid = uuidv4();
        const guidx = uuidv4();
        const savedElement = await prisma.stock_item.create({
            data: {
                name: element.name,
                uuidt: guidx,
                shortname: element.shortname,
                group: parseInt(element.group),
                unit: parseInt(element.unit),
                salesprice: parseFloat(element.salesprice),
                purchaseprice: parseFloat(element.purchaseprice),
                warninglimit: parseInt(element.warninglimit),
                is_service: parseInt(element.is_service),
                createdby: userid,
                storeid: storeid,
                createddate: new Date(),

            }
        });
        if (element.hasopenbalance === 'on') {
            await prisma.voucher.create({
                data: {
                    uuid: guid,
                    date: new Date(),
                    voucher_type: 14,
                    narration: "purchases of " + element.name,
                    party_name: 'Purchases',
                    is_invoice: 0,
                    is_inventory_voucher: 1,
                    is_accounting_voucher: 1,

                }
        }
            )
            const inventoryresults = await  prisma.trn_inventory.create({
                data: {
                    voucher_uuid: guid,
                    item_uuid: guidx,
                    quantity: parseInt(element.quantity),
                    rate: parseFloat(element.purchaseprice),
                    amount: parseFloat(element.quantity) * parseFloat(element.purchaseprice),
                    storeid: storeid,
                    createddate: new Date(),
                    createdby: userid,
                }
            });
        }

    } catch (e) {
        console.log(e);
    }
}

export async function editStockItem(data, storeid) {

    try{
        const userid = await PrimeChecker(storeid);
        const element = formdataToJson(data);
        console.log(element);
        const savedElement = await prisma.stock_item.update({
            where: {
                uuidt: element.uuidt,
                storeid: storeid,
            },
            data: {
                name: element.name,
                shortname: element.shortname,
                salesprice: parseFloat(element.salesprice),
                purchaseprice: parseFloat(element.purchaseprice),
                description: element.description,
            }
        });
        console.log(savedElement , 'results');
    }catch (e) {
        console.log(e);
    }
}

export async function deleteStockItem(data) {
    try{
        const element = data;
        console.log(element);
        const savedElement = await prisma.stock_item.update({
            where: {
                uuidt: element.uuidt,
            },
            data: {
                status: element.status===1?0:1,
            }
        });
        console.log(savedElement , 'results');
    }catch (e) {
        console.log(e);
    }
}
