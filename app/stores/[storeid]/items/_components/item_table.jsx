'use client'

import React from "react";
import {useParams, usePathname} from "next/navigation";
import {HeaderListTileDialog} from "@/components/app/headerlisttile";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {AddAnItem} from "@/app/stores/[storeid]/items/_components/item_form";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {itemsColumns} from "@/app/stores/[storeid]/items/_components/item_columns";

export  function ItemsPage({data}) {
    const tabledata =  data;
    const path = usePathname();


    return (

            <HeaderListTileDialog title='Item List' subtitle='All items are listed here' buttonx={
                <div className="flex gap-2">
                    <Link href={path + "/item/multicreate"}>
                        <Button variant="outline"> Multi-Create</Button>
                    </Link>
                    <AddAnItem/>
                </div>
            }>
                <DataTable columns={itemsColumns} data={tabledata} filter={'name'}/>
            </HeaderListTileDialog>



    );
}

 

  

  