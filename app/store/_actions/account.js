
'use server'
import  {PrismaClient} from "@prisma/client";


export async function getGroupList() {
    // const prisma = new PrismaClient();
    // const a = await prisma.m.findMany();
    // return  JSON.parse(JSON.stringify(a));
    return [];
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

export async function createGroup(e) {
    console.log(e);
}

