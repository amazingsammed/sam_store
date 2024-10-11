
'use client'
import {HeaderListTileDialog} from "@/components/app/headerlisttile";
import {AddGroupDialog} from "@/app/stores/[storeid]/items/group/_component/groupform";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import React, {useEffect, useState} from "react";
import {groupColumns} from "@/app/stores/[storeid]/items/_components/group/group_columns";
import {useParams} from "next/navigation";
import {getStockGroup} from "@/app/_actions/stock_item_options";

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





