'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {MdMoreVert} from "react-icons/md";
import {HeaderListTileDialog} from "@/components/headerlisttile";
import {AddUnitsDialog} from "@/app/stores/[storeid]/items/units/_component/unitsform";
import {UnitColumns} from "@/app/stores/[storeid]/items/_components/units/units_columns";
import {groupColumns} from "@/app/stores/[storeid]/items/_components/group/group_columns";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import React, {useEffect, useState} from "react";
import {getStockGroup, getStockUnits} from "@/app/_actions/stock_item_options";
import {useParams, usePathname} from "next/navigation";
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





