import {PrimeChecker} from "@/app/_actions/_checker";
import {formdataToJson} from "@/app/shared/sharedfunctions";
import prisma from "@/lib/prisma";
import {compare, hash} from "bcrypt";


async function changePassword(data, storeid) {
    try {
        const [userid] = await PrimeChecker(storeid);
        const element = formdataToJson(data)
        const userExisting = await prisma.user.findUnique({
            where: {
                AND:{
                    uuid: userid,
                    email: element.email,
                }
            }
        })
        if (userExisting === null) {
            return  new Error("User does not exist");
        }
        const passwordMarch = await compare(element.password, existingUser.password);
        if (!passwordMarch) {
            return  Error("Incorrect Password");
        }
        const hashedPassword = await hash(password, 10)
        return await prisma.user.update({
            where: {
                email: element.email,
            },
            data:{
                password: hashedPassword,
            }
        })

    } catch (e) {
        console.log(e);
        return {message:"Something went wrong"}

    }

}


