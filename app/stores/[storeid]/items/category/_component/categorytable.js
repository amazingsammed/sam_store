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
import {CategoryColumns} from "@/app/stores/[storeid]/items/_components/category/category_columns";
import React from "react";

export  function CategoryTable(prop) {

    const tabledata = prop.element;

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





