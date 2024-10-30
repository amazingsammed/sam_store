'use client'
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {itemReport} from "@/app/stores/[storeid]/report/(basic)/items/_component/item_columns";
import {CardDescription, CardHeader} from "@/components/ui/card";
import {Card} from "@/components/ui/card";
import {HeaderListTileDialog} from "@/components/app/headerlisttile";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {AddAnItem} from "@/app/stores/[storeid]/items/_components/item_form";
import {itemsColumns} from "@/app/stores/[storeid]/items/_components/item_columns";
import React from "react";
import {MyPrintButton} from "@/components/app/mybuttons";
import html2pdf from "html2pdf.js";

function Itemsreport({elements}) {
    function handlePrint(){
        const element = document.getElementById('sam');
        html2pdf(element);
    }
    return (
        <HeaderListTileDialog id="sam" title='Item Report' subtitle='All items with their Quantity Left' buttonx={
            <div className="flex gap-2">
                <MyPrintButton onClick={handlePrint}/>
            </div>
        }>
            <DataTable columns={itemReport} data={elements} filter={'name'}/>
        </HeaderListTileDialog>
    );
}

export default Itemsreport;