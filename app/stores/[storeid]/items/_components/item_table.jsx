'use client'
import Headerlisttile, {HeaderListTileDialog} from "../../../../../components/headerlisttile";
import {itemsColumns} from "@/app/stores/[storeid]/items/_components/item_columns";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {Button} from "@/components/ui/button";
import Link from 'next/link'
import {AddAnItem} from "@/app/stores/[storeid]/items/_components/item_form";
import {useParams, usePathname} from "next/navigation";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import React from "react";
import CategoryPage from "@/app/stores/[storeid]/items/category/categoryPage";
import {CategoryTabletab} from "@/app/stores/[storeid]/items/_components/category/categorytable";
import {GroupTabletab} from "@/app/stores/[storeid]/items/_components/group/grouptable";
import {UnitsTableTab} from "@/app/stores/[storeid]/items/_components/units/units";

export  function ItemsPage(prop) {
    const tabledata = prop.data;
    const path = usePathname();
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
            <HeaderListTileDialog title='Item List' subtitle='All items are listed here' buttonx={
                <div className="flex gap-2">
                    <Link href={path + "/multicreate"}>
                        <Button variant="outline"> Multi-Create</Button>
                    </Link>
                    <AddAnItem/>
                </div>
            }>
                <DataTable columns={itemsColumns} data={tabledata} filter={'name'}/>
            </HeaderListTileDialog>
                </TabsContent>
                <TabsContent value="category"><CategoryTabletab /></TabsContent>
                <TabsContent value="group"><GroupTabletab/></TabsContent>
                <TabsContent value="unit"><UnitsTableTab/></TabsContent>
                <TabsContent value="report"></TabsContent>
            </Tabs>
        </div>

    );
}

 

  

  