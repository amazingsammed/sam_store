'use server'
import {PrimeChecker} from "@/app/_actions/_checker";
import {formdataToJson} from "@/app/shared/sharedfunctions";
import {v4 as uuidv4} from "uuid";
import prisma from "@/lib/prisma";


export async function createMember(data , storeid) {
    try {
        const [userid] = await PrimeChecker(storeid);
        const element = formdataToJson(data)
        console.log(element,'\n \n \n email heree');
        const guid = uuidv4();
        const userExisting = await prisma.user.findUnique({
            where: {
                email: element.email,
            }
        })
        if (userExisting === null) {
            throw new Error("User does not exist");
        }
        console.log(userExisting ,'adding new user');
        const saveMember = await prisma.user_store.create({
            data: {
                user_uuid: userExisting.uuid,
                store_uuid: storeid,
                role_uuid: element.role,
                createdby: userid,
                createddate: new Date(),

            }
        });
        console.log(saveMember ,'saved New User');
        return saveMember;
    } catch (e) {
        console.log(e);
        throw  Error(e);
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