'use client';

import React from 'react';
import Link from "next/link";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

import Storeheader from "@/app/stores/_component/storeheader";
import {getStores} from "@/app/stores/_actions/stores";

function Storelist(prop) {
    const stores = prop.datax;
    return (
        <div>
            <Storeheader/>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-4">
                {stores.map((store, i) => (
                    <Link href={'/stores/'.concat(store['store_id'])} key={i}>

                        <Card key={i}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-2xl font-bold">
                                    {store['name']}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                                   <p>

                                    Location :
                                   </p>
                                    {store['location']}
                                </div>
                                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <p>Phone :</p>
                                    <p>{store['phone']}</p>
                                </div>
                            </CardContent>
                            <CardDescription className="flex flex-row items-center justify-between space-y-0 p-4">
                                active
                            </CardDescription>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}


export default Storelist;