
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
import {AddGroupDialog} from "@/app/stores/[storeid]/items/group/_component/groupform";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {CategoryColumns} from "@/app/stores/[storeid]/items/_components/category/category_columns";
import React, {useEffect, useState} from "react";
import {groupColumns} from "@/app/stores/[storeid]/items/_components/group/group_columns";
import {useParams} from "next/navigation";
import {getStockCategory, getStockGroup} from "@/app/_actions/stock_item_options";

export  function GroupTabletab() {

    const [tabledata,setTableData] = useState([]);
    const param = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getStockGroup(param.storeid);
            if (data.length === 0) return;
            setTableData(data)
        }
        fetchData();
    }, []);

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





