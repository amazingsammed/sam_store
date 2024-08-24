'use server'
import  {PrismaClient} from "@prisma/client";


export async function getItemsList() {
    const prisma = new PrismaClient();
    const a = await prisma.mst_stock_item.findMany();
    return  JSON.parse(JSON.stringify(a));
}

export async function getItemsgroupList() {
    const prisma = new PrismaClient();
    var a = await prisma.mst_stock_group.findMany({select: {
        name: true,
        }});
    return  JSON.parse(JSON.stringify(a));
}
export async function getItemsUnitList() {
    const prisma = new PrismaClient();
    var a = await prisma.mst_uom.findMany();
    return  JSON.parse(JSON.stringify(a));
}
export async function addproduct(a) {
    // const prisma = new PrismaClient();
    // var ab = await prisma.mst_stock_group.create();
   console.log(a);
}
