'use client'

import React, {Suspense} from 'react';
import Headerlisttile, {HeaderListTileDialog} from "@/components/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {itemsColumns} from "@/app/stores/[storeid]/items/_components/item_columns";
import {Checkbox} from "@/components/ui/checkbox";
import ItemActions from "@/app/stores/[storeid]/items/_components/item_actions";
import {Button} from "@/components/ui/button";
import {useParams, useRouter} from "next/navigation";

function Productdetails({element, product}) {
    const router = useRouter();
    return (
        <div className="max-w-screen-xl mx-auto">
            <Button onClick={() => {
                router.back()
            }} className="mb-3">
                back
            </Button>
            <HeaderListTileDialog title={product.name + " Details"} subtitle='Detailed transactions of a specific product'>
                <DataTable columns={prouctdetailColumns} data={element} filter={'name'}/>
            </HeaderListTileDialog>
        </div>

    );
}

const prouctdetailColumns = [

    {
        accessorKey: "date",
        header: "Date",
        enableHiding: true,
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "quantity",
        header: "Quantity",
    },

    {
        accessorKey: "rate",
        header: "Rate",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
]
export default Productdetails;