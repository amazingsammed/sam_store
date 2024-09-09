'use server'

import {getFirebaseAdminApp} from "@/app/firebase";
import {doc, getDoc, updateDoc, addDoc ,collection} from 'firebase/firestore';
import {getFirestore} from 'firebase-admin/firestore';
import {authConfig} from "@/config/server-config";
import {cookies} from "next/headers";
import {getTokens} from "next-firebase-auth-edge";
const db = getFirestore(getFirebaseAdminApp());
export async function getVoucherList() {
    // const prisma = new PrismaClient();
    // const a = await prisma.trn_voucher.findMany();
    // return  JSON.parse(JSON.stringify(a));
    return [];
}
export async function getSalesList() {
    // const prisma = new PrismaClient();
    // const a = await prisma.trn_voucher.findMany({where: {
    //     voucher_type: 'Sales'
    //     }});
    // return  JSON.parse(JSON.stringify(a));
    return [];
}
export async function getPurchasesList() {
    // const prisma = new PrismaClient();
    // const a = await prisma.trn_voucher.findMany({where: {
    //         voucher_type: 'Purchases'
    //     }});
    // return  JSON.parse(JSON.stringify(a));
    return [];
}
