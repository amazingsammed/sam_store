'use server'
import {PrimeChecker} from "@/app/_actions/_checker";
import {toJson} from "@/app/shared/sharedfunctions";
import {v4 as uuidv4} from "uuid";
import prisma from "@/lib/prisma";


export async function createMember(data , storeid) {
    try {
        const userid = await PrimeChecker(storeid);
        const element = toJson(data)
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
    // console.log(data,storeid,'deactivated members');
    let num = 0;
    if(data.status ==="inactive") {
        num = 1;
    }
    try{
        const element = data;
        console.log(num,'num');
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
                status: num,
            }
        });
        console.log(savedElement , 'results');
    }catch (e) {
        console.log(e);
    }
    return [];
}
export async function changeroleMember(data, storeid) {}
export async function viewdetailsMember(data, storeid) {}