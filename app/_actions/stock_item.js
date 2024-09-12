'use server'

import {toJson} from "@/app/shared/sharedfunctions";
import prisma from "@/lib/prisma";
import {PrimeChecker} from "@/app/_actions/_checker";
import {v4 as uuidv4} from "uuid";



export async function getProducts(storeid) {
    const results = [];
    try {
        const userid = await PrimeChecker(storeid);

        const  data= await prisma.stock_item.findMany({
            where: {
                storeid: storeid,
            },
            include: {
                stock_item_group: true,
                stock_item_unit: true,
            }
        });

        return data;
    } catch (e) {
        return [];
    }

    //return currentUserCounter.count;
}


export async function addProduct(data, storeid) {

    try {
        const userid = await PrimeChecker(storeid);
        const element = toJson(data)
        console.log(element);
        const guid = uuidv4();
        const savedElement = await prisma.stock_item.create({
            data: {
                name: element.name,
                uuidt: guid,
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
                    uuid: guid,
                    itemid: savedElement.id,
                    quantity: parseInt(element.quantity),
                    rate: parseFloat(element.purchaseprice),
                    amount: parseFloat(element.quantity) * parseFloat(element.purchaseprice),
                    storeid: storeid,
                    createddate: new Date(),
                    createdby: userid,
                }
            });
        console.log(inventoryresults);
        }
        console.log(savedElement);
    } catch (e) {
        console.log(e);
    }
}
