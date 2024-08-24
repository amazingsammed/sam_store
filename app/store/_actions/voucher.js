
'use server'
import  {PrismaClient} from "@prisma/client";


export async function getVoucherList() {
    const prisma = new PrismaClient();
    const a = await prisma.trn_voucher.findMany();
    return  JSON.parse(JSON.stringify(a));
}
export async function getSalesList() {
    const prisma = new PrismaClient();
    const a = await prisma.trn_voucher.findMany({where: {
        voucher_type: 'Sales'
        }});
    return  JSON.parse(JSON.stringify(a));
}
export async function getPurchasesList() {
    const prisma = new PrismaClient();
    const a = await prisma.trn_voucher.findMany({where: {
            voucher_type: 'Purchases'
        }});
    return  JSON.parse(JSON.stringify(a));
}
