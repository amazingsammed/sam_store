
'use server'
import  {PrismaClient} from "@prisma/client";


export async function getVoucherList() {
    const prisma = new PrismaClient();
    const a = await prisma.trn_voucher.findMany();
    return  JSON.parse(JSON.stringify(a));
}
