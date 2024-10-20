'use client'
import React from "react";
import Headerlisttile from "@/components/app/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {allPurchasesColumns} from "@/app/stores/[storeid]/purchases/_components/allPurchases_column";

export function PurchasesListPage({data}) {

    const tabledata = data;
    return (
        <Headerlisttile title='Purchases List' subtitle='All Purchases are listed here' bname="Create"
                        ontap="purchases/cashpurchases">
            <DataTable columns={allPurchasesColumns} data={tabledata} filter={'itemname'}/>
        </Headerlisttile>)
}





