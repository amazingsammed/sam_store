'use client'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {CategoryTabletab} from "@/app/stores/[storeid]/items/_components/category/categorytable";
import {GroupTabletab} from "@/app/stores/[storeid]/items/_components/group/grouptable";
import {UnitsTableTab} from "@/app/stores/[storeid]/items/_components/units/units";
import {ItemTableTab} from "@/app/stores/[storeid]/items/_components/item/itemtab";

export  function ItemsPage(prop) {
    return (
        <div className="">
            <h1 className="text-3xl my-4 font-bold">Items info Page</h1>
            <Tabs defaultValue='item'>
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="item">Items List</TabsTrigger>
                        <TabsTrigger value="category">Category</TabsTrigger>
                        <TabsTrigger value="group">Group</TabsTrigger>
                        <TabsTrigger value="unit">Units</TabsTrigger>
                        <TabsTrigger value="report" className="hidden sm:flex">
                            Report
                        </TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="item">
           <ItemTableTab/>
                </TabsContent>
                <TabsContent value="category"><CategoryTabletab /></TabsContent>
                <TabsContent value="group"><GroupTabletab/></TabsContent>
                <TabsContent value="unit"><UnitsTableTab/></TabsContent>
                <TabsContent value="report"></TabsContent>
            </Tabs>
        </div>

    );
}

 

  

  