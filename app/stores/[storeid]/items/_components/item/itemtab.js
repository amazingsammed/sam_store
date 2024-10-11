'use client'
import {HeaderListTileDialog} from "@/components/app/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import React, {useEffect, useState} from "react";
import {useParams, usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {AddAnItem} from "@/app/stores/[storeid]/items/_components/item_form";
import {itemsColumns} from "@/app/stores/[storeid]/items/_components/item/item_columns";
import {getAllProductsbyStoreid} from "@/app/_actions/stock_item";

export  function ItemTableTab(prop) {
    const [tabledata,setTableData] = useState([]);
    const param = useParams();
    const path = usePathname();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllProductsbyStoreid(param.storeid);
            if (data.length === 0) return;
            setTableData(data)
        }
        fetchData();
    }, []);
    return (
        <div className="">
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

        </div>

    );
}





