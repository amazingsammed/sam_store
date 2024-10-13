'use client';

import React from 'react';
import Link from "next/link";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

import Storeheader from "@/app/stores/_component/storeheader";
import {MdStore} from "react-icons/md";
import Storesidebar from "@/app/stores/_component/storesidebar";

function Storelist(prop) {
    const stores = prop.datax;
    return (
<div className="flex flex_row h-full">
    <Storesidebar/>
        <div className="flex flex-col flex-1">
            <Storeheader/>
            <div className="flex-1 flex-grow overflow-y-auto">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-4">
                {stores.map((store, i) => (
                    <Link href={'/stores/'.concat(store['store_uuid'])} key={i}>

                        <Card key={i}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium ">
                                    <div className="flex flex-row gap-2">
                                        <MdStore size="32"/>
                                        <div className="flex flex-col  gap-2">
                                            <div className="text-xl font-bold">{store.store['storename']}</div>
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
        </div>
</div>


    );
}


export default Storelist;