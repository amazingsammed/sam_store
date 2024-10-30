
'use client'
import {HeaderListTileDialog} from "@/components/app/headerlisttile";
import {AddGroupDialog} from "@/app/stores/[storeid]/items/group/_component/groupform";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {groupColumns} from "@/app/stores/[storeid]/items/group/_component/group_columns";
import React from "react";

export  function GroupTable(prop) {

    const tabledata = prop.elements;

    return (
        <div className="">
            <HeaderListTileDialog title='Group List' subtitle='All items are listed here' bname="New Item" buttonx ={
                <AddGroupDialog/>
            }>
                <DataTable columns={groupColumns} data={tabledata} filter={'name'}/>
                
            </HeaderListTileDialog>

        </div>

    );
}





