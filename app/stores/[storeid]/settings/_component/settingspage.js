'use client'

import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import MembersTable from "@/app/stores/[storeid]/settings/_component/members/members_table";
import {Cartofaccount} from "@/app/stores/[storeid]/settings/_component/chartofaccount/coa_table";
import {GroupTablePage} from "@/app/stores/[storeid]/settings/_component/accountgroups/group_table";


export function Settingspage(props) {

    return (
        <div className="max-w-screen-xl">
           <SettingsMenu>

           </SettingsMenu>
        </div>
    );
}



function SettingsMenu({children}) {
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
                        <TabsTrigger value="accountgroup" className="hidden sm:flex">
                            Accounts Group
                        </TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="members">< MembersTable /></TabsContent>
                <TabsContent value="account">< Cartofaccount /></TabsContent>
                <TabsContent value="accountgroup">< GroupTablePage /></TabsContent>
            </Tabs>
        </div>
    );
}

export default SettingsMenu;