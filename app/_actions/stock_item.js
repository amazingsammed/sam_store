'use server'

import {queryClean, formdataToJson} from "@/app/shared/sharedfunctions";
import prisma from "@/lib/prisma";
import {PrimeChecker} from "@/app/_actions/_checker";
import {v4 as uuidv4} from "uuid";



export async function getProducts(storeid) {
    const results = [];
    try {
        const userid = await PrimeChecker(storeid);

        const  data= await prisma.$queryRaw ` SELECT
\tstock_item.\`name\`, 
\tstock_item.uuidt, 
\tstock_item.salesprice, 
\tstock_item.purchaseprice
FROM
\tstock_item
WHERE
\tstock_item.storeid = ${queryClean(storeid)} AND
\tstock_item.\`status\` = 1
        `;
        console.log(data);
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

        const  data= await prisma.$queryRaw ` 
SELECT
\tSUM(trn_inventory.quantity) AS quantity, 
\tstock_item.\`name\`, 
\tstock_item.salesprice, 
\tstock_item.purchaseprice, 
\tstock_item.\`status\`, 
\tstock_item.shortname, 
\tstock_item.uuidt, 
\tstock_item_unit.\`name\` AS unit, 
\tstock_item_group.\`name\` AS \`group\`
FROM
\ttrn_inventory
\tLEFT JOIN
\tstock_item
\tON 
\t\ttrn_inventory.item_uuid = stock_item.uuidt,
\tstock_item_group,
\tstock_item_unit,
\tvoucher
WHERE
\ttrn_inventory.voucher_uuid = voucher.uuid AND
\tvoucher.\`status\` = 1 AND
\tstock_item.storeid = ${queryClean(storeid)} AND
\tstock_item.unit = stock_item_unit.id AND
\tstock_item.\`group\` = stock_item_group.id
GROUP BY
\ttrn_inventory.item_uuid
        `;
        return JSON.parse(JSON.stringify(data));
    } catch (e) {
        return [];
    }

    //return currentUserCounter.count;
}
export async function getAllProductsbyStoreid(storeid) {
    const results = [];
    try {
        const userid = await PrimeChecker(storeid);

        const  data= await prisma.$queryRaw ` 
SELECT
\tstock_item.\`name\`, 
\tstock_item.salesprice, 
\tstock_item.purchaseprice, 
\tstock_item.\`status\`, 
\tstock_item_group.\`name\` AS \`group\`
FROM
\tstock_item,
\tstock_item_group,
\tstock_item_unit
WHERE
\tstock_item.\`group\` = stock_item_group.id AND
\tstock_item.unit = stock_item_unit.id AND
\tstock_item.storeid = ${queryClean(storeid)} 
        `;
        return JSON.parse(JSON.stringify(data));
    } catch (e) {
        return [];
    }

    //return currentUserCounter.count;
}

export async function getProductDetail(productId) {
    try {
        let data= await prisma.$queryRaw ` 
SELECT
\ttrn_inventory.rate, 
\ttrn_inventory.amount, 
\ttrn_inventory.quantity,  
\tvoucher_type.\`name\`,
\tvoucher.date
FROM
\ttrn_inventory,
\tvoucher,
\tvoucher_type
WHERE
\ttrn_inventory.voucher_uuid = voucher.uuid AND
\tvoucher.\`status\` = 1 AND
\ttrn_inventory.item_uuid = ${queryClean(productId)} AND
\tvoucher.voucher_type = voucher_type.id

        `;
        let product = await prisma.stock_item.findFirst(
            {
                where: {
                    uuidt: productId
                }
            }
        )
         product =JSON.parse(JSON.stringify(product));
         data = JSON.parse(JSON.stringify(data))
        console.log(data);
        console.log(product);
        return {product ,data};
    } catch (e) {
        return [];
    }
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
        if (element.hasopenbalance === 'on' || parseInt(element.quantity) >0 ) {
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
