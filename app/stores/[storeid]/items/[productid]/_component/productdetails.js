'use client'

import React from 'react';
import {HeaderListTileDialog} from "@/components/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

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