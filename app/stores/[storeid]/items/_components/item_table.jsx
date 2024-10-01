'use client'
import Headerlisttile, {HeaderListTileDialog} from "../../../../../components/headerlisttile";
import {itemsColumns} from "@/app/stores/[storeid]/items/_components/item_columns";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {Button} from "@/components/ui/button";
import Link from 'next/link'
import {AddAnItem} from "@/app/stores/[storeid]/items/_components/item_form";
import {usePathname} from "next/navigation";

export  function ItemsPage(prop) {
    const tabledata = prop.data;
    const path = usePathname();
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

 

  

  