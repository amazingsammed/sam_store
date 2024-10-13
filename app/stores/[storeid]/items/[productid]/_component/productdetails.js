'use client'

import React from 'react';
import {HeaderListTileDialog} from "@/components/app/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import Container from "@/components/app/container";
function Productdetails({element, product}) {
    const router = useRouter();
    return (
        <Container>
            <Button onClick={() => {
                router.back()
            }} className="mb-3">
                back
            </Button>
            <HeaderListTileDialog title={element.name + " Details"} subtitle='Detailed transactions of a specific product'>
                <DataTable columns={productdetailColumns} data={element.trn_inventory} filter={'name'}/>
            </HeaderListTileDialog>
        </Container>

    );
}

const productdetailColumns = [

    {
        accessorKey: "date",
        header: "Date",
        enableHiding: true,
    },
    {
        accessorKey: "name",
        header: "Name",
    cell: ({ row }) => {
    return row.original.voucher.party_name;
}
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