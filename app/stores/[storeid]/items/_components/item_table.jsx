'use client'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {CategoryTabletab} from "@/app/stores/[storeid]/items/_components/category/categorytable";
import {GroupTabletab} from "@/app/stores/[storeid]/items/_components/group/grouptable";
import {UnitsTableTab} from "@/app/stores/[storeid]/items/_components/units/units";
import {ItemTableTab} from "@/app/stores/[storeid]/items/_components/item/itemtab";
import React from "react";
import {useParams, usePathname} from "next/navigation";
import {HeaderListTileDialog} from "@/components/app/headerlisttile";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {AddAnItem} from "@/app/stores/[storeid]/items/_components/item_form";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {itemsColumns} from "@/app/stores/[storeid]/items/_components/item/item_columns";

export  function ItemsPageOld(prop) {
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
export  function ItemsPage({data}) {
    const tabledata =  data;
    const param = useParams();
    const path = usePathname();


    return (
        <div className="">
            <HeaderListTileDialog title='Item List' subtitle='All items are listed here' buttonx={
                <div className="flex gap-2">
                    <Link href={path + "/item/multicreate"}>
                        <Button variant="outline"> Multi-Create</Button>
                    </Link>
                    <AddAnItem/>
                </div>
            }>
                <DataTable columns={itemsColumns} data={tabledata} filter={'name'}/>
            </HeaderListTileDialog>

        </div>

    );
}

 

  

  