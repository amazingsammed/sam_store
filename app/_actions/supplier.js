import {PrimeChecker} from "@/app/_actions/_checker";
import prisma from "@/lib/prisma";
import {mapToJson} from "@/app/shared/sharedfunctions";

export async function getSuppliers() {}

export async function createSupplier() {}
export async function getSupplierComboBox(storeid) {
    const results = [];
    try {
        const [userid] = await PrimeChecker(storeid);

        const  data = await prisma.suppliers.findMany({
            select:{
                name: true, coa_uuid:true
            },
            where: {
                storeid: storeid,
            }
        });
        if(data.length===0)return [];
        console.log(data);
        return mapToJson(data.map(user=>({
            ...user,uuid: user.coa_uuid
        })));
    } catch (e) {
        return [];
    }

    //return currentUserCounter.count;
}

export async function deactivateSupplier() {}