import {NextResponse} from "next/server";
import * as z from 'zod';
import prisma from "@/lib/prisma";
import {compare, hash} from "bcrypt";
import { v4 } from "uuid";

const UserSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
        .string()
        .min(1, 'Password is required')
        .min(8, 'Password must have than 8 characters'),
});

export async function POST(request) {
    try {
        const body = await request.json();
        const {email, password } = UserSchema.parse(body);

        const existingUser = await prisma.user.findUnique({
            where: {email: email},
        });
        console.log(existingUser,"login post");

        if (!existingUser) {
            return NextResponse.json({user: null, message: "User does not exist,please signup"}, {status: 409});
        }


        const passwordMarch = await compare(password , existingUser.password);
         if (!passwordMarch) {
             return NextResponse.json({user: null, message: "Incorrect Password"}, {status: 409});
         }
        const {password: nam,id ,imageurl,status,createddate,isactive,...rest} = existingUser;
        return NextResponse.json({user: {...rest}, message: "User created successfully"}, {status: 201});
    } catch (e) {
        console.log(e.message);
        return NextResponse.json({'message': "Something went wrong"}, {status: 500});
    }
}

export async function GET(a) {
    try {
        return NextResponse.json({user: 'rest', message: "User created successfully"}, {status: 200});
    } catch (e) {
        console.log(e.message);
        return NextResponse.json({'message': "Something went wrong"}, {status: 500});
    }
}