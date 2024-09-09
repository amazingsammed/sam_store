'use server'

import {getFirebaseAdminApp} from "@/app/firebase";
import {doc, getDoc, updateDoc, addDoc, collection} from 'firebase/firestore';
import {getFirestore} from 'firebase-admin/firestore';
import {authConfig} from "@/config/server-config";
import {cookies} from "next/headers";
import {getTokens} from "next-firebase-auth-edge";
import {toJson} from "@/app/shared/sharedfunctions";
import prisma from "@/lib/prisma";
import {PrimeChecker} from "@/app/stores/_actions/_checker";
import {v4 as uuidv4} from "uuid";

const db = getFirestore(getFirebaseAdminApp());


export async function getProducts(storeid) {
    const results = [];
    try {
        const userid = await PrimeChecker(storeid);
        console.log(storeid);

        return await prisma.stock_item.findMany({
            where: {
                storeid: storeid,
            },
            include: {
                stock_item_group: true,
                stock_item_unit: true,
            }
        });
    } catch (e) {
        return [];
    }

    //return currentUserCounter.count;
}

export async function getCachedProducts(storeid) {
    const results = [];
    try {
        // const tokens = await getTokens(cookies(), authConfig);
        //
        // if (!tokens) {
        //     throw new Error('Cannot get counter of unauthenticated user');
        // }
        // const userid = tokens.decodedToken.uid;
        const snapshot = await db
            .collection('product').where("store_id", "==", storeid)
            .get();

        const currentUserCounter = snapshot.docs;
        if (!currentUserCounter) {
            return [];
        }
        currentUserCounter.forEach((doc) => {
            results.push({
                ...doc.data(), 'product_id': doc.id
            });
        })


        return results;
    } catch (e) {
        return [];
    }

}

export async function addProduct(data, storeid) {

    try {
        const userid = await PrimeChecker(storeid);
        const element = toJson(data)
        const guid = uuidv4();
        const savedElement = await prisma.stock_item.create({
            data: {
                name: element.name,
                uuidt: guid,
                shortname: element.shortname,
                group: parseInt(element.group),
                unit: parseInt(element.unit),
                salesprice: parseFloat(element.salesprice),
                purchaseprice: parseFloat(element.purchaseprice),
                warninglimit: parseInt(element.warninglimit),
                is_service: parseInt(element.is_service),
                createdby: userid,
                storeid: storeid,
                createddate: new Date(),
                trn_inventory: {
                    create: [{
                        uuid: guid,
                        itemid: guid,
                        quantity: parseInt(element.quantity),
                        rate: parseFloat(element.purchaseprice),
                        amount: parseFloat(element.quantity) * parseFloat(element.purchaseprice),
                        storeid: storeid,
                        date: new Date(),
                        createdby: userid,
                        voucher: {
                            create: [{
                                uuid: guid,
                                date: new Date(),
                                voucher_type: 14,
                                narration: "purchases of " + element.name,
                                party_name: 'Purchases',
                                is_invoice: false,
                                is_inventory_voucher: true,
                                is_accounting_voucher: false
                            }]
                        }
                    }],

                }
            },
            include: {
                trn_inventory: {
                    include: {
                        voucher: true,
                    },
                },
            },
        })
        console.log(savedElement);
    } catch (e) {
        console.log(e);
    }
}
