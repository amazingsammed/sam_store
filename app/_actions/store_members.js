'use server'
import {PrimeChecker} from "@/app/_actions/_checker";
import {formdataToJson} from "@/app/shared/sharedfunctions";
import {v4 as uuidv4} from "uuid";
import prisma from "@/lib/prisma";


export async function createMember(data , storeid) {
    try {
        const userid = await PrimeChecker(storeid);
        const element = formdataToJson(data)
        const guid = uuidv4();
        const userExisting = await prisma.$queryRaw`
        SELECT
\t\`user\`.email, 
\t\`user\`.\`name\`, 
\t\`user\`.uuid
FROM
\t\`user\`
WHERE
\t\`user\`.email = ${element.email}
 AND
\t\`user\`.\`status\` = 1

LIMIT 1
        `;
        console.log(userExisting, "create members");
        if (userExisting ===undefined) {
            throw new Error("User already exists");
        }
        const saveMember = await prisma.user_store.create({
            data: {
                user_uuid: userExisting[0].uuid,
                store_uuid: storeid,
                role_uuid: element.role,
                createdby: userid,
                createddate: new Date(),

            }
        });
        console.log(saveMember ,'saved New User');
    } catch (e) {
        console.log(e);
    }

}

export async function deactivateMember(data, storeid) {
    try{
        const element = data;
        const savedElement = await prisma.user_store.updateMany({
            where: {
                AND:[
                    {
                        user_uuid: element.uuid,
                        store_uuid: storeid,
                    },
                ]
            },
            data: {
                status: element.status ==="inactive"?1:0,
            }
        });
        console.log(savedElement , 'results');
    }catch (e) {
        console.log(e);
    }
    return [];
}
export async function changeroleMember(data, storeid) {
    try{
        const element = data;
        const savedElement = await prisma.user_store.updateMany({
            where: {
                AND:[
                    {
                        user_uuid: element.uuid,
                        store_uuid: storeid,
                    },
                ]
            },
            data: {
                role_uuid: element.x.role+"_xd",
            }
        });
    }catch (e) {
        console.log(e);
    }
    return [];
}
export async function viewdetailsMember(data, storeid) {}