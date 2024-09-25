'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Headerlisttile from "../../../../../components/headerlisttile";
import {itemsColumns} from "@/app/stores/[storeid]/items/_components/item_columns";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";

export  function ItemsPage(prop) {

    const tabledata = prop.data;
    return (
        <div className="">
          <Headerlisttile title='Item List' subtitle='All items are listed here' bname="New Item" ontap="items/addItem">
            <DataTable columns={itemsColumns} data={tabledata} filter={'name'}/>
          </Headerlisttile>
        </div>

    );
}

 

  

  