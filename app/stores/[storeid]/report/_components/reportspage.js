import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Accounting from "@/app/stores/[storeid]/report/_components/accounting/accounting";
import Sales from "@/app/stores/[storeid]/report/_components/sales/sales";
import Purchases from "@/app/stores/[storeid]/report/_components/purchases/purchases";
import Inventory from "@/app/stores/[storeid]/report/_components/inventory/inventory";




function Reportspage(props) {
    return (
        <div>
            <div>
                <h1 className="text-3xl my-4 font-bold">Settings</h1>
                <Tabs defaultValue='accounting'>
                    <div className="flex items-center">
                        <TabsList>
                            <TabsTrigger value="accounting">Accounting</TabsTrigger>
                            <TabsTrigger value="sales">Sales</TabsTrigger>
                            <TabsTrigger value="purchases">Purchases</TabsTrigger>
                            <TabsTrigger value="inventory">Inventory</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="accounting"><Accounting/></TabsContent>
                    <TabsContent value="sales"><Sales/></TabsContent>
                    <TabsContent value="purchases"><Purchases/></TabsContent>
                    <TabsContent value="inventory"><Inventory/></TabsContent>
                </Tabs>
            </div>

        </div>
    );
}

export default Reportspage;