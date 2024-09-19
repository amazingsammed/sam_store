import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import MembersTable from "@/app/stores/[storeid]/settings/_component/members_table";

function Settingspage(props) {
    return (
        <div className="max-w-screen-xl">
            <h1 className="text-3xl my-4 font-bold">Settings</h1>
            <Tabs defaultValue="general">
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
                <TabsContent value="general">
                    <h1>General</h1>
                </TabsContent>
                <TabsContent value="members">
                    <MembersTable/>
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default Settingspage;