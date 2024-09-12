'use server';
import {toJson} from "@/app/shared/sharedfunctions";
import prisma from "@/lib/prisma";
import {PrimeChecker} from "@/app/_actions/_checker";


export async function createStockGroup(data, storeid) {
    try {
        const userid = await PrimeChecker(storeid);
        console.log(userid);
        const element = toJson(data)
        return await prisma.stock_item_group.create({
            data: {
                name: element.name,
                category: parseInt(element.category),
                createdby: userid,
                storeid: storeid,
                createddate: new Date(),
            }
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createStockUnits(data, storeid) {
    try {
        const userid = await PrimeChecker(storeid);
        console.log(userid);
        const element = toJson(data)
        return await prisma.stock_item_unit.create({
            data: {
                name: element.name,
                createdby: userid,
                storeid: storeid,
                createddate: new Date(),
            }
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createStockCategory(data, storeid) {
    try {
        const userid = await PrimeChecker(storeid);
        console.log(userid);
        const element = toJson(data)
        return await prisma.stock_item_category.create({
            data: {
                name: element.name,
                category: element.category,
                createdby: userid,
                storeid: storeid,
                createddate: new Date(),
            }
        });
    } catch (e) {
        console.log(e);
    }
}

export async function getStockGroup(storeid) {
    try {
        const userid = await PrimeChecker(storeid);
        console.log(storeid);

        return await prisma.stock_item_group.findMany({
            where: {
                storeid: storeid,
            },
            include: {
                stock_item_category: true,
            }
        });
    } catch (e) {
        console.log(e);
        return [];
    }
}
export async function getStockCategory(storeid) {
    try {
        const userid = await PrimeChecker(storeid);
        console.log(storeid);

        return await prisma.stock_item_category.findMany({
            where: {
                storeid: storeid,
            }
        });
    } catch (e) {
        console.log(e);
        return [];
    }
}

export async function getStockUnits(storeid) {
    try {
        const userid = await PrimeChecker(storeid);
        console.log(storeid);

        return await prisma.stock_item_unit.findMany({
            where: {
                storeid: storeid,
            }
        });
    } catch (e) {
        console.log(e);
        return [];
    }
}