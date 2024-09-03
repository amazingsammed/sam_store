import {NextResponse} from "next/server";
import * as z from 'zod';
import prisma from "@/lib/prisma";
import {hash} from "bcrypt";
import { v4 } from "uuid";

const UserSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
        .string()
        .min(1, 'Password is required')
        .min(8, 'Password must have than 8 characters'),
    username: z.string().min(3, 'Username is required'),
});

export async function POST(request) {
    try{
    const body = await request.json();
    const { email, password ,name } = UserSchema.parse(body);

    const existingUser =await prisma.user.findUnique({
        where:{email: email},
    });

    if (existingUser) {
        return NextResponse.json({ user: null, message: "User with this email already exist" }, { status: 409 });
    }
        const hashedPassword = await hash(password ,10)
        const newUser= await prisma.user.create({
            data: {email: email, password: hashedPassword,name: name,uuid: v4()},
        })
        const { password: nam,...rest } =newUser;

        return NextResponse.json({user: rest, message: "User created successfully" }, { status: 201 });
    } catch(e){
        console.log(e.message);
        return NextResponse.json({'message':"Something went wrong"}, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({"name":"sammed" });
}

export async function DELETE(request) {

    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}