'use client'
import React from "react";
import Headerlisttile, {HeaderListTileDialog} from "@/components/app/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {allPurchasesColumns} from "@/app/stores/[storeid]/purchases/_components/allPurchases_column";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";

export function PurchasesListPage({data}) {
const path = usePathname()
    const tabledata = data;
    return (
        <HeaderListTileDialog title='Purchases List' subtitle='All Purchases are listed here' bname="Create"
                        ontap="purchases/cashpurchases" buttonx={
            <div className={`flex flex-row gap-3`}>
                <Link href={path + "/creditpurchases"}>
                    <Button variant="outline">Credit Purchases</Button>
                </Link>
                <Link href={path + "/cashpurchases"}>
                    <Button>Cash Purchases</Button>
                </Link>
            </div>
        }>
            <DataTable columns={allPurchasesColumns} data={tabledata} filter={'itemname'}/>
        </HeaderListTileDialog>)
}





