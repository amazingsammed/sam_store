'use client'

import React, {useEffect, useState} from 'react';
import {HeaderListTileDialog} from "@/components/app/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {Button} from "@/components/ui/button";
import {useParams, useRouter, useSearchParams} from "next/navigation";
import MainContainer from "@/components/app/mainContainer";
import {getProductDetail} from "@/app/_actions/stock_item";
function Productdetails() {
    const [element ,setElement] = useState({'name':"",'trn_inventory':[]});
    const searchParams = useSearchParams();
    const params = useParams();
    useEffect(() => {
        const fetcher = async () => {
            const details = await getProductDetail(searchParams.get('uuid'),params.storeid);
            if(!details) return null;
            setElement(details)

        };
        fetcher();

    }, []);
    const router = useRouter();
    return (
        <MainContainer>
            <Button onClick={() => {
                router.back()
            }} className="mb-3">
                back
            </Button>
            <HeaderListTileDialog title={element.name + " Details"} subtitle='Detailed transactions of a specific product'>
                <DataTable columns={productdetailColumns} data={element.trn_inventory} filter={'name'}/>
            </HeaderListTileDialog>
        </MainContainer>

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