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
import {AddCategoryDialog} from "@/app/stores/[storeid]/items/category/_component/category_form";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {itemsColumns} from "@/app/stores/[storeid]/items/_components/item/item_columns";
import React, {useEffect, useState} from "react";
import {CategoryColumns} from "@/app/stores/[storeid]/items/_components/category/category_columns";
import {getStockCategory} from "@/app/_actions/stock_item_options";
import {useParams} from "next/navigation";

export  function CategoryTabletab(prop) {

    const [tabledata,setTableData] = useState([]);
    const param = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getStockCategory(param.storeid);
            if (data.length === 0) return;
            setTableData(data)
        }
        fetchData();
    }, []);

    return (
        <div className="">
            <HeaderListTileDialog title='Category List' subtitle='All items are listed here'  buttonx ={
                <AddCategoryDialog/>
            }>
                <DataTable columns={CategoryColumns} data={tabledata} filter={'name'}/>

            </HeaderListTileDialog>

        </div>

    );
}





