'use client'

import React from 'react';
import Link from "next/link";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {usePathname} from "next/navigation";
import MembersTable from "@/app/stores/[storeid]/settings/_component/_members/members_table";


export function Settingspage(props) {

    return (
        <div className="max-w-screen-xl">
           <SettingsMenu>

           </SettingsMenu>
        </div>
    );
}



function SettingsMenu({children}) {
    const path = usePathname();
    return (
        <div>
            <h1 className="text-3xl my-4 font-bold">Settings</h1>
            <Tabs defaultValue='general'>
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="general">General</TabsTrigger>
                        <TabsTrigger value="members">Members</TabsTrigger>
                        <TabsTrigger value="store">Store Details</TabsTrigger>
                        <TabsTrigger value="account">Accounts</TabsTrigger>
                        <TabsTrigger value="others" className="hidden sm:flex">
                            Others
                        </TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="general">< MembersTable /></TabsContent>
                <TabsContent value="members">< MembersTable /></TabsContent>
            </Tabs>
        </div>
    );
}

export default SettingsMenu;