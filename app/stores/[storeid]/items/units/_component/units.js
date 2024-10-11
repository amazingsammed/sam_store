'use client'
import {HeaderListTileDialog} from "@/components/app/headerlisttile";
import {AddUnitsDialog} from "@/app/stores/[storeid]/items/units/_component/unitsform";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {UnitColumns} from "@/app/stores/[storeid]/items/_components/units/units_columns";
import React from "react";

export  function UnitsTable(prop) {
    const tabledata = prop.elements;
    return (
        <div className="">
            <HeaderListTileDialog title='Unit List' subtitle='All items are listed here' bname="New Item" buttonx ={
                <AddUnitsDialog/>
            }>
                <DataTable columns={UnitColumns} data={tabledata} filter={'name'}/>
            </HeaderListTileDialog>

        </div>

    );
}





