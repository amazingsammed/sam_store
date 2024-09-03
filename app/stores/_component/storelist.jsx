'use client'

import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

import Storeheader from "@/app/stores/_component/storeheader";
import {getSession} from "next-auth/react";

async function Storelist() {
    const session = await getSession();
    console.log(session);
    return (
        <div>
            <Storeheader/>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-2xl font-bold">
                            Mariam Store
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <p>Location :</p>
                            <p>Atimatim</p>
                        </div>
                        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <p>Phone :</p>
                            <p>233543220177</p>
                        </div>
                    </CardContent>
                    <CardDescription className="flex flex-row items-center justify-between space-y-0 p-4">
                        <p>Active</p>
                        <p>By: Sammed</p>
                    </CardDescription>
                </Card>
            </div>
        </div>
    );
}

export default Storelist;