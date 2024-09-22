'use client'

import React from 'react';
import Link from "next/link";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import MembersTable from "@/app/stores/[storeid]/settings/_component/_members/members_table";
import {usePathname} from "next/navigation";


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
            <Tabs>
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="general">General</TabsTrigger>
                        <Link href={path + '/members'}>
                            <TabsTrigger value="members">Members</TabsTrigger>
                        </Link>
                        <TabsTrigger value="store">Store Details</TabsTrigger>
                        <TabsTrigger value="account">Accounts</TabsTrigger>
                        <TabsTrigger value="others" className="hidden sm:flex">
                            Others
                        </TabsTrigger>
                    </TabsList>
                </div>
            </Tabs>
            {children}
        </div>
    );
}

export default SettingsMenu;