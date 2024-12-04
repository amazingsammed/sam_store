'use client'
import {HeaderListTileDialog} from "@/components/app/headerlisttile";
import {AddChartofAccount} from "@/app/stores/[storeid]/settings/chartofaccount/_component/coa_form";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {coaColumns, defaultColumns} from "@/app/stores/[storeid]/settings/chartofaccount/_component/coa_columns";
import React, {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {getChartOfAccount} from "@/app/_actions/account";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import MembersTable from "@/app/stores/[storeid]/settings/members/_component/members_table";
import {GroupTablePage} from "@/app/stores/[storeid]/settings/accountgroups/_component/group_table";


export function Cartofaccount({data}) {
    const [store,system] = data;
    return (
        <div className="">
            <Tabs defaultValue='store'>
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="store">Store</TabsTrigger>
                        <TabsTrigger value="system">System</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="store">
                    <HeaderListTileDialog title='Chart of Accounts' subtitle='All Account in current store' buttonx={
                        <AddChartofAccount/>
                    } ontap="items/addItem">
                        <DataTable columns={coaColumns} data={store} filter={'account_name'}/>
                    </HeaderListTileDialog>
                </TabsContent>
                <TabsContent value="system">
                    <HeaderListTileDialog title='Chart of Accounts' subtitle='All Account in current store' buttonx={
                        <AddChartofAccount/>
                    } ontap="items/addItem">
                        <DataTable columns={defaultColumns} data={system} filter={'account_name'}/>
                    </HeaderListTileDialog>
                </TabsContent>

            </Tabs>
        </div>

    );
}

 

  

  