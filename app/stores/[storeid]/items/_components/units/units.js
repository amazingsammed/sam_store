'use client'
import {HeaderListTileDialog} from "@/components/app/headerlisttile";
import {AddUnitsDialog} from "@/app/stores/[storeid]/items/units/_component/unitsform";
import {UnitColumns} from "@/app/stores/[storeid]/items/_components/units/units_columns";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import React, {useEffect, useState} from "react";
import {getStockUnits} from "@/app/_actions/stock_item_options";
import {useParams} from "next/navigation";

export  function UnitsTableTab(prop) {
    const [tabledata,setTableData] = useState([]);
    const param = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getStockUnits(param.storeid);
            if (data.length === 0) return;
            setTableData(data)
        }
        fetchData();
    }, []);
    return (
        <div className="">
            <HeaderListTileDialog title='Unit List' subtitle='All items are listed here' bname="New Item" buttonx ={
                <AddUnitsDialog/>
            }>

                <DataTable columns={UnitColumns} data={tabledata} filter={'name'}/>
            </HeaderListTileDialog>

        </div>

    );
}





