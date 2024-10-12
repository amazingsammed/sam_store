'use client';

import React from 'react';
import Link from "next/link";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

import Storeheader from "@/app/stores/_component/storeheader";
import {MdStore} from "react-icons/md";

function Storelist(prop) {
    const stores = prop.datax;
    return (


        <div>
            <Storeheader/>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-4">
                {stores.map((store, i) => (
                    <Link href={'/stores/'.concat(store['store_uuid'])} key={i}>

                        <Card key={i}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium ">
                                    <div className="flex flex-row gap-2">
                                        <MdStore size="32"/>
                                        <div className="flex flex-col  gap-2">

                                            <div className="text-2xl font-bold">{store.store['storename']}</div>
                                            <div>{store.store['storeaddress']}</div>

                                        </div>
                                    </div>
                                </CardTitle>

                            </CardHeader>
                            <CardDescription className="flex flex-row items-center justify-between space-y-0 p-4">
                                Free Version
                            </CardDescription>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>

    );
}


export default Storelist;